const setRoom = async (data, socket) => {
  try {
    // socket.emit("set-room", data);
    // const
  } catch (error) {
    console.log(error);
    socket.emit("set-room", error);
  }
};

exports.setRoom = setRoom;
