 "use client";

import { useState } from "react";

type CategoryKey = "men" | "women" | "child" | "senior";

const SIDEBAR_ITEMS: { key: CategoryKey; label: string }[] = [
  { key: "men", label: "Men" },
  { key: "women", label: "Women" },
  { key: "child", label: "Child" },
  { key: "senior", label: "Senior Citizen" },
];

const HEADER_TABS: Record<CategoryKey, string[]> = {
  men: ["Men Opt 1", "Men Opt 2", "Men Opt 3"],
  women: ["Women Opt 1", "Women Opt 2", "Women Opt 3"],
  child: ["Child Opt 1", "Child Opt 2", "Child Opt 3"],
  senior: ["Senior Opt 1", "Senior Opt 2", "Senior Opt 3"],
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("men");
  const [activeHeaderTab, setActiveHeaderTab] = useState<string>(
    HEADER_TABS.men[0],
  );
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");

  const tabsForCategory = HEADER_TABS[activeCategory];

  return (
    <div className="relative flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Sidebar (desktop) */}
      <aside className="hidden w-60 flex-shrink-0 flex-col border-r border-[var(--color-border-subtle)] bg-[var(--color-sidebar-bg)] px-4 py-6 md:flex">
        <div className="mb-6 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary)] text-sm font-semibold text-white">
            PW
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-slate-900">
              PicWish
            </p>
            <p className="text-xs text-[var(--color-muted)]">Customer groups</p>
          </div>
        </div>
        <nav className="space-y-1 text-sm font-medium text-slate-700">
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = item.key === activeCategory;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  setActiveCategory(item.key);
                  const firstTab = HEADER_TABS[item.key][0];
                  setActiveHeaderTab(firstTab);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors ${
                  isActive
                    ? "bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm"
                    : "text-slate-700 hover:bg-[var(--color-primary-soft)]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile sidebar overlay */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMobileSidebarOpen(false)}
            className="h-full flex-1 bg-black/20 backdrop-blur-[1px]"
          />
          <div className="h-full w-64 flex-shrink-0 border-l border-[var(--color-border-subtle)] bg-[var(--color-sidebar-bg)] px-4 py-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary)] text-sm font-semibold text-white">
                  PW
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-slate-900">
                    PicWish
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    Customer groups
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileSidebarOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface)] text-slate-600 shadow-sm"
              >
                ✕
              </button>
            </div>
            <nav className="space-y-1 text-sm font-medium text-slate-700">
              {SIDEBAR_ITEMS.map((item) => {
                const isActive = item.key === activeCategory;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setActiveCategory(item.key);
                      const firstTab = HEADER_TABS[item.key][0];
                      setActiveHeaderTab(firstTab);
                      setIsMobileSidebarOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors ${
                      isActive
                        ? "bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm"
                        : "text-slate-700 hover:bg-[var(--color-primary-soft)]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Main area */}
      <main className="flex min-h-screen flex-1 flex-col">
        {/* Top bar (logo + search) */}
        <header className="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 px-4 py-3 backdrop-blur-md md:px-8">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setIsMobileSidebarOpen(true)}
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
                  PicWish
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  Smart segment dashboard
                </p>
              </div>
            </div>

            <div className="flex w-full items-center gap-3 md:w-96">
              <div className="relative flex-1">
                <input
                  type="search"
                  placeholder="Search customers, tags, or groups"
                  className="w-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-2 text-sm outline-none ring-0 placeholder:text-[var(--color-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[10px] font-medium text-[var(--color-muted)]">
                  ⌘K
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile sidebar tabs */}
        <div className="border-b border-[var(--color-border-subtle)] bg-[var(--color-primary-soft)] px-3 py-2 md:hidden">
          <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto pb-1">
            {SIDEBAR_ITEMS.map((item) => {
              const isActive = item.key === activeCategory;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => {
                    setActiveCategory(item.key);
                    const firstTab = HEADER_TABS[item.key][0];
                    setActiveHeaderTab(firstTab);
                  }}
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--color-surface)] text-[var(--color-primary)] shadow-sm"
                      : "bg-transparent text-slate-700 hover:bg-[var(--color-primary-soft-hover)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Header tabs (depend on sidebar selection) */}
        <div className="border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-4 pt-3 md:px-8">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 pb-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
                  Category
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {SIDEBAR_ITEMS.find((i) => i.key === activeCategory)?.label}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary)]">
                Static header tabs (demo)
              </span>
            </div>

            <div className="-mb-2 flex gap-2 overflow-x-auto pb-1">
              {tabsForCategory.map((tab) => {
                const isActive = tab === activeHeaderTab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveHeaderTab(tab)}
                    className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      isActive
                        ? "border-transparent bg-[var(--color-primary)] text-white shadow-sm"
                        : "border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-slate-700 hover:bg-[var(--color-primary-soft)]"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content area */}
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
              <span className="font-medium">
                {
                  SIDEBAR_ITEMS.find((i) => i.key === activeCategory)?.label
                }
              </span>{" "}
              category. You can replace this with real content later.
            </p>
          </div>
        </section>
      </main>

      {/* Floating chat button */}
      <button
        type="button"
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-5 right-5 z-30 rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-[1.03] hover:bg-[var(--color-primary-soft-hover)]"
      >
        Chat
      </button>

      {/* Chat modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-end bg-transparent">
          <div className="mb-20 mr-5 w-full max-w-xs rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-3 text-xs shadow-2xl">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[10px] font-semibold text-[var(--color-primary)]">
                  PW
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">Chat</p>
                  <p className="text-[10px] text-[var(--color-muted)]">
                    Ask anything about this page
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[10px] text-slate-700"
              >
                ✕
              </button>
            </div>

            <div className="mb-2 rounded-xl bg-[var(--color-primary-soft)]/60 px-3 py-2 text-[11px] text-[var(--color-muted)]">
              This is a static chat box placeholder. You can connect it to your
              backend or chat service later.
            </div>

            <form
              className="mt-2 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                setChatInput("");
              }}
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-1.5 text-xs outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
              />
              <button
                type="submit"
                className="rounded-xl bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white shadow-sm disabled:opacity-50"
                disabled={!chatInput.trim()}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
