import { theme as antdTheme } from "antd";

export const getAntdTokens = (mode: "light" | "dark") => {
    const brandPrimary = "#B76E79";
    if (mode === "light") {
        return {
            algorithm: antdTheme.defaultAlgorithm,
            token: {
                colorPrimary: brandPrimary,
                colorText: "#242424",
                colorTextSecondary: "#6b6b6b",
                colorBgBase: "#ffffff",
                colorBgContainer: "#ffffff",
                borderRadius: 8,
            },
        } as const;
    } else {
        return {
            algorithm: antdTheme.darkAlgorithm,
            token: {
                colorPrimary: "#20b659",
                colorText: "#e6e6e6",
                colorTextSecondary: "#9d9d9d",
                colorBgBase: "#0b0b0b",
                colorBgContainer: "#0f1720",
                borderRadius: 8,
            },
        } as const;
    }
};