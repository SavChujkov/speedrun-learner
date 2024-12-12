export const GET_GAMES_ALL_START = 'GET_GAMES_ALL_START'
export const GET_GAMES_ALL_SUCCESS = 'GET_GAMES_ALL_SUCCESS'
export const GET_GAMES_ALL_FAILED = 'GET_GAMES_ALL_FAILED'



export function getGamesAllAction(baseUrl) {
    // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
    const gamesApiUrl = baseUrl + "/games/games_all"
    return function (dispatch) {
        //вот это можно вынести в мидлвару как логирование
        console.log(123)
        dispatch({
            type: GET_GAMES_ALL_START
        })
        fetch(gamesApiUrl).then(res => {
            console.log("payload of timings")
            if (res.ok) {
                return res.json()
            } else {
                //вот это можно вынести в мидлвару как логирование
                throw new Error("failed fetching timings")
            }
        })
            .then(payload => {

                dispatch({
                    type: GET_GAMES_ALL_SUCCESS,
                    ingredients: payload
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_GAMES_ALL_FAILED
                })
            })
    }
} 