"use client";

import { useState, FormEvent } from "react";

type ChatWidgetProps = {
  label?: string;
};

export function ChatWidget({ label = "Chat" }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChatInput("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-30 rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg transition-transform hover:scale-[1.03] hover:bg-[var(--color-primary-soft-hover)]"
      >
        {label}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-end bg-transparent">
          <div className="mb-20 mr-5 w-full max-w-xs rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-3 text-xs shadow-2xl">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[10px] font-semibold text-[var(--color-primary)]">
                  PW
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">
                    {label}
                  </p>
                  <p className="text-[10px] text-[var(--color-muted)]">
                    Ask anything about this page
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[10px] text-slate-700"
              >
                ✕
              </button>
            </div>

            <div className="mb-2 rounded-xl bg-[var(--color-primary-soft)]/60 px-3 py-2 text-[11px] text-[var(--color-muted)]">
              This is a static chat box placeholder. You can connect it to your
              backend or chat service later.
            </div>

            <form className="mt-2 flex gap-2" onSubmit={handleSubmit}>
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
    </>
  );
}

