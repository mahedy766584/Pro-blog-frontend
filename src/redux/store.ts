import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../redux/api/baseApi";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlice";
import themeReducer from "./features/theme/themeSlice";

const persistConfig = {
    key: "auth",
    storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistAuthReducer,
        theme: themeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;