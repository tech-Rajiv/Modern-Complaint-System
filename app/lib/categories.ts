export type CategoryKey = "men" | "women" | "child" | "senior";

export const SIDEBAR_ITEMS: { key: CategoryKey; label: string }[] = [
  { key: "men", label: "Men" },
  { key: "women", label: "Women" },
  { key: "child", label: "Child" },
  { key: "senior", label: "Senior Citizen" },
];

export const HEADER_TABS: Record<CategoryKey, string[]> = {
  men: ["Men Opt 1", "Men Opt 2", "Men Opt 3"],
  women: ["Women Opt 1", "Women Opt 2", "Women Opt 3"],
  child: ["Child Opt 1", "Child Opt 2", "Child Opt 3"],
  senior: ["Senior Opt 1", "Senior Opt 2", "Senior Opt 3"],
};

