import { ReduxActionType_Payload, ReduxActionType_Simple } from '../../types/partials';

export const UPLOAD_GUESSED_CARDS = 'UPLOAD_GUESSED_CARDS';
export const CLEAR_GUESSED_CARDS = 'CLEAR_GUESSED_CARDS';

export const uploadGuessedCards: ReduxActionType_Payload<string[]> = (data) => {
    return {
        type: UPLOAD_GUESSED_CARDS,
        payload: data
    }
}

export const clearGuessedCardsState: ReduxActionType_Simple = () => {
    return {
        type: CLEAR_GUESSED_CARDS
    }
}