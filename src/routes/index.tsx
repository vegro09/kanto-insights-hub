import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Radar,
  Lightbulb,
  SlidersHorizontal,
  Bookmark,
  Send,
  Search,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanto News Auto — Complaint Radar Dashboard" },
      {
        name: "description",
        content:
          "Kanto News Auto scans Reddit, X and app stores for user complaints and extracts validated SaaS ideas in a flat, focused control terminal.",
      },
      { property: "og:title", content: "Kanto News Auto — Complaint Radar Dashboard" },
      {
        property: "og:description",
        content:
          "Scan Reddit, X and app stores for user complaints and extract validated SaaS ideas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const NAV = [
  { label: "Radar", icon: Radar },
  { label: "Idea Vault", icon: Lightbulb },
  { label: "Terminal Settings", icon: SlidersHorizontal },
];

const SOURCES = ["Reddit", "X", "App Stores"];

const METRICS = [
  { label: "Complaints Parsed", value: "13,584" },
  { label: "Ideas Extracted", value: "233" },
  { label: "System Uptime", value: "99.89%" },
];

const IDEAS = [
  {
    name: "InvoiceDrift",
    problem:
      "Freelancers on r/freelance repeatedly report chasing late payments across email threads with no reliable reminder trail.",
    solution:
      "Automated escalation sequences that track invoice age and send tiered reminders with signed payment links.",
    tag: "Reddit · 89 signals",
  },
  {
    name: "StackSentry",
    problem:
      "Small engineering teams complain that cloud spend spikes are only discovered on the monthly bill.",
    solution:
      "A lightweight daily anomaly digest that maps unexpected cost deltas to the exact service and commit that caused them.",
    tag: "X · 55 signals",
  },
  {
    name: "ClinicQueue",
    problem:
      "App store reviews for booking apps center on double-booked slots and no-show penalties applied unfairly.",
    solution:
      "Real-time slot locking with a fairness engine that verifies check-in evidence before charging a no-show fee.",
    tag: "App Stores · 34 signals",
  },
  {
    name: "LedgerLingo",
    problem:
      "Non-finance founders say accounting exports are unreadable and they cannot answer basic runway questions.",
    solution:
      "A plain-language layer over ledger exports that answers runway, burn and margin questions in one sentence.",
    tag: "Reddit · 21 signals",
  },
];

function Toggle({ label }: { label: string }) {
  const [on, setOn] = useState(label !== "App Stores");
  return (
    <button
      type="button"
      onClick={() => setOn(!on)}
      aria-pressed={on}
      className="flex w-full items-center justify-between py-2 text-sm text-foreground"
    >
      <span>{label}</span>
      <span
        className={`flex h-5 w-9 items-center border border-border p-0.5 transition-colors ${
          on ? "bg-cream" : "bg-background"
        }`}
        style={{ borderRadius: 8 }}
      >
        <span
          className={`h-3.5 w-3.5 transition-transform ${
            on ? "translate-x-4 bg-background" : "translate-x-0 bg-border"
          }`}
          style={{ borderRadius: 3 }}
        />
      </span>
    </button>
  );
}

function Dashboard() {
  const [keywords, setKeywords] = useState("saas complaint, billing bug");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full border-b border-border p-5 lg:w-[21rem] lg:shrink-0 lg:border-b-0 lg:border-r lg:p-8">
          <h1 className="font-serif text-2xl italic tracking-tight text-cream">
            Kanto News Auto
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.21em] text-muted-foreground">
            Control Center
          </p>

          <nav className="mt-8 flex flex-col gap-1">
            {NAV.map(({ label, icon: Icon }, i) => (
              <button
                key={label}
                type="button"
                className={`flex items-center gap-3 border px-3 py-2 text-sm transition-colors ${
                  i === 0
                    ? "border-border bg-secondary text-cream"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                }`}
                style={{ borderRadius: 8 }}
              >
                <Icon size={16} strokeWidth={1.5} />
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-13 border-t border-border pt-5">
            <h2 className="text-xs uppercase tracking-[0.21em] text-muted-foreground">
              Scan Parameters
            </h2>

            <label
              htmlFor="keywords"
              className="mt-5 block text-sm text-muted-foreground"
            >
              Target Keywords
            </label>
            <div
              className="mt-2 flex items-center gap-2 border border-border bg-background px-3"
              style={{ borderRadius: 8 }}
            >
              <Search size={14} strokeWidth={1.5} className="text-muted-foreground" />
              <input
                id="keywords"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="e.g. slow onboarding"
                className="w-full bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.21em] text-muted-foreground">
              Data Sources
            </p>
            <div className="mt-2">
              {SOURCES.map((s) => (
                <Toggle key={s} label={s} />
              ))}
            </div>

            <button
              type="button"
              className="mt-8 w-full border border-cream bg-cream px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              style={{ borderRadius: 8 }}
            >
              Initialize Scan Engine
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-5 lg:px-8">
            <div className="flex items-center gap-2 text-sm">
              <span
                className="inline-block h-2 w-2 bg-success"
                style={{ borderRadius: 8 }}
                aria-hidden
              />
              <span className="text-muted-foreground">Status:</span>
              <span className="text-success">Online</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-muted-foreground">Admin</span>
              <span
                className="border border-border px-3 py-1 text-cream"
                style={{ borderRadius: 8 }}
              >
                Canter
              </span>
            </div>
          </header>

          <main className="flex-1 px-5 py-8 lg:px-8">
            <section aria-label="Metrics" className="grid gap-5 sm:grid-cols-3">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="border border-border bg-card p-5"
                  style={{ borderRadius: 8 }}
                >
                  <p className="text-xs uppercase tracking-[0.13em] text-muted-foreground">
                    {m.label}
                  </p>
                  <p className="mt-3 font-serif text-3xl italic text-cream">{m.value}</p>
                </div>
              ))}
            </section>

            <section aria-label="Idea feed" className="mt-13">
              <div className="flex items-baseline justify-between">
                <h2 className="text-sm uppercase tracking-[0.21em] text-muted-foreground">
                  Idea Feed
                </h2>
                <span className="text-xs text-muted-foreground">4 results</span>
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-2">
                {IDEAS.map((idea) => (
                  <article
                    key={idea.name}
                    className="flex flex-col border border-border bg-card p-5"
                    style={{ borderRadius: 8 }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-cream">{idea.name}</h3>
                      <span className="text-xs text-muted-foreground">{idea.tag}</span>
                    </div>

                    <p className="mt-3 text-xs uppercase tracking-[0.13em] text-muted-foreground">
                      Core Problem
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{idea.problem}</p>

                    <p className="mt-5 text-xs uppercase tracking-[0.13em] text-muted-foreground">
                      Proposed Solution
                    </p>
                    <p className="mt-1 text-sm text-foreground">{idea.solution}</p>

                    <div className="mt-8 flex gap-2 border-t border-border pt-3">
                      <button
                        type="button"
                        aria-label={`Save ${idea.name}`}
                        className="flex items-center gap-2 border border-border px-3 py-2 text-xs text-foreground transition-colors hover:bg-secondary"
                        style={{ borderRadius: 8 }}
                      >
                        <Bookmark size={14} strokeWidth={1.5} />
                        Save
                      </button>
                      <button
                        type="button"
                        aria-label={`Forward ${idea.name}`}
                        className="flex items-center gap-2 border border-border px-3 py-2 text-xs text-foreground transition-colors hover:bg-secondary"
                        style={{ borderRadius: 8 }}
                      >
                        <Send size={14} strokeWidth={1.5} />
                        Forward
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
