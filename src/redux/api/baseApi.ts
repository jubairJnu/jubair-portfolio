// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://portfolio-backend-xi-one.vercel.app
// http://localhost:5000/


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://portfolio-backend-xi-one.vercel.app/api/v1",
  }),
  tagTypes: ["blogs", "orders"],
  endpoints: () => ({}),
});
