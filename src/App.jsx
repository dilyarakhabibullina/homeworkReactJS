import React from "react";
import "./App.css";
import { Router } from "./Router";

const ROUTS = {
  HOME: "/",
  PROFILE: "/profile",
  CHATS: "/chats",
};

export function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
