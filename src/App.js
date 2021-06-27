import ButtonClick from "./components/HOC/ButtonClick/ButtonClick";
import HoverCount from "./components/HOC/HoverCount/HoverCount";
import RenderProps from './components/render-props/RenderProps'
import './App.css'
function App() {
  return (
    <div className="App">
      <div className='render-prop'>
        <div>Higher Order component</div>
        <ButtonClick />
        <HoverCount />
      </div>
      {/* render props */}
      <RenderProps />

    </div>
  );
}

export default App;
