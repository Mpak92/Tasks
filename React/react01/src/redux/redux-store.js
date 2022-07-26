import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';
import profileReducer from './profile-reducer';

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    navbar: navbarReducer
});

const store = createStore(reducers);

export default store;