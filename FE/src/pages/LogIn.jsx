import React from "react";
import pic from "../assets/bannerAuth.png";

function Login() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    alert(userName, password);
  };
  return (
    <div className="flex flex-row justify-center items-center  ">
      {/* image */}
      <div className="w-1/2 h-1/2 ">
        <img className="w-full h-full" src={pic} alt="logo" />
      </div>
      {/* form */}
      <div className="w-1/2 h-1/2  flex items-center justify-center">
        <form className="flex text-center flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold mb-6 text-center">Sign In </h2>
          {/* Username input */}
          <input
            type="text"
            id="username"
            className="w-full p-3 m-10 border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* Password input */}
          <input
            type="text"
            id="username"
            className="w-full p-3 m-10 border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Forgot Password link */}
          <button type="submit" onClick={handleSubmit}>
            Forgot Password?
          </button>

          {/* Sign In button */}
          <button type="button" onClick={handleSubmit}>
            Sign In
          </button>
          <button
            type="button"
            class="py-2.5 px-20 me-2 mb-2 text-lg font-bold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            log In
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
