export const GET_NOTES = 'get_notes'
export const EXPAND_CREATE = 'expand'
export const SET_NOTES = 'SET_NOTES'


export const getAllNotes = () => ({ type: GET_NOTES })
export const setAllNotes = (data) => ({ type: SET_NOTES, payload: data })
export const toggleCreateNote = () => ({ type: EXPAND_CREATE })

export const fetchAllNotes = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(ele=>ele.json()).then(data => {
            console.log("data",data);
            dispatch(setAllNotes(data))
        }).catch(err => {
            dispatch(setAllNotes([]))
        })
    }
}
