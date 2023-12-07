import { Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/LogIn";
import ForgetPassword from "./pages/ForgetPass";

import SignUp from "./pages/SignOut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/fp" element={<ForgetPassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
