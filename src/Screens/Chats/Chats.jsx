import React, {
  // useEffect,
  useState,
} from "react";
import "./Chats.css";
import { useParams } from "react-router";

export const initialChats = {
  id1: {
    chatName: "Mom",
    messages: [
      { text: "hi, sunny", author: "Mommy" },
      { text: "how r u", author: "Mommy" },
    ],
  },
  id2: {
    chatName: "Dog",
    messages: [{ text: "gav-gav", author: "MyDog" }],
  },
};

export function Chats() {
  const { chatId } = useParams();
  const [chats, setChats] = useState(initialChats);
  console.log(chats.id1.chatName);

  return (
    <div className="App">
      <header className="App-header">
        <p class="greeting">Welcome to our Messenger!</p>
        <div>{chats.id2.chatName}</div>
        <div>{chats.id2.messages.author}</div>

        <div className="chatArea">
          <div class="chatContainer">
            {Object.entries(chats).forEach(([key, element]) => {
              console.log(key, element);
            })}
          </div>
        </div>
      </header>
    </div>
  );
}
