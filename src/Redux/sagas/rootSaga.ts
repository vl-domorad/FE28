import {all} from 'redux-saga/effects'
import authWatcher from './authSaga'
import postsSagaWatcher from './postsSaga'



export default function* rootSaga(){
    yield all([authWatcher(),postsSagaWatcher()])
}