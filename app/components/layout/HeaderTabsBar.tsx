import { CategoryKey, HEADER_TABS, SIDEBAR_ITEMS } from "@/app/lib/categories";

type HeaderTabsBarProps = {
  activeCategory: CategoryKey;
  activeHeaderTab: string;
  onHeaderTabChange: (tab: string) => void;
};

export function HeaderTabsBar({
  activeCategory,
  activeHeaderTab,
  onHeaderTabChange,
}: HeaderTabsBarProps) {
  const tabsForCategory = HEADER_TABS[activeCategory];

  return (
    <div className="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-4 pt-3 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              Category
            </p>
            <p className="text-sm font-semibold text-slate-900">
              {SIDEBAR_ITEMS.find((i) => i.key === activeCategory)?.label}
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary)]">
            Static header tabs (demo)
          </span>
        </div>

        <div className="-mb-2 flex gap-2 overflow-x-auto pb-1">
          {tabsForCategory.map((tab) => {
            const isActive = tab === activeHeaderTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onHeaderTabChange(tab)}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-transparent bg-[var(--color-primary)] text-white shadow-sm"
                    : "border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-slate-700 hover:bg-[var(--color-primary-soft)]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

