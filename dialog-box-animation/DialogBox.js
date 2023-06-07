import React, { useState } from "react";
import Message from "./Message";
import { messages } from "../../datalist";

const DialogBox = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const handleClick = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    }
    // Cycles back to the beginning of the array (current behavior is for the list to end at the last item in the array)
    //  else {
    //  setCurrentMessage(0);
    //  }
  };

  return (
    <div className="dialogWindow" onClick={handleClick}>
      <Message message={messages[currentMessage]} key={currentMessage} />
      <button className="nextButton">▼</button>
    </div>
  );    
};

export default DialogBox;