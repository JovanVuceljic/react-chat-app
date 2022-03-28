import "./App.css";
import React, { useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";

const App = () => {

  const [token, setToken] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isLogged, setLogged] = useState(false);

  const limit = 30;
  const since = Date.now() - (86400000 * 30); // 30 days before

  const handleLoginData = (room, username) => {
    setLogged(true);
    setToken(room);
    setAuthor(username);
  }
  return (
    <div className="app" >
      <div className="background"></div>
      {isLogged ?
        (<Chat 
          author={author} 
          token={token} 
          limit={limit} 
          since={since}
        />)
        :
        (<Login handleLoginData={handleLoginData} />)}
    </div>
  );
}


export default App;
