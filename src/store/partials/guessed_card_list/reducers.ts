import { CardTypeRedux } from '../../../components/shared/Card/types';
import { ReduxActionReturnType } from '../../types/partials';
import {
    UPLOAD_GUESSED_CARDS, CLEAR_GUESSED_CARDS
} from './action';

export const guessed_card_list = (state: CardTypeRedux = [], action: ReduxActionReturnType) => {
    switch (action.type) {
        case UPLOAD_GUESSED_CARDS:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_GUESSED_CARDS:
            return {
                ...{}
            }
        default:
            return state
    }
}