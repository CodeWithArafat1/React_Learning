import React, { useState } from "react";

const MultipleInputs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isChecked: false,
    selected: "",
  });

  const inputHandeler = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: e.target.type === "checkbox" ? checked : value,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isChecked: false,
      selected: "",
    });
  };

  return (
    <>
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-center">
          Multiple Input Handel
        </h1>
        <form
          action=""
          onSubmit={(e) => {
            handelSubmit(e);
          }}
        >
          <div className="flex flex-col mb-5">
            <label htmlFor="fn">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              name="firstName"
              id="fn"
              className="border-2 border-blue-600 outline-0 px-2 py-1 rounded"
              placeholder="First Name"
              onChange={(e) => {
                inputHandeler(e);
              }}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="ln">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              name="lastName"
              id="ln"
              className="border-2 border-blue-600 outline-0 px-2 py-1 rounded"
              placeholder="Last Name"
              onChange={(e) => {
                inputHandeler(e);
              }}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={formData.email}
              name="email"
              id="email"
              className="border-2 border-blue-600 outline-0 px-2 py-1 rounded"
              placeholder="Enter Your Email"
              onChange={(e) => {
                inputHandeler(e);
              }}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={formData.password}
              name="password"
              id="password"
              className="border-2 border-blue-600 outline-0 px-2 py-1 rounded"
              placeholder="Enter Your Password"
              onChange={(e) => {
                inputHandeler(e);
              }}
            />
          </div>

          <div className="flex flex-col mb-5">
            <select
              name="selected"
              id="selected"
              value={formData.selected}
              onChange={inputHandeler}
            >
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
            <input
              type="checkbox"
              checked={formData.isChecked}
              name="isChecked"
              id="checked"
              onChange={(e) => {
                inputHandeler(e);
              }}
            />
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

export default MultipleInputs;
