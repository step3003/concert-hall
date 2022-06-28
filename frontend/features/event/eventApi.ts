import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEvent } from './eventTypes';

export const eventApi = createApi({
    reducerPath: 'event',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
    endpoints: (build) => ({
        getEvents: build.query<IEvent[], void>({
            query: () => '/events',
        }),
    }),
});

export const { useGetEventsQuery } = eventApi;
