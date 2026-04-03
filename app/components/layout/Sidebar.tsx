 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "../../constants/data";
import { useTranslation } from "react-i18next";

export function Sidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 flex-shrink-0 flex-col border-r border-[var(--color-border-subtle)] bg-[var(--color-sidebar-bg)] px-4 py-6 md:flex">
      {/* App identity */}
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary)] text-sm font-semibold text-white">
          CG
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight text-slate-900">
            Complaint Guide
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Rights & filing steps
          </p>
        </div>
      </div>

      {/* Top links */}
      <nav className="mb-6 space-y-1 text-sm font-medium">
        <Link
          href="/"
          className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
            pathname === "/"
              ? "bg-[var(--color-surface)] text-slate-900 shadow-sm"
              : "text-slate-700 hover:bg-[var(--color-primary-soft)]/70"
          }`}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-xs">
            🏠
          </span>
          <span>{t("nav.generalInfo")}</span>
        </Link>
        <Link
          href="/awareness/forest"
          className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
            pathname === "/awareness" || pathname.startsWith("/awareness/")
              ? "bg-[var(--color-surface)] text-slate-900 shadow-sm"
              : "text-slate-700 hover:bg-[var(--color-primary-soft)]/70"
          }`}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-xs">
            🌍
          </span>
          <span>{t("nav.awareness")}</span>
        </Link>
        <Link
          href="/emergency"
          className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
            pathname === "/emergency"
              ? "bg-[var(--color-surface)] text-slate-900 shadow-sm"
              : "text-slate-700 hover:bg-[var(--color-primary-soft)]/70"
          }`}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs">
            📞
          </span>
          <span>{t("nav.emergencyContacts")}</span>
        </Link>
      </nav>

      {/* Groups */}
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
        {t("nav.groups")}
      </p>
      <nav className="space-y-1 text-sm font-medium text-slate-700">
        {SIDEBAR_ITEMS.map((item) => {
          const href = `/${item.key}`;
          const isActive = pathname === href;

          return (
            <Link
              key={item.key}
              href={href}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
                isActive
                  ? "bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm"
                  : "text-slate-700 hover:bg-[var(--color-primary-soft)]"
              }`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-xs">
                {item.key === "men" && "👨"}
                {item.key === "women" && "👩"}
                {item.key === "child" && "👶"}
                {item.key === "senior" && "👴"}
              </span>
              <span>{t(item.labelKey)}</span>
            </Link>
          );
        })}
      </nav>

      {/* Quick links */}
      <div className="mt-6 border-t border-[var(--color-border-subtle)] pt-4 text-xs text-slate-600">
        <p className="mb-2 font-semibold">{t("nav.quickLinks")}</p>
        <button className="block w-full text-left text-sky-700 hover:underline">
          {t("nav.findNearestPoliceStation")}
        </button>
        <button className="mt-1 block w-full text-left text-sky-700 hover:underline">
          {t("nav.legalAidNgos")}
        </button>
      </div>
    </aside>
  );
}

