/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const { TextArea } = Input;

type TTextareaProps = {
    name: string;
    label?: string;
    disabled?: boolean;
    rules?: any;
    placeholder?: string;
    rows?: number;
};

const ProBlogTextarea = ({
    name,
    label,
    disabled,
    rules,
    placeholder,
    rows = 4,
}: TTextareaProps) => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <Form.Item
            label={label}
            validateStatus={errors[name] ? "error" : ""}
            help={errors[name]?.message as string}
        >
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <TextArea
                        {...field}
                        id={name}
                        rows={rows}
                        placeholder={placeholder}
                        allowClear
                        disabled={disabled}
                    />
                )}
            />
        </Form.Item>
    );
};

export default ProBlogTextarea;
