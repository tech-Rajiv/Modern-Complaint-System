 "use client";

import { useState } from "react";
import { AppShell } from "../components/layout/AppShell";
import {
  CATEGORY_DATA,
  type CategoryData,
  HEADER_TABS,
  type HeaderTab,
} from "../constants/data";
import { CategoryContent } from "../components/category/CategoryContent";

const CATEGORY_ID = "men";

export default function MenPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab] = useState<HeaderTab>(HEADER_TABS[0]);

  const category = CATEGORY_DATA.find(
    (c) => c.id === CATEGORY_ID,
  ) as CategoryData;

  return (
    <AppShell searchQuery={searchQuery} onSearchChange={setSearchQuery}>
      <CategoryContent
        category={category}
        activeTab={activeTab}
        searchQuery={searchQuery}
      />
    </AppShell>
  );
}

