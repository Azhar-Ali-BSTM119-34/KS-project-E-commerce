import { useState } from "react";
import Brands from "./Brands";
import Feedback from "./Feedback";
import Returns from "./Returns";
import InventoryManagement from "./InventoryManagement";

function ActivityOverView() {
  const [activeBrands, setActiveBrands] = useState(false);
  const [activeReturns, setActiveReturns] = useState(false);
  const [activeFeedback, setActiveFeedback] = useState(false);
  const [activeInventoryManagement, setInventoryManagement] = useState(false);

  // Determine which component to render based on the active state
  const renderComponent = () => {
    if (activeBrands) {
      return <Brands />;
    } else if (activeReturns) {
      return <Returns />;
    } else if (activeFeedback) {
      return <Feedback />;
    } else if (activeInventoryManagement) {
      return <InventoryManagement />;
    } else {
      return (
        <div className="w-full h-full">
          <div className="w-full h-full text-lg font-bold p-5 bg-gray-50 flex shadow-gray-500 shadow-lg">
            <div className="w-1/2">Activity Overview</div>
            <div className="w-1/2 shadow-gray-500 shadow-lg bg-white rounded-md">
              <div className="p-7 text-xl ">
                Sales
                <div>
                  <p className="text-gray-500 font-normal mt-2">
                    Total Sales :{" "}
                    <span className="font-bold text-black">$</span>
                  </p>
                </div>
              </div>
              <div className="p-7 text-xl">
                Products
                <div>
                  <button
                    className="text-gray-500 font-normal shadow-gray-500 
                  shadow-md border border-gray-300 p-2 mt-2 hover:bg-gray-200"
                    onClick={() => {
                      setInventoryManagement(true);
                    }}
                  >
                    View All
                  </button>
                </div>
              </div>
              <div className="p-7 text-gray-500 font-normal">
                Total Products : 0
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 m-7 flex items-center justify-between">
            <div className="w-1/4 h-2/3 border border-gray-200 bg-white shadow-gray-300 shadow-lg rounded-lg">
              <div className="p-3">
                <p className=" font-bold text-xl">Brands</p>
                <div className="font-sm text-gray-500 ">
                  <button
                    className="shadow-gray-500 shadow-md border p-1 font-semibold border-gray-300 hover:bg-gray-200 mt-3"
                    onClick={() => {
                      setActiveBrands(true);
                      setActiveReturns(false);
                      setActiveFeedback(false);
                    }}
                  >
                    View All
                  </button>
                  <div className="mt-3">Total Brands : 0</div>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-2/3 border border-gray-200 bg-white shadow-gray-300 shadow-lg rounded-lg">
              <div className="p-3">
                <p className=" font-bold text-xl">Returns</p>
                <div className="font-sm text-gray-500 ">
                  <button
                    className="shadow-gray-500 shadow-md border p-1 font-semibold border-gray-300 hover:bg-gray-200 mt-3"
                    onClick={() => {
                      setActiveReturns(true);
                      setActiveBrands(false);
                      setActiveFeedback(false);
                    }}
                  >
                    View All
                  </button>
                  <div className="mt-3">Total Brands : 100</div>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-2/3 border border-gray-200 bg-white shadow-gray-300 shadow-lg rounded-lg">
              <div className="p-3">
                <p className=" font-bold text-xl">Feedback</p>
                <div className="font-sm text-gray-500 ">
                  <button
                    className="shadow-gray-500 shadow-md border p-1 font-semibold border-gray-300 hover:bg-gray-200 mt-3"
                    onClick={() => {
                      setActiveFeedback(true);
                      setActiveBrands(false);
                      setActiveReturns(false);
                    }}
                  >
                    View All
                  </button>
                  <div className="mt-3">Total Brands : 100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <>{renderComponent()}</>;
}

export default ActivityOverView;
