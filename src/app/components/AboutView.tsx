import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Shield, Database, Users, Brain, Lock, CheckCircle } from 'lucide-react';

export function AboutView() {
  const architecturePoints = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Azure OpenAI and Azure Machine Learning analyze clinical trials and research literature to identify drug repurposing opportunities.',
    },
    {
      icon: Users,
      title: 'Domain Expert Review',
      description: 'Domain experts provide contextual review for AI hypotheses through structured questionnaires, improving evidence strength and feasibility.',
    },
    {
      icon: Database,
      title: 'Secure Data Processing',
      description: 'All data processing occurs on Azure cloud infrastructure with enterprise-grade security and compliance.',
    },
    {
      icon: Shield,
      title: 'No Patient Data',
      description: 'System operates on anonymized research data and published literature only—no patient information is collected or stored.',
    },
    {
      icon: Lock,
      title: 'Privacy-First Design',
      description: 'End-to-end encryption, role-based access control, and audit logging ensure data privacy and transparency.',
    },
    {
      icon: CheckCircle,
      title: 'AI-Assistive Only',
      description: 'Designed to support research decisions, not replace expert judgment. All outputs require domain expert review.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <Card className="shadow-sm border-[#0078D4]">
        <CardHeader>
          <CardTitle className="text-2xl">About ElaraX</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            ElaraX is a research platform that combines artificial intelligence with domain expertise
            to accelerate the discovery of drug repurposing opportunities for neglected tropical diseases and
            emerging infectious diseases.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Built for the Microsoft Imagine Cup, this platform demonstrates how AI can augment—not replace—human
            expertise in healthcare research, while maintaining the highest standards of ethics, transparency, and
            data privacy.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-6">
        {architecturePoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <Card key={index} className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#E6F2FA] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#0078D4]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{point.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="shadow-sm bg-[#E6F2FA] border-[#0078D4]">
        <CardContent className="pt-6">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#0078D4]" />
            Ethical Guidelines
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#0078D4] mt-1">•</span>
              <span>This platform is for research purposes only and does not provide medical advice or treatment recommendations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0078D4] mt-1">•</span>
              <span>All AI-generated hypotheses must be reviewed by qualified domain professionals before further research.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0078D4] mt-1">•</span>
              <span>Domain experts should not use this system for patient care decisions or prescription purposes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0078D4] mt-1">•</span>
              <span>All outputs should be considered preliminary research findings subject to rigorous clinical trial validation.</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h5 className="font-semibold mb-2 text-[#0078D4]">AI & ML</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Azure OpenAI</li>
                <li>• Azure Machine Learning</li>
                <li>• Natural Language Processing</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-[#0078D4]">Cloud Infrastructure</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Azure App Service</li>
                <li>• Azure Cosmos DB</li>
                <li>• Azure Key Vault</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 text-[#0078D4]">Frontend</h5>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• React + TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Recharts</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}