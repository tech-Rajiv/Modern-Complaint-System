import Link from "next/link";
import { useTranslation } from "react-i18next";
import type { Helpline } from "../../constants/data";

export type IssueConfig = {
  id: string;
  title: string;
  summary: string;
  helplines: Helpline[];
  complaintHref: string;
};

type IssueListProps = {
  issues: IssueConfig[];
};

export function IssueList({ issues }: IssueListProps) {
  if (!issues.length) return null;
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      {issues.map((issue) => (
        <section
          key={issue.id}
          className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-4 shadow-sm"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-slate-900">
                {t(issue.title)}
              </h2>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {t(issue.summary)}
              </p>
            </div>
            <div className="h-20 w-full rounded-xl border border-dashed border-[var(--color-border-subtle)] bg-[var(--background)] md:h-24 md:w-40" />
          </div>

          <div className="mt-3 space-y-2 text-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
              Related Emergency Numbers
            </p>
            <ul className="space-y-2">
              {issue.helplines.map((h) => (
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

          <div className="mt-3">
            <Link
              href={issue.complaintHref}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Complaint Guide
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}

