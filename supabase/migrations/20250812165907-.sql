-- Fix the function search path security issue
CREATE OR REPLACE FUNCTION update_daily_stats()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
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