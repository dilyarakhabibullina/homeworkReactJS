import React from "react";
import { Provider } from "react-redux";
import { storeCheckbox } from "./Store";
import "./App.css";
import { Router } from "./Router";

const ROUTS = {
  HOME: "/",
  PROFILE: "/profile",
  CHATS: "/chats",
};

export function App() {
  return (
    <Provider store={storeCheckbox}>
      <>
        <Router />
      </>
    </Provider>
  );
}

export default App;
