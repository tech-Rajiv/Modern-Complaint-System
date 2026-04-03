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

type MobileSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  if (!isOpen) return null;

  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-40 flex md:hidden">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="h-full flex-1 bg-black/20 backdrop-blur-[1px]"
      />
      <div className="h-full w-72 flex-shrink-0 border-l border-[var(--color-border-subtle)] bg-[var(--color-sidebar-bg)] px-4 py-6 shadow-xl">
        <div className="mb-4 overflow-hidden ">
          <div className="relative px-4 py-4">
            {/* <div className="absolute inset-0 opacity-90 " /> */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-200/40 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-emerald-200/30 blur-2xl" />
            <div className="flex flex-col items-center justify-center">
              <Image src="/logo/logo-sidebar.png" alt="SIMPLY LAW" className="rounded-lg" width={80} height={80} />
              {/* <p className="text-xs mt-2 ">Know your rights, understand your laws</p> */}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-2xl border border-[var(--color-border-subtle)] bg-white/80 text-slate-700 shadow-sm"
        >
          ✕
        </button>
        {/* Top links */}
        <nav className="mb-5 space-y-2 text-sm font-medium text-slate-700">
          <Link
            href="/"
            onClick={onClose}
            className={`group flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all ${
              pathname === "/"
                ? "border-transparent bg-white text-slate-900 shadow-sm"
                : "border-[var(--color-border-subtle)] bg-white/50 text-slate-700 hover:bg-white"
            }`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-100 text-sm text-indigo-700 transition-transform group-hover:scale-[1.03]">
              🏠
            </span>
            <span>{t("nav.generalInfo")}</span>
          </Link>
          <Link
            href="/awareness/forest"
            onClick={onClose}
            className={`group flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all ${
              pathname === "/awareness" || pathname.startsWith("/awareness/")
                ? "border-transparent bg-white text-slate-900 shadow-sm"
                : "border-[var(--color-border-subtle)] bg-white/50 text-slate-700 hover:bg-white"
            }`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-100 text-sm text-emerald-700 transition-transform group-hover:scale-[1.03]">
              🌍
            </span>
            <span>{t("nav.awareness")}</span>
          </Link>
          <Link
            href="/emergency"
            onClick={onClose}
            className={`group flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all ${
              pathname === "/emergency"
                ? "border-transparent bg-white text-slate-900 shadow-sm"
                : "border-[var(--color-border-subtle)] bg-white/50 text-slate-700 hover:bg-white"
            }`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-red-100 text-sm text-red-700 transition-transform group-hover:scale-[1.03]">
              📞
            </span>
            <span>{t("nav.emergencyContacts")}</span>
          </Link>
        </nav>

        {/* Groups */}
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            {t("nav.groups")}
          </p>
        </div>
        <nav className="space-y-2 text-sm font-medium text-slate-700">
          {SIDEBAR_ITEMS.map((item) => {
            const href = `/${item.key}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item.key}
                href={href}
                onClick={onClose}
                className={`group relative flex w-full items-center gap-3 rounded-2xl border px-3 py-2.5 text-left transition-all ${
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
                  {groupIcon(item.key)}
                </span>
                <span>{t(item.labelKey)}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

