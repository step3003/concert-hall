import { configureStore } from '@reduxjs/toolkit';
import { eventApi } from './event/eventApi';

export const store = configureStore({
    reducer: {
        [eventApi.reducerPath]: eventApi.reducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(api.middleware),
    // ...options,
});
