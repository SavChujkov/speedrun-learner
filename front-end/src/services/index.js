import { combineReducers } from 'redux';
//timings
import { timingsGuideReducer } from './reducers/timings-reducers/timings-guide-reducer';
import { timingsAllReducer } from './reducers/timings-reducers/timings-all-reducer';
import { timingAddReducer } from './reducers/timings-reducers/timings-add-reducer';
//player main settings
import { playerMainSettingsReducer } from './reducers/player-control-reducers/player-main-reducer';
//player control
import { playerStateReducer } from './reducers/player-control-reducers/player-state-reducer';
import { playerTimingReducer } from './reducers/player-control-reducers/player-timing-reducer';
//games
import { gamesAllReducer } from './reducers/games-reducers/games-all-reducer';
import { gamesAddReducer } from './reducers/games-reducers/games-add-reducer';
//guides
import { guidesAllReducer } from './reducers/guides-reducers/guides-all-reducer';
import { guidesGameReducer } from './reducers/guides-reducers/guides-game-reducer';

export const rootReducer = combineReducers({
    timingsGuide: timingsGuideReducer,
    timingsAll: timingsAllReducer,
    timingsAdd: timingAddReducer,
    playerMainSettings: playerMainSettingsReducer,
    playerState: playerStateReducer,
    playerTiming: playerTimingReducer,
    gamesAll: gamesAllReducer,
    gamesAdd: gamesAddReducer,
    guidesAll: guidesAllReducer,
    guidesGame: guidesGameReducer
})