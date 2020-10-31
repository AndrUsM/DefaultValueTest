import { SET_MODAL_WINDOW_STATE, CLEAR_MODAL_WINDOW_STATE } from './actions';
import { ReduxActionReturnType } from '../../../types/partials';

export const modal_window_status = (state = {}, action: ReduxActionReturnType) => {
    switch (action.type) {
        case SET_MODAL_WINDOW_STATE:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_MODAL_WINDOW_STATE:
            return {
                ...{}
            }
        default: return state
    }
}

