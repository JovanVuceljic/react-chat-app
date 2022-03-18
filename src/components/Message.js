const Message = ({ message, author }) => {

	const getFormatedDate = (timestamp) => {
		if (!timestamp) return "";
		const date = new Date(timestamp);
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
	}

	return (<div className={`message ${message.author === author ? "user-message" : ""}`} >
		<div className="username">{message.author}</div>
		<div className="text">
			{message.message}
		</div>
		<div className="time">{getFormatedDate(parseInt(message.timestamp))}</div>
	</div>)
}

export default Message