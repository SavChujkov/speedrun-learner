export const GET_TIMINGS_ALL_START = 'GET_TIMINGS_START'
export const GET_TIMINGS_ALL_SUCCESS = 'GET_TIMINGS_SUCCESS'
export const GET_TIMINGS_ALL_FAILED = 'GET_TIMINGS_FAILED'



export function getTimingsAllAction(baseUrl) {
    // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
    const timingsApiUrl = baseUrl + "/timings/timings_all"
    console.log(timingsApiUrl, "full path to all timings")
    return function (dispatch) {
        //вот это можно вынести в мидлвару как логирование
        dispatch({
            type: GET_TIMINGS_ALL_START
        })
        fetch(timingsApiUrl).then(res => {
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
                    type: GET_TIMINGS_ALL_SUCCESS,
                    ingredients: payload
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_TIMINGS_ALL_FAILED
                })
            })
    }
} 