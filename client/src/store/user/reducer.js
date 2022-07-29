import { CREATE_REQUEST, CREATE_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_ERROR, PERSIST_LOGIN_REQUEST, PERSIST_LOGIN_SUCCESS, VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS } from "./types"

const initialState = {
	user: null,
	isLoggedIn: false,
	error: false,
	errorMessage: "",
}

export default function userReducer(state = initialState, action) {

	switch (action.type) {

		case CREATE_REQUEST:
		case LOGIN_REQUEST:
		case LOGOUT_REQUEST:
		case PERSIST_LOGIN_REQUEST:
		case VERIFY_TOKEN_REQUEST:
			return { ...state, error: false, isLoggedIn: false, }

		case LOGIN_ERROR:
			return { ...state, error: true, errorMessage: action.payload.response.data.errorMessage }

		case CREATE_SUCCESS:
			// console.log("FROM CREATE_SUCCESS", action.payload)
			// console.log("specified", action.payload.config.data)
			const newUser = JSON.parse(action.payload.config.data)
			console.log(newUser)
			return { ...state, user: newUser.username, isLoggedIn: true }

		case LOGIN_SUCCESS:
			console.log("LOGIN_SUCCESS", action.payload)
			return { ...state, user: action.payload.data.username, isLoggedIn: true }

		case PERSIST_LOGIN_SUCCESS:
			return { ...state, user: action.payload.data.username, isLoggedIn: true }

		case LOGOUT_SUCCESS:
			// make user = null to complete the logout process
			return { ...state, user: action.payload, authenticationToken: "", isLoggedIn: false }

		case VERIFY_TOKEN_SUCCESS:
			console.log(action.payload, 'VERIFY_TOKEN_SUCCESS')
			return {...state, isLoggedIn: action.payload}

		default:
			return { ...state }
	}
}