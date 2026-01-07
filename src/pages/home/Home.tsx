import BlogCard from "@/components/blog/BlogCard";
import RightCart from "@/components/blog/RightContent";
import RecentBlog from "@/components/RecentlyPosted/RecentBlog";
import TopAuthors from "@/components/topAuthors/TopAuthors";
import { useGetAllBlogQuery } from "@/redux/features/blogManagement.api";
import type { TBlog } from "@/types";


const Home = () => {
    const { data: blogs, isLoading } = useGetAllBlogQuery(undefined);

    const skeletonCount = blogs?.data?.result?.length || 5;

    return (
        <>
            <div className="w-full">
                <div className="bg-[#F2F8F7] w-full h-[calc(100vh-30px)]">
                    {/* Left side */}
                    <div className="mx-auto max-w-6xl flex items-start justify-between gap-6 mb-6">
                        <div>
                            <h1 className="text-xl font-medium mt-5 mb-10">
                                <span className="bg-[#00AAA1] text-[#E8F3F3]">Featured</span> This month
                            </h1>
                            <div className="h-[74vh] overflow-auto scrollbar-custom space-y-5">
                                {isLoading
                                    ? Array.from({ length: skeletonCount }).map((_, idx) => <BlogCard key={idx} loading />)
                                    : blogs?.data?.result?.map((blog: TBlog) => (
                                        <BlogCard key={blog._id} blog={blog} />
                                    ))}
                            </div>
                        </div>
                        {/* Right side */}
                        <div className="pb-5">
                            <RightCart />
                        </div>
                    </div>
                </div>

                {/* Recent blog content */}
                <div className="flex gap-6 items-start max-w-6xl mx-auto">
                    {/* Left side */}
                    <RecentBlog />
                    {/* Right side */}
                    <div>
                        <TopAuthors />

                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
