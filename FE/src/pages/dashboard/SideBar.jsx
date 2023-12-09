import Dashboard from "./dashboard";
import OrderManagement from "./OrderManagement";
import InventoryManagement from "./InventoryManagement";
import Returns from "./Returns";
import Feedback from "./Feedback";
import Brands from "./Brands";
import React from "react";

function SideBar() {
  return (
    <div>
      <div className="flex items-center justify-around h-4/5">
        <div
          className="w-1/5  border border-gray-200 shadow-gray-300 shadow-md 
                        flex flex-col items-center justify-center font-semibold"
        >
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5"
            onClick={() => handleItemClick(<Dashboard />)}
          >
            Dashboard
          </div>
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5"
            onClick={() => handleItemClick(<OrderManagement />)}
          >
            Order Management
          </div>
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5 bg-gray-100"
            onClick={() => handleItemClick(<InventoryManagement />)}
          >
            Inventory Management
          </div>
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5"
            onClick={() => handleItemClick(<Returns />)}
          >
            Returns
          </div>
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5"
            onClick={() => handleItemClick(<Feedback />)}
          >
            Feedback
          </div>
          <div
            className="shadow-gray-300 shadow-md hover:bg-gray-300 w-full h-1/6 p-5"
            onClick={() => handleItemClick(<Brands />)}
          >
            Brands
          </div>
        </div>
        <div className="w-4/6 h-full mt-10 border border-gray-200  bg-white shadow-gray-300 shadow-lg rounded-lg ">
          {activeComponent}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
