import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./types"

// getting data actions
export const fetchRequest = (page) => {
  return {
    type: FETCH_REQUEST,
    payload: page
  }
}

export const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  }
}

export const fetchError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error
  }
}