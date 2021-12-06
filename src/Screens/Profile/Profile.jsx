import { useDispatch, useSelector } from "react-redux";
import { changeUserName, toggleCheckbox } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";
import { addChatAction } from "../../Store/Chats/actions";
import { chatSelector } from "../../Store/Chats/selectors";
import "./Profile.css";
import { ChatList, CHATS } from "../../Components/ChatList/ChatList";
import {
  addMessageAction,
  addMessageWithThunk,
} from "../../Store/Messages/actions";

export const Profile = () => {
  const dispatch = useDispatch();
  const { name1, isChecked } = useSelector((state) => state);
  const { userName } = useSelector(profileSelector);

  const handleCheckbox = () => {
    dispatch(toggleCheckbox());
    dispatch(addChatAction({ id: "1", name: "Mom" }));
    dispatch(addChatAction({ id: "2", name: "Papa" }));
    console.log({ isChecked });
  };

  const { chatList } = useSelector((state) => state.chats);
  console.log(chatList);

  const handleChangeName = (e) => {
    dispatch(changeUserName({ userName: e.target.value }));
    dispatch(
      addMessageWithThunk({
        chatId: "id1",
        message: "some text from Thunk",
        author: "Dilyara",
      })
    );
  };

  return (
    <>
      <h1>Это страница профиля</h1>

      <div>
        <input type="checkbox" onClick={handleCheckbox} />
        {isChecked && name1}
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
