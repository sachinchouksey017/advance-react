import { useEffect } from 'react';
import CreateNote from '../create-note/CreateNote';
import Display from '../display/Display';
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllNotes } from '../../../Redux/actions/actions';
const Dashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllNotes())
    }, [])
    return (
        <>
            <CreateNote />
            <Display />
        </>
    )
}
export default Dashboard