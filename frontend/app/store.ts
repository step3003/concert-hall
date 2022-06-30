import { configureStore } from '@reduxjs/toolkit';
import { eventApi } from '../features/event/eventApi';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        [eventApi.reducerPath]: eventApi.reducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(api.middleware),
    // ...options,
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
