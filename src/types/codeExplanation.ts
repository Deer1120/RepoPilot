export interface CodeInput {
  content: string;
  language?: string;
}

export interface CodeExplanationStep {
  title: string;
  explanation: string;
}

export interface CodeExplanationResult {
  summary: string;
  keyConcepts: string[];
  walkthrough: CodeExplanationStep[];
  risks: string[];
  suggestedNextSteps: string[];
}
