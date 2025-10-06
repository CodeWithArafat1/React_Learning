import { ToastContainer } from "react-toastify";
import FetchData from "./CustomHooks/FetchData";
import Nav from "./ContextAPI/Nav";
import ReduserExample from "./reduser/ReduserExample";
import ShopingCart from "./projects/10_project/ShopingCart";
import MemoExample from "./useMemo/MemoExample";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="">
         <MemoExample/>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default App;
