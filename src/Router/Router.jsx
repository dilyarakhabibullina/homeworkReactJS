//import { Link } from "@mui/material";
import {
  BrowserRouter,
  Link,
  // Routes,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Switch } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";
import "firebase/database";
import { CircularProgress } from "@mui/material";

import { ROUTS } from "./constants";

import { Home } from "../Screens/Home/Home";
import { Chats } from "../Screens/Chats/Chats";
import { Profile } from "../Screens/Profile/Profile";
import { CHATS } from "../Components/ChatList/ChatList";
//import { Chats } from "../Screens/Chats/Chats";
import { Dogs } from "../Screens/Dogs";
import { SignIn } from "../Screens/SignIn";
import { SignUp } from "../Screens/SignUp";
import { useState } from "react";
import { useEffect } from "react";
import { PrivateRouter } from "../Components/PrivateRouter/PrivateRouter";
import { PublicRouter } from "../Components/PublicRouter/PublicRouter";
//import {SignUp} from

// let chat_id = CHATS.chat_id;

export function Router() {
  const [auth, setAuth] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const handleInitFirebaseAuth = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      setAuth(user);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleInitFirebaseAuth();
  }, []);
  console.log(auth, loading);
  if (loading) return <CircularProgress />;

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
        <li>
          <Link to={ROUTS.DOGS}>Dogs</Link>
        </li>
        <li>
          <Link to={ROUTS.SIGN_IN}>Sign In</Link>
        </li>
        <li>
          <Link to={ROUTS.SIGN_UP}>Sign Up</Link>
        </li>
      </ul>
      <Switch>
        <PublicRouter exact path={ROUTS.HOME} auth={auth}>
          <Home />
        </PublicRouter>
        <PrivateRouter
          exact
          path={ROUTS.CHAT}
          auth={auth}
          render={() => <Chats />}
        />
        <Route path="/chats/: chatId">Это чат с id</Route>
        <PrivateRouter
          exact
          path={ROUTS.PROFILE}
          auth={auth}
          component={Profile}
        />
        <Route path={ROUTS.DOGS} auth={auth}>
          Это собачки <Dogs />
        </Route>
        <PublicRouter path={ROUTS.SIGN_IN} auth={auth}>
          <SignIn />
        </PublicRouter>
        <PublicRouter path={ROUTS.SIGN_UP} auth={auth}>
          <SignUp />
        </PublicRouter>
        <PrivateRouter path={ROUTS.NO_CHAT} auth={auth}>
          No such chat
        </PrivateRouter>
        <Route path={ROUTS.NOT_FOUND}>Oops... Nothing found</Route>
        <Route>
          <Redirect to={ROUTS.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
