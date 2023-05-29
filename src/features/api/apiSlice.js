import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL,
  }),
  tagTypes: [
    "Photo",
    "User",
    "Brand",
    "Category",
    "Product",
    "Store",
    "Subcategory",
  ],
  endpoints: () => ({}),
});

export default apiSlice;
