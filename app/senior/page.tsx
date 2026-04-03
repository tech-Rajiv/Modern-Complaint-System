 "use client";

import { useState } from "react";
import { AppShell } from "../components/layout/AppShell";
import { CategoryTabs } from "../components/category/CategoryTabs";
import {
  CATEGORY_DATA,
  type CategoryData,
  HEADER_TABS,
  type HeaderTab,
} from "../constants/data";
import { CategoryContent } from "../components/category/CategoryContent";

const CATEGORY_ID = "senior";

export default function SeniorPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab] = useState<HeaderTab>(HEADER_TABS[0]);

  const category = CATEGORY_DATA.find(
    (c) => c.id === CATEGORY_ID,
  ) as CategoryData;

  return (
    <AppShell searchQuery={searchQuery} onSearchChange={setSearchQuery}>
      <div className="px-4 pt-4 md:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <CategoryTabs basePath="/senior" />
        </div>
      </div>
      <CategoryContent
        category={category}
        activeTab={activeTab}
        searchQuery={searchQuery}
        section="overview"
      />
    </AppShell>
  );
}

