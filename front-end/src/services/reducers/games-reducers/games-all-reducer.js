import {
    GET_GAMES_ALL_START,
    GET_GAMES_ALL_FAILED,
    GET_GAMES_ALL_SUCCESS
}
    from "../../actions/games-actions/games-all-action"


const initialState = {
    gamesAllFetching: false,
    gamesAllSuccessFetching: false,
    gamesAllFailedFetching: false,
    gamesAllList: []
}


export const gamesAllReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES_ALL_START:
            console.log(action.ingredients, "get games")
            return {
                ...state,
                gamesAllFetching: true,
                gamesAllFailedFetching: false,
            }

        case GET_GAMES_ALL_SUCCESS:

            return {
                ...state,
                gamesAllList: action.ingredients,
                gamesAllFetching: false,
                gamesAllSuccessFetching: true,
            }

        case GET_GAMES_ALL_FAILED:
            return {
                ...state,
                gamesAllFetching: false,
                gamesAllFailedFetching: true,
            }

        default:
            return state;
    }
}