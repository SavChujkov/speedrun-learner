export const GET_GUIDES_ALL_START = 'GET_GUIDES_ALL_START'
export const GET_GUIDES_ALL_SUCCESS = 'GET_GUIDES_ALL_SUCCESS'
export const GET_GUIDES_ALL_FAILED = 'GET_GUIDES_ALL_FAILED'



export function getGuidesAllAction(baseUrl) {
    // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
    const gamesApiUrl = baseUrl + "/guides_sets/guides_all"
    return function (dispatch) {
        //вот это можно вынести в мидлвару как логирование
        dispatch({
            type: GET_GUIDES_ALL_START
        })
        fetch(gamesApiUrl).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                //вот это можно вынести в мидлвару как логирование
                throw new Error("failed fetching timings")
            }
        })
            .then(payload => {
                console.log(payload, "payload of timings")
                dispatch({
                    type: GET_GUIDES_ALL_SUCCESS,
                    ingredients: payload
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_GUIDES_ALL_FAILED
                })
            })
    }
} 