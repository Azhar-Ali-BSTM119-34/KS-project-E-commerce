import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { auth } from "../config/Firebase-config"; // Import your Firebase configuration

import Logo from "../assets/logoimage.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import PersonalInfo from "../pages/dashboard/PersonalInfo";

function Header() {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Redirect to the login page after logout
      navigate("/");
      // You can also perform other actions after logout if needed
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <>
      <div className="w-full h-16 bg-white shadow-lg flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="w-1/5 h-full ml-5">
          <img className="h-full" src={Logo} alt="Logo" />
        </div>

        {/* Center Section: Seller Name */}
        <div className="text-3xl font-bold w-2/4 text-center">
          <h1 className="capitalize">Seller Name</h1>
        </div>

        {/* Right Section: Icons */}
        <div className="w-1/5 h-full flex justify-end items-center mr-5">
          {/* User Icon */}
          <p className="w-1/5 h-full mr-3 flex items-center">
            <img
              className="h-3/5 cursor-pointer"
              src={icon1}
              alt=""
              onClick={() => {
                handleItemClick(<PersonalInfo />);
              }}
            />
          </p>

          {/* Notification Icon with Dropdown */}
          <p className="relative w-1/5 h-full flex items-center">
            <img
              className="h-3/5 cursor-pointer"
              src={icon2}
              alt=""
              onClick={handleNotificationClick}
            />

            {showNotification && (
              <div className="absolute top-full right-0 bg-white p-2 shadow-md">
                <p>No notifications</p>
              </div>
            )}
          </p>

          {/* Logout Icon */}
          <p className="w-1/5 h-full flex items-center">
            <img
              className="h-3/5 cursor-pointer"
              src={icon3}
              alt=""
              onClick={handleLogout}
            />
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
