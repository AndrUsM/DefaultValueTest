import { defaultCardValue } from '../../../components/shared/Card/defaultValues';
import { CardType } from '../../../components/shared/Card/types';
import { ReduxActionReturnType } from '../../types/partials';
import {
    UPLOAD_CURRENT_CARD, CLEAR_CARD_STATE
} from './action';

export const current_card = (state: CardType = defaultCardValue, action: ReduxActionReturnType) => {
    switch (action.type) {
        case UPLOAD_CURRENT_CARD:
            return {
                ...state,
                ...action.payload
            }
        case CLEAR_CARD_STATE:
            return {
                ...{}
            }
        default:
            return state
    }
}