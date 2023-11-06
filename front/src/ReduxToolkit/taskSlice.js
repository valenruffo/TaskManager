import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
      transformResponse: (response) =>
        response.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
    }),
    createTask: builder.mutation({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
} = taskSlice;
