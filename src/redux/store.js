import {createStore, combineReducers, compose} from 'redux';
import tasksReducer from './tasks/tasksReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());


export default store;