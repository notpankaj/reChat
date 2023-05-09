import "./App.css";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux";
import { Provider, useDispatch } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { setAuth } from "./redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
