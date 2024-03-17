import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addColApi = createApi({
  reducerPath: "addCol",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.unsplash.com/" }),
  endpoints: (builder) => ({
    addcol: builder.query({
      query: (submit) => `PUT /collections/:id/?client_id=Yt1PhupnxkrOj5rzkcah0P_21LxjtXsuI8rxqEq9jHg&query=${submit}`,
    }),
  }),
});

export const useAddColQuery = addColApi.endpoints.addcol.useQuery;
