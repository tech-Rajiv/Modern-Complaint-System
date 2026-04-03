type MainContentProps = {
  activeCategoryLabel: string | undefined;
  activeHeaderTab: string;
};

export function MainContent({
  activeCategoryLabel,
  activeHeaderTab,
}: MainContentProps) {
  return (
    <section className="flex flex-1 flex-col bg-[var(--background)] px-4 py-6 md:px-8">
      <div className="mx-auto flex h-full max-w-5xl flex-col gap-4 rounded-2xl border border-dashed border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 p-6 text-sm text-[var(--color-muted)] shadow-sm">
        <h1 className="text-lg font-semibold text-slate-900">
          {activeHeaderTab}
        </h1>
        <p>
          This is a placeholder section for{" "}
          <span className="font-medium text-[var(--color-primary)]">
            {activeHeaderTab}
          </span>{" "}
          under{" "}
          <span className="font-medium">{activeCategoryLabel}</span> category.
          You can replace this with real content later.
        </p>
      </div>
    </section>
  );
}

