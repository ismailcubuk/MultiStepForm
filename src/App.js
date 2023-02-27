import { useContext } from "react";
import YourInfo from "./components/1-Your-info/YourInfo";
import SelectPlan from "./components/2-Select-plan/SelectPlan";
import AddOns from "./components/3-Add-ons/AddOns";
import Summary from "./components/4-Summary/Summary";
import Final from "./components/5-Final/Final";
import Step from "./components/Step/Step";
import FormContext from "./context/FormContext";

function App() {
  const { count, money } = useContext(FormContext)
  return (
    <div className="main-border">
      {money}
      <div className="border">
        <Step />
        <div>
          {count === 1 ? <YourInfo /> :
            count === 2 ? <SelectPlan /> :
              count === 3 ? <AddOns /> :
                count === 4 ? <Summary /> :
                  count === 5 ? <Final /> : null
          }

        </div>
      </div>
    </div>
  );
}

export default App;
