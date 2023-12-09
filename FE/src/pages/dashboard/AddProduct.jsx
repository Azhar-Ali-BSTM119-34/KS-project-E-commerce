import { useState } from "react";
import InputControl from "../../Components/Userinput";
import Select from "react-select";
import icon4 from "../../assets/icon4.png";
import AddProductionVariation from "./AddProductionVariation";

const roleOptions1 = [
  { value: "1", label: "Category 1" },
  { value: "2", label: "Category 2" },
];
function AddProduct() {
  const [isVariationActive, setVariationActive] = useState(false);
  return (
    <>
      {isVariationActive ? (
        <>
          <AddProductionVariation />
        </>
      ) : (
        <>
          <div className="w-full h-500  bg-gray-200">
            <div className="font-bold text-4xl p-5">Add Products</div>
            <div className="h-full w-full flex items-center justify-center ">
              <div className="bg-white h-5/6 w-5/6 shadow-lg shadow-gray-400  flex justify-center items-center rounded-lg">
                <div className=" w-5/6 h-5/6">
                  <div className="font-bold text-2xl pt-5">General</div>
                  <div className="flex justify-between w-3/4">
                    <div className="text-lg ">
                      <InputControl
                        placeholder="Name"
                        className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                      />
                    </div>
                    <div className="text-md">
                      <Select
                        className="rounded-xl w-64 text-gray-500 focus:outline-none mt-5"
                        isSearchable={true}
                        options={roleOptions1}
                        placeholder="Prod Country Origin"
                      />
                    </div>
                  </div>
                  <div className="text-lg w-1/4  ">
                    <InputControl
                      placeholder="SKU"
                      className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                    />
                  </div>
                  <div className="flex justify-start items-center mt-7 mb-7 w-2/3 text-gray-500">
                    <div className="flex  justify-between w-1/2 ">
                      Refunable
                      <img src={icon4} className="w-6" alt="" />
                    </div>
                    <div className="flex justify-between w-1/2 ml-5 ">
                      Locally Made Products
                      <img src={icon4} className="w-6" alt="" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-gray-500 text-sm mb-2 ">
                      Description
                    </label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      className="w-full h-32 px-3 py-2 border border-gray-500 rounded-md text-gray-700"
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-500 text-sm mb-2 ">
                      Additional Information
                    </label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      className="w-full h-32 px-3 py-2 border border-gray-500 rounded-md text-gray-700"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-end w-full">
              <button
                className="shadow-gray-500 shadow-sm border p-3 w-1/5 
              rounded-xl font-semibold text-white bg-black"
                onClick={() => {
                  setVariationActive(true);
                }}
              >
                Add Variation
              </button>
              <button
                className="shadow-gray-500 shadow-sm border p-3 w-1/5 
                rounded-xl font-semibold text-white bg-black ml-7"
              >
                Submit
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AddProduct;
