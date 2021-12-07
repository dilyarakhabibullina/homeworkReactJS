import "./Home.css";
import { ChatList } from "../../Components/ChatList/ChatList";
import { MessageList } from "../../Components/MessageList/MessageList";
import { useSelector } from "react-redux";
import { profileSelector } from "../../Store/Profile/selectors";

export function Home() {
  const { userName } = useSelector(profileSelector);

  return (
    <div className="App">
      <header className="App-header">
        <p class="greeting">Welcome to our Messenger!</p>
        <p>{userName}</p>
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
