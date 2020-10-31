import { CardType, CardTypeRedux } from "../../components/shared/Card/types";
import { GameStatusType } from "../partials/game_status/types";

export type ReduxStateType = {
    current_choosen_cards: CardTypeRedux,
    guessed_card_list: string[],
    moves_counter: number,
    current_card: CardType,
    modal_window_status: any,
    modal_window_content: any,
    game_status: GameStatusType
}