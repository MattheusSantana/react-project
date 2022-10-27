import HelloWorld from './components/HelloWorld';
import './App.css';
import AlertButton from './components/AlertButton';
// import List from './components/List';

function App() {
  const backgroundUrl = "https://media2.giphy.com/media/BYoRqTmcgzHcL9TCy1/giphy.gif?cid=ecf05e47ee9efad348581187448b3e9a3094db953ea3783a&rid=giphy.gif&ct=g";
  
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={backgroundUrl} className="App-logo" alt="logo" />
        <HelloWorld/>
        <AlertButton message="Welcome!"/>
      </header>
    </div>
  );
}

export default App;
