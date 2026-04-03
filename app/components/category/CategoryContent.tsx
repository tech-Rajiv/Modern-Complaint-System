import type { CategoryData, HeaderTab } from "../../constants/data";

type CategoryContentProps = {
  category: CategoryData;
  activeTab: HeaderTab;
  searchQuery: string;
};

export function CategoryContent({
  category,
  activeTab,
  searchQuery,
}: CategoryContentProps) {
  const query = searchQuery.toLowerCase().trim();

  const filteredRights = category.rights.filter((r) =>
    r.toLowerCase().includes(query),
  );
  const filteredLaws = category.laws.filter(
    (l) =>
      l.code.toLowerCase().includes(query) ||
      l.description.toLowerCase().includes(query),
  );

  return (
    <section className="flex flex-1 flex-col bg-[var(--background)] px-4 py-6 md:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        {/* Static tabs for sub-sections (UI only for now) */}
        <div className="flex flex-wrap gap-2">
          {["Overview", "Know Your Rights", "Legal Dictionary", "Complaint Guide"].map(
            (tabLabel) => {
              const isActiveSub = tabLabel === "Overview"; // static highlight for now
              return (
                <button
                  key={tabLabel}
                  type="button"
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActiveSub
                      ? "border-transparent bg-[var(--color-primary)] text-white shadow-sm"
                      : "border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-slate-700 hover:bg-[var(--color-primary-soft)]"
                  }`}
                >
                  {tabLabel}
                </button>
              );
            },
          )}
        </div>
        {/* Hero + CTAs */}
        <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-5 py-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            {category.label} Section
          </p>
          <h1 className="mt-1 text-lg font-semibold text-slate-900">
            {category.heroSubtitle}
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

        {/* Emergency cards for this group */}
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

        {/* Middle section: Rights + Laws */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Know Your Rights */}
          <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold text-slate-900">
              Know Your Rights
            </h2>
            <p className="mb-3 text-xs text-[var(--color-muted)]">
              Simple explanations of key protections for this group.
            </p>
            <ul className="space-y-2 text-sm">
              {(query ? filteredRights : category.rights).map((right, idx) => (
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

          {/* Legal Dictionary */}
          <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-4 shadow-sm">
            <h2 className="mb-2 text-sm font-semibold text-slate-900">
              Legal Dictionary
            </h2>
            <p className="mb-3 text-xs text-[var(--color-muted)]">
              Important laws in simple language.
            </p>
            <ul className="space-y-2 text-sm">
              {(query ? filteredLaws : category.laws).map((law) => (
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
        </div>

        {/* Complaint guide vertical stepper */}
        <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-4 shadow-sm">
          <h2 className="mb-2 text-sm font-semibold text-slate-900">
            How to File a Complaint
          </h2>
          <p className="mb-4 text-xs text-[var(--color-muted)]">
            Follow these steps to document the incident and approach the right
            authorities.
          </p>
          <ol className="space-y-4">
            {category.complaintSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                    {index + 1}
                  </div>
                  {index !== category.complaintSteps.length - 1 && (
                    <div className="mt-1 h-8 w-px bg-[var(--color-border-subtle)]" />
                  )}
                </div>
                <p className="mt-0.5 text-sm text-slate-800">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

