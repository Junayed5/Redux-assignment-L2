import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mongoose-assignment-two.vercel.app/api",
  }),
  tagTypes: ["Books", "Borrow"],
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["Books", "Borrow"],
    }),
    postBook: builder.mutation({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, book }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    getBorrows: builder.query({
      query: () => "/borrow",
    }),
    createBorrow: builder.mutation({
      query: (borrowBook) => ({
        url: "/borrow",
        method: "POST",
        body: borrowBook,
      }),
      invalidatesTags: ["Borrow"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  usePostBookMutation,
  useDeleteBookMutation,
  useGetBorrowsQuery,
  useCreateBorrowMutation,
  useUpdateBookMutation,
} = booksApi;
