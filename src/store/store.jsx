import { legacy_createStore as createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import displayReducer from './reducers/displayReducer';
import controlReducer from './reducers/controlReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['control'],
};

const rootReducers = combineReducers({
    display: displayReducer,
    control: controlReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
