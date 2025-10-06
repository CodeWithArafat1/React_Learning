import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ColorBox = ({ hex, weight, ind,setCopyCount}) => {
  const [isCopy, setIsCopy] = useState(false);

  

  const handelCopy = () => {
    navigator.clipboard.writeText(hex);
    toast.success(`Copid ${hex}`);
    setIsCopy(true);
    setCopyCount(prev => [...prev, hex])
  };
  useEffect(() => {
    let timeId;
    if (isCopy) {
      timeId = setTimeout(() => {
        setIsCopy(false);
      }, 2000);
    }

    return () => clearTimeout(timeId);
  }, [isCopy]);

  // useEffect(()=>{
  //   if(copyCount.length > 0){
  //     console.log(`copid ${copyCount}`);
  //   }
  // },[copyCount])
  return (
    <>
      <div
        className={` w-full py-10 relative flex items-center justify-center text-center`}
        style={{
          backgroundColor: `${hex}`,
          color: `${ind > 9 ? "#fff" : "#000"}`,
        }}
        onClick={handelCopy}
      >
        <div className="">{isCopy ? "Copid" : `${weight}%`}</div>
        <div className="left-0 top-0 p-2 absolute">{hex}</div>
      </div>
    </>
  );
};

export default ColorBox;
