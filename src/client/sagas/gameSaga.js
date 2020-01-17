import {put, takeEvery, select, call} from 'redux-saga/effects';
import * as actions from '../actions';
import * as selectors from '../selectors';
import React from "react";

let timerFlag;
export default function* watchUsersSaga() {
    yield takeEvery(actions.getChosenCard().type, getChosenCardToStore);
    yield takeEvery(actions.getGameNumbsArray().type, getGeneratedArray);
    yield takeEvery(actions.setOpenedCards().type, setOpenedCardsToStore);
    yield takeEvery(actions.getGuessedCards().type, getGuessedCardsToStore);
    yield takeEvery(actions.setTemporaryCardsOpen().type, setTemporaryCardsOpenToStore);
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const delay = time => new Promise(resolve => setTimeout(resolve, time));

function* getGeneratedArray() {
    let array = [];
    let Obj = {};
    for (let i = 1; i < 16; i++) {
        let randomNumb = randomInteger(1, 50);
        if (array.indexOf(randomNumb) === -1 && isPrime(randomNumb)) {
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
                isBlocked: {
                    value: true,
                    writable: true,
                    configurable: true
                },
                Guessed: {
                    value: false,
                    writable: true,
                    configurable: true
                }
            });
    }

    yield put(actions.setGameNumbsArray(Obj));
    yield call(delay, 3000);

    for (let key in Obj) {
        Obj[key]['isBlocked'] = false;
    }

    yield put(actions.setGameNumbsArray(Obj))
}

function* getChosenCardToStore(action) {
    yield put(actions.setChosenCard(action.payload));
}

function* setOpenedCardsToStore(action) {
    const obj = yield select(selectors.getArrayListState);

    for (let i = 0; i < action.payload.length; i++) {
        obj[action.payload[i]]['isBlocked'] = true;
    }

    yield put(actions.getOpenedCards(obj));
}

function* getGuessedCardsToStore(action) {
    const obj = yield select(selectors.getArrayListState);

    for (let i = 0; i < action.payload.length; i++) {
        obj[action.payload[i]]['Guessed'] = true;
    }

    yield put(actions.getOpenedCards(obj));
}

function* setTemporaryCardsOpenToStore(action) {
    const obj = yield select(selectors.getArrayListState);

    for (let i = 0; i < action.payload.length; i++) {
        obj[action.payload[i]]['isBlocked'] = true;
    }

    yield put(actions.getOpenedCards(obj));

    if (!timerFlag) {
        timerFlag = true;
        yield call(delay, 1300);
        timerFlag = false;

        for (let key in obj) {
            obj[key]['isBlocked'] = false;
        }

        yield put(actions.getOpenedCards(obj));
        yield put(actions.setChosenCard(''));
    }
}