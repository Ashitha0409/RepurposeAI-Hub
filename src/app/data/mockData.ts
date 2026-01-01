export interface Hypothesis {
  id: string;
  drugName: string;
  sourceEvidence: string;
  aiConfidence: number;
  validationStatus: 'Context Pending' | 'Evidence Aligned' | 'Feasibility concerns';
  beforeValidation?: {
    confidence: number;
    priorityRank: number;
    feasibilityRisk: string;
  };
  afterValidation?: {
    confidence: number;
    priorityRank: number;
    feasibilityRisk: string;
  };
}

export interface DiseaseContext {
  diseaseName: string;
  regionFocus: string;
  currentChallenge: string;
}

export const diseases = ['Dengue', 'Malaria', 'Zika', 'Tuberculosis', 'COVID-19'];

export const mockHypotheses: Hypothesis[] = [
  {
    id: '1',
    drugName: 'Ivermectin',
    sourceEvidence: 'Clinical Trial #NCT04535791',
    aiConfidence: 87,
    validationStatus: 'Evidence Aligned',
    beforeValidation: {
      confidence: 87,
      priorityRank: 3,
      feasibilityRisk: 'Medium',
    },
    afterValidation: {
      confidence: 92,
      priorityRank: 1,
      feasibilityRisk: 'Low',
    },
  },
  {
    id: '2',
    drugName: 'Chloroquine',
    sourceEvidence: 'Literature Review (PubMed: 15+ papers)',
    aiConfidence: 73,
    validationStatus: 'Feasibility concerns',
    beforeValidation: {
      confidence: 73,
      priorityRank: 1,
      feasibilityRisk: 'Low',
    },
    afterValidation: {
      confidence: 68,
      priorityRank: 4,
      feasibilityRisk: 'High',
    },
  },
  {
    id: '3',
    drugName: 'Doxycycline',
    sourceEvidence: 'Clinical Trial #NCT03697304',
    aiConfidence: 81,
    validationStatus: 'Evidence Aligned',
    beforeValidation: {
      confidence: 81,
      priorityRank: 2,
      feasibilityRisk: 'Medium',
    },
    afterValidation: {
      confidence: 85,
      priorityRank: 2,
      feasibilityRisk: 'Low',
    },
  },
  {
    id: '4',
    drugName: 'Metformin',
    sourceEvidence: 'Literature Review (PubMed: 8 papers)',
    aiConfidence: 65,
    validationStatus: 'Context Pending',
    beforeValidation: {
      confidence: 65,
      priorityRank: 5,
      feasibilityRisk: 'High',
    },
  },
  {
    id: '5',
    drugName: 'Azithromycin',
    sourceEvidence: 'Clinical Trial #NCT04332107',
    aiConfidence: 78,
    validationStatus: 'Evidence Aligned',
    beforeValidation: {
      confidence: 78,
      priorityRank: 4,
      feasibilityRisk: 'Medium',
    },
    afterValidation: {
      confidence: 82,
      priorityRank: 3,
      feasibilityRisk: 'Low',
    },
  },
];

export const diseaseContexts: Record<string, DiseaseContext> = {
  Dengue: {
    diseaseName: 'Dengue Fever',
    regionFocus: 'Southeast Asia, Latin America',
    currentChallenge: 'No specific antiviral treatment available; focus on symptom management and fluid replacement.',
  },
  Malaria: {
    diseaseName: 'Malaria',
    regionFocus: 'Sub-Saharan Africa, South Asia',
    currentChallenge: 'Drug resistance in Plasmodium falciparum strains; need for novel therapeutic approaches.',
  },
  Zika: {
    diseaseName: 'Zika Virus',
    regionFocus: 'Americas, Pacific Islands',
    currentChallenge: 'No approved vaccines or treatments; risk of congenital abnormalities in pregnant women.',
  },
  Tuberculosis: {
    diseaseName: 'Tuberculosis',
    regionFocus: 'India, China, South Africa',
    currentChallenge: 'Multi-drug resistant TB strains emerging; long treatment duration reducing compliance.',
  },
  'COVID-19': {
    diseaseName: 'COVID-19',
    regionFocus: 'Global',
    currentChallenge: 'Evolving variants; need for broad-spectrum antivirals and improved treatment options.',
  },
};

export const insightsData = {
  hypothesesImproved: 68,
  commonIssues: [
    { name: 'Side Effects', value: 35 },
    { name: 'Drug Interactions', value: 28 },
    { name: 'Dosage Concerns', value: 22 },
    { name: 'Cost/Access', value: 15 },
  ],
  turnaroundTime: [
    { month: 'Jul', hours: 18 },
    { month: 'Aug', hours: 14 },
    { month: 'Sep', hours: 12 },
    { month: 'Oct', hours: 10 },
    { month: 'Nov', hours: 9 },
    { month: 'Dec', hours: 8 },
  ],
  confidenceDistribution: [
    { range: '0-20', count: 2 },
    { range: '21-40', count: 5 },
    { range: '41-60', count: 12 },
    { range: '61-80', count: 28 },
    { range: '81-100', count: 18 },
  ],
};