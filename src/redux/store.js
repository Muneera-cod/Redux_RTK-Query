import { configureStore } from "@reduxjs/toolkit";
import { cartsApi } from "./Slice/cartsApiSlice";

export const store = configureStore({
    reducer: {
        [cartsApi.reducerPath]: cartsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartsApi.middleware),
    
})