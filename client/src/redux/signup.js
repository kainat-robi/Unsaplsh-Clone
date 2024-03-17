import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signupApi = createApi({
  reducerPath: "signupApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.unsplash.com/" }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: "oauth/authorize/?client_id=Yt1PhupnxkrOj5rzkcah0P_21LxjtXsuI8rxqEq9jHg",
        method: 'POST',
        body: userData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useSignUpMutation } = signupApi;
