import React, { useState } from "react";
import { api_login } from "../../../api/auth";
import { useDispatch } from "react-redux";
import { setAuth, tokenSelector } from "../../../redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleSubmit() {
    if (!password) return;
    if (!username) return;
    const payload = {
      username,
      password,
      deviceToken: "",
    };
    try {
      const res = await api_login(payload);
      console.log(res);
      dispatch(setAuth(res.data));
      navigate("/");
      alert(res?.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    try {
      const localUser = localStorage.getItem("AUTH");
      if (localUser) dispatch(setAuth(JSON.parse(localUser)));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <input
        required
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        required
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>{loading ? "Loading..." : "Login"}</button>
    </div>
  );
};

export default LoginPage;
