import { FETCH_REQUEST, FETCH_SUCCESS } from "./types";

const initialState = {
	movieList: [],
	isLoading: false,
	errors: undefined,
	status: undefined,
	movie: undefined,
}

export default function movieReducer(state = initialState, action) {

	switch (action.type) {
		case FETCH_REQUEST:
			return { ...state, isLoading: true }

		case FETCH_SUCCESS:
			return {...state, isLoading: false, movieList: action.payload}

		default:
			return { ...state }
	}

}