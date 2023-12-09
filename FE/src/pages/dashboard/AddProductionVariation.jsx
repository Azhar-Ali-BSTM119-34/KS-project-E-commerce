import { useState } from "react";
import AddProduct from "./AddProduct";
import InputControl from "../../Components/Userinput";
import Select from "react-select";
import textareaaddproduct from "../../assets/icon4.png";
import outofstock from "../../assets/outofstock.png";
import plusimg from "../../assets/plusimg.jpg";

const roleOptions1 = [
  { value: "1", label: "Category 1" },
  { value: "2", label: "Category 2" },
];

function AddProductionVariation() {
  const [isactive, setModelActive] = useState(false);
  return (
    <>
      {isactive ? (
        <>
          <AddProduct />
        </>
      ) : (
        <>
          <div className="w-full h-500  bg-gray-200">
            <div className="font-bold text-4xl p-5">Add Product Variations</div>
            <div className="h-full w-full flex items-center justify-center ">
              <div className="bg-white h-5/6 w-5/6 shadow-lg shadow-gray-400  flex justify-center items-center rounded-lg">
                <div className=" w-5/6 h-5/6">
                  <div className="font-bold text-2xl pt-5">Branding</div>
                  <div className="flex justify-between w-3/4">
                    <div className="text-md">
                      <Select
                        className="rounded-xl w-64 text-gray-500 focus:outline-none mt-5"
                        isSearchable={true}
                        options={roleOptions1}
                        placeholder="Brands"
                      />
                    </div>
                  </div>

                  <div className="flex justify-start items-center mt-7 w-2/3 text-black">
                    <div className="flex  justify-between w-1/2 font-bold text-2xl">
                      Pricing
                    </div>
                  </div>

                  <div className="flex justify-between w-3/4">
                    <div className="text-lg ">
                      <InputControl
                        placeholder="Price"
                        className="w-full border border-x-0 border-t-0 border-b-gray-300"
                      />
                    </div>
                    <div className="text-lg flex items-center justify-center">
                      <InputControl
                        placeholder="Discount %"
                        className="w-full border border-x-0 border-t-0 border-b-gray-300"
                      />
                      <img
                        src={textareaaddproduct}
                        className="w-5 h-5 mt-5"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-3/4">
                    <div className="text-lg ">
                      <InputControl
                        placeholder="Fee %"
                        className="w-full border border-x-0 border-t-0 border-b-gray-300"
                      />
                    </div>
                    <div className="text-lg flex items-center justify-center">
                      <InputControl
                        placeholder="Duty %"
                        className="w-full border border-x-0 border-t-0 border-b-gray-300"
                      />
                      <div className="w-5 h-5 mt-5"></div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center mt-7 w-2/3 text-black">
                    <div className="flex  justify-between w-1/2 font-bold text-2xl">
                      Pricing
                    </div>
                  </div>

                  <div className="flex justify-between w-3/5 mt-5">
                    <div className="text-sm flex items-center justify-start">
                      <img src={outofstock} className="w-5 h-5" alt="" />
                      <p>Out of Stock</p>
                    </div>
                    <div className="text-sm flex items-center justify-center">
                      <img src={outofstock} className="w-5 h-5" alt="" />
                      <p>Out of Stock</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-3/4">
                    <div className="text-lg ">
                      <InputControl
                        placeholder="Quantity"
                        className="w-full border border-x-0 border-t-0 border-b-gray-300"
                      />
                    </div>
                    <div className="text-lg flex items-center justify-center">
                      <InputControl
                        placeholder="Stock Alert Threshold"
                        className="w-full border border-x-0 border-t-0 border-b-gray-300"
                      />
                      <div className="w-5 h-5 mt-5"></div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center mt-7 w-2/3 text-black">
                    <div className="flex  justify-between w-1/2 font-bold text-2xl">
                      Category
                    </div>
                  </div>

                  <div className="flex justify-between w-3/5 mt-5">
                    <div className="text-sm flex items-center justify-start pb-5">
                      <div className="text-md">
                        <Select
                          className="rounded-xl w-44 text-gray-500 focus:outline-none mt-5"
                          isSearchable={true}
                          options={roleOptions1}
                          placeholder="Category"
                        />
                      </div>
                      <img src={plusimg} className="w-8 h-8 mt-5" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-end w-4/5 ">
              <button
                className="shadow-gray-500 shadow-sm border w-1/5 p-2 text-lg
            rounded-xl font-semibold text-white bg-black flex items-center justify-center"
                onClick={() => {
                  setModelActive(true);
                }}
              >
                Add
                <img src={plusimg} className="w-8 h-8 p-1" alt="" />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AddProductionVariation;
