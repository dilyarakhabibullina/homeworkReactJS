import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = ({ chatId, author, message }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { chatId, author, message },
});

export const addMessageWithThunk = (payload) => (dispatch, getState) => {
  dispatch(addMessageAction(payload));
  if (payload.message !== "BOT") {
    setTimeout(() => {
      dispatch(
        addMessageAction({
          chatId: payload.chatId,
          author: "BOT",
          message: "i am robot Verter",
        })
      );
    }, 2000);
  }
};
