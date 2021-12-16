import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import "./ChatList.css";

export const CHATS = [
  { id: "1", name: "Mom" },
  { id: "2", name: "Papa" },
  { id: "3", name: "Brother" },
  { id: "4", name: "Dog" },
];

// export const CHATS = {
//   chat_id: {
//     chatName: "Mom",
//     messages: [{ text: "hi, sunny", author: "Mommy" }],
//   },
// };

export const ChatList = () => {
  const [chatList] = useState(CHATS);
  return (
    <>
      <div>
        <nav aria-label="secondary mailbox folders">
          <Divider />
          <List primary="List of Chats">
            <ListItem disablePadding>
              <ListItemText />
              <div className="listItem">
                {chatList.map((chat) => (
                  <div
                  // key={chat.chat_id}
                  >
                    <p className="chat">
                      <span className="chatWith"> chat with</span>
                    </p>
                    <div className="contact">{chat.name}</div>
                    <Divider />
                  </div>
                ))}
              </div>
            </ListItem>
          </List>
        </nav>
      </div>
    </>
  );
};
