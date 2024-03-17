import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react'; 
import todoReducer from './todoslicer';
import { unsplashApi } from './searchapi'; 
import { likeApi } from './like'; 
import { signupApi } from "./signup";
import { addColApi } from "./addcol";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer, 
    [likeApi.reducerPath]: likeApi.reducer,
    [signupApi.reducerPath]:signupApi.reducer, 
    [addColApi.reducerPath]:addColApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(unsplashApi.middleware)
      .concat(likeApi.middleware)
      .concat(signupApi.middleware)
      .concat(addColApi.middleware)
});

setupListeners(store.dispatch);
