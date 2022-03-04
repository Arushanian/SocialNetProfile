import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Header from "./components/Header/Header";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Identity from "./pages/Identity/Identity";

// const Login = lazy(() => import("./pages/Login/Login"));
// const Register = lazy(() => import("./pages/Register/Register"));
// const Home = lazy(() => import("./pages/Home/Home"));
// const Profile = lazy(() => import("./pages/Profile/Profile"));

function App() {
  const { loggedIn } = useSelector((state) => state.authentication);

  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {loggedIn && (
          <Box sx={{ flexGrow: 1 }}>
            <Header />
          </Box>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registration" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/identity" element={<Identity />} />
          </Routes>
        </Suspense>
      </SnackbarProvider>
    </>
  );
}

export default App;
