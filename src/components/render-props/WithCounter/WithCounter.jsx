import React, { useState } from "react"

const WithCounter = (props) => {
    const [count, setCount] = useState(0)
    return (
        <>
            {props.render(count, setCount)}
        </>
    )
}
export default WithCounter