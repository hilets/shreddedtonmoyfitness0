import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Eye, MousePointer, TrendingUp, Users } from 'lucide-react';
import { getAnalyticsData, getTodayStats } from '@/utils/trackingUtils';

interface DailyStats {
  date: string;
  unique_visitors: number;
  total_clicks: number;
  program_clicks: number;
  ebook_clicks: number;
  updated_at?: string;
}

const AdminStatsPanel = () => {
  const [todayStats, setTodayStats] = useState<DailyStats | null>(null);
  const [weeklyStats, setWeeklyStats] = useState<DailyStats[]>([]);
  const [monthlyStats, setMonthlyStats] = useState<DailyStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setLoading(true);
      
      // Get today's stats
      const today = await getTodayStats();
      setTodayStats(today);

      // Get last 7 days
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const weekly = await getAnalyticsData(sevenDaysAgo.toISOString().split('T')[0]);
      setWeeklyStats(weekly || []);

      // Get last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const monthly = await getAnalyticsData(thirtyDaysAgo.toISOString().split('T')[0]);
      setMonthlyStats(monthly || []);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (stats: DailyStats[], field: keyof DailyStats) => {
    return stats.reduce((sum, stat) => sum + (Number(stat[field]) || 0), 0);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Secret admin access - press Ctrl+Shift+A to toggle
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 text-xs text-muted-foreground opacity-50">
        Press Ctrl+Shift+A for admin panel
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
              <Badge variant="secondary">Admin Panel</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={loadStats} disabled={loading}>
                {loading ? 'Loading...' : 'Refresh'}
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsVisible(false)}>
                Close
              </Button>
            </div>
          </div>

          {/* Today's Stats */}
          {todayStats && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Today's Visitors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{todayStats.unique_visitors}</div>
                  <p className="text-xs text-muted-foreground">Unique devices</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Clicks</CardTitle>
                  <MousePointer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{todayStats.total_clicks}</div>
                  <p className="text-xs text-muted-foreground">All elements</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Program Clicks</CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{todayStats.program_clicks}</div>
                  <p className="text-xs text-muted-foreground">Training programs</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Ebook Clicks</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{todayStats.ebook_clicks}</div>
                  <p className="text-xs text-muted-foreground">Digital books</p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Period Stats */}
          <Tabs defaultValue="weekly" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="weekly">Last 7 Days</TabsTrigger>
              <TabsTrigger value="monthly">Last 30 Days</TabsTrigger>
            </TabsList>

            <TabsContent value="weekly" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Total Visitors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold">{calculateTotal(weeklyStats, 'unique_visitors')}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Total Clicks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold">{calculateTotal(weeklyStats, 'total_clicks')}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Program Clicks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold">{calculateTotal(weeklyStats, 'program_clicks')}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Ebook Clicks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold">{calculateTotal(weeklyStats, 'ebook_clicks')}</div>
                  </CardContent>
                </Card>
              </div>

              {weeklyStats.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Breakdown</CardTitle>
                    <CardDescription>Last 7 days activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {weeklyStats.slice(0, 7).map((stat) => (
                        <div key={stat.date} className="flex items-center justify-between p-2 border rounded">
                          <span className="font-medium">{formatDate(stat.date)}</span>
                          <div className="flex gap-4 text-sm">
                            <span>👥 {stat.unique_visitors}</span>
                            <span>🖱️ {stat.total_clicks}</span>
                            <span>💪 {stat.program_clicks}</span>
                            <span>📖 {stat.ebook_clicks}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="monthly" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Total Visitors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold">{calculateTotal(monthlyStats, 'unique_visitors')}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Total Clicks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold">{calculateTotal(monthlyStats, 'total_clicks')}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Program Clicks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold">{calculateTotal(monthlyStats, 'program_clicks')}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Ebook Clicks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-xl font-bold">{calculateTotal(monthlyStats, 'ebook_clicks')}</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Monthly Overview</CardTitle>
                  <CardDescription>Last 30 days summary</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <p>📊 Average daily visitors: {Math.round(calculateTotal(monthlyStats, 'unique_visitors') / Math.max(monthlyStats.length, 1))}</p>
                    <p>🎯 Average daily clicks: {Math.round(calculateTotal(monthlyStats, 'total_clicks') / Math.max(monthlyStats.length, 1))}</p>
                    <p>🏆 Best day: {monthlyStats.length > 0 ? formatDate(monthlyStats.reduce((max, stat) => stat.unique_visitors > max.unique_visitors ? stat : max, monthlyStats[0]).date) : 'N/A'}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminStatsPanel;