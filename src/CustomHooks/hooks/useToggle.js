import { useState } from "react";

const useToggle = () => {
  const [isToggle, seIsToggle] = useState(false);
  const handelToggle = () => {
    seIsToggle(!isToggle);
  };
  return [isToggle, handelToggle]
};

export default useToggle;
