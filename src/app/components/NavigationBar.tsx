import { Activity } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

interface NavigationBarProps {
  selectedDisease: string;
  onDiseaseChange: (disease: string) => void;
  role: 'Researcher' | 'Clinician';
  onRoleChange: (role: 'Researcher' | 'Clinician') => void;
  diseases: string[];
}

export function NavigationBar({ 
  selectedDisease, 
  onDiseaseChange, 
  role, 
  onRoleChange,
  diseases 
}: NavigationBarProps) {
  return (
    <div className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0078D4] flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">ElaraX</span>
        </div>
        
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Selected Disease:</label>
            <Select value={selectedDisease} onValueChange={onDiseaseChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {diseases.map((disease) => (
                  <SelectItem key={disease} value={disease}>
                    {disease}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center gap-2 border rounded-lg p-1 bg-gray-50">
            <Button
              variant={role === 'Researcher' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onRoleChange('Researcher')}
              className={role === 'Researcher' ? 'bg-[#0078D4] text-white hover:bg-[#005A9E]' : ''}
            >
              Researcher
            </Button>
            <Button
              variant={role === 'Clinician' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onRoleChange('Clinician')}
              className={role === 'Clinician' ? 'bg-[#0078D4] text-white hover:bg-[#005A9E]' : ''}
            >
              Clinician
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}