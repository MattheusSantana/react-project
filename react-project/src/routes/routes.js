import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import { AuthContext, AuthenticatorProvider } from "../contexts/auth";
import { useContext } from "react";
import Movie from "../pages/Movie";
import Checkbox from "../components/Checkbox";
import DependencyArray from "../components/DependencyArray"

const RoutesApp = () => {
  
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);
    const { loading } = useContext(AuthContext);

    if(loading) {
      return <div><h1>Loading</h1></div>;
    }

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
          <Route exact path="/" element={<Movie />} />
          <Route
            exact
            path="/home"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
          <Route exact path="/checkbox" element={<Checkbox />}/>
          <Route exact path="/dependencyArray" element={<DependencyArray />}/>  
        </Routes>
      </AuthenticatorProvider>
    </Router>
  );
};
export default RoutesApp;
