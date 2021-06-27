import ButtonClick from "./components/HOC/ButtonClick/ButtonClick";
import HoverCount from "./components/HOC/HoverCount/HoverCount";
import SWR from './components/useSWR/swr'
import { SWRConfig } from 'swr'

import UseCallback from "./components/use-callback/useCallback";
import WithUseMemo from "./components/use-memo/WithUseMemo";
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function App() {
  return (
    <div className="App">
      <ButtonClick />
      <HoverCount />
      <SWRConfig value={{ fetcher }}>
        <SWR />
      </SWRConfig>

      <UseCallback />
    </div>
  );
}
export default App;
