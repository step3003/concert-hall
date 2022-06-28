import { configureStore } from '@reduxjs/toolkit';
import { eventApi } from '../features/event/eventApi';

export const store = configureStore({
    reducer: {
        [eventApi.reducerPath]: eventApi.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(api.middleware),
    // ...options,
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
