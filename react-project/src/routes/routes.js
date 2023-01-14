import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import { AuthContext, AuthenticatorProvider } from "../contexts/auth";
import { useContext } from "react";

const RoutesApp = () => {
  
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);
    console.log('authenticated', authenticated);
    
    if (!authenticated) {
      console.log('entrou vou redirecionar');
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <Router>
      <AuthenticatorProvider>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route
            exact
            path="/home"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Routes>
      </AuthenticatorProvider>
    </Router>
  );
};
export default RoutesApp;
