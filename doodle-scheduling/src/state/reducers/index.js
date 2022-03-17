import { combineReducers } from "redux";
import { messagesReducer } from "./messagesReducer";

const reducers = combineReducers({
	 allMessages: messagesReducer
})

export default reducers;