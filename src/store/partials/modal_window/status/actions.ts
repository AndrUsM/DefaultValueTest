import { ModalWindowType } from "../../../../components/shared/modalWindow/type";
import { ReduxActionType_Payload, ReduxActionType_Simple } from "../../../types/partials";

export const SET_MODAL_WINDOW_STATE = 'SET_MODAL_WINDOW_STATE';
export const CLEAR_MODAL_WINDOW_STATE = "CLEAR_MODAL_WINDOW_STATE";

export const setModalWindowState: ReduxActionType_Payload<ModalWindowType> = (data) => {
    return {
        type: SET_MODAL_WINDOW_STATE,
        payload: data
    }
}

export const clearModalWindowState: ReduxActionType_Simple = () => {
    return {
        type: CLEAR_MODAL_WINDOW_STATE
    }
}