import { useCallback, useEffect, useState } from "react"
import Child from "./child"
const UseCallback = () => {
    const [data, setData] = useState(0)
    const [count, setCount] = useState(0)

    const getRandomData = useCallback(() => {
        return [data, data + 1, data + 2]
    }, [data])
    return (
        <>
            <div>Hello world</div>
            <input type="text" onChange={e => setCount(count + 1)} />
            <Child getItem={getRandomData} />
        </>
    )
}
export default UseCallback