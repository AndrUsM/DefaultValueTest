import { ReduxActionReturnType } from '../../types/partials';
import {
    SET_GAME_STATUS, CLEAR_GAME_STATUS
} from './action';
import { GameStatusType } from './types';

export const game_status = (state: GameStatusType = GameStatusType.START, action: ReduxActionReturnType) => {
    switch (action.type) {
        case SET_GAME_STATUS:
            return action.payload;
        case CLEAR_GAME_STATUS:
            return 0;
        default:
            return state
    }
}