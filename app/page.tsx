 "use client";

import { useState } from "react";
import { AppShell } from "./components/layout/AppShell";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppShell searchQuery={searchQuery} onSearchChange={setSearchQuery}>
      <section className="flex flex-1 flex-col bg-[var(--background)] px-4 py-6 md:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-muted)] shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">
            Welcome to the Citizen Complaint Guide
          </h1>
          <p>
            This tool helps you quickly understand your basic rights, learn key
            laws in simple language, and follow clear steps to file a complaint
            if something goes wrong.
          </p>
          <p>
            Use the sidebar to switch between Men, Women, Children, and Senior
            Citizens, or jump directly to emergency contacts. The Emergency SOS
            button at the top will always show you national helpline numbers.
          </p>
        </div>
      </section>
    </AppShell>
  );
}
