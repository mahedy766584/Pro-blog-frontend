/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import type { ReactNode } from "react";

type TButtonProps = {
    children: ReactNode;
    htmlType?: "button" | "submit" | "reset";
    shape?: "default" | "circle" | "round";
    className?: string;
    color?: string;
    variant?: "solid" | "outlined" | "dashed" | "text" | "link";
    disabled?: boolean;
    size?: SizeType;
    onClick?: () => void;
};

const ProBlogButton = ({
    children,
    htmlType = "button",
    shape = "default",
    className,
    color = "default",
    variant = "solid",
    disabled,
    onClick,
    size,
}: TButtonProps) => {
    return (
        <Button
            htmlType={htmlType}
            shape={shape}
            className={className}
            color={color as any}
            size={size}
            variant={variant as any}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default ProBlogButton;
