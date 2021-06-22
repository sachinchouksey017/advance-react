import { useState } from "react"

const UseReducer = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <div>Use Reducer Example</div>
            <div>
                <button onClick={decrement}>decrement</button>
                count is {count}
                <button onClick={increment}>increment</button>
            </div>

        </div>
    )
}

export default UseReducer