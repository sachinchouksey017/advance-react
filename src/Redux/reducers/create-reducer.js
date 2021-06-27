import { EXPAND_CREATE } from "../actions/action.types";

let initialState = {
    open: false
}

const createReducer = (state = initialState, action) => {
    console.log("action worked for create",action);
    switch (action.type) {
        case EXPAND_CREATE:
            return {...state,open:!state.open}
        default:
            return state
    }
}
export default createReducer;