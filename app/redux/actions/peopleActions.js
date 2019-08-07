import { FETCHING_PEOPLE_REQUEST, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from './types';
export const fetchingPeopleRequest= (param) => ({
  type: FETCHING_PEOPLE_REQUEST
})
export const fetchingPeopleSuccess = (json) => ({
  type: FETCHING_PEOPLE_SUCCESS,
  payload: json
})
export const fetchingPeopleFailure = (error) => ({
  type: fetchingPeopleFailure,
  payload: error
})

