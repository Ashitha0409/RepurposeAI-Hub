import { LayoutDashboard, Lightbulb, CircleCheck, ChartBar, Info } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'hypotheses', label: 'AI Hypotheses', icon: Lightbulb },
    { id: 'validation', label: 'Domain Expert Review', icon: CircleCheck },
    { id: 'insights', label: 'Insights', icon: ChartBar },
    { id: 'about', label: 'About / Architecture', icon: Info },
  ];

  return (
    <div className="w-64 bg-white border-r h-[calc(100vh-73px)] sticky top-[73px] hidden lg:block">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#E6F2FA] text-[#0078D4]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}