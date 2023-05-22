import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { authSelector } from "../../redux/feature/auth/authSlice";
import { useRef } from "react";
import socketIOClient from "socket.io-client";
const SOCKET_SERVER_URL = "http://localhost:8001";
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

  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);
    console.log({ socketRef });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

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
