import { ReduxActionReturnType } from '../../types/partials';
import {
    UPLOAD_CARDS, CLEAR_CARDS
} from './action';

export const current_choosen_cards = (state: string[] = [], action: ReduxActionReturnType) => {
    switch (action.type) {
        case UPLOAD_CARDS:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_CARDS:
            return {
                ...{}
            }
        default:
            return state
    }
}