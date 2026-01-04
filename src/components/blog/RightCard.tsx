import type { BlogCardProps } from "@/types";
import ProfileAvatar from "../common/profile/ProfileAvatar";
import BlogCardSkeleton from "@/utils/BlogCardSkeleton";
import { Clock } from "lucide-react";

const RightCard = ({ blog, loading = false }: BlogCardProps) => {

    if (loading) return <BlogCardSkeleton rows={2} />
    if (!blog) return null;


    return (
        <div key={blog?._id} className="flex gap-2 justify-start mb-10">

            <img
                className="lg:w-[100px] lg:h-[110px] object-cover rounded"
                alt={blog.title}
                src={blog.coverImage}
            />

            <div className="space-y-1">
                <button className="bg-[#DFF1F0] text-[#666666] px-3 py-0.5 rounded-[3px] text-sm font-normal">{blog.category?.name}</button>
                <h1 className="text-[16px] cursor-pointer font-bold text-[#222222]">{blog?.title}</h1>
                <div className="flex items-center gap-2 text-[#777777]">
                    <ProfileAvatar
                        profileImage={blog?.author?.profileImage}
                        userFirstName={blog?.author?.name?.firstName ?? ""}
                        userLastName={blog?.author?.name?.lastName ?? ""}
                    />
                    <div className="h-5 w-px rounded-md bg-[#777777]"></div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        {blog?.readTime}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightCard;