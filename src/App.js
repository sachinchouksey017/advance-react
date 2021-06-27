import ButtonClick from "./components/HOC/ButtonClick/ButtonClick";
import HoverCount from "./components/HOC/HoverCount/HoverCount";
import SWR from './components/useSWR/swr'
import { SWRConfig } from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function App() {
  return (
    <div className="App">
      <ButtonClick />
      <HoverCount />
      <SWRConfig value={{ fetcher }}>
        <SWR />
      </SWRConfig>

    </div>
  );
}

export default App;
