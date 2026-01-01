import { useState } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { DashboardView } from './components/DashboardView';
import { HypothesesTable } from './components/HypothesesTable';
import { ClinicianValidationView } from './components/ClinicianValidationView';
import { InsightsView } from './components/InsightsView';
import { AboutView } from './components/AboutView';
import { diseases, diseaseContexts, mockHypotheses } from './data/mockData';

function App() {
  const [selectedDisease, setSelectedDisease] = useState<string>('Dengue');
  const [role, setRole] = useState<'Researcher' | 'Clinician'>('Researcher');
  const [activeView, setActiveView] = useState('dashboard');

  const currentContext = diseaseContexts[selectedDisease];

  const renderContent = () => {
    // If role is Clinician and we're on dashboard, show review view by default
    if (role === 'Clinician' && activeView === 'dashboard') {
      return (
        <div>
          <h2 className="mb-6">Domain Expert Review Interface</h2>
          <ClinicianValidationView />
        </div>
      );
    }

    switch (activeView) {
      case 'dashboard':
        return <DashboardView diseaseContext={currentContext} />;
      case 'hypotheses':
        return (
          <div>
            <h2 className="mb-6">AI-Generated Hypotheses</h2>
            <HypothesesTable hypotheses={mockHypotheses} />
          </div>
        );
      case 'validation':
        return (
          <div>
            <h2 className="mb-6">Domain Expert Review Interface</h2>
            <ClinicianValidationView />
          </div>
        );
      case 'insights':
        return (
          <div>
            <h2 className="mb-6">Research Insights & Analytics</h2>
            <InsightsView />
          </div>
        );
      case 'about':
        return <AboutView />;
      default:
        return <DashboardView diseaseContext={currentContext} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar
        selectedDisease={selectedDisease}
        onDiseaseChange={setSelectedDisease}
        role={role}
        onRoleChange={setRole}
        diseases={diseases}
      />
      
      <MobileNav activeView={activeView} onViewChange={setActiveView} />
      
      <div className="flex">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        
        <main className="flex-1 p-4 md:p-8 min-h-[calc(100vh-73px)]">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
          
          <footer className="max-w-7xl mx-auto mt-12 pt-6 border-t text-center text-sm text-gray-500">
            <p>ElaraX • Microsoft Imagine Cup • Research Tool Only • No Patient Data</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;