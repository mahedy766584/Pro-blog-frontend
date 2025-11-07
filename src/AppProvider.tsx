/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useEffect, useMemo } from "react";
import { ConfigProvider } from "antd";
import { getAntdTokens } from "./theme/antdTokens";
import { syncCssVars } from "./theme/syncCssVars";
import { useAppSelector } from "./redux/hooks";

type Props = { children: React.ReactNode };

const AppProvider: React.FC<Props> = ({ children }) => {
  const theme = useAppSelector((s) => (s as any).theme.theme as "light" | "dark");
  const antdConfig = useMemo(() => getAntdTokens(theme), [theme]);

  useEffect(() => {
    syncCssVars(antdConfig.token as Record<string, any>);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, antdConfig]);

  return (
    <ConfigProvider theme={{ algorithm: antdConfig.algorithm, token: antdConfig.token }}>
      {children}
    </ConfigProvider>
  );
};

export default AppProvider;
