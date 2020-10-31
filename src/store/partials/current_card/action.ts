import { CardType } from '../../../components/shared/Card/types';
import { ReduxActionType_Payload, ReduxActionType_Simple } from '../../types/partials';

export const UPLOAD_CURRENT_CARD = 'UPLOAD_CURRENT_CARD';
export const CLEAR_CARD_STATE = 'CLEAR_CARD_STATE';

export const uploadCurrentCard: ReduxActionType_Payload<CardType> = (data) => {
    return {
        type: UPLOAD_CURRENT_CARD,
        payload: data
    }
}

export const clearCurrentCardState: ReduxActionType_Simple = () => {
    return {
        type: CLEAR_CARD_STATE
    }
}