import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";

const Chat = ({ author, token, limit, since }) => {

	const apiUrl = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/";

	const [messages, setMessages] = useState([]);
	const [messageText, setMessageText] = useState("");
	const chatWrapRef = useRef(null);

	const scrollToBottom = () => {
		chatWrapRef.current.scrollIntoView({
			behavior: 'smooth',
			block: "end"
		})
	}

	const handleSendMessage = async (e) => {
		e.preventDefault()
		const messageToSend = {
			"message": messageText,
			"author": author
		}
		try {
			const headers = { headers: { 'token': token, 'Content-Type': 'application/json' } };
			const response = await axios.post(apiUrl, messageToSend, headers);
			setMessageText("")
			setMessages([...messages, response.data]);
			setTimeout(scrollToBottom, 0);
		}
		catch (err) {
			console.log("Error: " + err.message);
		}
	}

	const fetchMessages = async () => {
		const getReq = `${apiUrl}?since=${since}&limit=${limit}&token=${token}`;
		try {
			const response = await axios.get(getReq)
			setMessages(response.data);
			scrollToBottom();
		}
		catch (err) {
			console.log("Err: ", err);
		}
	}

	useEffect(() => {
		fetchMessages();
		const checkMessagesId = setInterval(() => {
			fetchMessages();
		}, 3000);
		return () => clearInterval(checkMessagesId);
	});

	return (
		<div className="chat" ref={chatWrapRef}>
			<div className="messages" >
				{messages.length !== 0 && messages.map((message, i) => <Message key={i} message={message} author={author} />)}
			</div>
			<div className="footer">
				<form className="footer-wrap" onSubmit={handleSendMessage}>
					<div className="input-wrap">
						<input className="input" type="text" placeholder="Message" value={messageText} onChange={(e) => setMessageText(e.target.value)} />
					</div>
					<div className="btn-wrap">
						<button className="btn">Send</button>
					</div>
				</form>
			</div>
		</div>
	)


}

export default Chat;