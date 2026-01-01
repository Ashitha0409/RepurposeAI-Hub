import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { UserPlus } from 'lucide-react';

export function ValidationRequestPanel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClinician, setSelectedClinician] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);

  const clinicians = [
    'Dr. Sarah Johnson (Infectious Diseases)',
    'Dr. Michael Chen (Clinical Pharmacology)',
    'Dr. Priya Patel (Tropical Medicine)',
  ];

  const questions = [
    'Have you observed similar therapeutic outcomes?',
    'Are there known contraindications in this patient population?',
    'Is the proposed dosage clinically feasible?',
    'Are there potential drug-drug interactions to consider?',
  ];

  const handleSubmit = () => {
    // Mock submit action
    setIsModalOpen(false);
    setSelectedClinician('');
    setSelectedQuestions([]);
  };

  const toggleQuestion = (question: string) => {
    setSelectedQuestions((prev) =>
      prev.includes(question) 
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-[#0078D4]" />
            Request Domain Expert Review
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Collaborate with domain experts to provide additional context for AI-generated hypotheses and improve evidence strength through human-in-the-loop feedback.
          </p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0078D4] hover:bg-[#005A9E]"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Request Contextual Review
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Request Contextual Review</DialogTitle>
            <DialogDescription>
              Select a domain expert and specific questions to request additional context for the AI-generated hypotheses.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Select Clinician</label>
              <Select value={selectedClinician} onValueChange={setSelectedClinician}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a clinician..." />
                </SelectTrigger>
                <SelectContent>
                  {clinicians.map((clinician) => (
                    <SelectItem key={clinician} value={clinician}>
                      {clinician}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-3 block">Select Questions</label>
              <div className="space-y-3">
                {questions.map((question) => (
                  <div key={question} className="flex items-start gap-2">
                    <Checkbox
                      id={question}
                      checked={selectedQuestions.includes(question)}
                      onCheckedChange={() => toggleQuestion(question)}
                    />
                    <label
                      htmlFor={question}
                      className="text-sm leading-relaxed cursor-pointer"
                    >
                      {question}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={!selectedClinician || selectedQuestions.length === 0}
              className="bg-[#0078D4] hover:bg-[#005A9E]"
            >
              Send Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}