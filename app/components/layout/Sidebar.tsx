 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "../../constants/data";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const groupIcon = (key: string) => {
  if (key === "women") return "👩";
  if (key === "men") return "👨";
  if (key === "child") return "🧒";
  if (key === "senior") return "🧓";
  return "👤";
};

const groupBadgeClass = (key: string) => {
  if (key === "women") return "bg-pink-100 text-pink-700";
  if (key === "men") return "bg-sky-100 text-sky-700";
  if (key === "child") return "bg-amber-100 text-amber-800";
  if (key === "senior") return "bg-emerald-100 text-emerald-700";
  return "bg-slate-100 text-slate-700";
};

export function Sidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <aside className="sticky top-0 hidden h-screen w-72 flex-shrink-0 flex-col border-r border-[var(--color-border-subtle)] bg-[var(--color-sidebar-bg)] px-4 py-6 md:flex">
      {/* Brand header (friendlier, more vibrant) */}
      <div className="mb-5">
        {/* <Image src="/logo/logo-rectangle.png" alt="SIMPLY LAW" width={200} height={200} /> */}
        {/* <Image src="/logo/logo-sidebar.png" alt="SIMPLY LAW" width={50} height={50} /> */}
      </div>

      {/* Top links */}
      <nav className="mb-5 space-y-2 text-sm font-medium">
        <Link
          href="/"
          className={`group flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all ${
            pathname === "/"
              ? "border-transparent bg-white text-slate-900 shadow-sm"
              : "border-[var(--color-border-subtle)] bg-white/50 text-slate-700 hover:bg-white"
          }`}
        >
          {/* <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-100 text-sm text-indigo-700 transition-transform group-hover:scale-[1.03]"> */}
            🏠
          {/* </span> */}
          <span>{t("nav.generalInfo")}</span>
        </Link>
        <Link
          href="/awareness/forest"
          className={`group flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all ${
            pathname === "/awareness" || pathname.startsWith("/awareness/")
              ? "border-transparent bg-white text-slate-900 shadow-sm"
              : "border-[var(--color-border-subtle)] bg-white/50 text-slate-700 hover:bg-white"
          }`}
        >
          {/* <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-sm text-emerald-700 transition-transform group-hover:scale-[1.03]"> */}
            <Image src="/group/general-awareness/awareness.png" alt="Awareness" width={24} height={24} />
          {/* </span> */}
          <span>{t("nav.awareness")}</span>
        </Link>
        <Link
          href="/emergency"
          className={`group flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all ${
            pathname === "/emergency"
              ? "border-transparent bg-white text-slate-900 shadow-sm"
              : "border-[var(--color-border-subtle)] bg-white/50 text-slate-700 hover:bg-white"
          }`}
        >
            {/* <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-red-100 text-sm text-red-700 transition-transform group-hover:scale-[1.03]"> */}
          <Image src="/group/emergency-contact/emergency-contact.png" alt="Emergency" width={24} height={24} />

          {/* </span> */}
          <span>{t("nav.emergencyContacts")}</span>
        </Link>
      </nav>

      {/* Groups */}
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
        {t("nav.groups")}
        </p>
        <span className="rounded-full bg-[var(--color-primary-soft)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-primary)]">
          {t("nav.groups")}
        </span>
      </div>
      <nav className="space-y-2 text-sm font-medium text-slate-700">
        {SIDEBAR_ITEMS.map((item) => {
          const href = `/${item.key}`;
          const isActive = pathname === href;
          console.log(item.key);
          console.log(`/group/${item.key}/${item.key}.png`);
          return (
            <Link
              key={item.key}
              href={href}
              className={`group relative flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all ${
                isActive
                  ? "border-transparent bg-white text-[var(--color-primary)] shadow-sm"
                  : "border-[var(--color-border-subtle)] bg-white/50 text-slate-700 hover:bg-white"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-[var(--color-primary)]" />
              )}
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-2xl text-sm transition-transform group-hover:scale-[1.03] ${groupBadgeClass(
                  item.key,
                )}`}
              >
                {/* {groupIcon(item.key)} */}
                <Image src={`/group/${item.key}/${item.key}.png`} alt={item.labelKey} width={24} height={24} />
              </span>
              <span>{t(item.labelKey)}</span>
            </Link>
          );
        })}
      </nav>

      {/* Quick links */}
      <div className="mt-auto pt-6">
        <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-white/60 p-4 text-xs text-slate-600 shadow-sm">
        <p className="mb-2 font-semibold">{t("nav.quickLinks")}</p>
        <button className="block w-full text-left text-sky-700 hover:underline">
          {t("nav.findNearestPoliceStation")}
        </button>
        <button className="mt-1 block w-full text-left text-sky-700 hover:underline">
          {t("nav.legalAidNgos")}
        </button>
        </div>
      </div>
    </aside>
  );
}

