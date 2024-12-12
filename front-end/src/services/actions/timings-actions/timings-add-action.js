export const TIMING_ADD_START = 'TIMING_ADD_START'
export const TIMING_ADD_SUCCESS = 'TIMING_ADD_SUCCESS'
export const TIMING_ADD_FAILED = 'TIMING_ADD_FAILED'



export function addTimingAction(baseUrl, form) {
    // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
    const timingsApiUrl = baseUrl + "/timings/add_timing"
    return function (dispatch) {
        //вот это можно вынести в мидлвару как логирование
        console.log("timing start adding")
        dispatch({
            type: TIMING_ADD_START
        })
        fetch(timingsApiUrl,
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
                    type: TIMING_ADD_SUCCESS,
                    ingredients: payload.data
                })
            })
            .catch(err => {
                dispatch({
                    type: TIMING_ADD_FAILED
                })
            })
    }
} 