/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateBookmarkMutation } from "@/redux/features/bookMark/bookMarkManagement.api";
import { useAddLikeMutation, useGetLikeByBlogPostQuery } from "@/redux/features/like/likeManagement.api";
import type { BlogCardProps } from "@/types";
import BlogCardSkeleton from "@/utils/BlogCardSkeleton";
import {  Divider } from "antd";
import { Bookmark, MessageCircle, ThumbsUp } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { toast } from "sonner";
import CommentDrawer from "../comment/CommentDrawer";
import { useGetCommentByBlogPostQuery } from "@/redux/features/comment/commentManagement.api";
import ProfileAvatar from "../common/profile/ProfileAvatar";


const BlogCard = ({ blog, loading = false }: BlogCardProps) => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => setOpen(true);

    const blogId = blog?._id;

    const { data: likeResponse } = useGetLikeByBlogPostQuery(
        { id: blogId },
        { skip: !blogId }
    );

    const { data: commentResponse } = useGetCommentByBlogPostQuery(
        { id: blogId },
        { skip: !blogId }
    );

    const [addLike] = useAddLikeMutation();
    const [createBookmark] = useCreateBookmarkMutation();

    if (loading) return <BlogCardSkeleton />
    if (!blog) return null;

    const postedDate = blog.createdAt ? moment(blog.createdAt).format("DD MMM YYYY") : "No date";


    const likeCount = likeResponse?.data?.likeCount || 0;
    const commentCount = commentResponse?.data?.length || 0;

    const handleLike = async () => {
        if (!blogId) return;
        try {
            const res = await addLike({ blogPost: blogId }).unwrap();
            toast.success(res.data.message);
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong!");
        }
    };

    const handleBookMark = async () => {
        if (!blogId) return;
        try {
            const res = await createBookmark({ blogPost: blogId }).unwrap();
            toast.success(res.message);
        } catch (err: any) {
            toast.error(err?.data?.message || "Something went wrong!");
        }
    };

    return (
        <div key={blog._id} className="container mx-auto py-2 px-4">

            <ProfileAvatar
                profileImage={blog.author?.profileImage}
                authorFirstName={blog.author.name?.firstName}
                authorLastName={blog.author.name?.lastName}
            />

            <div className="flex items-center justify-between gap-5 cursor-pointer">
                <div>
                    <h1 className="text-2xl text-main font-bold mb-4">{blog.title}</h1>
                    <p className="text-sec">{blog.excerpt.slice(0, 60)}...</p>
                </div>

                <img
                    className="w-[200px] h-[150px] object-cover rounded"
                    alt={blog.title}
                    src={blog.coverImage}
                />
            </div>


            {/* Button side */}

            <div className="mt-6 flex items-center justify-between text-sec">
                {/* Right side */}
                <div className="flex items-center gap-6">
                    <p>{postedDate}</p>
                    <span onClick={handleLike} className="flex items-center gap-2 cursor-pointer">
                        <ThumbsUp size={18} />
                        {likeCount ? <p>{likeCount}</p> : ""}
                    </span>
                    <span onClick={showDrawer} className="flex items-center gap-2 cursor-pointer">
                        <MessageCircle size={18} />
                        {commentCount ? <p>{commentCount}</p> : ""}
                    </span>
                    <CommentDrawer open={open} setOpen={setOpen} blogPost={blogId!} />
                </div>

                {/* Left side */}
                <div>
                    <span onClick={handleBookMark} className="cursor-pointer">
                        <Bookmark size={18} />
                    </span>
                </div>

            </div>

            <Divider />

        </div>
    );
};

export default BlogCard;