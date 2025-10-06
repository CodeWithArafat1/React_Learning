import useToggle from "./hooks/useToggle";

const ToggleExample = () => {
  const [isToggle, handelToggle] = useToggle();
  return (
    <>
      <button className="px-5 py-2 bg-blue-600" onClick={handelToggle}>
        {isToggle ? "ON" : "OF"}
      </button>
    </>
  );
};

export default ToggleExample;
