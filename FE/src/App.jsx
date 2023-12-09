import { Route, Routes } from "react-router-dom";
import Login from "./pages/LogIn";
import ForgetPassword from "./pages/ForgetPass";
import Home from "./pages/Home";
import SignUp from "./pages/SignOut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/fp" element={<ForgetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
