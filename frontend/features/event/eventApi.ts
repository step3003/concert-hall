import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEvent } from '../../types/event';

export const eventApi = createApi({
    reducerPath: 'event',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost/api' }),
    endpoints: (build) => ({
        getEvents: build.query<IEvent[], void>({
            query: () => '/events',
        }),
    }),
});

export const { useGetEventsQuery } = eventApi;
