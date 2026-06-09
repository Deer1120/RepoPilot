export default function App() {
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
            />
            <button type="button">Analyze</button>
          </section>

          <section className="result-panel" aria-labelledby="result-title">
            <div className="panel-heading">
              <h2 id="result-title">Result</h2>
            </div>
            <div className="empty-result">
              <p>No analysis yet.</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
