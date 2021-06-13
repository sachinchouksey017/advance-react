import UpdatedComponent from "../WithCounter/WithCounter";
import './hoverCount.scss'
const HoverCount = (props) => {
    return (
        <div className='main-div'>
            <div className='hover' onMouseEnter={() => props.setCount(props.count + 1)}>Hover on Me </div>
            <div className='count'>{props.count}</div>
        </div>
    )
}
export default UpdatedComponent(HoverCount);