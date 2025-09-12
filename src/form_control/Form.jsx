import React, { useState } from "react";

const From = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmited, setSubmited] = useState(false)
  return (
    <>
      <div className="max-w-sm mx-auto">
        <h1>Form</h1>
        {
          isSubmited && <h1 className="text-2xl font-bold">Welcome, {name.split(' ')[0]}</h1>
        }
        <form action="" className="flex flex-col gap-5" onSubmit={(event)=>{
          event.preventDefault()
          setSubmited(true) 
        }}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="rounded border-blue-600 outline-0 border-2 px-2 py-2"
              placeholder="Enter Your Name"
              value={name}
              onChange={(event)=>{
                setName(event.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              className="rounded border-blue-600 outline-0 border-2 px-2 py-2"
              placeholder="Enter Your Email"
              value={email}
              onChange={(event)=>{
                setEmail(event.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-2 rounded-md cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default From;
