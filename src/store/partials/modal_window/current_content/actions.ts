import { ModalContentIdentificatorType } from "../../../../components/shared/modalWindow/type";
import { ReduxActionType_Payload, ReduxActionType_Simple } from "../../../types/partials";

export const SET_CURRENT_MODAL_CONTENT = 'SET_CURRENT_MODAL_CONTENT';
export const CLEAR_CURRENT_MODAL_COMTENT_STATE = "CLEAR_CURRENT_MODAL_COMTENT_STATE";

export const setCurrentModalContent: ReduxActionType_Payload<ModalContentIdentificatorType> = (data) => {
    return {
        type: SET_CURRENT_MODAL_CONTENT,
        payload: data
    }
}

export const clearCurrentModalContentState: ReduxActionType_Simple = () => {
    return {
        type: CLEAR_CURRENT_MODAL_COMTENT_STATE
    }
}