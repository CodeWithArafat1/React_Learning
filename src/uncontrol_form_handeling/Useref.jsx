import React, { useState, useRef, useEffect } from "react";

const Useref = () => {
  const fn = useRef(null);
  const ln = useRef(null);
  const em = useRef(null);
  const ps = useRef(null);
  const selected = useRef("");
  const isChecked = useRef(false);
  const [formValues, setFormValues] = useState({});

  const handelSubmit = (e) => {
    e.preventDefault();

    const createObject = {
      firstName: fn.current.value,
      lastName: ln.current.value,
      email: em.current.value,
      password: ps.current.value,
      selected: selected.current.value,
      isChecked: isChecked.current.checked,
    };

    setFormValues(createObject);

    fn.current.value = "";
    ln.current.value = "";
    em.current.value = "";
    ps.current.value = "";
    selected.current.value = "";
    isChecked.current.checked = false;
  };

  useEffect(() => {
    if (formValues.firstName !== "") {
      console.log(formValues);
    }
  }, [formValues]);
  return (
    <>
      <div className="max-w-sm mx-auto">
        <h1 className="text-2xl font-bold text-center">UseRef Input Handel</h1>
        <form action="" onSubmit={handelSubmit}>
          <div className="flex flex-col mb-5">
            <label htmlFor="fn">First Name</label>
            <input
              type="text"
              name="firstName"
              id="fn"
              className="border-2 border-blue-600 outline-0 px-2 py-1 rounded"
              placeholder="First Name"
              ref={fn}
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
              ref={ln}
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
              ref={em}
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
              ref={ps}
            />
          </div>

          <div className="flex flex-col mb-5">
            <select
              name="selected"
              id="selected"
              defaultValue=""
              ref={selected}
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
              name="isChecked"
              id="checked"
              ref={isChecked}
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

export default Useref;
