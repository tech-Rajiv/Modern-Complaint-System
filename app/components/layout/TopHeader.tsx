type TopHeaderProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onOpenSos: () => void;
  onOpenMobileSidebar: () => void;
};

export function TopHeader({
  searchQuery,
  onSearchChange,
  onOpenSos,
  onOpenMobileSidebar,
}: TopHeaderProps) {
  return (
    <header className="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 px-4 py-3 backdrop-blur-md md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open menu"
            onClick={onOpenMobileSidebar}
            className="mr-1 flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-slate-700 shadow-sm md:hidden"
          >
            <span className="flex flex-col gap-0.5">
              <span className="block h-[1.5px] w-4 rounded-full bg-slate-700" />
              <span className="block h-[1.5px] w-4 rounded-full bg-slate-700" />
              <span className="block h-[1.5px] w-4 rounded-full bg-slate-700" />
            </span>
          </button>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary)] text-sm font-semibold text-white md:hidden">
            PW
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-slate-900">
              Citizen Complaint Guide
            </p>
            <p className="text-xs text-[var(--color-muted)]">
              Understand your rights & how to file a complaint
            </p>
          </div>
        </div>

        <div className="flex w-full items-center gap-3 md:w-auto">
          <div className="relative flex-1 md:w-72">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search rights, laws, or help..."
              className="w-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none ring-0 placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
            />
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[10px] font-medium text-[var(--color-muted)]">
              ⌘K
            </span>
          </div>
          <button
            type="button"
            onClick={onOpenSos}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-red-700"
          >
            Emergency SOS
          </button>
        </div>
      </div>
    </header>
  );
}

