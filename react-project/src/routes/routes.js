import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import { AuthenticatorProvider } from "../contexts/auth";


const RoutesApp = () => {
  
  return (
    <Router>
      <AuthenticatorProvider>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </AuthenticatorProvider>
    </Router>
  );
};
export default RoutesApp;
