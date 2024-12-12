import {
    GET_TIMINGS_GUIDE_START,
    GET_TIMINGS_GUIDE_SUCCESS,
    GET_TIMINGS_GUIDE_FAILED,
    GET_TIMINGS_GUIDE_FLUSH
} from "../../actions/timings-actions/timings-guide-action"

const initialState = {
    timingsGuideFetching: false,
    timingsGuideSuccessFetching: false,
    timingsGuideFailedFetching: false,
    timingsGuideList: []
}


export const timingsGuideReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TIMINGS_GUIDE_START:
            return {
                ...state,
                timingsGuideFetching: true,
                timingsGuideFailedFetching: false,
            }

        case GET_TIMINGS_GUIDE_SUCCESS:
            return {
                ...state,
                timingsGuideList: action.ingredients,
                timingsGuideFetching: false,
                timingsGuideSuccessFetching: true,
            }

        case GET_TIMINGS_GUIDE_FAILED:
            return {
                ...state,
                timingsGuideFetching: false,
                timingsGuideFailedFetching: true,
            }

        case GET_TIMINGS_GUIDE_FLUSH:
            return {
                ...initialState
            }


        default:
            return state;
    }
}