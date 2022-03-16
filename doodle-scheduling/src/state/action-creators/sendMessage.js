export const sendMessage = (message) => {
	return (dispach) => {
		dispach({
			type: "message",
			payload: message
		})
	}
}