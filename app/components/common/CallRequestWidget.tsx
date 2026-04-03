"use client";

import { useState, FormEvent } from "react";

export function CallRequestWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder – hook this into your backend or email service later.
    setIsOpen(false);
  };

  const canSubmit = fullName.trim() && phone.trim() && date && time;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-16 right-5 z-30 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)] shadow-lg ring-1 ring-[var(--color-border-subtle)] transition-transform hover:scale-[1.03]"
      >
        Talk to Expert
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-end bg-transparent">
          <div className="mb-24 mr-5 w-full max-w-xs rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-3 text-xs shadow-2xl">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-900">
                  Request a Call
                </p>
                <p className="text-[10px] text-[var(--color-muted)]">
                  Choose a convenient date and time for a callback.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[10px] text-slate-700"
              >
                ✕
              </button>
            </div>

            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="block text-[10px] font-medium text-slate-700">
                  Full name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-1.5 text-xs outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-medium text-slate-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-1.5 text-xs outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
                  placeholder="+91 ..."
                />
              </div>

              <div className="flex gap-2">
                <div className="flex-1 space-y-1">
                  <label className="block text-[10px] font-medium text-slate-700">
                    Preferred date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-1.5 text-xs outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <label className="block text-[10px] font-medium text-slate-700">
                    Preferred time
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-1.5 text-xs outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-soft)]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="mt-1 w-full rounded-xl bg-[var(--color-primary)] px-3 py-1.5 text-xs font-semibold text-white shadow-sm disabled:opacity-60"
              >
                Request Call
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

