import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { callApi } from '../../utils/api.js'
import { createSnackError, createSnackSuccess, deleteSnackError, deleteSnackSuccess, fetchError, fetchSuccess } from './actions.js'
import { CREATE_REQUEST, DELETE_REQUEST, FETCH_REQUEST } from './types.js'


const API_URI = "http://localhost:8000/snacklist/add"
const FETCH_API_URI = "http://localhost:8000/snacklist/snacks"
const DELETE_API_URI = "http://localhost:8000/snacklist/snack/"


// Worker Sagas
function* handleFetch() {
	try {
		const res = yield call(callApi, FETCH_API_URI, "GET")
		yield put(fetchSuccess(res))
	} catch (error) {
		yield put(fetchError(error))
	}
}


function* handleCreate(action) {
	console.log('from handlecreate saga:', action.payload)
	try {
		const res = yield call(callApi, API_URI, 'POST', action.payload)
		yield put(createSnackSuccess(res))

	} catch (error) {
		yield put(createSnackError(error))
	}
}

function* handleDelete(action) {
	try {
		const res = yield call(callApi, DELETE_API_URI + action.payload, "DELETE")
		yield put(deleteSnackSuccess(res))
	} catch (error) {
		yield put(deleteSnackError(error))
	}
}

// Watcher Sagas
function* watchHandleFetch() {
	yield takeEvery(FETCH_REQUEST, handleFetch)
}

function* watchHandleCreate() {
	yield takeEvery(CREATE_REQUEST, handleCreate)
}

function* watchHandleDelete(){
	yield takeEvery(DELETE_REQUEST, handleDelete)
}



function* snacksSaga() {
	yield all([
		fork(watchHandleCreate),
		fork(watchHandleFetch),
		fork(watchHandleDelete),
	])
}

export default snacksSaga;