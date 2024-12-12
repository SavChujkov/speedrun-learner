export const GAMES_ADD_START = 'GAMES_ADD_START'
export const GAMES_ADD_SUCCESS = 'GAMES_ADD_SUCCESS'
export const GAMES_ADD_FAILED = 'GAMES_ADD_FAILED'



export function addGameAction(baseUrl, form) {
    const gamesApiUrl = baseUrl + "/games/add_game"
    return function (dispatch) {
        dispatch({
            type: GAMES_ADD_START
        })
        fetch(gamesApiUrl,
            {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
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
                throw new Error("timing failed adding")
            }
        })
            .then(payload => {
                dispatch({
                    type: GAMES_ADD_SUCCESS,
                    ingredients: payload.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GAMES_ADD_FAILED
                })
            })
    }
} 