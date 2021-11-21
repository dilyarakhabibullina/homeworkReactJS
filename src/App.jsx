//import logo from "./favicon.ico";
import "./App.css";
//import { Message } from "./Message";
import { MessageList } from "./Components/MessageList/MessageList";
//import { Counter } from "./Components/Counter/Counter";

function App() {
  const myname = ", Dilyara";
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p class="greeting">Добро пожаловать в наш чат!</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          REACT
        </a> */}
        <MessageList />
        {/* <Counter /> */}
        {/* <Message name={myname} /> */}
      </header>
    </div>
  );
}

export default App;
