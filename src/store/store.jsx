import { combineReducers, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import displayReducer from './reducers/display';
import settingsReducer from './reducers/settings';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducers = combineReducers({
    display: displayReducer,
    settings: settingsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
