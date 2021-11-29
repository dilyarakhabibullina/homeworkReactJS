import { ChatList } from "../../Components/ChatList/ChatList";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import { useParams } from "react-router";
import { Redirect } from "react-router";
import { ROUTS } from "../../Router/constants";
import { CHATS } from "../../Components/ChatList/ChatList";

export function Chats() {
  const [chatList] = useState(CHATS);
  const { chatId } = useParams();

  // if (!chatId) {
  //   return <Redirect to={ROUTS.NO_CHAT} />;
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p class="greeting">Welcome to our Messenger!</p>
        <div className="chatArea">
          <div class="chatContainer">
            <ChatList />
          </div>
        </div>
      </header>
    </div>
  );
}
