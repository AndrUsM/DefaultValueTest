import { CardType, CardPropsType } from './types';
import React from 'redux';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearChoosenCardsState, uploadChoosenCards } from '../../../store/partials/current_cards/action';
import { ReduxStateType } from '../../../store/types/state';
import { useEffect, useState } from 'react';
import { uploadGuessedCards } from '../../../store/partials/guessed_card_list/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addMovesCount } from '../../../store/partials/moves_counter/action';
import { uploadCurrentCard } from '../../../store/partials/current_card/action';
import { GameStatusType } from '../../../store/partials/game_status/types';

export function Card(props: CardPropsType) {
    const {
        title,
        type,
        id,
        icon
    } = props;
    const dispatch = useDispatch();
    const choosenCardsRedux = useSelector((state: ReduxStateType) => state.current_choosen_cards)
    const guessedCardsListRedux = useSelector((state: ReduxStateType) => state.guessed_card_list);
    const currentCardRedux = useSelector((state: ReduxStateType) => state.current_card);
    const gameStatusRedux = useSelector((state: ReduxStateType) => state.game_status);

    const _current_choosen_cards = Array.from(Object.values(choosenCardsRedux));
    const _guessed_cards_list = Array.from(Object.values(guessedCardsListRedux));

    const checkChoonenCardsAmount = _current_choosen_cards.length <= 2;
    const checkExistence = (
        !_current_choosen_cards.find(item => item.id === id) &&
        !_guessed_cards_list.includes(type.toString())
    );

    let [guessed, setGuessed] = useState(false);
    let [selected, setSelected] = useState(false);
    let [preview, setPreview] = useState(false);

    const current_card_value: CardType = {
        id: id,
        title: title,
        type: type
    }

    useEffect(() => {
        switch(gameStatusRedux){
            case GameStatusType.RESET:{
                setSelected(false);
                setPreview(false);
                setGuessed(false);
                break;
            }
            default:{
                break;
            }
        }
    }, [gameStatusRedux])

    useEffect(() => {
        if (_current_choosen_cards.length === 2) {
            increaseCounter();
        }
    }, [selected])

    useEffect(() => {
        if (_current_choosen_cards.length) {
            onSelect();
            checkCardPair();
            switch (_current_choosen_cards.length) {
                case 2: {
                    setTimeout(() => {
                        dispatch(clearChoosenCardsState());
                    }, 1000);
                    break;
                }
            }
        }
    }, [_current_choosen_cards.length])

    function onSelect() {
        if (_current_choosen_cards.find(item => item.id === id))
            setSelected(true)
    }

    function checkCardPair() {
        const types = _current_choosen_cards.map(item => item.type);
        if (types.length === 2) {
            const guessedCard = types[0] ? types[0].toString() : '';
            // check: if array has 2 same items
            // type of current card is equal to selected type
            if (new Set(types).size === 1 && type === +guessedCard)
                guessPair(guessedCard);
            else
                previewWrongCards();
            unsetPreview();
        }
    }

    function guessPair(guessedCard: string) {
        setGuessed(true);
        dispatch(uploadGuessedCards(
            [
                ..._guessed_cards_list,
                guessedCard
            ]
        ));
    }

    function previewWrongCards() {
        const choosesCardIds = _current_choosen_cards.map(item => item.id);
        if (choosesCardIds.includes(id)) {
            setPreview(true);
        }
    }

    function unsetPreview() {
        setTimeout(() => {
            setPreview(false);
            setSelected(false);
        }, 1000)
    }

    function increaseCounter() {
        dispatch(addMovesCount())
    }

    function addToStore() {
        if (
            checkChoonenCardsAmount &&
            checkExistence
        ) {
            dispatch(
                uploadChoosenCards([
                    ..._current_choosen_cards,
                    current_card_value
                ])
            )
        }
    }

    function setClasses() {
        return [
            `${guessed ? ' card_status-guessed' : ''}`,
            `${selected ? ' card_status-selected' : ''}`,
            `${preview ? ' card_status-preview' : ''}`
        ].join('');
    }

    function onClick() {
        if (!guessed) {
            addToStore();
            setCurrentCard();
        }
    }

    function setCurrentCard() {
        if (id === currentCardRedux.id) return
        dispatch(uploadCurrentCard(current_card_value));
    }

    return (
        <article
            id={id}
            onClick={
                () => onClick()
            }
            className={
                `card__item ${setClasses()}`
            }>
            <FontAwesomeIcon
                icon={icon}
            />
        </article>
    )
}