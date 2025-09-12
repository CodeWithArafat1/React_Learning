import React, { useState } from "react";

const MultipleInputs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inputHandeler = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // form reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
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
