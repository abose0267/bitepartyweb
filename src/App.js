import logo from './logo.svg';
import './App.css';
import back from './logoText2.PNG';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a
          className="App-link"
          href="https://kas-tech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={back} className="App-logo" alt="logo"  href="https://kas-tech.com"
          target="_blank"
          rel="noopener noreferrer" />
        </a>
      </header>
    </div>
  );
}

export default App;
