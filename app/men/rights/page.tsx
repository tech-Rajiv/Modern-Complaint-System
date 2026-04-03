 "use client";

import { useState } from "react";
import { AppShell } from "../../components/layout/AppShell";
import { CategoryTabs } from "../../components/category/CategoryTabs";
import { CategoryContent } from "../../components/category/CategoryContent";
import {
  CATEGORY_DATA,
  type CategoryData,
  HEADER_TABS,
  type HeaderTab,
} from "../../constants/data";

export default function MenRightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab] = useState<HeaderTab>(HEADER_TABS[0]);

  const category = CATEGORY_DATA.find((c) => c.id === "men") as CategoryData;

  return (
    <AppShell searchQuery={searchQuery} onSearchChange={setSearchQuery}>
      <div className="px-4 pt-4 md:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <CategoryTabs basePath="/men" />
        </div>
      </div>
      <CategoryContent
        category={category}
        activeTab={activeTab}
        searchQuery={searchQuery}
        section="rights"
      />
    </AppShell>
  );
}

