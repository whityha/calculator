import { combineReducers, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import controlReducer from './reducers/control';
import displayReducer from './reducers/display';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducers = combineReducers({
    display: displayReducer,
    control: controlReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
