import {
    GET_GUIDES_GAME_FAILED,
    GET_GUIDES_GAME_SUCCESS,
    GET_GUIDES_GAME_START
} from "../../actions/guides-actions/guides-game-action"

const initialState = {
    guidesGameFetching: false,
    guidesGameSuccessFetching: false,
    guidesGameFailedFetching: false,
    guidesGameList: []
}


export const guidesGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GUIDES_GAME_START:
            return {
                ...state,
                guidesGameFetching: true,
                guidesGameFailedFetching: false,
            }

        case GET_GUIDES_GAME_SUCCESS:
            return {
                ...state,
                guidesGameList: action.ingredients,
                guidesGameFetching: false,
                guidesGameSuccessFetching: true,
            }

        case GET_GUIDES_GAME_FAILED:
            return {
                ...state,
                guidesGameFetching: false,
                guidesGameFailedFetching: true,
            }

        default:
            return state;
    }
}