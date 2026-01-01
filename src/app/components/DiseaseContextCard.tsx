import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin } from 'lucide-react';
import { DiseaseContext } from '../data/mockData';

interface DiseaseContextCardProps {
  context: DiseaseContext;
}

export function DiseaseContextCard({ context }: DiseaseContextCardProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#0078D4]" />
          Disease Context
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="text-sm text-gray-600 block mb-1">Disease Name</label>
            <p className="font-medium">{context.diseaseName}</p>
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-1">Region Focus</label>
            <p className="font-medium">{context.regionFocus}</p>
          </div>
          <div className="md:col-span-3">
            <label className="text-sm text-gray-600 block mb-1">Current Challenge</label>
            <p className="text-sm text-gray-700 leading-relaxed">{context.currentChallenge}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}