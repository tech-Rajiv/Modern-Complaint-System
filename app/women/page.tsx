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
import { IssueList, type IssueConfig } from "../components/topic/IssueList";
import { WOMEN_TOPICS } from "../content/staticPages";
import { CategoryTabs } from "../components/category/CategoryTabs";
import { useTranslation } from "react-i18next";

const CATEGORY_ID = "women";

export default function WomenPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab] = useState<HeaderTab>(HEADER_TABS[0]);
  const { t } = useTranslation();

  const category = CATEGORY_DATA.find(
    (c) => c.id === CATEGORY_ID,
  ) as CategoryData;

  const issues: IssueConfig[] = WOMEN_TOPICS;

  return (
    <AppShell searchQuery={searchQuery} onSearchChange={setSearchQuery}>
      <div className="px-4 pt-4 md:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <CategoryTabs basePath="/women" />
        </div>
      </div>
      <CategoryContent
        category={category}
        activeTab={activeTab}
        searchQuery={searchQuery}
        section="overview"
      />
      <div className="mt-4 px-4 pb-6 md:px-8">
        <div className="mx-auto w-full max-w-5xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            {t("category.commonIssues")}
          </p>
          <IssueList issues={issues} />
        </div>
      </div>
    </AppShell>
  );
}

