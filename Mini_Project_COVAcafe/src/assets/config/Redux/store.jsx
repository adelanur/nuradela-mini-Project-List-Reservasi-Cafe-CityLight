import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducer";
import thunkMiddleware from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
const persistConfig = {
  key: "cafe",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});
export const persistedStore = persistStore(store);
export default store;
