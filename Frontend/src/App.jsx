import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer } from 'react-toastify';
import Home from "./pages/Home";
import NavbarComp from "./components/Navbar";


function App() {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
