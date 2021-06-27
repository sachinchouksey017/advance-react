import ButtonClick from "./components/HOC/ButtonClick/ButtonClick";
import HoverCount from "./components/HOC/HoverCount/HoverCount";
import Dashboard from './components/crud-operation/dashboard/Dashboard'
import GraphQL from './components/graphQL/GraphQL'
import './components/crud-operation/style.css'
import { useState } from 'react'
function App() {
  const [currentLink, setLink] = useState(window.location.pathname)
  const links = ['/', '/dashboard', '/graphql']

  const getComponent = () => {
    let path = currentLink || window.location.pathname;
    console.log("call");
    switch (path) {
      case '/':
        return <>
          <ButtonClick />
          <HoverCount />
        </>
      case '/dashboard':
        return <Dashboard />
      case '/graphql':
        return <GraphQL />
      default:
        return <Dashboard />
    }
  }

  const goTo = (link) => {
    window.location.replace(link)
  }
  return (
    <div className="App">
      <ul>
        {
          links.map(link => (
            <li style={{ cursor: 'pointer', color: 'blue' }} onClick={e => goTo(link)} key={link}>{link}</li>
          ))
        }
      </ul>
      {getComponent()}
    </div>
  );
}

export default App;
