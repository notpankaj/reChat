import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { authSelector } from "../../redux/feature/auth/authSlice";

const ChatPage = () => {
  const { otherUserID } = useParams();

  const [text, setText] = useState("");
  const auth = useSelector(authSelector);

  const handleSend = () => {
    console.log({
      text,
      userId: auth.id,
      otherUserID,
    });
  };
  return (
    <div>
      <h5>chat Screen</h5>
      <p> otherUserID: {otherUserID}</p>

      <input
        placeholder="message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend}> Send</button>
    </div>
  );
};

export default ChatPage;
