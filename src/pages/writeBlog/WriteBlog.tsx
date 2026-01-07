import ProBlogButton from "@/components/common/button/ProBlogButton";
import ProBlogEditor from "@/components/form/ProBlogEditor";
import ProBlogForm from "@/components/form/ProBlogForm";
import ProBlogInput from "@/components/form/ProBlogInput";
import ProBlogProfileInput from "@/components/form/ProBlogProfileInput";
import ProBlogSelect from "@/components/form/ProBlogSelect";
import { useGetAllCategoryQuery } from "@/redux/features/categoryManagement.api";
import type { FieldValues, SubmitErrorHandler } from "react-hook-form";

type TCategoryOptions = {
    createdAt?: string;
    updatedAt?: string;
    name: string;
    slug?: string;
    _id: string;
};

const WriteBlog = () => {

    const { data: categories, isLoading } = useGetAllCategoryQuery(undefined);
    console.log(categories)

    const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
        console.log(data)
    };

    const categoryOptions = categories?.data.map(({ name, _id }: TCategoryOptions) => ({
        label: name,
        value: _id,
    })) || [];

    console.log(categoryOptions)

    return (
        <div className="bg-[#F2F8F7]">
            <div className="mx-auto max-w-6xl h-full">

                <ProBlogForm onSubmit={onSubmit}>
                    <ProBlogInput
                        type="text"
                        name="title"
                        label="Title"
                        rules={{ required: "Title is required" }}
                    />

                    <ProBlogEditor
                        label="Write your story"
                        name="content"
                        placeholder="Tell your story..."
                        rules={{ required: "Content is required" }}
                        theme="snow"
                    />

                    <ProBlogProfileInput
                        name="Cover Image"
                        label="coverImage"
                        defaultImage="https://ibb.co/Wzj8mD4"
                    />

                    <ProBlogSelect
                        name="category"
                        label="Category"
                        options={categoryOptions}
                        disabled={isLoading}
                    />

                    <ProBlogButton htmlType="submit" shape="round" className="w-full! mt-6!" color="default" variant="solid">
                        Write
                    </ProBlogButton>
                </ProBlogForm>
            </div>
        </div>
    );
};

export default WriteBlog;