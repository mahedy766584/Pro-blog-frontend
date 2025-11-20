/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
    type: string;
    name: string;
    label?: string;
    disabled?: boolean;
    rules?: any;
};

const ProBlogInput = ({ type, name, label, disabled, rules }: TInputProps) => {

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
                render={({ field }) => type === "password" ? (
                    <Input.Password {...field} id={name} disabled={disabled} />
                ) : (
                    <Input {...field} type={type} id={name} disabled={disabled} />
                )}
            />
        </Form.Item>
    );
};

export default ProBlogInput;