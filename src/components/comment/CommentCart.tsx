import type { TComment } from "@/types/comment.type";
import BlogContent from "../blog/BlogContent";
import ProfileAvatar from "../common/profile/ProfileAvatar";
import { MessageCircle, ThumbsUp } from "lucide-react";

type SingleCommentProps = {
    comment: TComment;
};


const CommentCart = ({ comment }: SingleCommentProps) => {

    console.log(comment.blogPost)
    console.log(comment)

    return (
        <div className="flex items-stat flex-col py-2 px-2 text-sm">
            <ProfileAvatar
                profileImage={comment.author?.profileImage}
                authorFirstName={comment.author.name?.firstName}
                authorLastName={comment.author.name?.lastName}
            />
            <BlogContent blog={{
                contentType: comment.contentType ?? "html",
                content: comment.content ?? ""
            }} />
            <div className="flex items-center gap-6 py-2 text-sec">
                <span className="cursor-pointer">
                    <ThumbsUp size={18} />
                </span>
                <span className="flex items-center gap-1 cursor-pointer hover:text-main">
                    <MessageCircle size={18} />
                    <p><span>1</span> reply</p>
                </span>
                <span className="cursor-pointer underline text-main">
                    <p>Reply</p>
                </span>
            </div>
        </div>
    );
};

export default CommentCart;