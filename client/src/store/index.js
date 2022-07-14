import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import movieReducer from "./movies/reducer";
import moviesSaga from "./movies/sagas";

const rootReducer  = combineReducers({
	movies: movieReducer
})

export default rootReducer;

export function* rootSaga(){
	yield all([
		fork(moviesSaga),
	])
}