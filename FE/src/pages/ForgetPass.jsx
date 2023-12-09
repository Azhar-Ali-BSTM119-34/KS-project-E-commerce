import React from "react";
import pic from "../assets/bannerAuth.png";

function ForgetPassword() {
  const [pass1, setPass1] = React.useState("");
  const [pass2, setPass2] = React.useState("");

  const handleSubmit = () => {
    alert(pass1, pass2);
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
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Forgot Password{" "}
          </h2>
          {/* Username input */}
          <input
            type="password"
            id="Password"
            className="w-full p-3 m-10 border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="Password"
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
          />
          {/* Password input */}
          <input
            type="password"
            id="Confirm Password"
            className="w-full p-3 m-10 border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="Confirm Password"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />

          {/* Forgot Password link
          <button type="submit" onClick={handleSubmit}>
            Forgot Password?
          </button>

           Sign In button 
          <button type="button" onClick={handleSubmit}>
            Sign In
          </button> */}
          <button
            type="button"
            className="py-2.5 px-20 me-2 my-4 mb-2 text-lg font-bold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
