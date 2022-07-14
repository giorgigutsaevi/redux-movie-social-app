import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import movieReducer from "./movies/reducer";
import moviesSaga from "./movies/sagas";
import snackReducer from "./snacks/reducers";
import snacksSaga from "./snacks/sagas";

const rootReducer  = combineReducers({
	movies: movieReducer,
	snacks: snackReducer,
})

export default rootReducer;

export function* rootSaga(){
	yield all([
		fork(moviesSaga),
		fork(snacksSaga)
	])
}