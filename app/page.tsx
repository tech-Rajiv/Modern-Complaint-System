"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppShell } from "./components/layout/AppShell";
import { HOME_PAGE_CONTENT } from "./content/staticPages";
import Image from "next/image";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <AppShell >
      <section className="flex flex-1 flex-col justify-center items-center bg-[var(--background)] px-4 py-6 md:px-8">
        <div className="w-full bg-blue-400 py-2 overflow-hidden">
          <div className="whitespace-nowrap animate-scroll text-white font-semibold">
            Important update from government • Important update from government • Important update from government
          </div>
        </div>



        <Image src="/logo/logo-rectangle.png" alt="SIMPLY LAW" className="mb-10 rounded-3xl opacity-50" width={1000} height={1000} />


        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 text-sm text-[var(--color-muted)] shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">
            {t(HOME_PAGE_CONTENT.titleKey)}
          </h1>
          {HOME_PAGE_CONTENT.paragraphKeys.map((key) => (
            <p key={key}>{t(key)}</p>
          ))}
        </div>

      </section>
    </AppShell >
  );
}
