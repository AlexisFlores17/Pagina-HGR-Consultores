import { createStore, combineReducers } from 'redux';
import { contactoReducer } from "./../reducers/contactoReducer"

const reducers = combineReducers({
    contactoReducer: contactoReducer,
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);