import "./App.css";
import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state/index";
import Message from "./components/Message"

const App = () => {

  const messagesState = useSelector((state) => state.messages);
  const dispach = useDispatch()
  const { sendMessage } = bindActionCreators(actionCreators, dispach);

  const divRef = React.useRef(null);
  const userId = "61b6419a48c220001b5f6c8d";

  const m = {
    "_id": userId,
    "message": "Jovan's message",
    "author": "Jovan",
    "timestamp": Date.now(),
    "token": "NqebNLtXsswN"
  }

  const scrollToBottom = () => {
    divRef.current.scrollIntoView({
      behavior: 'smooth',
      block: "end"
    })
  }

  const handleSendMessage = () => {
    sendMessage(m)
  }

  useEffect(() => {
    scrollToBottom();
  }, [messagesState])

  return (
    <div className="app" ref={divRef}>
      <div className="background"></div>
      <div className="messages" >
        {messagesState.map((message, i) => <Message key={i} message={message} userId={userId} />)}
      </div>
      <div className="footer">
        <div className="footer-wrap">
          <div className="input-wrap">
            <input className="input" type="text" placeholder="Message" />
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
