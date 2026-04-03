import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import Image from "next/image";

type TopHeaderProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onOpenSos: () => void;
  onOpenMobileSidebar: () => void;
};

export function TopHeader({
  searchQuery,
  onSearchChange,
  onOpenSos,
  onOpenMobileSidebar,
}: TopHeaderProps) {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 px-4 py-3 backdrop-blur-md md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open menu"
            onClick={onOpenMobileSidebar}
            className="mr-1 flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-slate-700 shadow-sm md:hidden"
          >
            <span className="flex flex-col gap-0.5">
              <span className="block h-[1.5px] w-4 rounded-full bg-slate-700" />
              <span className="block h-[1.5px] w-4 rounded-full bg-slate-700" />
              <span className="block h-[1.5px] w-4 rounded-full bg-slate-700" />
            </span>
          </button>
          <div className="flex items-center gap-2">
          <Image src="/logo/logo.png" alt="SIMPLY LAW" width={24} height={24} />
          <div className="logo-text">
          <p className="text-xl font-bold tracking-tight">
            SIMPLY<span className="text-blue-400">LAW</span>
          </p>
        </div>
          </div>
        </div>

        <div className="flex w-full items-center gap-3 md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t("header.searchPlaceholder")}
              className="w-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none ring-0 placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
            />
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[10px] font-medium text-[var(--color-muted)]">
              ⌘K
            </span>
          </div>
          <div className="hidden items-center gap-1 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-0.5 text-[10px] font-medium text-slate-600 md:flex">
            {[
              { code: "en", label: "EN" },
              { code: "hi", label: "हिं" },
              { code: "gu", label: "ગુ" },
            ].map((opt) => {
              const isActive = i18n.language === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => {
                    void i18n.changeLanguage(opt.code);
                  }}
                  className={`rounded-lg px-2 py-1 ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-slate-600 hover:bg-[var(--color-primary-soft)]"
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={onOpenSos}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-red-700"
          >
            {t("header.emergencySos")}
          </button>
        </div>
      </div>
    </header>
  );
}

