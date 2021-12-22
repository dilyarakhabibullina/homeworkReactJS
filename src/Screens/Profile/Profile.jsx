import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/compat/database";

import { changeUserName, toggleCheckbox } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";
import { addChatAction } from "../../Store/Chats/actions";
import "./Profile.css";
import { ChatList } from "../../Components/ChatList/ChatList";

export const Profile = () => {
  const dispatch = useDispatch();
  const { name, isChecked } = useSelector((state) => state);
  const { userName } = useSelector(profileSelector);
  const { chatList } = useSelector((state) => state.chats);

  const handleInitFirebaseProfile = async () => {
    const id = firebase.auth().currentUser.uid;

    await firebase
      .database()
      .ref("profile")
      .child(id)
      .child("userName")
      .on("value", (snapshot) => {
        dispatch(changeUserName({ name: snapshot.val() }));
      });
  };

  useEffect(() => {
    handleInitFirebaseProfile();
  }, []);

  const handleCheckbox = () => {
    dispatch(toggleCheckbox());
    dispatch(addChatAction({ id: "1", name: "Mom" }));
    dispatch(addChatAction({ id: "2", name: "Papa" }));
  };

  const handleChangeName = (e) => {
    const db = firebase.database();
    const id = firebase.auth().currentUser.uid;
    db.ref("profile").child(id).child("userName").set(e.target.value);
  };

  return (
    <>
      <h1>Это страница профиля</h1>

      <div>
        <input type="checkbox" onClick={handleCheckbox} />
        {isChecked && name}
      </div>

      <div>
        <input value={userName} onChange={handleChangeName} />
        {userName}
      </div>
      <div class="chatContainer">
        <div class="chatListStyle">
          <div className="contact">{ChatList.name}</div>

          {chatList.map((chat) => (
            <div key={chat.chat_id}>
              <p className="chat">
                <span className="chatWith"> chat with</span>
              </p>
              <div className="contact">{chat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ({}) => {};
