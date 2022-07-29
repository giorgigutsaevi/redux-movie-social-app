import { CREATE_REQUEST, CREATE_SUCCESS, CREATE_ERROR, LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_ERROR, LOGOUT_ERROR, PERSIST_LOGIN_REQUEST, PERSIST_LOGIN_SUCCESS, PERSIST_LOGIN_ERROR, VERIFY_TOKEN_REQUEST, VERIFY_TOKEN_SUCCESS, VERIFY_TOKEN_ERROR} from "./types"

export const createUserRequest = (user, navigate) => {
	console.log("FROM create USER REQUEST", user)
	return {
		type: CREATE_REQUEST,
		payload: user,
		navigate: navigate,
		
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

export const persistLoginRequest = (id) => {
	return {
		type: PERSIST_LOGIN_REQUEST,
		payload: id,
	}
}

export const persistLoginSuccess = (data) => {
	return {
		type: PERSIST_LOGIN_SUCCESS,
		payload: data,
		token: data
	}
}

export const persistLoginError = (error) => {
	return {
		type: PERSIST_LOGIN_ERROR,
		payload: error,
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

export const verifyTokenRequest = () => {
	return {
		type: VERIFY_TOKEN_REQUEST
	}
}

export const verifyTokenSuccess = (data) => {
	return {
		type: VERIFY_TOKEN_SUCCESS,
		payload: data
	}
}

export const verifyTokenError = (error) => {
	return {
		type: VERIFY_TOKEN_ERROR,
		payload: error
	}
}