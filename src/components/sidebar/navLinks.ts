import { Home, BookOpen, User, PenTool, BarChart2 } from "lucide-react";

export type TNavLink = {
  to: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const navLinks: TNavLink[] = [
  { to: "/home", label: "Home", Icon: Home },
  { to: "/home/library", label: "Library", Icon: BookOpen },
  { to: "/home/profile", label: "Profile", Icon: User },
  { to: "/home/stories", label: "Stories", Icon: PenTool },
  { to: "/home/stats", label: "Stats", Icon: BarChart2 },
];
