import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameStatus } from '../../../store/partials/game_status/action';
import { GameStatusType } from '../../../store/partials/game_status/types';
import { ReduxStateType } from '../../../store/types/state';
import "./styles.scss";

export function MovesIndicator() {
    const movesCountAmount = useSelector((state: ReduxStateType) => state.moves_counter);
    const dispatch = useDispatch();

    return (
        <section className="header">
            <article className="indicator_block">
                <span className="indicator__title">Moves</span>
                <span className="indicator__value">{+movesCountAmount}</span>
            </article>
            <button
                className="button_reset"
                onClick={
                    () => {
                        dispatch(
                            setGameStatus(GameStatusType.RESET)
                        );
                    }
                }
            >RESET</button>
        </section>
    )
}