import { useState } from "react"

const UseReducer = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>Use Reducer Example</div>
            <div>
                count is {count}
            </div>
        </div>
    )
}

export default UseReducer