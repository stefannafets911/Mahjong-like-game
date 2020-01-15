import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import {CardItem} from './components/cardItem';

import {
    Wrapper,
    WrapperTitle,
    WrapperContent
} from './styledComponent';

export class Main extends PureComponent {
    static propTypes = {
        getGameNumbsArrayFunc: PropTypes.func.isRequired,
        getChosenCardFunc: PropTypes.func.isRequired,
        setOpenedCardsFunc: PropTypes.func.isRequired,
        setTemporaryCardsOpenFunc: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getGameNumbsArrayFunc();
    }

    render() {
        const {
            getArray,
            getChosenCardFunc,
            setOpenedCardsFunc,
            getChosenCardFromState,
            setTemporaryCardsOpenFunc
        } = this.props;

        return (
            <Wrapper>
                <WrapperTitle>
                    {'Mahjong-like game'}
                </WrapperTitle>
                <WrapperContent>
                        {
                            Object.keys(getArray).map((item, key) =>
                                <CardItem
                                    key={key}
                                    id={getArray[item]['id']}
                                    cardValue={getArray[item]['value']}
                                    getChosenCardFunc = {getChosenCardFunc}
                                    setOpenedCardsFunc = {setOpenedCardsFunc}
                                    getChosenCardFromState = {getChosenCardFromState}
                                    isVisible = {getArray[item]['isVisible']}
                                    setTemporaryCardsOpenFunc = {setTemporaryCardsOpenFunc}
                                />
                            )
                        }
                </WrapperContent>
            </Wrapper>
        );
    }
}

export default withRouter(Main)