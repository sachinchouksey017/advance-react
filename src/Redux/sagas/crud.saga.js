import { getAllNotesAPI } from "../../services/note.service";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { setAllNotes } from "../actions/actions";
import { GET_NOTES } from "../actions/action.types";

function* fetchNotes() {
    const data = yield call(getAllNotesAPI)
    console.log("data in saga", data);
    yield put(setAllNotes(data))
}
function* mySaga() {
    yield takeLatest(GET_NOTES, fetchNotes)
}
export default mySaga