import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./Quries/products";
import { setupListeners } from "@reduxjs/toolkit/query";

console.log("productsApi => ",productsApi)

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch)