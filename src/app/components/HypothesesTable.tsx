import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Hypothesis } from '../data/mockData';
import { Sparkles } from 'lucide-react';

interface HypothesesTableProps {
  hypotheses: Hypothesis[];
}

export function HypothesesTable({ hypotheses }: HypothesesTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Evidence Aligned':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Feasibility concerns':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#0078D4]" />
          AI-Generated Repurposing Hypotheses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Drug Name</TableHead>
                <TableHead>Source of Evidence</TableHead>
                <TableHead>Evidence Strength</TableHead>
                <TableHead>Evidence Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hypotheses.map((hypothesis) => (
                <TableRow key={hypothesis.id}>
                  <TableCell className="font-medium">{hypothesis.drugName}</TableCell>
                  <TableCell className="text-sm text-gray-600">
                    {hypothesis.sourceEvidence}
                  </TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Progress value={hypothesis.aiConfidence} className="h-2 flex-1 bg-gray-200" />
                        <span className="text-sm font-medium w-10 text-right">
                          {hypothesis.aiConfidence}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(hypothesis.validationStatus)}>
                      {hypothesis.validationStatus}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 bg-[#E6F2FA] px-4 py-3 rounded-lg">
          <Sparkles className="w-4 h-4 text-[#0078D4]" />
          <span>Generated using Azure OpenAI + Azure Machine Learning</span>
        </div>
      </CardContent>
    </Card>
  );
}