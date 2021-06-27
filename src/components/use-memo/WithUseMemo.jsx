import { useEffect, useMemo, useState } from "react";

const WithUseMemo = () => {
    const [count, setCount] = useState(1)
    // 
    const doubleValue = useMemo(() => doubleNumber(count), [count])
    const [email, setEmail] = useState('sachin@gmail.com');

    return (
        <div style={{ fontSize: '40px' }}>
            <input style={{ fontSize: '40px' }} type="number" name="" id="" value={count} onChange={e => setCount(parseInt(e.target.value))} />
            hello {doubleValue}
            <div>
                <input style={{ fontSize: '40px', marginTop: '20px' }} type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
        </div>
    )
}
function doubleNumber(number) {
    for (let i = 0; i < 1000000000; i++) {
    }
    return number * 2
}
export default WithUseMemo;