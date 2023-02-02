import { configureStore, combineReducers } from '@reduxjs/toolkit';
import displayReducer from './reducers/displayReducer';
import controlReducer from './reducers/controlReducer';

const rootReducers = combineReducers({
    display: displayReducer,
    control: controlReducer,
});

const store = configureStore({
    reducer: rootReducers,
});

export default store;
