import { CategoryKey, SIDEBAR_ITEMS, HEADER_TABS } from "@/app/lib/categories";

type MobileCategoryTabsProps = {
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey, firstTab: string) => void;
};

export function MobileCategoryTabs({
  activeCategory,
  onCategoryChange,
}: MobileCategoryTabsProps) {
  return (
    <div className="border-b border-[var(--color-border-subtle)] bg-[var(--color-primary-soft)] px-3 py-2 md:hidden">
      <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto pb-1">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = item.key === activeCategory;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() =>
                onCategoryChange(item.key, HEADER_TABS[item.key][0])
              }
              className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                isActive
                  ? "bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm"
                  : "bg-transparent text-slate-700 hover:bg-[var(--color-primary-soft-hover)]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

