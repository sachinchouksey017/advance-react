import { useEffect, useState } from "react";

const Child = ({ getItem }) => {
    const [list, setList] = useState([])
    useEffect(() => {
        console.log("calling child");
        setList(getItem())
    }, [getItem])
    return (
        list.map((ele) => (
            <div key={ele}>{ele}</div>
        ))
    )
}
export default Child;