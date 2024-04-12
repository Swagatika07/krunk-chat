import React from "react";
import ChatboxUpper from "./ChatboxUpper";
import ChatboxMiddle from "./ChatboxMiddle";
import ChatboxFooter from "./ChatboxFooter";
const Chatbox = () => {
  return (
    <div className="box">
      <ChatboxUpper />
      <ChatboxMiddle />
      <ChatboxFooter />
    </div>
  );
};

export default Chatbox;
