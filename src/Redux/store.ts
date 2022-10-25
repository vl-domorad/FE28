import {configureStore, applyMiddleware} from '@reduxjs/toolkit'
import reducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)


export default store