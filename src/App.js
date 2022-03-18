import "./App.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import Message from "./components/Message"

const App = () => {

  const tokens = ["u4wbEFmRn3Et", "S3U3w8D2TgSM", "Ih65fg5moM4D", "SeHbURlODegY", "T15dbJhHcbCv", "vkwFJpkHTLB1"];
  const apiUrl = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/";
  const limit = 30;
  const since = Date.now() - (86400000 * 10); // 10 days before

  const divRef = React.useRef(null);
  const [messages, setMessages] = useState("");
  const [messageText, setMessageText] = useState("");
  const [token, setToken] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isLogged, setLogged] = useState(false);

  const scrollToBottom = () => {
    divRef.current.scrollIntoView({
      behavior: 'smooth',
      block: "end"
    })
  }

  const handleLogin = async () => {
    if(author && tokens.includes(token)){
      setLogged(true);
      fetchMessages();
    }
  }

  const handleSendMessage = async () => {
    const messageToSend = {
      "message": messageText,
      "author": author
    }
    try {
      const headers = { headers: { 'token': token, 'Content-Type': 'application/json' } };
      const response = await axios.post(apiUrl, messageToSend, headers);
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
      const response = await axios
        .get(getReq)
      setMessages(response.data);
      scrollToBottom();
    }
    catch (err) {
      console.log("Err: ", err);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      fetchMessages();
    }, 3000);
    return () => clearInterval(timer);
  });

  return (
    <div className="app" ref={divRef}>
      <div className="background"></div>
      {isLogged ? (
        <div className="chat">
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
      ) : (
        <div className="login" >
          <div className="select-wrap">
            <select className="input" onChange={(e) => setToken(e.target.options[e.target.options.selectedIndex].value)}>
              <option>Select room..</option>
              {tokens.map((t, i) => <option value={t} key={i}>{t}</option>)}
            </select>
          </div>
          <div className="input-wrap">
            <input type="name" className="input" placeholder="Enter your name" onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className="btn-wrap">
            <button className="btn btn-login" onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
