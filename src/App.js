import ButtonClick from "./components/HOC/ButtonClick/ButtonClick";
import HoverCount from "./components/HOC/HoverCount/HoverCount";
import Dashboard from './components/crud-operation/dashboard/Dashboard'
import './components/crud-operation/style.css'
function App() {
  console.log();
  const getComponent = () => {
    let path = window.location.pathname;
    console.log("call");
    switch (path) {
      case '/':
        return <>
          <ButtonClick />
          <HoverCount />
        </>
      case '/dashboard':
        return <Dashboard />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="App">
      {getComponent()}
    </div>
  );
}

export default App;
