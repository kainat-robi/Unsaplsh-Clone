import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const createCol = createApi({
  reducerPath: "createCol",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.unsplash.com/" }),
  endpoints: (builder) => ({
    createcol: builder.query({
      query: (submit) => `POST /collections/?client_id=Yt1PhupnxkrOj5rzkcah0P_21LxjtXsuI8rxqEq9jHg&query=${submit}`,
    }),
  }),
});

export const { useCreateColQuery } = createCol;
 
