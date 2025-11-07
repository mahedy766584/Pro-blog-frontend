import { Home, BookOpen, User, PenTool, BarChart2 } from "lucide-react";

export type TNavLink = {
  to: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const navLinks: TNavLink[] = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/library", label: "Library", Icon: BookOpen },
  { to: "/profile", label: "Profile", Icon: User },
  { to: "/stories", label: "Stories", Icon: PenTool },
  { to: "/stats", label: "Stats", Icon: BarChart2 },
];
