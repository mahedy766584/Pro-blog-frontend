/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSingleBlogQuery } from "@/redux/features/blogManagement.api";
import BlogCardSkeleton from "@/utils/BlogCardSkeleton";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import BlogContent from "./BlogContent";
import ProfileAvatar from "../common/profile/ProfileAvatar";
import { Divider, Image } from "antd";
import moment from "moment";
import ProBlogButton from "../common/button/ProBlogButton";
import { useAddLikeMutation, useGetLikeByBlogPostQuery } from "@/redux/features/likeManagement.api";
import { useGetCommentByBlogPostQuery } from "@/redux/features/commentManagement.api";
import { useCreateBookmarkMutation } from "@/redux/features/bookMarkManagement.api";
import { toast } from "sonner";
import BlogActions from "./BlogActions";

const BlogDetails = () => {
    const { blogId, slug } = useParams<{
        blogId: string;
        slug: string;
    }>();

    const [open, setOpen] = useState(false);

    const { data: blogResponse, isLoading } = useGetSingleBlogQuery(blogId!, {
        skip: !blogId,
    });

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

    const blog = blogResponse?.data;

    const { title, author, coverImage, slug: slugTitle, _id, readTime, createdAt } = blog || {};

    const postedDate = createdAt ? moment(blog.createdAt).format("DD MMM YYYY") : "No date";

    useEffect(() => {
        document.title = title ? `Pro Blog || ${title}` : "Pro Blog";
    }, [title]);

    if (isLoading) {
        return <BlogCardSkeleton rows={20} />;
    }

    if (!blog) {
        return <p>Blog not found</p>;
    }

    if (slugTitle !== slug) {
        return <Navigate to={`/home/blog/${_id}/${slugTitle}`} replace />;
    }


    const showDrawer = () => setOpen(true);


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
        <div>
            <div className="mt-4 mb-8">
                <div className="flex items-center gap-5 py-5">
                    <ProfileAvatar
                        profileImage={author?.profileImage}
                        userFirstName={author?.name?.firstName ?? ""}
                        userLastName={author?.name?.lastName ?? ""}
                    />
                    <div className="flex items-center gap-4">
                        <div>
                            <ProBlogButton shape="round" variant="outlined">Follow</ProBlogButton>
                        </div>
                        <p>{readTime}</p>
                        <p>{postedDate}</p>
                    </div>
                </div>

                <h1 className="text-4xl font-bold py-2">{title}</h1>

                {/* Button side */}
                <BlogActions postedDate={postedDate} onLike={handleLike} likeCount={likeCount} onOpenComment={showDrawer} onBookmark={handleBookMark} open={open} setOpen={setOpen} blogId={blogId} commentCount={commentCount} />

                <div className="mt-7 mb-4">
                    <Image src={coverImage} />
                </div>

                <BlogContent blog={blog} />
            </div>

            <div className="py-4">
                <BlogActions postedDate={postedDate} onLike={handleLike} likeCount={likeCount} onOpenComment={showDrawer} onBookmark={handleBookMark} open={open} setOpen={setOpen} blogId={blogId} commentCount={commentCount} />
            </div>

            <Divider />
        </div>
    );
};

export default BlogDetails;