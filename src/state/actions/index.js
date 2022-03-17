export const ADD_MESSAGE = "ADD_MESSAGE";
export const SET_MESSAGES = "SET_MESSAGES";

export const setMessages = (messages) => {
	return (dispatch) => {
		dispatch({
			type: SET_MESSAGES,
			payload: messages
		})
	}
}
export const addMessage = (message) => {
	return (dispatch) => {
		dispatch({
			type: ADD_MESSAGE,
			payload: message
		})
	}
}

