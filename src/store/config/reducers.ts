import { combineReducers } from 'redux';

import { current_card } from '../partials/current_card/reducers';
import { current_choosen_cards } from '../partials/current_cards/reducers';
import { guessed_card_list } from '../partials/guessed_card_list/reducers';
import { current_modal_content } from '../partials/modal_window/current_content/reducers';
import { modal_window_status } from '../partials/modal_window/status/reducers';
import { moves_counter } from '../partials/moves_counter/reducers';
import { game_status } from '../partials/game_status/reducers';

export const appReducer = combineReducers({
    current_choosen_cards: current_choosen_cards,
    guessed_card_list: guessed_card_list,
    moves_counter: moves_counter,
    current_card: current_card,
    modal_window_status: modal_window_status,
    modal_window_content: current_modal_content,
    game_status: game_status
});