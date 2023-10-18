import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { taskSlice } from "./taskSlice";

export const store = configureStore({
  reducer: {
    [taskSlice.reducerPath]: taskSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskSlice.middleware),
});

setupListeners(store.dispatch);
