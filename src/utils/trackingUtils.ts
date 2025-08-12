import { supabase } from "@/integrations/supabase/client";

// Generate a unique device fingerprint
const generateDeviceFingerprint = (): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx!.textBaseline = 'top';
  ctx!.font = '14px Arial';
  ctx!.fillText('Device fingerprint', 2, 2);
  
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width + 'x' + screen.height,
    new Date().getTimezoneOffset(),
    canvas.toDataURL()
  ].join('|');
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
};

// Get visitor's IP and location info
const getVisitorInfo = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      ip: data.ip,
      country: data.country_name,
      city: data.city
    };
  } catch (error) {
    console.error('Error getting visitor info:', error);
    return {
      ip: null,
      country: null,
      city: null
    };
  }
};

// Track visitor
export const trackVisitor = async () => {
  try {
    const deviceFingerprint = generateDeviceFingerprint();
    const visitorInfo = await getVisitorInfo();
    const today = new Date().toISOString().split('T')[0];
    
    // Check if visitor already exists today
    const { data: existingVisitor } = await supabase
      .from('visitors')
      .select('*')
      .eq('device_fingerprint', deviceFingerprint)
      .eq('date', today)
      .single();

    if (existingVisitor) {
      // Update last visit time and increment visit count
      await supabase
        .from('visitors')
        .update({
          last_visit_at: new Date().toISOString(),
          visit_count: existingVisitor.visit_count + 1,
          page_url: window.location.href,
          referrer: document.referrer
        })
        .eq('id', existingVisitor.id);
    } else {
      // Insert new visitor
      await supabase
        .from('visitors')
        .insert({
          device_fingerprint: deviceFingerprint,
          ip_address: visitorInfo.ip,
          user_agent: navigator.userAgent,
          page_url: window.location.href,
          referrer: document.referrer,
          country: visitorInfo.country,
          city: visitorInfo.city,
          date: today
        });
    }

    // Update daily stats
    await updateDailyStats();
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};

// Track clicks
export const trackClick = async (elementType: string, elementName: string, elementId?: string) => {
  try {
    const deviceFingerprint = generateDeviceFingerprint();
    const today = new Date().toISOString().split('T')[0];
    const visitorInfo = await getVisitorInfo();

    await supabase
      .from('clicks')
      .insert({
        device_fingerprint: deviceFingerprint,
        element_type: elementType,
        element_name: elementName,
        element_id: elementId,
        page_url: window.location.href,
        ip_address: visitorInfo.ip,
        date: today
      });

    // Update daily stats
    await updateDailyStats();
  } catch (error) {
    console.error('Error tracking click:', error);
  }
};

// Update daily stats
const updateDailyStats = async () => {
  try {
    await supabase.rpc('update_daily_stats');
  } catch (error) {
    console.error('Error updating daily stats:', error);
  }
};

// Get analytics data
export const getAnalyticsData = async (startDate?: string, endDate?: string) => {
  try {
    let query = supabase
      .from('daily_stats')
      .select('*')
      .order('date', { ascending: false });

    if (startDate) {
      query = query.gte('date', startDate);
    }
    if (endDate) {
      query = query.lte('date', endDate);
    }

    const { data, error } = await query;
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error getting analytics data:', error);
    return [];
  }
};

// Get today's stats
export const getTodayStats = async () => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const { data, error } = await supabase
      .from('daily_stats')
      .select('*')
      .eq('date', today)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    
    return data || {
      date: today,
      unique_visitors: 0,
      total_clicks: 0,
      program_clicks: 0,
      ebook_clicks: 0
    };
  } catch (error) {
    console.error('Error getting today stats:', error);
    return {
      date: new Date().toISOString().split('T')[0],
      unique_visitors: 0,
      total_clicks: 0,
      program_clicks: 0,
      ebook_clicks: 0
    };
  }
};