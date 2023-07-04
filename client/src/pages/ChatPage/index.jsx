import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { authSelector } from "../../redux/feature/auth/authSlice";
import useSocket from "../../hook/useSocket";
import useSocketEvent from "../../hook/useSocketEvent";
const ChatPage = () => {
  const { otherUserID } = useParams();
  const [text, setText] = useState("");
  const auth = useSelector(authSelector);
  const [messageList, setMessageList] = useState([]);

  // SOCKET
  const socket = useSocket();
  useSocketEvent(socket, "chat message", (message) => {
    setMessageList([...messageList, message]);
  });
  useSocketEvent(socket, "set-room", (data) => {
    console.log(data);
  });

  // METHODS
  const handleSend = () => {
    console.log("socket", socket);
    console.log({
      text,
      userId: auth.id,
      otherUserID,
    });
    socket.emit("chat message", text);
  };

  React.useEffect(() => {
    console.log(socket, "xx");
    socket?.emit("set-room", {
      userId: auth.id,
      otherUserID,
    });
  }, [socket]);

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

      <div>
        {messageList.map((i, idx) => (
          <div key={idx}>
            <span>{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatPage;
