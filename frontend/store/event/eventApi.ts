import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Event } from './eventTypes';

export const eventApi = createApi({
    reducerPath: 'api/events',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.API_URL }),
    endpoints: (build) => ({
        getEvents: build.query<Event, void>({
            query: () => '/events',
        }),
    }),
});

export const { useGetEventsQuery } = eventApi;
