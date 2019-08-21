import { FETCHING_PEOPLE_REQUEST, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from './types';
export const fetchingPeopleRequest= (param) => ({
  type: FETCHING_PEOPLE_REQUEST
})
export const fetchingPeopleSuccess = (json) => ({
  type: FETCHING_PEOPLE_SUCCESS,
  payload: json
})
export const fetchingPeopleFailure = (error) => ({
  type: FETCHING_PEOPLE_FAILURE,
  payload: error
})

export const fecthPeople = () => {
    return async dispatch => {
        dispatch(fetchingPeopleRequest())
        try {
           let response = await fetch('https://randomuser.me/api/?results=10')
           let json = response.json()
           dispatch(fetchingPeopleSuccess(json.result)) 
        } catch (error) {
            dispatch(fetchingPeopleFailure(error))
        }
    }
}