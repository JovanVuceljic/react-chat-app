import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Message from "./components/Message"
import { setMessages, addMessage } from "./state/actions";

const App = () => {

  const token = "NqebNLtXsswN";
  const author = "Jovan";
  const apiUrl = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/";
  const limit = 20;
  const since = Date.now() - (86400000 * 5); // 5 days before

  const dispatch = useDispatch();
  const messages = useSelector((state) => state.allMessages.messages || []);

  const divRef = React.useRef(null);
  const [messageText, setMessageText] = useState("");

  const scrollToBottom = () => {
    divRef.current.scrollIntoView({
      behavior: 'smooth',
      block: "end"
    })
  }

  const handleSendMessage = async () => {
    const messageToSend = {
      "message": messageText,
      "author": author
    }
    try {
      const headers = { headers: { 'token': 'NqebNLtXsswN', 'Content-Type': 'application/json' } };
      const response = await axios.post(apiUrl, messageToSend, headers);
      dispatch(addMessage(response.data));
      setTimeout(scrollToBottom, 0);
    }
    catch (err) {
      console.log("Error: " + err.message);
    }
  }

  const getReq = `${apiUrl}?since=${since}&limit=${limit}&token=${token}`;

  const fetchMessages = async () => {
    try {
      const response = await axios
        .get(getReq)
      dispatch(setMessages(response.data));
      scrollToBottom();
    }
    catch (err) {
      console.log("Err: ", err);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, [])


  return (
    <div className="app" ref={divRef}>
      <div className="background"></div>
      <div className="messages" >
        {messages.length !== 0 && messages.map((message, i) => <Message key={i} message={message} author={author} />)}
      </div>
      <div className="footer">
        <div className="footer-wrap">
          <div className="input-wrap">
            <input className="input" type="text" placeholder="Message" onChange={(e) => setMessageText(e.target.value)} />
          </div>
          <div className="btn-wrap">
            <button className="btn" onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
