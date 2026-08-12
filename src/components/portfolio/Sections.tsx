import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border/70 py-20 md:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <p className="label-mono">{label}</p>
        <h2 className="mt-3 font-mono text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-muted/60 px-3 py-1 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}
