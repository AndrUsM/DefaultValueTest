import { ReduxActionReturnType } from '../../types/partials';
import {
    ADD_MOVES_COUNT, CLEAR_MOVES_COUNT_STATE
} from './action';

export const moves_counter = (state: number = 0, action: ReduxActionReturnType) => {
    switch (action.type) {
        case ADD_MOVES_COUNT:
            state++;
            return state
        case CLEAR_MOVES_COUNT_STATE:
            return 0;
        default:
            return state
    }
}