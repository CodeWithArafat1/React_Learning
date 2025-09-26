import { use, useEffect, useState } from "react";
import Country from "./Country";

const Countries = ({ fetchCountries }) => {
  const [visitedCountries, setVisitedCountries] = useState(() => {
    // get form localStorage
    const geItems = localStorage.getItem("visited_countries");
    if (geItems) {
      return JSON.parse(geItems);
    }

    return [];
  });
  const [searchInput, setSearchInput] = useState("");

  // set Local Stroge
  useEffect(() => {
    localStorage.setItem("visited_countries", JSON.stringify(visitedCountries));
  }, [visitedCountries]);

  const handelRemove = (removeItem) => {
    const newItem = visitedCountries.filter(
      (item) => item.name.common !== removeItem
    );
    setVisitedCountries(newItem);
  };

  const handelVisitedCountry = (country) => {
    setVisitedCountries((prev) => {
      const alradyExitsCountry = prev.find((c) => {
        return c.name.common === country.name.common;
      });

      if (alradyExitsCountry) {
        return prev.filter((c) => c.name.common !== country.name.common);
      } else {
        return [...prev, country];
      }
    });
  };

  const countriesData = use(fetchCountries);
  const countries = countriesData.countries || [];
  // find country
  const findCountris = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <h1>In the Country {countries.length}</h1>
      <h1>Visited Country count : {visitedCountries.length}</h1>

      <div className="flex  gap-4 items-center mb-10 flex-wrap">
        {visitedCountries.map((c, ind) => {
          return (
            <div key={ind}>
              <img
                src={c.flags.flags?.png || c.flags.flags?.svg}
                alt=""
                className="w-24"
              />
              <h1 className="">{c.name.common}</h1>
              <button
                onClick={() => {
                  handelRemove(c.name.common);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>

      <form
        action=""
        className="my-10 space-x-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Search Value", searchInput);
        }}
      >
        <input
          name="inputSearch"
          type="text"
          placeholder="Search Counry"
          className="border-2 border-blue-500 px-2 py-1 rounded outline-0"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>

      <div className="grid grid-cols-3 gap-6">
        {findCountris.map((country, ind) => {
          const isCountryVisited = visitedCountries.some(
            (c) => c.name.common === country.name.common
          );

          return (
            <div className="" key={ind}>
              <Country
                country={country}
                isVisited={isCountryVisited}
                handelVisitedCountry={handelVisitedCountry}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Countries;
