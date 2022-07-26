import { FETCH_REQUEST, FETCH_SUCCESS } from "./types";

const initialState = {
	movieList: [],
	isLoading: false,
	errors: undefined,
	status: undefined,
	movie: undefined,
	currentPage: 1,
	numOfPages: 0,
}

export default function movieReducer(state = initialState, action) {

	switch (action.type) {
		case FETCH_REQUEST:
			return { ...state, isLoading: true }

		case FETCH_SUCCESS:
			return {...state, isLoading: false, movieList: action.payload, currentPage: action.payload.page, numOfPages: action.payload.total_pages}

		default:
			return { ...state }
	}

}