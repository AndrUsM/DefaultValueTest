import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameStatus } from '../../../store/partials/game_status/action';
import { GameStatusType } from '../../../store/partials/game_status/types';
import { clearMovesCountState } from '../../../store/partials/moves_counter/action';
import { ReduxStateType } from '../../../store/types/state';
import { addMirrorItems } from '../../../utils/shuffleArray';
import { CardsBlock } from './CardsBlock';
import { render_data } from './data';

export function CardsBlockWrapper() {
    let _render_data = addMirrorItems(render_data);
    const dispatch = useDispatch();
    _render_data = getSortedData()

    function getSortedData() {
        return _render_data.sort(() => Math.random() - 0.5);
    }

    const gameStatusRedux = useSelector((state: ReduxStateType) => state.game_status);

    useEffect(() => {
        switch (gameStatusRedux) {
            case GameStatusType.RESET: {
                dispatch(clearMovesCountState());
                dispatch(setGameStatus(GameStatusType.START))
                break;
            }
            default: break;
        }
    }, [gameStatusRedux])

    return (
        <CardsBlock
            render_data={_render_data}
        />
    )
}