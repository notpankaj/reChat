import { useEffect, useState } from "react";
import io from "socket.io-client";
import { SOCKET_SERVER_URL } from "../api/index";

const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);
    // Clean up socket on unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  return socket;
};

export default useSocket;
