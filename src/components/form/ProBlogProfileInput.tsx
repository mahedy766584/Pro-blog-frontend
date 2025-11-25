import { Form, Upload, Image } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { CloseCircleFilled } from "@ant-design/icons";
import { useState } from "react";
import defaultUser from "../../assets/photo (1).png";

type TProfileImageProps = {
    name: string;
    label?: string;
    defaultImage?: string;
};

const ProBlogProfileInput = ({ name, label, defaultImage }: TProfileImageProps) => {
    const { control } = useFormContext();
    const fallbackImage = defaultImage || defaultUser;

    const [preview, setPreview] = useState<string | null>(fallbackImage);

    return (
        <Form.Item label={label}>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange } }) => (
                    <div className="relative w-full! rounded-md flex! justify-center! items-center! mx-auto! border-main! border! hover:border-red-200!">
                        <Upload
                            showUploadList={false}
                            beforeUpload={() => false}
                            fileList={[]}
                            onChange={(info) => {
                                const file = info.fileList[0]?.originFileObj;
                                if (file) {
                                    onChange(file);
                                    setPreview(URL.createObjectURL(file));
                                }
                            }}
                        >
                            <div className="cursor-pointer! p-3! relative!">
                                <Image
                                    width={120}
                                    height={120}
                                    src={preview || fallbackImage}
                                    fallback={fallbackImage}
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        border: "1px solid #ddd",
                                        padding: "5px"
                                    }}
                                    preview={false}
                                />
                            </div>
                        </Upload>
                        {preview !== fallbackImage && (
                            <CloseCircleFilled
                                onClick={() => {
                                    setPreview(fallbackImage);
                                    onChange(null);
                                }}
                                style={{
                                    position: "absolute",
                                    top: "-8px",
                                    right: "-8px",
                                    fontSize: "20px",
                                    color: "red",
                                    cursor: "pointer"
                                }}
                            />
                        )}
                    </div>
                )}
            />
        </Form.Item>
    );
};

export default ProBlogProfileInput;
