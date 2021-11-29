import "./Home.css";
import { ChatList } from "../../Components/ChatList/ChatList";
import { MessageList } from "../../Components/MessageList/MessageList";
//import { ChatList } from "./Components/ChatList";
//import { MessageList } from "./Components/MessageList";

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p class="greeting">Welcome to our Messenger!</p>
        <div className="chatArea">
          <div class="chatContainer">
            <ChatList />
          </div>
          <div>
            <MessageList />
          </div>
        </div>
      </header>
    </div>
  );
}

//export default App;
