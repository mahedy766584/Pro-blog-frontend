import { baseApi } from "@/redux/api/baseApi";

const blogManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => (
        {
            getAllBlog: builder.query({
                query: () => {
                    return {
                        url: "/blogs",
                        method: "GET",
                    }
                }
            }),
            getSingleBlog: builder.query({
                query: (blogId) => ({
                    url: `/blogs/${blogId}`,
                    method: "GET",
                })
            })
        }
    )
});

export const {
    useGetAllBlogQuery,
    useGetSingleBlogQuery,
} = blogManagementApi;