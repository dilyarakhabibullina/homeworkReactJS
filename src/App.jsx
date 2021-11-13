import logo from "./faviconD.ico";
import "./App.css";
import { Message } from "./Message";

function App() {
  const myname = ", Dilyara";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Добро пожаловать в React, Диляра!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          REACT
        </a>
        <Message name={myname} />
      </header>
    </div>
  );
}

export default App;
