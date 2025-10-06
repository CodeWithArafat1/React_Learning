import useFetchData from "./hooks/useFetchData";

const FetchData = () => {
  const [data, loading, err] = useFetchData();

  return (
    <>
      <div className="">
        <h1 className="text-2xl text-center font-bold py-5">FETCH DATA</h1>
        {loading && <h1>Loading...</h1>}
        {err && <h1 className="text-red-500">{err}</h1>}

        {data.map((title) => (
          <h1>{title.title}</h1>
        ))}
      </div>
    </>
  );
};

export default FetchData;
