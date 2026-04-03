 "use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppShell } from "../components/layout/AppShell";
import { EMERGENCY_CONTACTS } from "../constants/data";
import { EMERGENCY_PAGE_CONTENT } from "../content/staticPages";

export default function EmergencyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useTranslation();

  const query = searchQuery.toLowerCase().trim();
  const filtered = EMERGENCY_CONTACTS.filter(
    (c) =>
      c.label.toLowerCase().includes(query) ||
      c.number.toLowerCase().includes(query),
  );

  return (
    <AppShell searchQuery={searchQuery} onSearchChange={setSearchQuery}>
      <section className="flex flex-1 flex-col bg-[var(--background)] px-4 py-6 md:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-muted)] shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">
            {t(EMERGENCY_PAGE_CONTENT.titleKey)}
          </h1>
          <p>{t(EMERGENCY_PAGE_CONTENT.introKey)}</p>

          <ul className="mt-2 space-y-2 text-sm">
            {(query ? filtered : EMERGENCY_CONTACTS).map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-primary-soft)]/60 px-4 py-2"
              >
                <span className="text-slate-900">{item.label}</span>
                <a
                  href={`tel:${item.number}`}
                  className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600"
                >
                  {item.number}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-[var(--color-muted)]">
            {t(EMERGENCY_PAGE_CONTENT.tipKey)}
          </p>
        </div>
      </section>
    </AppShell>
  );
}

