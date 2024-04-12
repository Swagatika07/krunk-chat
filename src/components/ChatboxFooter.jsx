import React from "react";
import PaperClip from "../images/PaperClip.svg";
import Logo from "../images/Logo.svg";
const ChatboxFooter = () => {
  return (
    <div className="footer">
      <div className="msg-box-wrapper">
        <div className="msg-box">
          <span>Type your message</span>
          <img src={PaperClip} />
        </div>
        <div className="msg-send-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              fill="#FFFFFF"
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </div>
      </div>
      <div className="copyright">
        <span className="span1">Powered by</span>{" "}
        <span className="company-name">Krunk.ai</span> <img src={Logo} />
      </div>
    </div>
  );
};

export default ChatboxFooter;
