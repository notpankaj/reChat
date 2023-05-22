import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/feature/auth/authSlice";
import { useState } from "react";
import { api_searchUserByUsername } from "../../api/user";
import { useNavigate } from "react-router-dom";
import useSocket from "../../hook/useSocket";
import { useRef } from "react";
import socketIOClient from "socket.io-client";
const SOCKET_SERVER_URL = "http://localhost:8001";
const HomePage = () => {
  const auth = useSelector(authSelector);
  const [searchText, setSearchText] = useState("");
  const [userList, setUserList] = useState([]);
  const [searchTextLoading, setSearchTextLoading] = useState(false);
  const navigate = useNavigate();
  const handleSearch = async () => {
    try {
      setSearchTextLoading(true);
      const res = await api_searchUserByUsername(searchText);
      console.log(res);
      setUserList(res.items);
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setSearchTextLoading(false);
    }
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
      <h2>USERNAME: {auth?.username}</h2>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>
          {searchTextLoading ? "Searching.." : "Search"}
        </button>
      </div>
      {userList.length ? (
        userList?.map((u) => {
          return (
            <h6 onClick={() => navigate(`/profile/${u._id}`)} key={u._id}>
              {u.username}
            </h6>
          );
        })
      ) : (
        <span>no user</span>
      )}
    </div>
  );
};

export default HomePage;
