import ButtonClick from "./components/HOC/ButtonClick/ButtonClick";
import HoverCount from "./components/HOC/HoverCount/HoverCount";
import HomePage from './components/custom-hook/HomePage'
function App() {
  return (
    <div className="App">
      <ButtonClick />
      <HoverCount />

      {/* custom Hook */}
      <HomePage />
    </div>
  );
}

export default App;
