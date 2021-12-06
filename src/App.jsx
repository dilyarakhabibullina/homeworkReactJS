import React from "react";
import { Provider } from "react-redux";
import { persistor } from "./Store";
import { store } from "./Store";
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
      <PersistGate loading={null} persistor={persistor}>
        <>
          <Router />
        </>
      </PersistGate>
    </Provider>
  );
}

export default App;
