import { Route, Routes } from "react-router-dom";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<p>You are logged in</p>} />
    </Routes>
  );
}

export default AuthenticatedApp;
