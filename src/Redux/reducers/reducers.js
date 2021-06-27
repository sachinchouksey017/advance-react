import { GET_NOTES, SET_NOTES } from "../actions/action.types";

let initialState = {
    allNotes: []
}

const noteReducer = (state = initialState, action) => {
    console.log("action worked", action);
    switch (action.type) {
        case GET_NOTES:
            return state
        case SET_NOTES:
            return { ...state, allNotes: action.payload }
        default:
            return state
    }
}
export default noteReducer;