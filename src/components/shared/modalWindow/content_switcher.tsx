import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxStateType } from '../../../store/types/state';
import { WinMessage } from '../../pages/modalContent/win_message';
import { ModalContentIdentificator, ModalContentIdentificatorType } from './type';

export function ModalWindowContentSwitcher() {
    const content_id: ModalContentIdentificatorType = useSelector((state: ReduxStateType) => state.modal_window_content);

    switch (content_id.id) {
        case ModalContentIdentificator.WIN_MESSAGE: {
            return <WinMessage />;
        }
        case ModalContentIdentificator.DEFAULT:
        default: {
            return <></>;
        }
    }
}