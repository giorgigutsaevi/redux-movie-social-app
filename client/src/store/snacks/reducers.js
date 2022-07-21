import { CREATE_REQUEST, CREATE_SUCCESS, DELETE_REQUEST, DELETE_SUCCESS, FETCH_REQUEST, FETCH_SUCCESS } from "./types";


const initialState = {
	snackList: [],
	isLoading: false,
	errors: undefined,
	status: undefined,
	snack: undefined,
}

export default function snackReducer(state = initialState, action) {

	switch (action.type) {
		case FETCH_REQUEST:
		case CREATE_REQUEST:
		case DELETE_REQUEST:
			return { ...state, isLoading: true }

		case FETCH_SUCCESS:
			// console.log('from FETCH_SUCCESS', action.payload)
			return { ...state, isLoading: false, snackList: action.payload }

		case CREATE_SUCCESS:
			return { ...state, isLoading: false, snackList: [...state.snackList, action.payload] }

		case DELETE_SUCCESS:
			const newState = state.snackList.filter(snack => snack._id !== action.payload.data._id)
			return { ...state, isLoading: false, snackList: newState }

		default:
			return { ...state }
	}
}