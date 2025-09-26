import React, { useState } from "react";
import Values from "values.js";
import ColorBox from "./ColorBox";
import { toast } from "react-toastify";
const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState(new Values("#fc6203").all());
  const [isInvalid, setIsInvalid] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    try {
      const colorArr = new Values(color).all();
      setColors(colorArr);
      setIsInvalid(false);
    } catch {
      setIsInvalid(true);
      toast.error("Invalid Color Code");
      setColors([]);
    }
  };
  return (
    <>
      <div className="">
        <form action="" onSubmit={handelSubmit}>
          <label htmlFor="color">Generate Colors</label>
          <div className="flex sm:block flex-col gap-3 space-x-2">
            <input
              type="text"
              id="color"
              name="color"
              placeholder="#fc6203"
              className="border-2 border-blue-600 rounded outline-0 px-2 py-2"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <button className="btn btn-primary w-fit">Generate Color</button>
          </div>
        </form>

        {isInvalid && (
          <div className="text-red-500 py-2">
            Place Enter a Valid HexaDecimal Color Code.
          </div>
        )}
      </div>

      <div className="mt-20  grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 ">
        {colors.map((colorObj, ind) => (
          <ColorBox colorObj={colorObj} key={ind} ind={ind} />
        ))}
      </div>
    </>
  );
};

export default ColorGenerator;
