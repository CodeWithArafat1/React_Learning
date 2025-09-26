import { Suspense, useEffect, useState } from "react";
import Playears from "./Playears";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Available from "../../uncontrol_form_handeling/Available";
import Selected from "./Selected";

const fetchData = (async () => {
  const data = await fetch(
    "https://raw.githubusercontent.com/CodeWithArafat1/javaScript/refs/heads/main/db.json"
  );
  return data.json();
})();

const Index = () => {
  const [playearsPrice, setPlayearsPrice] = useState(() => {
    const savedPlayearsPrice = localStorage.getItem("playearsPrice");
    if (savedPlayearsPrice) {
      return parseInt(savedPlayearsPrice);
    }

    return 60000000;
  });

  const [isSelected, setIsSelected] = useState(() => {
    const savedISelected = localStorage.getItem("isSelected");
    if (savedISelected === null) {
      return true;
    }
    return savedISelected === "true";
  });

  const [pursesedPlayers, setPursesedPlayers] = useState(() => {
    const savedPlayers = localStorage.getItem("pursesedPlayers");
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  useEffect(() => {
    localStorage.setItem("pursesedPlayers", JSON.stringify(pursesedPlayers));
    localStorage.setItem("isSelected", isSelected);
    localStorage.setItem("playearsPrice", playearsPrice);
  }, [pursesedPlayers, isSelected, playearsPrice]);

  return (
    <>
      <div className="container mx-auto space-y-10">
        <Navbar playearsPrice={playearsPrice} />
        <Hero />
        <Available
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          pursesedPlayers={pursesedPlayers}
        />

        {isSelected ? (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Playears
              setPursesedPlayers={setPursesedPlayers}
              fetchData={fetchData}
              setPlayearsPrice={setPlayearsPrice}
              playearsPrice={playearsPrice}
              pursesedPlayers={pursesedPlayers}
            />
          </Suspense>
        ) : (
          <Selected
            pursesedPlayers={pursesedPlayers}
            setPursesedPlayers={setPursesedPlayers}
            setPlayearsPrice={setPlayearsPrice}
          />
        )}
      </div>
    </>
  );
};

export default Index;
