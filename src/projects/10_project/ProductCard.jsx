import { ArrowDown, ArrowUp } from "lucide-react";
import { cartData } from "./cartData";
const ProductCard = () => {
  return (
    <>
      <div className="space-y-5">
        {cartData.map((data) => {
          return (
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <figure className="w-24">
                  <img src={data.image} alt=""  className=" rounded-md"/>
                </figure>
                <div className="">
                  <h1>{data.name}</h1>
                  <p>${data.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center gap-2">
                  <span className="bg-green-500 text-white cursor-pointer p-1 rounded-full">
                    <ArrowUp />
                  </span>
                  <span className="text-xl font-bold">{data.quantity}</span>
                  <span className="bg-red-500 text-white cursor-pointer p-1 rounded-full">
                    <ArrowDown />
                  </span>
                </div>
                <div className="">${data.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCard;
