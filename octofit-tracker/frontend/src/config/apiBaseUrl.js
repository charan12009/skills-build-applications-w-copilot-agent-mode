const codespaceName = import.meta.env.VITE_CODESPACE_NAME || import.meta.env.CODESPACE_NAME;

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';
