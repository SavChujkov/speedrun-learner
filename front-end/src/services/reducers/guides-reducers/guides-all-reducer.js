import {
    GET_GUIDES_ALL_START,
    GET_GUIDES_ALL_SUCCESS,
    GET_GUIDES_ALL_FAILED

} from "../../actions/guides-actions/guides-all-action"


const initialState = {
    guidesAllFetching: false,
    guidesAllSuccessFetching: false,
    guidesAllFailedFetching: false,
    guidesAllList: []
}


export const guidesAllReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GUIDES_ALL_START:
            return {
                ...state,
                guidesAllFetching: true,
                guidesAllFailedFetching: false,
            }

        case GET_GUIDES_ALL_SUCCESS:
            console.log(action.ingredients, "get guides")
            return {
                ...state,
                guidesAllList: action.ingredients,
                guidesAllFetching: false,
                guidesAllSuccessFetching: true,
            }

        case GET_GUIDES_ALL_FAILED:
            return {
                ...state,
                guidesAllFetching: false,
                guidesAllFailedFetching: true,
            }

        default:
            return state;
    }
}