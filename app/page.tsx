import ServiceCards from "./components/ServiceCards";
import VisibilityTitle from "./components/VisibilityTitle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Contact", href: "#contact" }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-atelier-bg text-atelier-text">
      <VisibilityTitle />

      <header className="sticky top-0 z-40 border-b border-atelier-muted/40 bg-atelier-bg/80 backdrop-blur-md">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#top" className="inline-flex items-center" aria-label="Backend Atelier home">
            <img
              src="/logo-wordmark-dark.svg"
              alt="Backend Atelier"
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-8 text-sm tracking-wide text-atelier-text/85">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 hover:text-atelier-highlight"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section id="top" className="section-shell py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-atelier-highlight/90">
              Founder-led backend consultancy
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] text-atelier-text md:text-7xl">
              Operational clarity for modern brands.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-atelier-text/85 md:text-lg">
              The business behind the brand — systems, Shopify, operations, and execution designed with calm precision for serious growth.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-atelier-highlight px-6 py-3 text-sm font-medium tracking-wide text-atelier-bg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f3e9bc]"
              >
                Book a discovery call
              </a>
              <a
                href="#services"
                className="rounded-full border border-atelier-muted/70 px-6 py-3 text-sm tracking-wide text-atelier-text transition-colors duration-300 hover:border-atelier-highlight hover:text-atelier-highlight"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="justify-self-start md:justify-self-end">
            <img
              src="/logo-badge-dark.svg"
              alt="Backend Atelier brand badge"
              className="h-44 w-44 rounded-full border border-atelier-muted/45 bg-atelier-bg/60 p-5 shadow-card md:h-52 md:w-52"
            />
          </div>
        </div>
      </section>

      <section id="services" className="section-shell py-24 md:py-28">
        <div className="editorial-divider pt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-atelier-muted">Services</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl md:text-6xl">Beautiful systems. Serious growth.</h2>
          <ServiceCards />
        </div>
      </section>

      <section id="about" className="section-shell py-20 md:py-24">
        <div className="editorial-divider grid gap-10 pt-14 md:grid-cols-[0.85fr_1.15fr]">
          <p className="text-xs uppercase tracking-[0.2em] text-atelier-muted">About</p>
          <div>
            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              Backend Atelier sits at the intersection of systems, ecommerce operations, and practical execution.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-atelier-text/85 md:text-lg">
              We partner closely with founders to shape the structure behind growth: cleaner processes, sharper dashboards, stronger backend visibility, and workflows teams can actually use.
            </p>
          </div>
        </div>
      </section>

      <section id="outcomes" className="section-shell py-20 md:py-24">
        <div className="editorial-divider pt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-atelier-muted">Proof / Outcomes</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Clearer workflows that reduce bottlenecks and repetitive decision fatigue.",
              "Smoother launches with stronger project sequencing and role clarity.",
              "Operational visibility that gives founders confidence in what to prioritize.",
              "Better backend decision-making rooted in reliable systems and clean data."
            ].map((item, idx) => (
              <article
                key={item}
                className="rounded-xl border border-atelier-muted/45 bg-[#4A3028]/70 p-6 transition-colors duration-300 hover:border-atelier-highlight/70"
              >
                <p className="mb-5 text-sm tracking-[0.15em] text-atelier-highlight/80">
                  0{idx + 1}
                </p>
                <p className="text-lg leading-relaxed text-atelier-text/90">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="section-shell pb-14 pt-20 md:pt-24">
        <div className="editorial-divider rounded-2xl border border-atelier-muted/35 bg-[#3A241D]/70 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-atelier-muted">Backend Atelier</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
                The calm, strategic backend partner modern brands rely on.
              </h2>
              <p className="mt-6 text-base text-atelier-text/80">
                Cape Town, South Africa · Working with modern brands worldwide.
              </p>
              <a
                href="mailto:hello@backendatelier.com"
                className="mt-8 inline-flex rounded-full border border-atelier-highlight/75 px-6 py-3 text-sm tracking-wide text-atelier-highlight transition-all duration-300 hover:-translate-y-0.5 hover:bg-atelier-highlight hover:text-atelier-bg"
              >
                hello@backendatelier.com
              </a>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <img
                src="/logo-badge-dark.svg"
                alt="Backend Atelier badge"
                className="h-16 w-16"
              />
              <ul className="space-y-3 text-sm text-atelier-text/80">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a className="transition-colors duration-300 hover:text-atelier-highlight" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
