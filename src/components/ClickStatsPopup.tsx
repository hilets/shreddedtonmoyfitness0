
import React, { useState, useEffect } from 'react';
import { X, TrendingUp, MousePointer, Zap, Users, Trash2, BookOpen, Calendar, BarChart3 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTodayStats, getAnalyticsData } from "@/utils/trackingUtils";

interface ClickStatsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DailyStats {
  unique_visitors: number;
  total_clicks: number;
  program_clicks: number;
  ebook_clicks: number;
  date: string;
}

const ClickStatsPopup: React.FC<ClickStatsPopupProps> = ({ isOpen, onClose }) => {
  const [todayStats, setTodayStats] = useState<DailyStats>({
    unique_visitors: 0,
    total_clicks: 0,
    program_clicks: 0,
    ebook_clicks: 0,
    date: new Date().toISOString().split('T')[0]
  });
  const [weeklyStats, setWeeklyStats] = useState<DailyStats[]>([]);
  const [monthlyStats, setMonthlyStats] = useState<DailyStats[]>([]);
  const [loading, setLoading] = useState(true);

  const loadStats = async () => {
    try {
      setLoading(true);
      
      // Get today's stats
      const today = await getTodayStats();
      setTodayStats(today);

      // Get last 7 days stats
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const weekly = await getAnalyticsData(startDate, endDate);
      setWeeklyStats(weekly);

      // Get last 30 days stats
      const monthStartDate = new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const monthly = await getAnalyticsData(monthStartDate, endDate);
      setMonthlyStats(monthly);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadStats();
    }
  }, [isOpen]);

  const calculateTotal = (stats: DailyStats[], field: keyof DailyStats): number => {
    return stats.reduce((total, day) => total + (day[field] as number), 0);
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-6 max-w-4xl w-full mx-4 border border-[#333] shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#2A2A2A] hover:bg-[#E63946] text-white rounded-full p-2 transition-all duration-200 hover:scale-110 z-10"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-[#E63946] to-[#FFD700] bg-clip-text text-transparent">
            <h2 className="text-3xl font-bold font-orbitron">Website Analytics</h2>
          </div>
          <p className="text-[#D3D3D3] text-sm mt-2 font-inter">
            Real-time tracking dashboard
          </p>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E63946] mx-auto"></div>
            <p className="text-[#D3D3D3] mt-4">Loading analytics...</p>
          </div>
        ) : (
          <Tabs defaultValue="today" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#2A2A2A] rounded-xl">
              <TabsTrigger value="today" className="text-white data-[state=active]:bg-[#E63946]">
                Today
              </TabsTrigger>
              <TabsTrigger value="weekly" className="text-white data-[state=active]:bg-[#E63946]">
                7 Days
              </TabsTrigger>
              <TabsTrigger value="monthly" className="text-white data-[state=active]:bg-[#E63946]">
                30 Days
              </TabsTrigger>
            </TabsList>

            <TabsContent value="today" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#28A745]/10 to-[#20C997]/10 rounded-xl p-4 border border-[#28A745]/20">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-[#28A745] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {todayStats.unique_visitors}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Unique Visitors</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#E63946]/10 to-[#FFD700]/10 rounded-xl p-4 border border-[#E63946]/20">
                  <div className="text-center">
                    <MousePointer className="h-8 w-8 text-[#E63946] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {todayStats.total_clicks}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Total Clicks</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 rounded-xl p-4 border border-[#FF6B35]/20">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-[#FF6B35] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {todayStats.program_clicks}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Program Clicks</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#9B59B6]/10 to-[#8E44AD]/10 rounded-xl p-4 border border-[#9B59B6]/20">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 text-[#9B59B6] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {todayStats.ebook_clicks}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Ebook Clicks</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="weekly" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#28A745]/10 to-[#20C997]/10 rounded-xl p-4 border border-[#28A745]/20">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-[#28A745] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {calculateTotal(weeklyStats, 'unique_visitors')}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Weekly Visitors</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#E63946]/10 to-[#FFD700]/10 rounded-xl p-4 border border-[#E63946]/20">
                  <div className="text-center">
                    <MousePointer className="h-8 w-8 text-[#E63946] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {calculateTotal(weeklyStats, 'total_clicks')}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Weekly Clicks</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 rounded-xl p-4 border border-[#FF6B35]/20">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-[#FF6B35] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {calculateTotal(weeklyStats, 'program_clicks')}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Program Clicks</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#9B59B6]/10 to-[#8E44AD]/10 rounded-xl p-4 border border-[#9B59B6]/20">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 text-[#9B59B6] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {calculateTotal(weeklyStats, 'ebook_clicks')}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Ebook Clicks</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#333]">
                <h3 className="text-lg font-semibold text-white mb-4 font-orbitron">Daily Breakdown (Last 7 Days)</h3>
                <div className="space-y-2">
                  {weeklyStats.slice().reverse().map((day, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-[#2A2A2A] rounded-lg">
                      <span className="text-[#D3D3D3] text-sm">{formatDate(day.date)}</span>
                      <div className="flex gap-4 text-sm">
                        <span className="text-[#28A745]">{day.unique_visitors} visitors</span>
                        <span className="text-[#E63946]">{day.total_clicks} clicks</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="monthly" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#28A745]/10 to-[#20C997]/10 rounded-xl p-4 border border-[#28A745]/20">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-[#28A745] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {calculateTotal(monthlyStats, 'unique_visitors')}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Monthly Visitors</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#E63946]/10 to-[#FFD700]/10 rounded-xl p-4 border border-[#E63946]/20">
                  <div className="text-center">
                    <MousePointer className="h-8 w-8 text-[#E63946] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {calculateTotal(monthlyStats, 'total_clicks')}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Monthly Clicks</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 rounded-xl p-4 border border-[#FF6B35]/20">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-[#FF6B35] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {calculateTotal(monthlyStats, 'program_clicks')}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Program Clicks</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#9B59B6]/10 to-[#8E44AD]/10 rounded-xl p-4 border border-[#9B59B6]/20">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 text-[#9B59B6] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-orbitron">
                      {calculateTotal(monthlyStats, 'ebook_clicks')}
                    </div>
                    <div className="text-[#D3D3D3] text-xs">Ebook Clicks</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#333]">
                <h3 className="text-lg font-semibold text-white mb-4 font-orbitron">Daily Breakdown (Last 30 Days)</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {monthlyStats.slice().reverse().map((day, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-[#2A2A2A] rounded-lg">
                      <span className="text-[#D3D3D3] text-sm">{formatDate(day.date)}</span>
                      <div className="flex gap-4 text-sm">
                        <span className="text-[#28A745]">{day.unique_visitors} visitors</span>
                        <span className="text-[#E63946]">{day.total_clicks} clicks</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        )}

        {/* Action Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="bg-[#E63946] hover:bg-[#E63946]/80 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-200 hover:scale-105"
          >
            Close Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClickStatsPopup;
