//import { Link } from "@mui/material";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Switch } from "react-router-dom";

import { ROUTS } from "./constants";

import { Home } from "../Screens/Home/Home";
import { Chats } from "../Screens/Chats/Chats";
import { Profile } from "../Screens/Profile/Profile";
import { CHATS } from "../Components/ChatList/ChatList";
//import { Chats } from "../Screens/Chats/Chats";

let chat_id = CHATS.chat_id;

export function Router() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={ROUTS.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTS.CHAT}>Chats</Link>
        </li>
        <li>
          <Link to={ROUTS.PROFILE}>Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={ROUTS.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTS.CHAT} render={() => <Chats />} />
        <Route path="/chats/: chatId">Это чат с id</Route>
        <Route exact path={ROUTS.PROFILE} component={Profile} />
        <Route path={ROUTS.NO_CHAT}>No such chat</Route>
        <Route path={ROUTS.NOT_FOUND}>Oops... Nothing found</Route>
        <Route>
          <Redirect to={ROUTS.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
