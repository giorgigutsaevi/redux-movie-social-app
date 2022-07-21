import { CREATE_REQUEST, CREATE_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_ERROR, PERSIST_LOGIN_REQUEST, PERSIST_LOGIN_SUCCESS } from "./types"

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
			return { ...state, error: false, isLoggedIn: false, }

		case LOGIN_ERROR:
			return { ...state, error: true, errorMessage: action.payload.response.data.errorMessage }

		case CREATE_SUCCESS:
			return { ...state, user: action.payload, isLoggedIn: true }

		case LOGIN_SUCCESS:
			console.log("LOGIN_SUCCESS", action.payload)
			return { ...state, user: action.payload.data.username, isLoggedIn: true }

		case PERSIST_LOGIN_SUCCESS:
			return { ...state, user: action.payload.data.username, isLoggedIn: true }

		case LOGOUT_SUCCESS:
			// make user = null to complete the logout process
			return { ...state, user: action.payload, authenticationToken: "", isLoggedIn: false }

		default:
			return { ...state }
	}
}