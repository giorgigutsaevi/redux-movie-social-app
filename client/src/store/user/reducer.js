import { CREATE_REQUEST, CREATE_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS} from "./types"

const initialState = {
	user: null,
	authenticationToken: "",
	isLoggedIn: false,
	error: null,
}

export default function userReducer(state = initialState, action) {

	switch (action.type) {

		// case CREATE_USER:
		// 	return {...state}
		case CREATE_REQUEST:
		case LOGIN_REQUEST:
		case LOGOUT_REQUEST:
			return {...state}

		case CREATE_SUCCESS:
			return {...state, user: action.payload, authenticationToken: action.token, isLoggedIn: true}
		
		case LOGIN_SUCCESS:
			// console.log('LOGIN_USER ----->', action)
			return {...state, user: action.payload, authenticationToken: action.token, isLoggedIn: true}

		case LOGOUT_SUCCESS:
			// make user = null
			return {...state, user: action.payload, authenticationToken: "", isLoggedIn: false}

		default:
			return { ...state }
	}
}