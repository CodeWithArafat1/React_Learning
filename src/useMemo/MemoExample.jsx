import React, { useCallback, useEffect, useMemo, useState } from "react";
import ItemList from "./ItemList";
const users = ["Arafat Nill", "Sadia", "Isha", "Nusrat", "Mim", "Shanjida"];

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [nameList, setNameList] = useState([]);
  const handelIncrise = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setNameList(users);
  }, []);

  const handelDelete = useCallback(
    (index) => {
      const usersList = nameList.filter((item, ind) => ind !== index);
      setNameList(usersList);
    },
    [nameList]
  );

  const sumOneBillon = () => {
    let sum = 0;

    for (let i = 0; i <= 1000000000; i++) {
      sum += i;
    }
    return sum;
  };

  const summ = useMemo(() => {
   return sumOneBillon();
  },[]);
  return (
    <>
      <h1>MemoExample</h1>

      <button className="btn btn-dash" onClick={handelIncrise}>
        Count: {count}
      </button>

      <div className="">
        <ItemList users={nameList} handelDelete={handelDelete} />
      </div>
    </>
  );
};

export default MemoExample;
