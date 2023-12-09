import { useState } from "react";
import InputControl from "../../Components/Userinput";
import Select from "react-select";
import AddProduct from "./AddProduct";

const roleOptions1 = [
  { value: "1", label: "Category 1" },
  { value: "2", label: "Category 2" },
];
const roleOptions2 = [
  { value: "1", label: "Status 1" },
  { value: "2", label: "Status 2" },
];
const roleOptions3 = [
  { value: "1", label: "Availability 1" },
  { value: "2", label: "Availability 2" },
];

function InventoryManagement() {
  const [isactive, setModelActive] = useState(false);

  return (
    <>
      {isactive ? (
        <>
          <AddProduct />
        </>
      ) : (
        <>
          <div className="w-5/6 h-full rounded-md mt-5 ml-10 ">
            <div className="flex justify-between items-center">
              <div className="font-bold text-4xl">Inventory Management</div>
              <div className="">
                <button
                  className="shadow-gray-500 shadow-sm border p-1 font-semibold border-gray-300 hover:bg-gray-200 first-letter"
                  onClick={() => {
                    setModelActive(true);
                  }}
                >
                  Add Product
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center w-3/5 mt-3">
              <div className="text-lg">
                <InputControl
                  placeholder="Product Name"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="">
                <InputControl
                  placeholder="SKU Code"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
            </div>
            <div className="flex justify-between items-center w-6/8 mt-5">
              <div className="text-md">
                <Select
                  className="rounded-xl w-44 text-gray-500 focus:outline-none"
                  isSearchable={true}
                  options={roleOptions1}
                  placeholder="Category"
                />
              </div>
              <div className="">
                <div className="text-md">
                  <Select
                    className="rounded-xl w-44 text-gray-500 focus:outline-none"
                    isSearchable={true}
                    options={roleOptions2}
                    placeholder="Status"
                  />
                </div>
              </div>
              <div className="">
                <div className="text-md">
                  <Select
                    className="rounded-xl w-44 text-gray-500 focus:outline-none"
                    isSearchable={true}
                    options={roleOptions3}
                    placeholder="Availability"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-3/5 mt-3">
              <div className="text-lg">
                <InputControl
                  placeholder="Starting Price"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="">
                <InputControl
                  placeholder="Ending Price"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
            </div>
            <div className="flex justify-between items-center w-3/5 mt-3">
              <div className="text-lg">
                <InputControl
                  placeholder="Starting Quality"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="">
                <InputControl
                  placeholder="Ending Quality"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
            </div>
            <div className="mt-5 flex items-center justify-around w-full">
              <button className="shadow-gray-500 shadow-sm border p-3 w-1/3 rounded-xl font-semibold border-gray-300 hover:bg-gray-200">
                Search
              </button>
              <button className="shadow-gray-500 shadow-sm border p-3 w-1/3 rounded-xl font-semibold border-gray-300 hover:bg-gray-200">
                Reset
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default InventoryManagement;
