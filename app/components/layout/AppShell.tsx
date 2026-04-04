"use client";

import "../../i18n/i18n";
import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { MobileSidebar } from "./MobileSidebar";
import { TopHeader } from "./TopHeader";
import { ChatWidget } from "../common/ChatWidget";
import { EmergencyModal } from "../common/EmergencyModal";
import { CallRequestWidget } from "../common/CallRequestWidget";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({
  children,
}: AppShellProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSosOpen, setIsSosOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Sidebar />

      <MobileSidebar
        // activeCategory={null}
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      // onCategoryChange={() => {}}
      />

      <main className="flex min-h-screen flex-1 flex-col">
        <TopHeader
          onOpenSos={() => setIsSosOpen(true)}
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
        />

        {children}
      </main>

      <ChatWidget label="Chat" />
      <CallRequestWidget />
      <EmergencyModal isOpen={isSosOpen} onClose={() => setIsSosOpen(false)} />
    </div>
  );
}

