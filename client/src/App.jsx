import "./App.css";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import HomePage from "./pages/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocalUser,
  setAuth,
  tokenSelector,
} from "./redux/feature/auth/authSlice";

function App() {
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [token]);
  React.useEffect(() => {
    const user = getLocalUser();
    console.log(user);
    if (user) {
      dispatch(setAuth(user));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="chat/:otherUserID" element={<ChatPage />} />
      <Route path="profile/:id" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
