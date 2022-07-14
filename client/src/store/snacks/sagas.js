import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { callApi } from '../../utils/api.js'
import { createSnackError, createSnackSuccess } from './actions.js'
import { CREATE_REQUEST } from './types.js'


const API_URI = "http://localhost:8000/snacklist/add"

// Worker Saga
function* handleCreate(action) {

	console.log('from handlecreate saga:',action.payload)
	try {
		const res = yield call(callApi, API_URI, 'POST', action.payload)
		yield put(createSnackSuccess(res))

	} catch (error) {
		yield put(createSnackError(error))
	}

}

// Watcher Saga
function* watchHandleCreate() {
	yield takeEvery(CREATE_REQUEST, handleCreate)
}

function* snacksSaga() {
	yield all([
		fork(watchHandleCreate)
	])
}

export default snacksSaga;