import React, { useState } from "react";

const CheckBox = () => {
  const [getData, setGetData] = useState({
    isChecked: false,
    selected: "",
  });

  const handelData = (e) => {
    const { checked, value, name } = e.target;

    setGetData((prev) => {
      return {
        ...prev,
        [name]: e.target.type === "checkbox" ? checked : value,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(getData);
  };

  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-4 w-fit"
        onSubmit={(e) => handelSubmit(e)}
      >
        <div className="">
          <input
            type="checkbox"
            onChange={(e) => {
              handelData(e);
            }}
            name="isChecked"
            value={getData.isChecked}
          />

          <select
            name="selected"
            id=""
            onChange={(e) => {
              handelData(e);
            }}
            value={getData.selected}
          >
            <option value="" disabled>
              --Select Your Birthday--
            </option>
            <option>2003</option>
            <option>2004</option>
            <option>2005</option>
          </select>
        </div>
        <button className="px-5 py-2 rounded cursor-pointer bg-blue-600 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckBox;
