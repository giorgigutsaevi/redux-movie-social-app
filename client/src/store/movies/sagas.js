import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { callApi } from '../../utils/api';
import { fetchSuccess, fetchError } from './actions';
import { FETCH_REQUEST } from './types';

const MOVIE_DB_API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"
const COURSE_API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${MOVIE_DB_API_KEY}&page=`

// WORKER

// FETCH - saga
function* handleFetch(action) {
	console.log(action.payload)
	try {
		const response = yield call(callApi, COURSE_API_URL + action.payload, 'GET');
		yield put(fetchSuccess(response))
	} catch (error) {
		yield put(fetchError(error))
	}
}

// WATCHER
function* watchHandleFetch() {
	yield takeEvery(FETCH_REQUEST, handleFetch)
}

// grouping all feature-wise sagas and exporting
function* moviesSaga() {
	yield all([
		fork(watchHandleFetch)
	])
}

export default moviesSaga;