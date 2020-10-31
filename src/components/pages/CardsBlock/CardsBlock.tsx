import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearChoosenCardsState } from '../../../store/partials/current_cards/action';
import { setGameStatus } from '../../../store/partials/game_status/action';
import { GameStatusType } from '../../../store/partials/game_status/types';
import { clearGuessedCardsState } from '../../../store/partials/guessed_card_list/action';
import { setCurrentModalContent } from '../../../store/partials/modal_window/current_content/actions';
import { setModalWindowState } from '../../../store/partials/modal_window/status/actions';
import { clearMovesCountState } from '../../../store/partials/moves_counter/action';
import { ReduxStateType } from '../../../store/types/state';
import { Card } from '../../shared/Card';
import { CardPropsType } from '../../shared/Card/types';
import { CardsContainer } from '../../shared/CardsContainer';
import { ModalContentIdentificator, ModalWindowStatus } from '../../shared/modalWindow/type';

export function CardsBlock(props: {
    render_data: CardPropsType[]
}) {
    const dispatch = useDispatch();
    const guessedCardsList = useSelector((state: ReduxStateType) => state.guessed_card_list);
    const _guessedCardsList = Array.from(Object.values(guessedCardsList));

    const { render_data } = props;

    function onWin() {
        dispatch(setModalWindowState({
            status: ModalWindowStatus.open
        }));
        dispatch(setCurrentModalContent({
            id: ModalContentIdentificator.WIN_MESSAGE
        }));

        setTimeout(() => {
            restartGame();
        }, 5000)
    }

    function restartGame() {
        dispatch(setGameStatus(GameStatusType.RESET));
        dispatch(setModalWindowState({
            status: ModalWindowStatus.close
        }));
        dispatch(setCurrentModalContent({
            id: ModalContentIdentificator.DEFAULT
        }));
        dispatch(clearChoosenCardsState());
        dispatch(clearGuessedCardsState());
        dispatch(clearMovesCountState());
    }

    useEffect(() => {
        if (_guessedCardsList.length === render_data.length / 2) {
            onWin()
        } else {
            dispatch(setModalWindowState({
                status: ModalWindowStatus.close
            }));
        }
    }, [_guessedCardsList.length])

    return (
        <div>
            <CardsContainer>
                {
                    render_data.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                icon={item.icon}
                                id={item.id}
                                type={item.type}
                                title={item.title}
                            />
                        )
                    })
                }
            </CardsContainer>
        </div>
    )
}