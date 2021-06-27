import ButtonClick from "./components/HOC/ButtonClick/ButtonClick";
import HoverCount from "./components/HOC/HoverCount/HoverCount";
import SWR from './components/useSWR/swr'
import { SWRConfig } from 'swr'

import UseCallback from "./components/use-callback/useCallback";
import WithUseMemo from "./components/use-memo/WithUseMemo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
            <ButtonClick />
            <HoverCount />
          </Route>
          <Route path="/swr">
            <SWRConfig value={{ fetcher }}>
              <SWR />
            </SWRConfig>
          </Route>
          <Route path="/usecallback">
            <UseCallback />
          </Route>
          <Route path="/usememo">
            <WithUseMemo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
