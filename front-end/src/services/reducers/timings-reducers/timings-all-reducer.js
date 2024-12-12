import {
    GET_TIMINGS_ALL_START,
    GET_TIMINGS_ALL_SUCCESS,
    GET_TIMINGS_ALL_FAILED
} from "../../actions/timings-actions/timings-all-action"


const initialState = {
    timingsAllFetching: false,
    timingsAllSuccessFetching: false,
    timingsAllFailedFetching: false,
    timingsAllList: []
}


export const timingsAllReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TIMINGS_ALL_START:
            return {
                ...state,
                timingsAllFetching: true,
                timingsAllFailedFetching: false,
            }

        case GET_TIMINGS_ALL_SUCCESS:
            return {
                ...state,
                timingsAllList: action.ingredients,
                timingsAllFetching: false,
                timingsAllSuccessFetching: true,
            }

        case GET_TIMINGS_ALL_FAILED:
            return {
                ...state,
                timingsAllFetching: false,
                timingsAllFailedFetching: true,
            }

        default:
            return state;
    }
}