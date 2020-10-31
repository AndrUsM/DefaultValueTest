import { ReduxActionType_Simple } from '../../types/partials';

export const ADD_MOVES_COUNT = 'ADD_MOVES_COUNT';
export const CLEAR_MOVES_COUNT_STATE = 'CLEAR_MOVES_COUNT_STATE';

export const addMovesCount: ReduxActionType_Simple = () => {
    return {
        type: ADD_MOVES_COUNT
    }
}

export const clearMovesCountState: ReduxActionType_Simple = () => {
    return {
        type: CLEAR_MOVES_COUNT_STATE
    }
}