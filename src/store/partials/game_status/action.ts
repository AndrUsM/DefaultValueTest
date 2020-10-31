import { ReduxActionType_Payload, ReduxActionType_Simple } from '../../types/partials';
import { GameStatusType } from './types';

export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const CLEAR_GAME_STATUS = 'CLEAR_GAME_STATUS';

export const setGameStatus: ReduxActionType_Payload<GameStatusType> = (data) => {
    return {
        type: SET_GAME_STATUS,
        payload: data
    }
}

export const clearCurrentCardState: ReduxActionType_Simple = () => {
    return {
        type: CLEAR_GAME_STATUS
    }
}