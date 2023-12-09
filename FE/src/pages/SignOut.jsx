import React from "react";
import { auth } from "../config/Firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import pic from "../assets/bannerAuth.png";

function SignUp() {
  const [firstName, setFirstName] = React.useState("");
  const [secondName, setSecondName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [pass1, setPass1] = React.useState("");
  const [pass2, setPass2] = React.useState("");

  const Navigate = useNavigate(); // Get history object

  const handleSignUp = async () => {
    if (pass1 !== pass2) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass1
      );
      const user = userCredential.user;
      console.log("User created:", user);
      // Additional actions or redirection after successful signup
      // Redirect to login page after successful sign-up
      Navigate("/Home");
    } catch (error) {
      console.error("Error creating user:", error.message);
      // Handle the error, show a message, etc.
    }
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
          <h2 className="text-3xl font-semibold mb-6 text-center">Sign Up </h2>
          {/* Firstname input */}
          <input
            type="text"
            id="firstName"
            className="w-full p-3  border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* Second Name input */}
          <input
            type="text"
            id="secondName"
            className="w-full p-3  border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="Second Name"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
          {/* Password input */}
          <input
            type="password"
            id="Password"
            className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="Password"
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
          />
          {/* Email input */}
          <input
            type="email"
            id="email"
            className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Confirm Password input */}
          <input
            type="password"
            id="Confirm Password"
            className="w-full p-3  border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="Confirm Password"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
          {/* Number input */}
          {/* Number input */}
          <input
            type="number"
            id="number"
            className="w-full p-3 mb-9 border-b border-gray-400 focus:outline-none focus:border-gray-600"
            placeholder="Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          {/* Sign Up button */}
          <button
            type="button"
            onClick={handleSignUp}
            className="py-2.5 px-20 me-2 mb-2 text-lg font-bold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
