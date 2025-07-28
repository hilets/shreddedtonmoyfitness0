
import React from 'react';
import { X, TrendingUp, MousePointer, Zap, Users, Trash2, BookOpen } from 'lucide-react';

interface ClickStatsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ClickStats {
  'Online Contest Prep Program': number;
  'Bulking Diet & Workout Book': number;
  'Cutting Diet & Workout Book': number;
  '90 Days Transformation Challenge': number;
}

const ClickStatsPopup: React.FC<ClickStatsPopupProps> = ({ isOpen, onClose }) => {
  // Get today's date as a key
  const today = new Date().toDateString();
  
  // Get click stats from localStorage
  const getClickStats = (): ClickStats => {
    const stats = localStorage.getItem(`clickStats_${today}`);
    return stats ? JSON.parse(stats) : {
      'Online Contest Prep Program': 0,
      'Bulking Diet & Workout Book': 0,
      'Cutting Diet & Workout Book': 0,
      '90 Days Transformation Challenge': 0
    };
  };

  // Get visitor count from localStorage
  const getVisitorCount = (): number => {
    const count = localStorage.getItem(`visitorCount_${today}`);
    return count ? parseInt(count) : 0;
  };

  // Track unique visitor
  const trackVisitor = () => {
    const sessionKey = `hasVisited_${today}`;
    const hasVisitedToday = sessionStorage.getItem(sessionKey);
    
    if (!hasVisitedToday) {
      const currentCount = getVisitorCount();
      localStorage.setItem(`visitorCount_${today}`, (currentCount + 1).toString());
      sessionStorage.setItem(sessionKey, 'true');
    }
  };

  // Track visitor on component mount
  React.useEffect(() => {
    if (isOpen) {
      trackVisitor();
    }
  }, [isOpen]);

  // Clear all today's data
  const clearTodayData = () => {
    localStorage.removeItem(`clickStats_${today}`);
    localStorage.removeItem(`visitorCount_${today}`);
    sessionStorage.removeItem(`hasVisited_${today}`);
    // Force re-render by closing and reopening
    onClose();
    setTimeout(() => {
      // This will trigger the popup to show updated (cleared) data
    }, 100);
  };

  const clickStats = getClickStats();
  const visitorCount = getVisitorCount();
  const totalClicks = Object.values(clickStats).reduce((sum: number, count: number) => sum + count, 0);

  const programs = [
    {
      name: 'Online Contest Prep Program' as keyof ClickStats,
      icon: <TrendingUp className="h-5 w-5 text-[#E63946]" />,
      color: 'from-red-500/20 to-red-600/20',
      borderColor: 'border-red-500/30'
    }
  ];

  const ebooks = [
    {
      name: 'Bulking Diet & Workout Book' as keyof ClickStats,
      icon: <BookOpen className="h-5 w-5 text-[#FF6B35]" />,
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30'
    },
    {
      name: 'Cutting Diet & Workout Book' as keyof ClickStats,
      icon: <BookOpen className="h-5 w-5 text-[#4ECDC4]" />,
      color: 'from-teal-500/20 to-teal-600/20',
      borderColor: 'border-teal-500/30'
    },
    {
      name: '90 Days Transformation Challenge' as keyof ClickStats,
      icon: <BookOpen className="h-5 w-5 text-[#9B59B6]" />,
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] rounded-3xl p-6 max-w-md w-full mx-4 border border-[#333] shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#2A2A2A] hover:bg-[#E63946] text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-[#E63946] to-[#FFD700] bg-clip-text text-transparent">
            <h2 className="text-2xl font-bold font-orbitron">Today's Activity</h2>
          </div>
          <p className="text-[#D3D3D3] text-sm mt-2 font-inter">
            Analytics for {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Visitor Counter Card */}
        <div className="bg-gradient-to-r from-[#28A745]/10 to-[#20C997]/10 rounded-2xl p-4 mb-4 border border-[#28A745]/20">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-[#2A2A2A] rounded-lg p-2">
              <Users className="h-5 w-5 text-[#28A745]" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white font-orbitron">
                {visitorCount}
              </div>
              <div className="text-[#D3D3D3] text-sm">Website Visitors Today</div>
            </div>
          </div>
        </div>

        {/* Program Stats */}
        <div className="space-y-3 mb-6">
          <h3 className="text-lg font-semibold text-white font-orbitron mb-3">Programs</h3>
          {programs.map((program, index) => (
            <div
              key={program.name}
              className={`bg-gradient-to-r ${program.color} rounded-xl p-3 border ${program.borderColor} hover:scale-105 transition-all duration-200`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#2A2A2A] rounded-lg p-2">
                    {program.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm font-inter">
                      {program.name}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white font-orbitron">
                    {clickStats[program.name] || 0}
                  </div>
                  <div className="text-xs text-[#D3D3D3]">clicks</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ebook Stats */}
        <div className="space-y-3 mb-6">
          <h3 className="text-lg font-semibold text-white font-orbitron mb-3">Ebooks</h3>
          {ebooks.map((ebook, index) => (
            <div
              key={ebook.name}
              className={`bg-gradient-to-r ${ebook.color} rounded-xl p-3 border ${ebook.borderColor} hover:scale-105 transition-all duration-200`}
              style={{ animationDelay: `${(index + programs.length) * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#2A2A2A] rounded-lg p-2">
                    {ebook.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm font-inter">
                      {ebook.name}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white font-orbitron">
                    {clickStats[ebook.name] || 0}
                  </div>
                  <div className="text-xs text-[#D3D3D3]">clicks</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Stats */}
        <div className="bg-gradient-to-r from-[#E63946]/10 to-[#FFD700]/10 rounded-2xl p-4 mb-4 border border-[#E63946]/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-orbitron animate-pulse">
              {totalClicks}
            </div>
            <div className="text-[#D3D3D3] text-sm">Total Clicks Today</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={clearTodayData}
            className="flex-1 bg-[#E63946]/20 hover:bg-[#E63946]/30 text-[#E63946] border border-[#E63946]/30 rounded-xl px-4 py-2 font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Clear Data
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-xl px-4 py-2 font-semibold transition-all duration-200 hover:scale-105"
          >
            Close
          </button>
        </div>

        {/* Footer */}
        <div className="text-center pt-4 border-t border-[#333]">
          <p className="text-[#888] text-xs font-inter">
            Stats reset daily • Keep exploring our programs! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClickStatsPopup;
