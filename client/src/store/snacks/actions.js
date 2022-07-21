import { CREATE_ERROR, CREATE_REQUEST, CREATE_SUCCESS, DELETE_ERROR, DELETE_REQUEST, DELETE_SUCCESS, FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./types"

export const fetchRequest = () => {
	return {
		type: FETCH_REQUEST
	}
}

export const fetchSuccess = (data) => {
	return {
		type: FETCH_SUCCESS,
		payload: data.data,
	}
}

export const fetchError = (error) => {
	return {
		type: FETCH_ERROR,
		payload: error
	}
}

export const createSnackRequest = (data) => {
	return {
		type: CREATE_REQUEST,
		payload: data
	}
}

export const createSnackSuccess = (data) => {
	return {
		type: CREATE_SUCCESS,
		payload: data,
	}
}

export const createSnackError = (error) => {
	return {
		type: CREATE_ERROR,
		payload: error
	}
}

export const deleteSnackRequest = (id) => {
	return {
		type: DELETE_REQUEST,
		payload: id
	}
}

export const deleteSnackSuccess = (data) => {
	return {
		type: DELETE_SUCCESS,
		payload: data,
	}
}

export const deleteSnackError = (error) => {
	return {
		type: DELETE_ERROR,
		payload: error
	}
}