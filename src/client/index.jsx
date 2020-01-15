import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../client/reducers';
import { Provider } from 'react-redux';
import rootSaga from '../client/sagas';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return {
        ...createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware))),
        runSaga: sagaMiddleware.run(rootSaga),
    };
};

const store = configureStore();
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);