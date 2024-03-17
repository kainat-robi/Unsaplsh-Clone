import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unlikeApi = createApi({
  reducerPath: "likeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.unsplash.com/" }),
  endpoints: (builder) => ({
    likeImg: builder.query({
      query: (submit) => `/photos/:id/like/?client_id=Yt1PhupnxkrOj5rzkcah0P_21LxjtXsuI8rxqEq9jHg&query=${submit}`,
    }),
  }),
});

export const { useUnLikeQuery } = unlikeApi;
