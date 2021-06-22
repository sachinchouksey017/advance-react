import React, { useState } from 'react';
import UseDocumentTitle from './useDocumentTitle';
const HomePage = () => {
    const [count, setCount] = useState(0)
     UseDocumentTitle(count)
    return (
        <div onMouseEnter={e => setCount(count + 1)}>hello world{count}</div>
    )

}
export default HomePage
