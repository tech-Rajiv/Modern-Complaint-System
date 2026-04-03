import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "../../constants/data";
import { useTranslation } from "react-i18next";

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
      <div className="h-full w-64 flex-shrink-0 border-l border-[var(--color-border-subtle)] bg-[var(--color-sidebar-bg)] px-4 py-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary)] text-sm font-semibold text-white">
              PW
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-900">
                {t("app.title")}
              </p>
              <p className="text-xs text-[var(--color-muted)]">
                {t("app.subtitle")}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface)] text-slate-600 shadow-sm"
          >
            ✕
          </button>
        </div>
        {/* Top links */}
        <nav className="mb-4 space-y-1 text-sm font-medium text-slate-700">
          <Link
            href="/"
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
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
                onClick={onClose}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors ${
                  isActive
                    ? "bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm"
                    : "text-slate-700 hover:bg-[var(--color-primary-soft)]"
                }`}
              >
                <span>{t(item.labelKey)}</span>
                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

