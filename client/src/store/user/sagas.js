import { all, fork, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { createUserSuccess, loginError, loginSuccess, logoutSuccess, persistLoginError, persistLoginSuccess, verifyTokenError, verifyTokenSuccess } from './actions.js'
import { CREATE_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST, PERSIST_LOGIN_REQUEST, VERIFY_TOKEN_REQUEST } from "./types"

const SIGNUP_API = "http://localhost:8000/accounts/register"
const LOGIN_API = "http://localhost:8000/accounts/login"
const LOGOUT_API = "http://localhost:8000/accounts/logout"
const PERSIST_LOGIN_URI = "http://localhost:8000/accounts/user/"
const VERIFY_TOKEN_URI = "http://localhost:8000/accounts/authenticated/"

function* handleRegisterUser(action) {
	console.log('from handleRegisterUser saga:', action.payload)
	try {
		const newUser = yield axios.post(SIGNUP_API, action.payload)
		const token = document.cookie.split("token=").join("")
		console.log("FROM SAGA", newUser)
		yield put(createUserSuccess(newUser, token))
		action.navigate("/")

	} catch (error) {
		yield console.log(error)
	}
}

function* handleLoginUser(action) {
	try {
		// console.log(action.navigate)
		const user = yield axios.post(LOGIN_API, action.payload)
		const token = document.cookie.split("token=").join("")
		// console.log('USER DATA', user)
		yield put(loginSuccess(user, token))
		action.navigate("/")

	} catch (error) {
		yield put(loginError(error))
	}
}

function* handlePersistLogin(action) {
	try {
		// console.log(action.navigate)
		const user = yield axios.get(PERSIST_LOGIN_URI + action.payload)
		// const user = yield axios.post(LOGIN_API, action.payload)
		// const token = document.cookie.split("token=").join("")
		// console.log('USER DATA', user)
		yield put(persistLoginSuccess(user))

	} catch (error) {
		yield put(persistLoginError(error))
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

function* handleVerifyToken() {
	try {
		const res = yield axios.get(VERIFY_TOKEN_URI)
		console.log("HANDLE VERIFY TOKEN", res.data)
		yield put(verifyTokenSuccess(res.data))

	} catch (error) {
		yield put(verifyTokenError(error))
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

function* watchPersistLogin() {
	yield takeEvery(PERSIST_LOGIN_REQUEST, handlePersistLogin)
}

function* watchHandleVerifyToken() {
	yield takeEvery(VERIFY_TOKEN_REQUEST, handleVerifyToken)
}


function* usersSaga() {
	yield all([
		fork(watchHandleRegisterUser),
		fork(watchHandleLoginUser),
		fork(watchHandleLogoutuser),
		fork(watchPersistLogin),
		fork(watchHandleVerifyToken),
	])
}

export default usersSaga;