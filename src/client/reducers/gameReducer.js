import * as constants from '../../constants';

const initialState = {
    ArrayList: {},
    ChosenCard: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.SET_ARRAY:
            return {
                ...state,
                ArrayList: { ...action.payload },
            };
        case constants.SET_CHOSEN_CARD:
            return {
                ...state,
                ChosenCard: { ...action.payload },
            };
        case constants.GET_OPENED_CARDS:
            return {
                ...state,
                ArrayList: { ...action.payload },
            };
        default:
            return { ...state };
    }
}