import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDigIaemoL2KXiRPcTVdaW8v0QI_Ii9uG4",
  authDomain: "dilyara-react-project.firebaseapp.com",
  projectId: "dilyara-react-project",
  storageBucket: "dilyara-react-project.appspot.com",
  messagingSenderId: "801446688517",
  appId: "1:801446688517:web:29fef3875cb74d5a98a96c",
};

firebase.initializeApp(firebaseConfig);
