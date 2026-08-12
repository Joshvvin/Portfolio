import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Terminal } from "lucide-react";
import { Section, Tag } from "@/components/portfolio/Sections";
import {
  profile,
  stats,
  skillGroups,
  experience,
  projects,
  education,
  certificates,
  languages,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joshvvin Joshy — Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Joshvvin Joshy, full-stack developer in Bangalore building high-performance apps with React, TypeScript, Python (FastAPI) and PostgreSQL.",
      },
      { property: "og:title", content: "Joshvvin Joshy — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "React, TypeScript, Python (FastAPI), PostgreSQL. Led a team of 10 on a Loan Origination System; builder of AI/RAG tooling.",
      },
    ],
  }),
  component: Portfolio,
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm font-bold">
            <Terminal className="h-4 w-4 text-primary" aria-hidden />
            joshvvin.dev
          </a>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-primary px-3 py-2 font-mono text-xs font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Hire me
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden hero-bg">
          <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto w-full max-w-5xl px-6 py-24 md:py-36">
            <p className="label-mono">{profile.role} · {profile.location}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              I build fast, type-safe systems —{" "}
              <span className="text-primary">from schema to screen.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                See my work <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
              </a>
            </div>

            <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface px-5 py-6">
                  <dt className="font-mono text-2xl font-bold text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Section id="about" label="01 / About" title="What I care about">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                h: "Performance first",
                p: "Async FastAPI services, Redis caching and hand-tuned PostgreSQL queries — latency treated as a product feature.",
              },
              {
                h: "Type safety end to end",
                p: "TypeScript and Drizzle ORM so the database schema, the API contract and the UI never drift apart.",
              },
              {
                h: "Leading by shipping",
                p: "Ran scrums, reviews and delivery for a team of 10 on a high-stakes financial platform while writing production code.",
              },
            ].map((c) => (
              <article key={c.h} className="surface-card p-6">
                <h3 className="font-mono text-sm font-bold">{c.h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.p}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" label="02 / Skills" title="Toolkit">
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((g) => (
              <article key={g.title} className="surface-card p-6">
                <h3 className="label-mono">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" label="03 / Experience" title="Where I've worked">
          <ol className="relative space-y-10 border-l border-border pl-6 md:pl-10">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span
                  className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-primary md:-left-[47px]"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-mono text-lg font-bold">{job.role}</h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {job.period} · {job.location}
                  </p>
                </div>
                <p className="mt-1 text-sm text-accent">{job.company}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" label="04 / Projects" title="Things I've built">
          <div className="space-y-6">
            {projects.map((p) => (
              <article key={p.name} className="surface-card p-7">
                <h3 className="font-mono text-xl font-bold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" label="05 / Background" title="Education & languages">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="surface-card p-6 md:col-span-2">
              <h3 className="font-mono text-sm font-bold">{education.degree}</h3>
              <p className="mt-2 text-sm text-accent">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {education.period} · {education.location}
              </p>
            </article>
            <article className="surface-card p-6">
              <h3 className="label-mono">Certificates</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {certificates.map((c) => (
                  <Tag key={c}>{c}</Tag>
                ))}
              </div>
              <h3 className="label-mono mt-6">Languages</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {languages.map((l) => (
                  <Tag key={l}>{l}</Tag>
                ))}
              </div>
            </article>
          </div>
        </Section>

        <Section id="contact" label="06 / Contact" title="Let's build something">
          <div className="surface-card p-8">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Open to full-stack and backend roles, plus AI-adjacent product work. The fastest way to
              reach me is email.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 font-mono text-sm transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 font-mono text-sm transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden /> {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-mono text-sm transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4 text-primary" aria-hidden /> linkedin.com/in/joshvvin-joshy
              </a>
              <p className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" aria-hidden /> {profile.location}
              </p>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border/70 py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-2 px-6 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React, TypeScript & Tailwind CSS</span>
        </div>
      </footer>
    </div>
  );
}
