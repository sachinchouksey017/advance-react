import { getAllNotesAPI } from '../../services/note.service'
import { GET_NOTES, SET_NOTES, EXPAND_CREATE } from './action.types'


export const getAllNotes = () => ({ type: GET_NOTES })
export const setAllNotes = (data) => ({ type: SET_NOTES, payload: data })
export const toggleCreateNote = () => ({ type: EXPAND_CREATE })

// for redux-thunk
export const fetchAllNotes = () => {
    return (dispatch) => {
        getAllNotesAPI().then(ele => ele.json()).then(data => {
            console.log("data", data);
            dispatch(setAllNotes(data))
        }).catch(err => {
            dispatch(setAllNotes([]))
        })
    }
}
