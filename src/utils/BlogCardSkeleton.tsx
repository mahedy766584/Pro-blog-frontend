import { Skeleton, Card } from "antd";

type TBlogCardSkeletonProps = {
    active?: boolean;
    avatar?: boolean;
    rows?: number;
    width?: number | string;
    marginBottom?: number;
};

const BlogCardSkeleton = ({
    active = true,
    avatar = true,
    rows = 4,
    width = 500,
    marginBottom = 16,
}: TBlogCardSkeletonProps) => {
    return (
        <Card style={{ minWidth: width, marginBottom }}>
            <Skeleton
                active={active}
                avatar={avatar}
                paragraph={{ rows }}
            />
        </Card>
    );
};

export default BlogCardSkeleton;
