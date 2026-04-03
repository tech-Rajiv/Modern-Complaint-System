import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export type CategoryTabKey = "overview" | "rights" | "laws" | "complaint";

type CategoryTabsProps = {
  basePath: "/women" | "/men" | "/child" | "/senior";
};

const TABS: { key: CategoryTabKey; labelKey: string; suffix: string }[] = [
  { key: "overview", labelKey: "categoryTabs.overview", suffix: "" },
  { key: "rights", labelKey: "categoryTabs.rights", suffix: "/rights" },
  { key: "laws", labelKey: "categoryTabs.laws", suffix: "/laws" },
  { key: "complaint", labelKey: "categoryTabs.complaint", suffix: "/complaint" },
];

export function CategoryTabs({ basePath }: CategoryTabsProps) {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-2">
      {TABS.map((tab) => {
        const href = `${basePath}${tab.suffix}`;
        const isActive = pathname === href;
        return (
          <Link
            key={tab.key}
            href={href}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              isActive
                ? "border-transparent bg-[var(--color-primary)] text-white shadow-sm"
                : "border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-slate-700 hover:bg-[var(--color-primary-soft)]"
            }`}
          >
            {t(tab.labelKey)}
          </Link>
        );
      })}
    </div>
  );
}

