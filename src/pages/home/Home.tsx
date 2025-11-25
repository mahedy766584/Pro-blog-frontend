import BlogCard from "@/components/blog/BlogCard";
import { useGetAllBlogQuery } from "@/redux/features/blog/blogManagement.api";
import type { TBlog } from "@/types";

const Home = () => {
    const { data: blogs, isLoading } = useGetAllBlogQuery(undefined);

    const skeletonCount = blogs?.data?.result?.length || 5;

    return (
        <div className="space-y-5 mt-5">
            {isLoading
                ? Array.from({ length: skeletonCount }).map((_, idx) => <BlogCard key={idx} loading />)
                : blogs?.data?.result?.map((blog: TBlog) => (
                    <BlogCard key={blog._id} blog={blog} />
                ))}
        </div>
    );
};

export default Home;
