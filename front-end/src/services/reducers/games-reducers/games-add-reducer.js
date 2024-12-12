import {
    GAMES_ADD_START,
    GAMES_ADD_SUCCESS,
    GAMES_ADD_FAILED
} from "../../actions/games-actions/games-add-action"


const initialState = {
    gamesAddStart: false,
    gamesAddSuccess: false,
    gamesAddFailed: false,
}



export const gamesAddReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAMES_ADD_START:
            return {
                ...state,
                gamessAllFetching: true,
                gamessAllFailedFetching: false,
            }

        case GAMES_ADD_SUCCESS:
            return {
                ...state,
                gamessAllList: action.ingredients,
                gamessAllFetching: false,
                gamessAllSuccessFetching: true,
            }

        case GAMES_ADD_FAILED:
            return {
                ...state,
                gamessAllFetching: false,
                gamessAllFailedFetching: true,
            }

        default:
            return state;
    }
}