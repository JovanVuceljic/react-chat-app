const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessage = (message) => {
	return (dispach) => {
		dispach({
			type: SEND_MESSAGE,
			payload: message
		})
	}
}