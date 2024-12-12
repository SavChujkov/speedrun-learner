import {
    PLAYER_STATE_CHANGE,
    PLAYER_STATE_RESET
} from "../../actions/player-control-actions/player-state-action"


const initialState = {
    played: 0,
    ph_timing: 0,
    ph_range: 20,
    need_to_seek: false,
    seek_timing: 0,
}



export const playerStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_STATE_CHANGE:
            const { type, ...settings } = action;
            return {
                ...state,
                ...settings
            }

        case PLAYER_STATE_RESET:
            return {
                ...initialState
            }

        default:
            return state;
    }
}