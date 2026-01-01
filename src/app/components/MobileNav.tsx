import { LayoutDashboard, Lightbulb, CircleCheck, ChartBar, Info } from 'lucide-react';

interface MobileNavProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export function MobileNav({ activeView, onViewChange }: MobileNavProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'hypotheses', label: 'AI Hypotheses', icon: Lightbulb },
    { id: 'validation', label: 'Domain Expert Review', icon: CircleCheck },
    { id: 'insights', label: 'Insights', icon: ChartBar },
    { id: 'about', label: 'About', icon: Info },
  ];

  return (
    <div className="lg:hidden bg-white border-b sticky top-[73px] z-40 overflow-x-auto">
      <nav className="flex px-4 py-2 gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-[#E6F2FA] text-[#0078D4]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}