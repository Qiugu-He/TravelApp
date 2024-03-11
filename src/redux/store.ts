import { createStore, applyMiddleware } from 'redux';
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from './middlewares/actionLog';
import { productDetailSlice } from './productDetail/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productSearchSlice } from './productSearch/slice';
import { userSlice } from './user/slice';
//import { persistReducer, persistStore } from 'redux-persist';
//import storage from "redux-persist/lib/storage";

/*
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
  }
*/

const rootReducer = combineReducers({
    language: languageReducer,
    recommendProducts: recommendProductsReducer,
    productDetail: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: userSlice.reducer
});

//const persistedReducer = persistReducer(persistConfig, rootReducer);

//const store = createStore(rootReducer);
//这个可能是redux-thunk的版本问题，需要降级到2.4.1
//const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLog),
    devTools: true,
});

//const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

//export default { store, persistor };
export default store;