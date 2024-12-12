import {
    PLAYER_MAIN_SETTINGS_CHANGE,
    PLAYER_MAIN_SETTINGS_RESET
} from "../../actions/player-control-actions/player-main-actions"


const initialState = {
    controls: true,
    light: true,
    muted: false,
    duration: 0,
    url: `https://www.twitch.tv/videos/1854672278`,
}



export const playerMainSettingsReducer = (state = initialState, action) => {
    switch (action.type) {


        case PLAYER_MAIN_SETTINGS_CHANGE:
            const { type, ...settings } = action;
            return {
                ...state,
                duration: action.duration
            }

        case PLAYER_MAIN_SETTINGS_RESET:
            return {
                ...initialState
            }

        default:
            return state;
    }
}