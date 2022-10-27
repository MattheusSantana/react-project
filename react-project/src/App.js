import logo from './logo.svg';
import './App.css';


function App() {
  const backgroundUrl = "https://media2.giphy.com/media/BYoRqTmcgzHcL9TCy1/giphy.gif?cid=ecf05e47ee9efad348581187448b3e9a3094db953ea3783a&rid=giphy.gif&ct=g";
  const message = "Hello World";
  return (
    <div className="App">
      <header className="App-header">
        <img src={backgroundUrl} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
