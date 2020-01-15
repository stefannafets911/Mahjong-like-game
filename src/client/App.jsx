import {Router, Route, Switch} from 'react-router-dom';
import React, {Component} from 'react';
import Wrapper from './modules/main';
import history from './utils/browserHistory';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Wrapper/>
                </Switch>
            </Router>
        );
    }
}

export default App;