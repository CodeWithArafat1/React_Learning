import React, { Suspense } from "react";
import Countries from "./Countries";

// const fetchCountries = (async () => {
//   const res = await fetch("https://openapi.programming-hero.com/api/all");
//   return res.json();
// })();

const fetchCountries = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

const Main = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        }
      >
        <Countries fetchCountries={fetchCountries} />
      </Suspense>
    </>
  );
};

export default Main;
