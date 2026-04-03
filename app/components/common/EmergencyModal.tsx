 "use client";

import { EMERGENCY_CONTACTS } from "../../constants/data";
import { useTranslation } from "react-i18next";

type EmergencyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function EmergencyModal({ isOpen, onClose }: EmergencyModalProps) {
  if (!isOpen) return null;
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-[var(--color-surface)] p-4 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              {t("emergency.modalTitle")}
            </h2>
            <p className="text-xs text-[var(--color-muted)]">
              {t("emergency.modalSubtitle")}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-xs text-slate-700"
          >
            ✕
          </button>
        </div>

        <ul className="space-y-2 text-sm">
          {EMERGENCY_CONTACTS.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-primary-soft)]/60 px-3 py-2"
            >
              <span className="text-slate-800">{item.label}</span>
              <span className="font-semibold text-red-600">{item.number}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

