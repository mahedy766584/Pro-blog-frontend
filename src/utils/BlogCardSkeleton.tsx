import { Skeleton, Card } from "antd";

const BlogCardSkeleton = () => {
    return (
        <Card style={{ minWidth: 300, marginBottom: 16 }}>
            <Skeleton active avatar paragraph={{ rows: 4 }} />
        </Card>
    );
};

export default BlogCardSkeleton;
