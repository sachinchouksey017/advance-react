
// import ButtonClick from "./components/HOC/ButtonClick/ButtonClick";
// import HoverCount from "./components/HOC/HoverCount/HoverCount";
// import SWR from './components/useSWR/swr'
import { SWRConfig } from 'swr'
// import UseCallback from "./components/use-callback/useCallback";
// import WithUseMemo from "./components/use-memo/WithUseMemo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { Suspense } from "react";
const WithUseMemo = React.lazy(() => import("./components/use-memo/WithUseMemo"))
const UseCallback = React.lazy(() => import("./components/use-callback/useCallback"))
const SWR = React.lazy(() => import("./components/useSWR/swr"))
const ButtonClick = React.lazy(() => import("./components/HOC/ButtonClick/ButtonClick"))
const HoverCount = React.lazy(() => import("./components/HOC/HoverCount/HoverCount"))


const fetcher = (...args) => fetch(...args).then((res) => res.json())
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/swr">swr</Link>
            </li>
            <li>
              <Link to="/usecallback">Use callback</Link>
            </li>
            <li>
              <Link to="/usememo">Use memo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<div>Loading...</div>}>
              <ButtonClick />
              <HoverCount />
            </Suspense>
          </Route>
          <Route path="/swr">
            <Suspense fallback={<div>Loading...</div>}>
              <SWRConfig value={{ fetcher }}>
                <SWR />
              </SWRConfig>
            </Suspense>
          </Route>
          <Route path="/usecallback">
            <Suspense fallback={<div>Loading...</div>}>
              <UseCallback />
            </Suspense>
          </Route>
          <Route path="/usememo">
            <Suspense fallback={<div>Loading...</div>}>
              <WithUseMemo />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
