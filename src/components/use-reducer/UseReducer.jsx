import { useReducer, useState } from "react"
const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 }
        default:
            return state
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count + 1)
        dispatch({ type: ACTIONS.INCREMENT })
    }
    const decrement = () => {
        // setCount(count - 1)
        dispatch({ type: ACTIONS.DECREMENT })

    }
    return (
        <div>
            <div>Use Reducer Example</div>
            <div>
                <button onClick={decrement}>decrement</button>
                count is {state.count}
                <button onClick={increment}>increment</button>
            </div>

        </div>
    )
}

export default UseReducer