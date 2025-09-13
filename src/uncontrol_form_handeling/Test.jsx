import React, { useEffect, useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    selected: "",
    isChecked: false,
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const rowObj = Object.fromEntries(data);
    const modifyObj = {
      ...rowObj,
      isChecked: rowObj.isChecked === "on",
    };
    setFormData(modifyObj);
    e.currentTarget.reset();
  };

  useEffect(()=>{
    if(formData.firstName !== ''){
      console.log(formData);
    }
  },[formData])
  return (
    <>
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-center">
          Multiple Input Handel
        </h1>
        <form action="" onSubmit={handelSubmit}>
          <div className="flex flex-col mb-5">
            <label htmlFor="fn">First Name</label>
            <input
              type="text"
              name="firstName"
              id="fn"
              className="border-2 border-blue-600 outline-0 px-2 py-1 rounded"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="ln">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="ln"
              className="border-2 border-blue-600 outline-0 px-2 py-1 rounded"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="border-2 border-blue-600 outline-0 px-2 py-1 rounded"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 border-blue-600 outline-0 px-2 py-1 rounded"
              placeholder="Enter Your Password"
            />
          </div>

          <div className="flex flex-col mb-5">
            <select name="selected" id="selected" defaultValue="">
              <option value="" disabled>
                --Select Your Birthday
              </option>
              <option>2003</option>
              <option>2004</option>
              <option>2005</option>
              <option>2006</option>
            </select>
          </div>

          <div className="flex items-center gap-2 mb-5">
            <input type="checkbox" name="isChecked" id="checked" />
            <label htmlFor="checked">I agree all trams and conditions</label>
          </div>
          <button
            type="submit"
            className="bg-blue-600  text-white px-5 py-2 rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Test;
