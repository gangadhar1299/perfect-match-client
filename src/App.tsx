import { FullScreenSpinner } from "components";
import React from "react";

const AuthenticatedApp = React.lazy(() => import("./AuthenticatedApp"));

const UnauthenticatedApp = React.lazy(() => import("./UnauthenticatedApp"));

const auth = false;

function App() {
  return (
    <React.Suspense fallback={<FullScreenSpinner />}>
      {auth ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}

export default App;
