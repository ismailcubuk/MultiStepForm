import YourInfo from "./components/1-Your-info/YourInfo";
import SelectPlan from "./components/2-Select-plan/SelectPlan";
import AddOns from "./components/3-Add-ons/AddOns";
import Summary from "./components/4-Summary/Summary";
import Final from "./components/5-Final/Final";
import Step from "./components/Step/Step";

function App() {
  return (
    <div className="main-border">
      <div className="border">
        <Step />
        <div>
          {/* <YourInfo /> */}
          {/* <SelectPlan /> */}
          {/* <AddOns /> */}
          {/* <Summary /> */}
          <Final />
        </div>
      </div>
    </div>
  );
}

export default App;
