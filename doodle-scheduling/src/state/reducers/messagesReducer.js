import { SET_MESSAGES, ADD_MESSAGE } from "../actions/index";

const initState = {
  messages: [],
};

export const messagesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES:
      return { ...state, messages: payload };
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, payload] };
    default:
      return state;
  }
}