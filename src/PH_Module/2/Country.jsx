// const fetchCountries = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())
import React from "react";

const Country = ({ country, handelVisitedCountry, isVisited }) => {
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-5">
          <img src={country.flags.flags.png} alt="" />
          <h1 className="text-2xl font-bold">Name: {country.name.common}</h1>
          <button
            className={`py-2 px-5 text-white rounded-2xl ${
              isVisited
                ? "bg-red-300 hover:bg-red-400"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={() => {
              handelVisitedCountry(country);
            }}
          >
            {isVisited ? "Visited" : "Not visited"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Country;
