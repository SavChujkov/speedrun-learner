export const GET_TIMINGS_GUIDE_START = 'GET_TIMINGS_GUIDE_START'
export const GET_TIMINGS_GUIDE_SUCCESS = 'GET_TIMINGS_GUIDE_SUCCESS'
export const GET_TIMINGS_GUIDE_FAILED = 'GET_TIMINGS_GUIDE_FAILED'
export const GET_TIMINGS_GUIDE_FLUSH = 'GET_TIMINGS_GUIDE_FLUSH'


export function getTimingsGuideAction(baseUrl, form) {
    // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
    const timingsApiUrl = baseUrl + "/timings/timings_of_guide"
    return function (dispatch) {
        //вот это можно вынести в мидлвару как логирование
        console.log("timings start loading")
        dispatch({
            type: GET_TIMINGS_GUIDE_START
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
                dispatch({
                    type: GET_TIMINGS_GUIDE_SUCCESS,
                    ingredients: payload
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_TIMINGS_GUIDE_FAILED
                })
            })
    }
} 