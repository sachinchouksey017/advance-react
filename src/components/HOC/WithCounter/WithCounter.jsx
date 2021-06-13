import React, { useState } from "react"

const UpdatedComponent = OriginalComponent => {
    const NewComponent = () => {
        const [count, setCount] = useState(0)
        return <OriginalComponent count={count} setCount={setCount} name='sachin' />
    }
    return NewComponent
}
export default UpdatedComponent