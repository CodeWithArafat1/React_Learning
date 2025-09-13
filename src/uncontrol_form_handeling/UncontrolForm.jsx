import React, { useState } from "react";

const UncontrolForm = () => {
  const [data, setData] = useState({});
  //   const submitHandeler = (e) => {
  //     e.preventDefault();

  //     console.log(e.target.currentTarget);
  //   };

  return (
    <>
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-center">
          Multiple Input Handel
        </h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const rowData = Object.fromEntries(formData.entries());

            const newRowData = {
              ...rowData,

              isChecked: rowData.isChecked === "on",
            };
            setData(newRowData);
            console.log(data);
            e.currentTarget.reset()


            // setData({
            //   firstName: formData.get("firstName"),
            //   lastName: formData.get("lastName"),
            //   email: formData.get("email"),
            //   password: formData.get("password"),
            //   selected: formData.get("selected"),
            //   isChecked: formData.get("isChecked"),
            // });
          }}
        >
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
            <select name="selected" id="selected">
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

export default UncontrolForm;
