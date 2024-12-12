import {
    TIMING_ADD_START,
    TIMING_ADD_FAILED,
    TIMING_ADD_SUCCESS
} from "../../actions/timings-actions/timings-add-action";



const initialState = {
    timingAddStart: false,
    timingAddSuccess: false,
    timingAddFailed: false,
}



export const timingAddReducer = (state = initialState, action) => {
    switch (action.type) {
        case TIMING_ADD_START:
            return {
                ...state,
                timingsAllFetching: true,
                timingsAllFailedFetching: false,
            }

        case TIMING_ADD_SUCCESS:
            return {
                ...state,
                timingsAllList: action.ingredients,
                timingsAllFetching: false,
                timingsAllSuccessFetching: true,
            }

        case TIMING_ADD_FAILED:
            return {
                ...state,
                timingsAllFetching: false,
                timingsAllFailedFetching: true,
            }

        default:
            return state;
    }
}