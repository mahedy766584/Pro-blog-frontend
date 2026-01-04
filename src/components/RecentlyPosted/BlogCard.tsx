import type { BlogCardProps } from "@/types";
import BlogCardSkeleton from "@/utils/BlogCardSkeleton";
import ProfileAvatar from "../common/profile/ProfileAvatar";
import { CalendarDays, Clock } from "lucide-react";
import moment from "moment";

const BlogCard = ({ blog, loading = false }: BlogCardProps) => {

    if (loading) return <BlogCardSkeleton />
    if (!blog) return null;

    const postedDate = blog.createdAt ? moment(blog.createdAt).format("DD MMM YYYY") : "No date";

    return (
        <div className="w-[360px] h-full rounded">
            <img className="w-[360px] h-[262px] rounded" src={blog.coverImage} />
            <div className="space-y-3 mt-3">
                <button className="bg-[#DFF1F0] text-[#666666] px-3 py-0.5 rounded-[3px] text-sm font-normal">{blog.category?.name}</button>
                <h1 className="text-2xl text-[#222222] font-bold">{blog.title}</h1>

                <div className="text-[#777777] flex items-center gap-2">

                    <ProfileAvatar
                        profileImage={blog.author?.profileImage}
                        userFirstName={blog.author?.name?.firstName ?? ""}
                        userLastName={blog.author?.name?.lastName ?? ""}
                    />

                    <div className="h-4 w-px rounded-md bg-[#777777]"></div>

                    <span className="flex items-center gap-1.5">
                        <CalendarDays size={12} />
                        <p className="text-xs">{postedDate}</p>
                    </span>

                    <div className="h-4 w-px rounded-md bg-[#777777]"></div>

                    <div className="flex items-center text-sm gap-1.5">
                        <Clock size={12} />
                        {blog?.readTime}
                    </div>

                </div>
                <p className="text-[#555555] text-[16px]">{blog?.excerpt?.slice(0, 90)}...</p>

            </div>
        </div>
    );
};

export default BlogCard;