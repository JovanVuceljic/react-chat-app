import "./App.css";
import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state/index";

function App() {

  const messagesState = useSelector((state) => state.messages);
  const dispach = useDispatch()
  const { sendMessage } = bindActionCreators(actionCreators, dispach);
  const divRef = React.useRef(null);

  const m = {
    "_id": "61b6419a48c220001b5f6c8d",
    "message": "Jovan's first test",
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

  const getFormatedDate = (date) => {
    if (!date) return "";
    date = new Date(date);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
  }

  const handleSendMessage = () => {
    sendMessage(m)
    setTimeout(scrollToBottom, 0);
  }

  useEffect(() => {
    scrollToBottom();
  }, [])

  return (
    <div className="app" ref={divRef}>
      <div className="background"></div>
      <div className="messages" >
        {messagesState.map((obj,i) => (
          <div className={`message ${obj.author === "Slobodan" ? "user-message" : ""}`} key={i}>
            <div className="username">{obj.author}</div>
            <div className="text">
              {obj.message}
            </div>
            <div className="time">{getFormatedDate(obj.timestamp)}</div>
          </div>
        ))}
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
