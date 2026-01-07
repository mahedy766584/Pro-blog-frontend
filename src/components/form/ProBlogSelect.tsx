import { Form, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TProBlogSelectProps = {
    label: string;
    name: string;
    options: { value: string, label: string, disabled?: boolean }[];
    disabled?: boolean;
    mode?: "multiple" | undefined;
};

const ProBlogSelect = ({ label, name, options, disabled, mode }: TProBlogSelectProps) => {

    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (<Form.Item label={label}>
                <Select
                    mode={mode}
                    {...field}
                    options={options}
                    disabled={disabled}
                />
                {error && <small style={{ color: "red" }}>{error.message}</small>}
            </Form.Item>)}
        />
    );
};

export default ProBlogSelect;