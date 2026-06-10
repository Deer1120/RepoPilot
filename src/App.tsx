import { useState } from 'react';
import type { CodeInput } from './types/codeExplanation';

export default function App() {
  const [codeInput, setCodeInput] = useState<CodeInput>({ content: '' });
  const [message, setMessage] = useState('');
  const hasCodeInput = codeInput.content.trim().length > 0;

  function handleAnalyze() {
    setMessage('Input captured. AI analysis is not implemented yet.');
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
            <div className="empty-result">
              <p>{message || 'No analysis yet.'}</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
