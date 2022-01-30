import { useAuth } from "AuthProvider";
import { FullScreenSpinner } from "components";
import React from "react";

const AuthenticatedApp = React.lazy(() => import("./AuthenticatedApp"));

const UnauthenticatedApp = React.lazy(() => import("./UnauthenticatedApp"));

function App() {
  const { token, user } = useAuth();
  const auth = !!token && !!user;
  return (
    <React.Suspense fallback={<FullScreenSpinner />}>
      {auth ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  );
}

export default App;
