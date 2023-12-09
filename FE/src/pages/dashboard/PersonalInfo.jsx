import InputControl from "../../Components/Userinput";
import Select from "react-select";

const roleOptions1 = [
  { value: "1", label: "Category 1" },
  { value: "2", label: "Category 2" },
];
function PersonalInfo() {
  return (
    <div className="w-full h-full  bg-gray-200">
      <div className="h-full w-full flex items-center justify-center ">
        <div className="bg-white h-3/4 w-5/6 shadow-lg shadow-gray-400  flex justify-center items-center rounded-lg">
          <div className=" w-5/6 h-5/6">
            <div className="font-bold text-2xl pt-5">Personal Information</div>
            <div className="flex justify-between w-5/6">
              <div className="text-sm">
                <InputControl
                  placeholder="First Name"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="text-sm ">
                <InputControl
                  placeholder="Last Name"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="text-sm ">
                <InputControl
                  placeholder=""
                  className="w-full p-2 border-x-y-0"
                />
              </div>
            </div>
            <div className="flex justify-between w-5/6">
              <div className="text-sm ">
                <InputControl
                  placeholder="Address Line 1"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="text-sm ">
                <InputControl
                  placeholder="Address Line 2"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="text-sm ">
                <Select
                  className="rounded-xl w-44 text-gray-500 focus:outline-none mt-5 "
                  isSearchable={true}
                  options={roleOptions1}
                  placeholder="City"
                />
              </div>
            </div>
            <div className="flex justify-between w-5/6">
              <Select
                className="rounded-xl w-48 text-gray-500 focus:outline-none mt-5"
                isSearchable={true}
                options={roleOptions1}
                placeholder="State/Province"
              />
              <div className="text-sm ">
                <Select
                  className="rounded-xl w-48 text-gray-500 focus:outline-none mt-5"
                  isSearchable={true}
                  options={roleOptions1}
                  placeholder="Country"
                />
              </div>
              <div className="text-sm ">
                <InputControl
                  placeholder=""
                  className="w-full p-2 border-x-y-0 "
                />
              </div>
            </div>
            <div className="flex justify-between w-5/6">
              <Select
                className="rounded-xl w-48 text-gray-500 focus:outline-none mt-5"
                isSearchable={true}
                options={roleOptions1}
                placeholder="Mobile"
              />
              <div className="text-sm ">
                <InputControl
                  placeholder="Address Line 2"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="text-sm ">
                <Select
                  className="rounded-xl w-48 text-gray-500 focus:outline-none mt-5"
                  isSearchable={true}
                  options={roleOptions1}
                  placeholder="Gender"
                />
              </div>
            </div>
            <div className="h-1/5 w-full flex items-end justify-end mt-5">
              <button
                className="shadow-gray-500 shadow-sm border p-3  w-1/3
                rounded-xl font-semibold text-white bg-black ml-7"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center bg-gray-200">
        <div className="bg-white h-3/4 w-5/6 shadow-lg shadow-gray-400  flex justify-center items-center rounded-lg">
          <div className=" w-5/6 h-5/6">
            <div className="font-bold text-2xl pt-5">Gerage Information</div>
            <div className="flex justify-between w-full">
              <div className="text-sm">
                <InputControl
                  placeholder="First Name"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
            </div>
            <div className="flex justify-between w-5/6">
              <div className="text-sm ">
                <InputControl
                  placeholder="Address Line 1"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="text-sm ">
                <InputControl
                  placeholder="Address Line 2"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="text-sm ">
                <Select
                  className="rounded-xl w-44 text-gray-500 focus:outline-none mt-5 "
                  isSearchable={true}
                  options={roleOptions1}
                  placeholder="City"
                />
              </div>
            </div>
            <div className="flex justify-between w-5/6">
              <Select
                className="rounded-xl w-44 text-gray-500 focus:outline-none mt-5"
                isSearchable={true}
                options={roleOptions1}
                placeholder="State/Province"
              />
              <div className="text-sm ">
                <Select
                  className="rounded-xl w-44 text-gray-500 focus:outline-none mt-5"
                  isSearchable={true}
                  options={roleOptions1}
                  placeholder="Country"
                />
              </div>
              <div className="text-sm ">
                <InputControl
                  placeholder="Pin Location"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300 "
                />
              </div>
            </div>
            <div className="flex justify-between w-5/6">
              <Select
                className="rounded-xl w-44 text-gray-500 focus:outline-none mt-5"
                isSearchable={true}
                options={roleOptions1}
                placeholder="Mobile"
              />
              <div className="text-sm ">
                <Select
                  className="rounded-xl w-44 text-gray-500 focus:outline-none mt-5"
                  isSearchable={true}
                  options={roleOptions1}
                  placeholder="Mobile 2"
                />
              </div>
              <div className="text-sm ">
                <InputControl
                  placeholder=""
                  className="w-full p-2 border-x-y-0 "
                />
              </div>
            </div>
            <div className="h-1/5 w-full flex items-end justify-end mt-5">
              <button
                className="shadow-gray-500 shadow-sm border p-3  w-1/3
                rounded-xl font-semibold text-white bg-black ml-7"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex items-center justify-center bg-gray-200">
        <div className="bg-white h-3/4 w-5/6 shadow-lg shadow-gray-400  flex justify-center items-center rounded-lg">
          <div className=" w-5/6 h-5/6">
            <div className="font-bold text-2xl pt-5">Reset Password</div>
            <div className="flex justify-between w-full">
              <div className="text-sm">
                <InputControl
                  placeholder="Old Password"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="text-sm">
                <InputControl
                  placeholder="New Password"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
              <div className="text-sm">
                <InputControl
                  placeholder="Confirm Password"
                  className="w-full p-2 border border-x-0 border-t-0 border-b-gray-300"
                />
              </div>
            </div>
            <div className="h-1/5 w-full flex items-end justify-end mt-5">
              <button
                className="shadow-gray-500 shadow-sm border p-3  w-1/3
                rounded-xl font-semibold text-white bg-black ml-7"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
