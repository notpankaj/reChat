import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, logOut } from "../../redux/feature/auth/authSlice";
import { useState } from "react";
import { api_searchUserByUsername } from "../../api/user";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const HomePage = () => {
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
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

  return (
    <div>
      <button onClick={() => dispatch(logOut())}>LOGOUT</button>
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
