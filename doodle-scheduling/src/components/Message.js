const Message = ({ message, userId }) => {

	const getFormatedDate = (date) => {
		if (!date) return "";
		date = new Date(date);
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
	}

	return (<div className={`message ${message._id === userId ? "user-message" : ""}`} >
		<div className="username">{message.author}</div>
		<div className="text">
			{message.message}
		</div>
		<div className="time">{getFormatedDate(message.timestamp)}</div>
	</div>)
}

export default Message