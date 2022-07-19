import { all, fork, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { createUserSuccess, loginSuccess, logoutSuccess } from './actions.js'
import { CREATE_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST } from "./types"

const SIGNUP_API = "http://localhost:8000/accounts/register"
const LOGIN_API = "http://localhost:8000/accounts/login"
const LOGOUT_API = "http://localhost:8000/accounts/logout"

function* handleRegisterUser(action) {
	console.log('from handleRegisterUser saga:', action.payload)
	try {
		const newUser = yield axios.post(SIGNUP_API, action.payload)
		const token = document.cookie.split("token=").join("")
		yield put(createUserSuccess(newUser, token))

	} catch (error) {
		yield console.log(error)
	}
}

function* handleLoginUser(action) {
	try {
		const user = yield axios.post(LOGIN_API, action.payload)
		const token = document.cookie.split("token=").join("")
		yield put(loginSuccess(user, token))

	} catch (error) {
		yield console.log(error)
	}
}

function* handleLogoutUser() {
	try {
		yield axios.get(LOGOUT_API)
		yield put(logoutSuccess())

	} catch (error) {
		yield console.log(error)
	}
}

function* watchHandleRegisterUser() {
	yield takeEvery(CREATE_REQUEST, handleRegisterUser)
}

function* watchHandleLoginUser() {
	yield takeEvery(LOGIN_REQUEST, handleLoginUser)
}

function* watchHandleLogoutuser() {
	yield takeEvery(LOGOUT_REQUEST, handleLogoutUser)
}





function* usersSaga() {
	yield all([
		fork(watchHandleRegisterUser),
		fork(watchHandleLoginUser),
		fork(watchHandleLogoutuser),
	])
}

export default usersSaga;