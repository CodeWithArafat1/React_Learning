import Countries from "./PH_Module/2/Countries";
import Main from "./PH_Module/2/Main";
import DumyTextGenerator from "./projects/7_project/DumyTextGenerator";
import Playears from "./PH_Module/3";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ColorGenerator from "./projects/8_project/ColorGenerator";
import CleanupExample from "./projects/8_project/CleanupExample";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="">
          <ColorGenerator />
        </div>
      </div>

       <ToastContainer/>
    </>
  );
};

export default App;
