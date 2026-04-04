import { useTranslation } from "react-i18next";
import type { CategoryData, HeaderTab } from "../../constants/data";

type CategoryContentProps = {
  category: CategoryData;
  activeTab: HeaderTab;
  section?: "overview" | "rights" | "laws" | "complaint";
};

export function CategoryContent({
  category,
  activeTab,
  section = "overview",
}: CategoryContentProps) {
  const { t } = useTranslation();

  const rightsText = category.rightsKeys.map((k) => t(k));
  const lawsText = category.laws.map((l) => ({
    code: t(l.codeKey),
    description: t(l.descriptionKey),
  }));

  return (
    <section className="flex flex-1 flex-col bg-[var(--background)] px-4 py-6 md:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        {/* Tabs are now route-driven and rendered in page components */}
        {/* Hero + CTAs */}
        {(section === "overview" || section === "rights") && (
          <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-5 py-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            {t(category.labelKey)} Section
          </p>
          <h1 className="mt-1 text-lg font-semibold text-slate-900">
            {t(category.heroSubtitleKey)}
          </h1>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Learn your basic rights, important laws, and the exact steps to file
            a complaint if something goes wrong.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`tel:${category.primaryHelplineNumber}`}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              📞 Call {category.primaryHelplineNumber}
            </a>
            <button className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm hover:bg-[var(--color-primary-soft)]">
              📂 Download Filing Checklist
            </button>
          </div>
          </div>
        )}

        {/* Emergency cards for this group */}
        {section === "overview" && (
          <div className="grid gap-4 md:grid-cols-2">
          {category.helplines.map((h) => (
            <div
              key={h.label}
              className="flex items-center justify-between rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-4 py-3 text-sm shadow-sm"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  Emergency Number
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {h.label}
                </p>
              </div>
              <a
                href={`tel:${h.number}`}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
              >
                {h.number}
              </a>
            </div>
          ))}
          </div>
        )}

        {/* Middle section: Rights + Laws */}
        {(section === "overview" || section === "rights" || section === "laws") && (
          <div className="grid gap-4 md:grid-cols-2">
          {/* Know Your Rights */}
          {(section === "overview" || section === "rights") && (
            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold text-slate-900">
              Know Your Rights
            </h2>
            <p className="mb-3 text-xs text-[var(--color-muted)]">
              Simple explanations of key protections for this group.
            </p>
            <ul className="space-y-2 text-sm">
              {rightsText.map((right, idx) => (
                <li
                  key={idx}
                  className="flex gap-2 rounded-xl bg-[var(--color-primary-soft)]/60 px-3 py-2"
                >
                  <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            </div>
          )}

          {/* Legal Dictionary */}
          {(section === "overview" || section === "laws") && (
            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold text-slate-900">
              Legal Dictionary
            </h2>
            <p className="mb-3 text-xs text-[var(--color-muted)]">
              Important laws in simple language.
            </p>
            <ul className="space-y-2 text-sm">
              {lawsText.map((law) => (
                <li
                  key={law.code}
                  className="rounded-xl bg-[var(--color-primary-soft)]/40 px-3 py-2"
                >
                  <p className="text-xs font-semibold text-slate-900">
                    {law.code}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {law.description}
                  </p>
                </li>
              ))}
            </ul>
            </div>
          )}
          </div>
        )}

        {/* Complaint guide vertical stepper */}
        {(section === "overview" || section === "complaint") && (
          <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-4 shadow-sm">
          <h2 className="mb-2 text-sm font-semibold text-slate-900">
            How to File a Complaint
          </h2>
          <p className="mb-4 text-xs text-[var(--color-muted)]">
            Follow these steps to document the incident and approach the right
            authorities.
          </p>
          <ol className="space-y-4">
            {category.complaintStepKeys.map((stepKey, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                    {index + 1}
                  </div>
                  {index !== category.complaintStepKeys.length - 1 && (
                    <div className="mt-1 h-8 w-px bg-[var(--color-border-subtle)]" />
                  )}
                </div>
                <p className="mt-0.5 text-sm text-slate-800">{t(stepKey)}</p>
              </li>
            ))}
          </ol>
          </div>
        )}
      </div>
    </section>
  );
}

