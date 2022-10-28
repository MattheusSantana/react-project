import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Products';


function App() {
  const backgroundUrl = "https://media2.giphy.com/media/BYoRqTmcgzHcL9TCy1/giphy.gif?cid=ecf05e47ee9efad348581187448b3e9a3094db953ea3783a&rid=giphy.gif&ct=g";
  const tecnologies = ['vue', 'react', 'angular']
  return (
    <div className="App">
      <header className="App-header">
        <img src={backgroundUrl} className="App-logo" alt="logo" />
        <HelloWorld/>
        <Router> 
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>  
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Contact' element={<Contact/>}/>
          <Route exact path='/Products' element={<Product/>}/>
        </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
