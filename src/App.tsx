import { useState } from 'react';
import type {
  CodeExplanationResult,
  CodeInput,
} from './types/codeExplanation';

const sampleExplanationResult: CodeExplanationResult = {
  summary:
    'This snippet appears to define a small unit of application logic. The explanation below shows how RepoPilot will eventually structure code understanding results.',
  keyConcepts: ['Function responsibility', 'Input handling', 'Return value'],
  walkthrough: [
    {
      title: 'Identify the entry point',
      explanation:
        'Start by locating the main function, component, or exported block that other code is expected to call.',
    },
    {
      title: 'Trace the data flow',
      explanation:
        'Follow how input values are read, transformed, and returned to understand the behavior of the snippet.',
    },
    {
      title: 'Check assumptions',
      explanation:
        'Look for implicit assumptions such as required input shape, nullable values, or missing error handling.',
    },
  ],
  risks: [
    'The code may rely on input assumptions that are not visible in the snippet.',
    'Edge cases are hard to assess without surrounding tests or call sites.',
  ],
  suggestedNextSteps: [
    'Add a real Code Explanation Skill in a later step.',
    'Validate structured output before rendering future AI responses.',
  ],
};

export default function App() {
  const [codeInput, setCodeInput] = useState<CodeInput>({ content: '' });
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const hasCodeInput = codeInput.content.trim().length > 0;

  function handleAnalyze() {
    setHasAnalyzed(true);
  }

  return (
    <main className="app-shell">
      <section className="workspace">
        <header className="hero">
          <p className="eyebrow">AI Codebase Onboarding Assistant</p>
          <h1>RepoPilot</h1>
          <p className="subtitle">
            Paste a code snippet and prepare it for a structured code explanation workflow.
          </p>
        </header>

        <div className="editor-layout">
          <section className="input-panel" aria-labelledby="input-title">
            <div className="panel-heading">
              <h2 id="input-title">Code Input</h2>
            </div>
            <textarea
              aria-label="Code snippet"
              placeholder="Paste a code snippet here..."
              spellCheck="false"
              value={codeInput.content}
              onChange={(event) =>
                setCodeInput({ content: event.target.value })
              }
            />
            <button type="button" disabled={!hasCodeInput} onClick={handleAnalyze}>
              Analyze
            </button>
          </section>

          <section className="result-panel" aria-labelledby="result-title">
            <div className="panel-heading">
              <h2 id="result-title">Result</h2>
            </div>
            {hasAnalyzed ? (
              <div className="result-content">
                <p className="sample-notice">
                  This is a local sample result, not AI-generated.
                </p>

                <section>
                  <h3>Summary</h3>
                  <p>{sampleExplanationResult.summary}</p>
                </section>

                <section>
                  <h3>Key Concepts</h3>
                  <ul>
                    {sampleExplanationResult.keyConcepts.map((concept) => (
                      <li key={concept}>{concept}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3>Walkthrough</h3>
                  <ol>
                    {sampleExplanationResult.walkthrough.map((step) => (
                      <li key={step.title}>
                        <strong>{step.title}</strong>
                        <span>{step.explanation}</span>
                      </li>
                    ))}
                  </ol>
                </section>

                <section>
                  <h3>Risks</h3>
                  <ul>
                    {sampleExplanationResult.risks.map((risk) => (
                      <li key={risk}>{risk}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3>Suggested Next Steps</h3>
                  <ul>
                    {sampleExplanationResult.suggestedNextSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </section>
              </div>
            ) : (
              <div className="empty-result">
                <p>No analysis yet.</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
