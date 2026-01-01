import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Hypothesis } from '../data/mockData';

interface BeforeAfterComparisonProps {
  hypotheses: Hypothesis[];
}

export function BeforeAfterComparison({ hypotheses }: BeforeAfterComparisonProps) {
  const validatedHypotheses = hypotheses.filter((h) => h.afterValidation);

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#0078D4]" />
          Impact of Additional Context
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-1">
          Updated after contextual review
        </p>
        <div className="flex gap-6 mb-4 text-sm">
          <span className="text-green-600">Evidence clarity ↑</span>
          <span className="text-blue-600">Uncertainty ↓</span>
          <span className="text-[#0078D4]">Risk visibility ↑</span>
        </div>
        <div className="rounded-lg border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead>Drug Name</TableHead>
                <TableHead className="text-center">Evidence Strength</TableHead>
                <TableHead className="text-center">Priority Rank</TableHead>
                <TableHead className="text-center">Feasibility Risk</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {validatedHypotheses.map((hypothesis) => (
                <TableRow key={hypothesis.id}>
                  <TableCell className="font-medium">{hypothesis.drugName}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-500">{hypothesis.beforeValidation?.confidence}%</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-green-600">
                        {hypothesis.afterValidation?.confidence}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-500">#{hypothesis.beforeValidation?.priorityRank}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-[#0078D4]">
                        #{hypothesis.afterValidation?.priorityRank}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-gray-500">{hypothesis.beforeValidation?.feasibilityRisk}</span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                      <span className={`font-medium ${
                        hypothesis.afterValidation?.feasibilityRisk === 'Low' 
                          ? 'text-green-600' 
                          : hypothesis.afterValidation?.feasibilityRisk === 'High'
                          ? 'text-red-600'
                          : 'text-yellow-600'
                      }`}>
                        {hypothesis.afterValidation?.feasibilityRisk}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}