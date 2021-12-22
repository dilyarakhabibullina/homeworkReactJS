import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "./Router";
import { persistor, store } from "./Store";
//import { PersistConfig } from "redux-persist";

// const ROUTS = {
//   HOME: "/",
//   PROFILE: "/profile",
//   CHATS: "/chats",
// };

// export function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <>
//           <Router />
//         </>
//       </PersistGate>
//     </Provider>
//   );
// }

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
