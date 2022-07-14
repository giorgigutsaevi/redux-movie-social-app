import { call, put, takeEvery, all, fork, take } from 'redux-saga/effects'
import { callApi } from '../../utils/api';
import { fetchSuccess, fetchError } from './actions';
import { FETCH_REQUEST } from './types';

const MOVIE_DB_API_KEY = process.env.REACT_APP_API_KEY
const COURSE_API_URL = `https://api.themoviedb.org/3/movie/550?api_key=${MOVIE_DB_API_KEY}`

// WORKER

// FETCH - saga
function* handleFetch() {
	try {
		const response = yield call(callApi, COURSE_API_URL, 'GET');
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