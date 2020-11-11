import { ModalWindowStatus, ModalWindowType } from './type';
import React, { ReactNode, useState, useEffect } from 'react';
import "./index.scss";
import { useSelector, useDispatch } from 'react-redux';
import { ModalWindowContentSwitcher } from './content_switcher';
import { joinStringArray } from '../../../utils/string';
import { setModalWindowState } from '../../../store/partials/modal_window/status/actions';
import { ButtonGeneral } from '../../shared/button';
import { ReduxStateType } from '../../../store/types/state';

export function ModalWindow(props: {
    children?: ReactNode
}) {
    const dispatch = useDispatch();
    const status_class = {
        default: 'modal-window',
        open: 'modal-window_status_open',
        close: 'modal-window_status_close'
    }

    let open_class = joinStringArray([status_class.default, status_class.open]);
    let close_class = joinStringArray([status_class.default, status_class.close]);

    const redux_status: ModalWindowType = useSelector((state: ReduxStateType) => state.modal_window_status);
    let [status, setStatus] = useState<ModalWindowStatus>(ModalWindowStatus.close);

    useEffect(() => {
        getStatus();
    })

    function getStatus() {
        switch (redux_status.status) {
            case ModalWindowStatus.open: {
                setStatus(ModalWindowStatus.open);
                break;
            }
            default: {
                setStatus(ModalWindowStatus.close);
                break;
            }
        }
    }

    function getStatusClass() {
        return status === ModalWindowStatus.open ?
            open_class : close_class;
    }

    function closeWindow() {
        dispatch(setModalWindowState({
            status: ModalWindowStatus.close
        }))
    }

    return (
        <section className={getStatusClass()}>
            <article className="modal-window__bg">
                {/* {props.children} */}
                <CloseButton action={closeWindow} />
                <article className="modal-window__content">
                    <ModalWindowContentSwitcher />
                </article>
            </article>
        </section>
    )
}

function CloseButton(props: {
    action: Function
}) {
    return (
        <ButtonGeneral className="modal-window__button" action={
            () => props.action()
        }>
            &times;
        </ButtonGeneral>
    )
}