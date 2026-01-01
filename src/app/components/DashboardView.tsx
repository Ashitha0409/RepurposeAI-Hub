import { DiseaseContextCard } from './DiseaseContextCard';
import { HypothesesTable } from './HypothesesTable';
import { ValidationRequestPanel } from './ValidationRequestPanel';
import { BeforeAfterComparison } from './BeforeAfterComparison';
import { mockHypotheses, DiseaseContext } from '../data/mockData';

interface DashboardViewProps {
  diseaseContext: DiseaseContext;
}

export function DashboardView({ diseaseContext }: DashboardViewProps) {
  return (
    <div className="space-y-6">
      <DiseaseContextCard context={diseaseContext} />
      <HypothesesTable hypotheses={mockHypotheses} />
      <div className="grid grid-cols-1 gap-6">
        <ValidationRequestPanel />
        <BeforeAfterComparison hypotheses={mockHypotheses} />
      </div>
    </div>
  );
}
