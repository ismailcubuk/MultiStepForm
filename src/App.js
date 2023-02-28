import { useContext } from "react";
import YourInfo from "./components/1-Your-info/YourInfo";
import SelectPlan from "./components/2-Select-plan/SelectPlan";
import AddOns from "./components/3-Add-ons/AddOns";
import Summary from "./components/4-Summary/Summary";
import Final from "./components/5-Final/Final";
import Step from "./components/Step/Step";
import FormContext from "./context/FormContext";

function App() {
  const { count, page } = useContext(FormContext)
  return (
    <div className="main-border">
      <div>
        {count === 1 ? <div className={page}><YourInfo /></div> :
          count === 2 ? <div className={page}><SelectPlan /></div> :
            count === 3 ? <div className={page}><AddOns /></div> :
              count === 4 ? <div className={page}><Summary /></div> :
                count === 5 ? <div className={page}><Final /> </div> : null
        }
      </div>
    </div>
  );
}

export default App;
