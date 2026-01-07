import { Form } from "antd";
import { Controller, useFormContext, type RegisterOptions } from "react-hook-form";
import ReactQuill from "react-quill-new";
import 'react-quill-new/dist/quill.snow.css';


type ProBlogEditorProps = {
    name: string;
    rules: RegisterOptions;
    placeholder: string;
    theme: 'snow';
    label?: string;
};

const ProBlogEditor = ({ name, rules, placeholder, theme = 'snow', label }: ProBlogEditorProps) => {

    const { control, formState: { errors } } = useFormContext();

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            [{'align': []}],
            ['clean']
        ]
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'indent',
        'link', 'image', 'align',
    ];

    return (
        <Form.Item
            label={label}
            validateStatus={errors[name] ? "error" : ""}
            help={errors[name]?.message as string}
        >
            <Controller
                name={name}
                rules={rules}
                control={control}
                render={({ field }) => (
                    <ReactQuill
                        theme={theme}
                        value={field.value || ''}
                        onChange={field.onChange}
                        placeholder={placeholder}

                        style={{
                            height: "300px",
                            marginBottom: "70px",
                        }}
                        modules={modules}
                        formats={formats}
                    />
                )}
            />
        </Form.Item>
    );
};

export default ProBlogEditor;