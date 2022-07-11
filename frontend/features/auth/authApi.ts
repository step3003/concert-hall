import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '../user/userSlice';

// @ts-ignore
async function onQueryStarted(_, { queryFulfilled, dispatch }) {
    try {
        const { data } = await queryFulfilled;
        const user = { ...data.data, token: data.token };
        dispatch(setUser(user));
        localStorage.setItem('user', JSON.stringify(data.data));
    } catch (err) {}
}

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
            onQueryStarted,
        }),
        login: build.mutation({
            query: (initialAuth) => ({
                url: '/login',
                method: 'POST',
                body: initialAuth,
            }),
            onQueryStarted,
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
