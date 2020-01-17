import React from 'react';
import PropTypes from 'prop-types';
import {
    Title,
    CardBlock,
} from './styledComponent';

export const CardItem = (props) => {
    const {
        id,
        Guessed,
        isBlocked,
        cardValue,
        getChosenCardFunc,
        setOpenedCardsFunc,
        getGuessedCardsFunc,
        getChosenCardFromState,
        setTemporaryCardsOpenFunc
    } = props;

    const isEmpty = (obj) => {
        for (let key in obj) {
            return false;
        }
        return true;
    };

    const getCheckedCard = () => {
        const firstCheckedCardParams = {
            card_id: id,
            card_value: cardValue,
        };
        let selectedCarts = [];

        if (isEmpty(getChosenCardFromState)) {
            getChosenCardFunc(firstCheckedCardParams);
            selectedCarts = [id];
            setOpenedCardsFunc(selectedCarts);
        } else {

            if (getChosenCardFromState.card_value === cardValue && getChosenCardFromState.card_id !== id) {
                selectedCarts = [id, getChosenCardFromState.card_id];
                getGuessedCardsFunc(selectedCarts);
                getChosenCardFunc('');
            } else {
                selectedCarts = [id, getChosenCardFromState.card_id];
                getChosenCardFunc(firstCheckedCardParams);
                setTemporaryCardsOpenFunc(selectedCarts);
            }
        }
    };

    return (
        <CardBlock
            Guessed={Guessed}
            isBlocked = {isBlocked}
            onClick={getCheckedCard}
        >
            <Title
                Guessed={Guessed}
                isBlocked = {isBlocked}
            >
                {cardValue}
            </Title>
        </CardBlock>
    );
};

CardItem.propTypes = {
    id: PropTypes.number.isRequired,
    Guessed: PropTypes.bool.isRequired,
    isBlocked: PropTypes.bool.isRequired,
    cardValue: PropTypes.number.isRequired,
    getChosenCardFunc: PropTypes.func.isRequired,
    setOpenedCardsFunc: PropTypes.func.isRequired,
    getGuessedCardsFunc: PropTypes.func.isRequired,
    setTemporaryCardsOpenFunc: PropTypes.func.isRequired,
};