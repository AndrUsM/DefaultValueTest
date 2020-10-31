import { SET_CURRENT_MODAL_CONTENT, CLEAR_CURRENT_MODAL_COMTENT_STATE } from './actions';
import { ReduxActionReturnType } from '../../../types/partials';

export const current_modal_content = (state = {}, action: ReduxActionReturnType) => {
    switch (action.type) {
        case SET_CURRENT_MODAL_CONTENT:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_CURRENT_MODAL_COMTENT_STATE:
            return {
                ...{}
            }
        default: return state
    }
}

