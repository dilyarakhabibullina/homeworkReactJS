import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";
import "firebase/database";
import { ROUTS } from "../../Router/constants";
import "./SignUp.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  console.log(password);

  const handleSignUp = async () => {
    setError("");
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e.message);
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
        <button onClick={handleSignUp}>SIGN UP</button>
      </div>
      <div> {error}</div>
      <div>
        Already registed? <Link to={ROUTS.SIGN_IN}>Sign-In</Link>
      </div>
    </div>
  );
};
