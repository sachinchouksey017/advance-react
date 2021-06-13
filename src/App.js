import ButtonClick from "./components/HOC/ButtonClick/ButtonClick";
import HoverCount from "./components/HOC/HoverCount/HoverCount";
import WithUseMemo from "./components/use-memo/WithUseMemo";

function App() {
  return (
    <div className="App">
      {/* for Hooks */}
      {/* <ButtonClick />
      <HoverCount /> */}

      {/* for UseMemo */}
      <WithUseMemo/>
    </div>
  );
}

export default App;
