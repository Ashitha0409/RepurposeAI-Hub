import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { CircleAlert, CircleCheck } from 'lucide-react';

export function ClinicianValidationView() {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const mockHypothesis = {
    drugName: 'Ivermectin',
    diseaseName: 'Dengue Fever',
    sourceEvidence: 'Clinical Trial #NCT04535791',
    aiConfidence: 87,
    mechanism: 'Proposed antiviral mechanism through inhibition of importin α/β-mediated nuclear transport',
  };

  const questions = [
    {
      id: 'q1',
      text: 'Have you observed similar therapeutic outcomes in clinical practice?',
    },
    {
      id: 'q2',
      text: 'Are there known contraindications in the target patient population?',
    },
    {
      id: 'q3',
      text: 'Is the proposed dosage regimen clinically feasible?',
    },
    {
      id: 'q4',
      text: 'Are you aware of potential drug-drug interactions?',
    },
  ];

  const handleResponse = (questionId: string, response: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: response }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-sm border-green-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CircleCheck className="w-16 h-16 text-green-600 mx-auto" />
              <h3 className="text-xl font-semibold">Context Review Submitted Successfully</h3>
              <p className="text-gray-600">
                Your contextual review has been recorded and will be used to refine the AI hypothesis.
              </p>
              <Button onClick={() => setSubmitted(false)} className="bg-[#0078D4] hover:bg-[#005A9E]">
                Review Another Hypothesis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Hypothesis Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600 block mb-1">Drug Name</label>
              <p className="font-medium">{mockHypothesis.drugName}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">Disease</label>
              <p className="font-medium">{mockHypothesis.diseaseName}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">Source of Evidence</label>
              <p className="text-sm">{mockHypothesis.sourceEvidence}</p>
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">Evidence Strength</label>
              <Badge className="bg-[#0078D4]">{mockHypothesis.aiConfidence}%</Badge>
            </div>
            <div className="col-span-2">
              <label className="text-sm text-gray-600 block mb-1">Proposed Mechanism</label>
              <p className="text-sm">{mockHypothesis.mechanism}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Contextual Review Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {questions.map((question) => (
            <div key={question.id} className="space-y-3">
              <label className="font-medium block">{question.text}</label>
              <div className="flex gap-4">
                {['Yes', 'No', 'Unsure'].map((option) => (
                  <div key={option} className="flex items-center gap-2">
                    <Checkbox
                      id={`${question.id}-${option}`}
                      checked={responses[question.id] === option}
                      onCheckedChange={() => handleResponse(question.id, option)}
                    />
                    <label
                      htmlFor={`${question.id}-${option}`}
                      className="text-sm cursor-pointer"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-2">
            <label className="font-medium block">Additional Comments (Optional)</label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Provide any additional clinical insights or concerns..."
              rows={4}
            />
          </div>

          <div className="flex items-start gap-2 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <CircleAlert className="w-5 h-5 text-amber-600 mt-0.5" />
            <div className="text-sm text-amber-900">
              <p className="font-medium mb-1">Research Context Only</p>
              <p>
                This review is for research purposes only. It does not constitute medical advice,
                patient care recommendations, or prescription guidelines.
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline">Save Draft</Button>
            <Button 
              onClick={handleSubmit}
              disabled={Object.keys(responses).length < questions.length}
              className="bg-[#0078D4] hover:bg-[#005A9E]"
            >
              Submit Review
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}