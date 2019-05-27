import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

const roorReducer = combineReducers({ form: formReducer });
