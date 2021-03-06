import { configureStore } from '@reduxjs/toolkit';
import { eventApi } from '../features/event/eventApi';
import { authApi } from '../features/auth/authApi';
import userReducer from '../features/user/userSlice';
import commonReducer from '../features/common/commonSlice';

export const store = configureStore({
    reducer: {
        [eventApi.reducerPath]: eventApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        user: userReducer,
        common: commonReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(eventApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
