import './buttonClick.scss'
import WithCounter from '../WithCounter/WithCounter'
const ButtonClick = (props) => {
    return (
        <div className='main-div'>
            <button className='button' onClick={() => props.setCount(props.count + 1)}>click me</button>
            <div className='count'>{props.count}</div>
        </div>
    )
}
export default  WithCounter(ButtonClick);