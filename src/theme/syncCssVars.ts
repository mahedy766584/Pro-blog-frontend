/* eslint-disable @typescript-eslint/no-explicit-any */
export const syncCssVars = (tokens: Record<string, any> | undefined) => {
    if (typeof document === "undefined") return;
    if (!tokens) return;
    const root = document.documentElement.style;
    if (tokens.colorPrimary) root.setProperty("--color-primary", tokens.colorPrimary);
    if (tokens.colorText) root.setProperty("--text-main", tokens.colorText);
    if (tokens.colorTextSecondary) root.setProperty("--text-secondary", tokens.colorTextSecondary);
    if (tokens.colorBgBase) root.setProperty("--bg-base", tokens.colorBgBase);
    if (tokens.colorBgContainer) root.setProperty("--bg-container", tokens.colorBgContainer);
    if (tokens.borderRadius !== undefined) root.setProperty("--border-radius", `${tokens.borderRadius}px`);
};
