export const messageListSelector = (state) => state.messages.messageList;
export const currentChatMessageSelector = (state, chatId) =>
  state.messages.messageList[chatId];
