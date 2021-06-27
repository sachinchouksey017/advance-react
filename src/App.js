import ButtonClick from "./components/HOC/ButtonClick/ButtonClick";
import HoverCount from "./components/HOC/HoverCount/HoverCount";
import SWR from './components/useSWR/swr'
function App() {
  return (
    <div className="App">
      <ButtonClick />
      <HoverCount />
      <SWR />
    </div>
  );
}

export default App;
