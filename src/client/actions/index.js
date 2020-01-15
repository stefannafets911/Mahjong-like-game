import constants from './../../constants';

export const getGameNumbsArray = payload => ({ type: constants.GET_ARRAY, payload });
export const setGameNumbsArray = payload => ({ type: constants.SET_ARRAY, payload });
export const getChosenCard = payload => ({ type: constants.GET_CHOSEN_CARD, payload });
export const setChosenCard = payload => ({ type: constants.SET_CHOSEN_CARD, payload });
export const getOpenedCards = payload => ({ type: constants.GET_OPENED_CARDS, payload });
export const setOpenedCards = payload => ({ type: constants.SET_OPENED_CARDS, payload });
export const setTemporaryCardsOpen = payload => ({ type: constants.SET_TEMPORARY_CARDS_OPEN, payload });
