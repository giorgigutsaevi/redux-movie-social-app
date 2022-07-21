import { CREATE_REQUEST, CREATE_SUCCESS, CREATE_ERROR, LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_ERROR, LOGOUT_ERROR} from "./types"

export const createUserRequest = (user) => {
	return {
		type: CREATE_REQUEST,
		payload: user
	}
}

export const createUserSuccess = (data, token) => {
	return {
		type: CREATE_SUCCESS,
		token: token,
		payload: data,
	}
}

export const createUserError = (error) => {
	return {
		type: CREATE_ERROR,
		payload: error
	}
}

export const loginRequest = (user, navigate) => {
	return {
		type: LOGIN_REQUEST,
		payload: user,
		navigate: navigate,
	}
}

export const loginSuccess = (data, token) => {
	return {
		type: LOGIN_SUCCESS,
		token: token,
		payload: data,
	}
}

export const loginError = (error) => {
	return {
		type: LOGIN_ERROR,
		payload: error
	}
}

export const logoutRequest = () => {
	return {
		type: LOGOUT_REQUEST,
	}
}

export const logoutSuccess = () => {
	return {
		type: LOGOUT_SUCCESS,
		payload: null,
	}
}

export const logoutError = (error) => {
	return {
		type: LOGOUT_ERROR,
		payload: error
	}
}

