import ButtonClick from "./ButtonClick/ButtonClick"
import HoverCount from './HoverCount/HoverCount'
import WithCounter from './WithCounter/WithCounter'
const RenderProps = () => {
    return (
        <div className='render-prop'>
            <div style={{ marginBottom: '10px' }}>By Render Props</div>
            <WithCounter render={(count, setCount) => <ButtonClick count={count} setCount={setCount} />} />
            <WithCounter render={(count, setCount) => <HoverCount count={count} setCount={setCount} />} />
        </div>
    )
}

export default RenderProps;