import {put, takeEvery, select, call} from 'redux-saga/effects';
import * as actions from '../actions';
import * as selectors from '../selectors';
import React from "react";

export default function* watchUsersSaga() {
    yield takeEvery(actions.getGameNumbsArray().type, getGeneratedArray);
    yield takeEvery(actions.getChosenCard().type, getChosenCardToStore);
    yield takeEvery(actions.setOpenedCards().type, setOpenedCardsToStore);
    yield takeEvery(actions.setTemporaryCardsOpen().type, setTemporaryCardsOpenToStore);
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const delay = time => new Promise(resolve => setTimeout(resolve, time));

function* getGeneratedArray() {
    let array = [];
    let Obj = {};
    for (let i = 1; i < 16; i++) {
        let randomNumb = randomInteger(1, 50);

        if (array.indexOf(randomNumb) === -1) {
            array.push(randomNumb, randomNumb);
        } else {
            i--;
        }
    }
    array.sort(() => Math.random() - 0.5);

    for (let i = 0; i < array.length; i++) {
        Obj[i] = Object.create(Object.prototype,
            {
                value: {
                    value: array[i]
                },
                id: {
                    value: i
                },
                isVisible: {
                    value: true,
                    writable: true,
                    configurable: true
                }
            });
    }

    yield put(actions.setGameNumbsArray(Obj));
    yield call(delay, 3000);

    for (let key in Obj) {
        Obj[key]['isVisible'] = false;
    }

    yield put(actions.setGameNumbsArray(Obj))
}

function* getChosenCardToStore(action) {
    yield put(actions.setChosenCard(action.payload));
}

function* setOpenedCardsToStore(action) {
    const obj = yield select(selectors.getArrayListState);

    for (let i = 0; i < action.payload.length; i++) {
        obj[action.payload[i]]['isVisible'] = true;
    }

    yield put(actions.getOpenedCards(obj));
}

function* setTemporaryCardsOpenToStore(action) {
    const obj = yield select(selectors.getArrayListState);

    for (let i = 0; i < action.payload.length; i++) {
        obj[action.payload[i]]['isVisible'] = true;
    }

    yield put(actions.getOpenedCards(obj));
    yield call(delay, 1000);

    for (let i = 0; i < action.payload.length; i++) {
        obj[action.payload[i]]['isVisible'] = false;
    }

    yield put(actions.getOpenedCards(obj));
    yield put(actions.setChosenCard(''))
}