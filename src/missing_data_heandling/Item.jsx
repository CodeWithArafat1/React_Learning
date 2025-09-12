import React from "react";
import def from "./image.png";
const Item = ({ name, images, description, loaction }) => {
  //   const image =  (images && images[0] && images[0].profile) || def;

  const image = images?.[0]?.profile ?? def;

  return (
    <div className="">
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="space-x-4">{name.full}</div>
      <div className="">{name.nickname || "No Nicname Available"}</div>
      <div className="">{description || "No Description Available"}</div>
      <div className="">{loaction || "No Location Available"}</div>
    </div>
  );
};

export default Item;
