import { useState } from "react";

const useNavBar = () => {
  const [user, setUser] = useState("Jhon Doe");
  const handelLogOut = () => {
    setUser("No User Loggedin");
  };

  return [user, handelLogOut];
};

export default useNavBar;
