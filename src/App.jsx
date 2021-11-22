import "./App.css";

import { MessageList } from "./Components/MessageList/MessageList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p class="greeting">Добро пожаловать в наш чат!</p>

        <MessageList />
      </header>
    </div>
  );
}

export default App;
