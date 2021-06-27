import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { toggleCreateNote } from "../../../Redux/actions/actions";

const CreateNote = () => {
    // const [isOpen, setIsOpen] = useState(false)
    const isOpen=useSelector(state=>state.createReducer.open)
    const dispatch=useDispatch();
    return (
        <div className={isOpen ? 'create-note create-note-expand' : 'create-note'}>
            <input onClick={e=>dispatch(toggleCreateNote())} type="text" placeholder={isOpen ? 'title' : 'Create Note'} />
            <input type="text" placeholder='description' />
            <div className='create-action'>
                <button onClick={e =>dispatch(toggleCreateNote())}>Close</button>
            </div>
        </div>
    )
}
export default CreateNote