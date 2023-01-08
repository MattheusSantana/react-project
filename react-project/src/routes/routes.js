import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default RoutesApp;
