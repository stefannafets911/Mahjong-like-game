import * as actions from '../../actions';
import {connect} from 'react-redux';
import Main from './main.jsx';
import * as selectors from '../../selectors';

export const mapStateToProps = state => ({
    getArray: selectors.getArrayListState(state),
    getChosenCardFromState: selectors.getChosenCardFromState(state),
});

export const mapDispatchToProps = dispatch => ({
    getChosenCardFunc: payload => dispatch(actions.getChosenCard(payload)),
    setOpenedCardsFunc: payload => dispatch(actions.setOpenedCards(payload)),
    getGuessedCardsFunc: payload => dispatch(actions.getGuessedCards(payload)),
    getGameNumbsArrayFunc: payload => dispatch(actions.getGameNumbsArray(payload)),
    setTemporaryCardsOpenFunc: payload => dispatch(actions.setTemporaryCardsOpen(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);