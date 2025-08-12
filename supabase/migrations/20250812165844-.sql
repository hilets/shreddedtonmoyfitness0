-- Create visitor tracking table
CREATE TABLE public.visitors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  device_fingerprint TEXT NOT NULL,
  ip_address INET,
  user_agent TEXT,
  page_url TEXT,
  referrer TEXT,
  country TEXT,
  city TEXT,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  first_visit_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_visit_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  visit_count INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create click tracking table
CREATE TABLE public.clicks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  device_fingerprint TEXT NOT NULL,
  element_type TEXT NOT NULL, -- 'program', 'ebook', 'button', etc.
  element_name TEXT NOT NULL,
  element_id TEXT,
  page_url TEXT,
  ip_address INET,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  clicked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create daily stats view for easy querying
CREATE TABLE public.daily_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  unique_visitors INTEGER NOT NULL DEFAULT 0,
  total_clicks INTEGER NOT NULL DEFAULT 0,
  program_clicks INTEGER NOT NULL DEFAULT 0,
  ebook_clicks INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(date)
);

-- Create indexes for better performance
CREATE INDEX idx_visitors_device_date ON public.visitors(device_fingerprint, date);
CREATE INDEX idx_visitors_date ON public.visitors(date);
CREATE INDEX idx_clicks_device_date ON public.clicks(device_fingerprint, date);
CREATE INDEX idx_clicks_date ON public.clicks(date);
CREATE INDEX idx_clicks_element ON public.clicks(element_type, element_name);

-- Enable RLS
ALTER TABLE public.visitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_stats ENABLE ROW LEVEL SECURITY;

-- Create policies (public read for stats, but controlled write)
CREATE POLICY "Anyone can view visitor stats" 
ON public.visitors 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view click stats" 
ON public.clicks 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view daily stats" 
ON public.daily_stats 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can insert visitor data" 
ON public.visitors 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update visitor data" 
ON public.visitors 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can insert click data" 
ON public.clicks 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can insert daily stats" 
ON public.daily_stats 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update daily stats" 
ON public.daily_stats 
FOR UPDATE 
USING (true);

-- Function to update daily stats
CREATE OR REPLACE FUNCTION update_daily_stats()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  INSERT INTO public.daily_stats (date, unique_visitors, total_clicks, program_clicks, ebook_clicks)
  SELECT 
    CURRENT_DATE,
    (SELECT COUNT(DISTINCT device_fingerprint) FROM public.visitors WHERE date = CURRENT_DATE),
    (SELECT COUNT(*) FROM public.clicks WHERE date = CURRENT_DATE),
    (SELECT COUNT(*) FROM public.clicks WHERE date = CURRENT_DATE AND element_type = 'program'),
    (SELECT COUNT(*) FROM public.clicks WHERE date = CURRENT_DATE AND element_type = 'ebook')
  ON CONFLICT (date) 
  DO UPDATE SET
    unique_visitors = EXCLUDED.unique_visitors,
    total_clicks = EXCLUDED.total_clicks,
    program_clicks = EXCLUDED.program_clicks,
    ebook_clicks = EXCLUDED.ebook_clicks,
    updated_at = now();
END;
$$;