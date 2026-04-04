 "use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { AppShell } from "../components/layout/AppShell";
import {
  AWARENESS_TOPICS,
  type AwarenessTopicId,
} from "../constants/data";

type AwarenessTopicPageProps = {
  topicId: AwarenessTopicId;
};

function AwarenessTabs() {
  const pathname = usePathname();
  const base = "/awareness";
  const { t } = useTranslation();

  const tabs: { id: AwarenessTopicId; label: string }[] = [
    { id: "forest", label: t("awareness.tabs.forest") },
    { id: "roads", label: t("awareness.tabs.roads") },
    { id: "rivers", label: t("awareness.tabs.rivers") },
    { id: "buildings", label: t("awareness.tabs.buildings") },
    { id: "safety", label: t("awareness.tabs.safety") },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const href = `${base}/${tab.id}`;
        const isActive = pathname === href;
        return (
          <Link
            key={tab.id}
            href={href}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              isActive
                ? "border-transparent bg-[var(--color-primary)] text-white shadow-sm"
                : "border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-slate-700 hover:bg-[var(--color-primary-soft)]"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}

export function AwarenessTopicPage({ topicId }: AwarenessTopicPageProps) {
  const { t } = useTranslation();

  const topic =
    AWARENESS_TOPICS.find((t) => t.id === topicId) ?? AWARENESS_TOPICS[0];


  const measuresText = topic.measuresKeys.map((k) => t(k));
  const stepsText = topic.complaintStepKeys.map((k) => t(k));

  const visibleMeasures = measuresText;
  const visibleSteps = stepsText;

  return (
    <AppShell >
      <section className="flex flex-1 flex-col bg-[var(--background)] px-4 py-6 md:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
          <AwarenessTabs />

          <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                {t("awareness.title")}
              </p>
              <h1 className="mt-1 text-lg font-semibold text-slate-900">
                {t(topic.labelKey)}
              </h1>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {t(topic.summaryKey)}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-4 shadow-sm">
              <h2 className="mb-2 text-sm font-semibold text-slate-900">
                {t("awareness.importantNumbers")}
              </h2>
              <ul className="space-y-2 text-sm">
                {topic.helplines.map((h) => (
                  <li
                    key={h.label}
                    className="flex items-center justify-between rounded-xl bg-[var(--color-primary-soft)]/60 px-3 py-2"
                  >
                    <span className="text-slate-900">{h.label}</span>
                    <a
                      href={`tel:${h.number}`}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                    >
                      {h.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-4 shadow-sm">
              <h2 className="mb-2 text-sm font-semibold text-slate-900">
                {t("awareness.measuresTitle")}
              </h2>
              <p className="mb-3 text-xs text-[var(--color-muted)]">
                {t("awareness.measuresSubtitle")}
              </p>
              <ul className="space-y-2 text-sm">
                {visibleMeasures.map((m, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 rounded-xl bg-[var(--color-primary-soft)]/60 px-3 py-2"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-4 shadow-sm">
              <h2 className="mb-2 text-sm font-semibold text-slate-900">
                {t("awareness.complaintTitle")}
              </h2>
              <p className="mb-3 text-xs text-[var(--color-muted)]">
                {t("awareness.complaintSubtitle")}
              </p>
              <ol className="space-y-4">
                {visibleSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                        {index + 1}
                      </div>
                      {index !== visibleSteps.length - 1 && (
                        <div className="mt-1 h-8 w-px bg-[var(--color-border-subtle)]" />
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-slate-800">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

