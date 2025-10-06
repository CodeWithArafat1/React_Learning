import { useState, useEffect } from "react";

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchPostData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("this is coustom Error!");
        }
        const data = await res.json();
        setData(data);
      };
      fetchPostData();
    } catch (error) {
      setErr(error.message || "Data Not Found!");
    } finally {
      setLoading(false);
    }
  }, []);

  return [data, loading, err];
};

export default useFetchData;
