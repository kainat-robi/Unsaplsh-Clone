import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unsplashApi = createApi({
  reducerPath: "unsplashApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.unsplash.com/" }),
  endpoints: (builder) => ({
    searchImg: builder.query({
      query: (searchValue) => `search/photos/?client_id=Yt1PhupnxkrOj5rzkcah0P_21LxjtXsuI8rxqEq9jHg&query=${searchValue}&per_page=1000&orientation=squarish`,
    }),
  }),
});

export const { useSearchImgQuery } = unsplashApi;
