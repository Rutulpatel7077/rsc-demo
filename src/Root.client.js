import { useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useServerResponse } from "./Utilities/Cache.client";
import { AppStateContext } from "./Utilities/AppStateContext.client";

export default function Root() {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary FallbackComponent={Error}>
        <Content />
      </ErrorBoundary>
    </Suspense>
  );
}

function Content() {
  const [appState, setAppState] = useState({
    searchText: "",
  });
  const response = useServerResponse(appState);

  return (
    <AppStateContext.Provider value={[appState, setAppState]}>
      {response.readRoot()}
    </AppStateContext.Provider>
  );
}

function Error({ error }) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{error.stack}</pre>
    </div>
  );
}
