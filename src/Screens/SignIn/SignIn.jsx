import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";
import "firebase/database";
import { ROUTS } from "../../Router/constants";
import "./SignIn.css";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = async () => {
    setError("");
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <div>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button onClick={handleSignIn}>SIGN IN</button>
      </div>
      <div> {error}</div>
      <div>
        Not registed? <Link to={ROUTS.SIGN_UP}>Sign-Up</Link>
      </div>
    </div>
  );
};
