 "use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppShell } from "./components/layout/AppShell";
import { HOME_PAGE_CONTENT } from "./content/staticPages";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  return (
    <AppShell searchQuery={searchQuery} onSearchChange={setSearchQuery}>
      <section className="flex flex-1 flex-col bg-[var(--background)] px-4 py-6 md:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-muted)] shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">
            {t(HOME_PAGE_CONTENT.titleKey)}
          </h1>
          {HOME_PAGE_CONTENT.paragraphKeys.map((key) => (
            <p key={key}>{t(key)}</p>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
