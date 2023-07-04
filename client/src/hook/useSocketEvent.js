import { useEffect } from "react";

function useSocketEvent(socket, event, callback) {
  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on(event, callback);

    return () => {
      socket.off(event, callback);
    };
  }, [callback, event, socket]);

  return socket;
}

export default useSocketEvent;
