import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost/api/auth',
        headers: { Accept: 'application/json' },
    }),
    endpoints: (build) => ({
        register: build.mutation({
            query: (initialRegister) => ({
                url: '/register',
                method: 'POST',
                body: initialRegister,
            }),
        }),
        auth: build.mutation({
            query: (initialAuth) => ({
                url: '/login',
                method: 'POST',
                body: initialAuth,
            }),
        }),
    }),
});

export const { useRegisterMutation, useAuthMutation } = authApi;
