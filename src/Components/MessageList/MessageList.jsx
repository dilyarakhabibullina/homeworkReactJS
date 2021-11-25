import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./MessageList.css";

const INITIAL_MESSAGES = [{ id: 1, author: "Mom", text: "Wash your hands!!!" }];

export const MessageList = (props) => {
  const [text, setText] = useState("");
  const [messageList, setMessageList] = useState(INITIAL_MESSAGES);

  const handleTextChange = (e) => setText(e.target.value);

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    let botID = messageList.length + 100;
    let timerId = null;
    if (lastMessage.author !== "Bot" && lastMessage.author !== "Mom") {
      timerId = setTimeout(() => {
        setMessageList([
          ...messageList,
          { id: botID, author: "Bot", text: "Я робот Вертер" },
        ]);
      }, 1500);
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
    setMessageList([...messageList]);
  }

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
        <div>
          <TextField
            style={{ color: "white" }}
            id="standard-basic"
            variant="standard"
            value={text}
            onChange={handleTextChange}
            autoFocus
          />
        </div>
        <Button variant="contained" onClick={addPost}>
          SEND MESSAGE
        </Button>
      </div>
    </>
  );
};
