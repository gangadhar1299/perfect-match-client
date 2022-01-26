import { Route, Routes } from "react-router-dom";
import LandingScreen from "screens/Landing";
import LoginScreen from "screens/Login";
import NotFoundScreen from "screens/NotFound";
import RegisterScreen from "screens/Register";

function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
}

export default UnauthenticatedApp;
