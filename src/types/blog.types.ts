export type TAuthor = {
    name: {
        firstName: string;
        lastName: string;
    };
    profileImage: string;
    _id: string;
};

export type TBlog = {
    _id: string;
    title: string;
    coverImage: string;
    excerpt: string;
    author: TAuthor;
    createdAt?: Date;
};

export type BlogCardProps = {
    blog?: TBlog;
    loading?: boolean;
};