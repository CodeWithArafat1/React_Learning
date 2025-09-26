import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ColorBox = ({ colorObj, ind }) => {
  const { hex, weight } = colorObj;
  const [isCopy, setIsCopy] = useState(false);

  const handelCopy = (hex) => {
    navigator.clipboard.writeText("#" + hex);
    const showToast = `Copid #${hex}`;
    toast.success(showToast);
    setIsCopy(true);
  };

  useEffect(() => {
    let timeId;
    if (isCopy) {
      timeId = setTimeout(() => {
        setIsCopy(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeId);
    };
  }, [isCopy]);

  return (
    <>
      <div
        onClick={() => handelCopy(hex)}
        className="w-full p-10  relative"
        style={{
          backgroundColor: `#${hex}`,
          color: `${ind < 10 ? "#000" : "#fff"}`,
        }}
      >
        <div className="inset-0 p-1 w-full absolute">{`#${hex}`}</div>
        <div className="flex items-center justify-center text-lg font-bold">
          {isCopy ? "Copid" : `${weight}%`}
        </div>
      </div>
    </>
  );
};

export default ColorBox;
