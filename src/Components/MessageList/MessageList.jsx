import React, { useEffect, useState } from "react";
import "./MessageList.css";

const INITIAL_MESSAGES = [{ id: 1, author: "Mom", text: "Wash your hands!!!" }];

export const MessageList = (props) => {
  const [text, setText] = useState("");
  const [messageList] = useState(INITIAL_MESSAGES);
  const handleTextChange = (e) => setText(e.target.value);

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let botID = messageList.length + 100;
    let timerId = null;
    if (lastMessage.author !== "Bot" && lastMessage.author !== "Mom") {
      timerId = setTimeout(() => {
        messageList.push({
          id: botID,
          author: "Bot",
          text: "Я робот Вертер",
        });
      }, 5000);
      return () => {
        clearTimeout(timerId);
      };
    }
  });

  function addPost() {
    let idNext = messageList.length + 1;
    messageList.push({
      id: idNext,
      author: "Me",
      text: text,
    });
    console.log(messageList);
  }

  console.log(text);
  return (
    <>
      <div>
        {messageList.map((message) => (
          <div key={message.id}>
            <p className="author">{message.author}:</p>
            <div className="messageText">{message.text}</div>
          </div>
        ))}
      </div>
      <div class="inputArea">
        <input class="messageInput" value={text} onChange={handleTextChange} />
        <button class="submitButton" onClick={addPost}>
          Click me, please, to submit!
        </button>
      </div>
    </>
  );
};
