/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, Drawer } from "antd";
import { useState } from "react";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';
import ProBlogButton from "../common/button/ProBlogButton";
import { useCreateCommentMutation, useGetCommentByBlogPostQuery } from "@/redux/features/comment/commentManagement.api";
import CommentCart from "./CommentCart";
import type { TComment } from "@/types/comment.type";

type CommentDrawerProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
    blogPost: string;
};

const CommentDrawer = ({ open, setOpen, blogPost }: CommentDrawerProps) => {
    const [comment, setComment] = useState("");

    const [createComment] = useCreateCommentMutation();
    const { data: commentResponse } = useGetCommentByBlogPostQuery(
        { id: blogPost },
        { skip: !blogPost }
    );

    const commentData = commentResponse?.data || [];

    const onClose = () => setOpen(false);

    const handleSubmit = async () => {
        if (!comment || comment.trim() === "" || comment === "<p><br></p>") {
            return;
        }

        try {
            await createComment({
                blogPost,
                content: comment,
                contentType: "html",
            });
        } catch (err: any) {
            console.log(err)
        }

        setComment("");
        setOpen(false);
    };

    return (
        <Drawer
            title="Write a Comment"
            placement="right"
            closable={true}
            onClose={onClose}
            open={open}
            width={420}
        >
            <ReactQuill
                theme="snow"
                value={comment}
                onChange={setComment}
                placeholder="Write your thoughts..."
                style={{
                    height: "100px",
                    marginBottom: "70px",
                }}
                modules={{
                    toolbar: [
                        ["bold", "italic", "underline"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["link"],
                        ["clean"],
                    ],
                }}
            />

            <ProBlogButton
                shape="round"
                onClick={handleSubmit}
                size="large"
                className="w-full!"
            >
                Comment
            </ProBlogButton>

            <Divider />


            {/* Post comments */}

            <div className="space-y-3">
                {
                    commentData?.map((comment: TComment) => <CommentCart key={comment?._id} comment={comment} />)
                }
            </div>

        </Drawer>
    );
};

export default CommentDrawer;
