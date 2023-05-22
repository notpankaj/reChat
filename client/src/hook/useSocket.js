import { useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";

const SOCKET_SERVER_URL = "ws://localhost:8001";

const useSocket = () => {
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return { socket: socketRef.current };
};

export default useSocket;
