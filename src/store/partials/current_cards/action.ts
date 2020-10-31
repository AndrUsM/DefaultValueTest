import { CardTypeRedux } from '../../../components/shared/Card/types';
import { ReduxActionType_Payload, ReduxActionType_Simple } from '../../types/partials';

export const UPLOAD_CARDS = 'UPLOAD_CARDS';
export const CLEAR_CARDS = 'CLEAR_CARDS';

export const uploadChoosenCards: ReduxActionType_Payload<CardTypeRedux> = (data) => {
    return {
        type: UPLOAD_CARDS,
        payload: data
    }
}

export const clearChoosenCardsState: ReduxActionType_Simple = () => {
    return {
        type: CLEAR_CARDS
    }
}