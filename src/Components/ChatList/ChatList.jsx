import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { Home } from "../../Screens/Home/Home";

import "./ChatList.css";

export const CHATS = [
  { chat_id: 1, name: "Mom" },
  { chat_id: 2, name: "Papa" },
  { chat_id: 3, name: "Brother" },
  { chat_id: 4, name: "Dog" },
];

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
                  <div key={chat.chat_id}>
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
