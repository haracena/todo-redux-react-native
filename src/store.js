import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todos } from './reducers/todoReducer';
import thunk from 'redux-thunk';

export const store = createStore(combineReducers({
  todos
}), applyMiddleware(thunk))