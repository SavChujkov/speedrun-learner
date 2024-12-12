import {
    PLAYER_TIMING_CHANGE_INIT,
    PLAYER_TIMING_CHANGE_SET
} from "../../actions/player-control-actions/player-timing-actions"


const initialState = {
    need_to_seek: false,
    seek_timing: 0,
}



export const playerTimingReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_TIMING_CHANGE_INIT:
            return {
                need_to_seek: true,
                seek_timing: action.seek_timing
            }

        case PLAYER_TIMING_CHANGE_SET:
            return {
                need_to_seek: false,
                seek_timing: state.seek_timing,
            }

        default:
            return state;
    }
}