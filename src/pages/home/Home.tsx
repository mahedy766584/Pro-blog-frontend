import { useGetAllBlogQuery } from "@/redux/features/blog/blogManagement.api";

const Home = () => {

    const { data: blogs } = useGetAllBlogQuery(undefined);
    console.log(blogs)

    return (
        <div>
            <h1>This is Home component</h1>
        </div>
    );
};

export default Home;