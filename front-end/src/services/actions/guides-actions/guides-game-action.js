export const GET_GUIDES_GAME_START = 'GET_TIMINGS_GUIDE_START'
export const GET_GUIDES_GAME_SUCCESS = 'GET_TIMINGS_GUIDE_SUCCESS'
export const GET_GUIDES_GAME_FAILED = 'GET_TIMINGS_GUIDE_FAILED'



export function getGuidesGameAction(baseUrl, form) {
    // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
    const timingsApiUrl = baseUrl + "/guides_sets/guides_of_game"
    return function (dispatch) {
        //вот это можно вынести в мидлвару как логирование
        console.log("timings start loading")
        dispatch({
            type: GET_GUIDES_GAME_START
        })
        fetch(timingsApiUrl,
            {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(form)
            }
        ).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                //вот это можно вынести в мидлвару как логирование
                throw new Error("failed fetching timings")
            }
        })
            .then(payload => {
                console.log(payload, "this is guides of game")
                dispatch({
                    type: GET_GUIDES_GAME_SUCCESS,
                    ingredients: payload
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_GUIDES_GAME_FAILED
                })
            })
    }
} 