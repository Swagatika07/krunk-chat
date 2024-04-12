import React from "react";
import Chatbot from "../images/Chatbot.png";
import YellowTick from "../images/YellowTick.png";
import Online from "../images/Online.png";
const ChatboxUpper = () => {
  return (
    <div className="upper-container">
      <div className="upper-left">
        <div className="chatbot-img">
          <img src={Chatbot} />
          <img src={Online} className="online"/>
        </div>
        

        <div className="user">
          <div className="user-name">
            <p>Timpu</p>
            <span>
              <img src={YellowTick} />
            </span>
          </div>
          <div className="user-desc">Chat Assistant</div>
        </div>
      </div>
      <div className="upper-right"><img src={Online} alt="green-circle"/><span>Online</span></div>
    </div>
  );
};

export default ChatboxUpper;
