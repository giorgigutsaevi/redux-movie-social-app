import { CREATE_REQUEST, CREATE_SUCCESS, FETCH_REQUEST, FETCH_SUCCESS } from "./types";


const initialState = {
	snacklist: [],
	isLoading: false,
	errors: undefined,
	status: undefined,
	snack: undefined,
}


export default function snackReducer(state = initialState, action) {

	switch (action.type) {
		case FETCH_REQUEST:
		case CREATE_REQUEST:
			return { ...state, isLoading: true }

		case FETCH_SUCCESS:
			return { ...state, isLoading: false, candylist: action.payload }

		case CREATE_SUCCESS:
			return { ...state, isLoading: false, candylist: [...state.candylist, action.payload] }
		default:
			return { ...state }
	}
}