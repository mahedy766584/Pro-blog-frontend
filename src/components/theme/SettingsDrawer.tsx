import React from "react";
import ThemeToggleRound from "./ThemeToggleRound";
import { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const SettingsDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Open settings"
        onClick={() => setOpen(true)}
        className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition"
        title="Settings"
      >
        <Avatar size="large" icon={<UserOutlined />} />
      </button>

      <div
        className={`fixed inset-0 z-40 transition-opacity ${open ? "opacity-100! pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[320px] bg-white dark:bg-[#071019] shadow-xl transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-hidden={!open}
        aria-label="Settings"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-main dark:border-[#222]">
          <h3 className="text-lg font-semibold">Settings</h3>
          <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5">Close</button>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Theme</h4>
            <p className="text-sm text-sec mb-3">Change between Light and Dark mode.</p>
            <ThemeToggleRound />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Appearance</h4>
            <p className="text-sm text-sec">Other appearance settings (coming soon)</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SettingsDrawer;
