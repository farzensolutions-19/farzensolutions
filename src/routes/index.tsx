import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import farzenMark from "@/assets/farzen-mark.png.asset.json";

const TITLE = "Farzen Solutions — Websites & Web Apps in Coimbatore";
const DESC =
  "Modern business websites, e-commerce platforms and custom web applications for cafés, salons, retailers and startups. Plans from ₹7,999.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/919566650503";
const EMAIL = "farzensolutions@gmail.com";

const nav = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
];

const services = [
  { t: "Business Website Development", d: "Mobile-friendly websites for cafés, restaurants, salons, studios, retail and service businesses.", i: ["Service & info pages", "Responsive layouts", "Contact forms & WhatsApp", "Galleries & Google Maps", "Basic on-page SEO"], primary: true },
  { t: "E-commerce Development", d: "Online stores to showcase products, manage orders and serve customers.", i: ["Catalogue & categories", "Search & product pages", "Cart & checkout", "Payment gateways", "Order management"] },
  { t: "Custom Web Applications", d: "Web systems built around your specific business processes.", i: ["Dashboards & admin panels", "Role-based access", "Database-driven apps", "Workflow automation", "APIs & integrations"] },
  { t: "B2B Portals & Software", d: "Structured customer portals and connected business operations.", i: ["B2B customer portals", "Customer & enquiry management", "ERP / CRM integrations", "Inventory workflows", "Secure data sync"] },
  { t: "Maintenance & Support", d: "Keep your website updated, secure and working reliably.", i: ["Backups & health checks", "Security updates", "Minor content updates", "Bug fixes", "Performance checks"] },
];

const tech = [
  { n: "01", k: "Frontend", d: "Interfaces & experiences", items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"], hot: true, wide: false },
  { n: "02", k: "Backend", d: "Logic & server APIs", items: ["PHP", "Laravel", "REST APIs"], wide: false },
  { n: "03", k: "CMS & E-commerce", d: "Content & online stores", items: ["WordPress", "WooCommerce"], wide: false },
  { n: "04", k: "Database", d: "Data & records", items: ["MySQL"], wide: true },
  { n: "05", k: "Integrations", d: "Connected systems", items: ["Payments", "APIs", "ERP / CRM", "Email", "Messaging"], wide: false },
];

const steps = [
  ["Discovery", "Understand your business, goals, audience, features and budget."],
  ["Planning & Design", "Define sitemap, features, visual direction and scope."],
  ["Development", "Build with technologies suited to the project."],
  ["Testing", "Check responsiveness, forms, performance and security."],
  ["Launch", "Deploy, configure domain & hosting, verify essentials."],
  ["Ongoing Support", "Optional maintenance under an agreed plan."],
];

const projects = [
  { n: "Café Website Concept", c: "Business Websites", d: "A menu-led site for a neighbourhood café with gallery, location and WhatsApp ordering.", f: ["Digital menu", "Gallery", "Maps & WhatsApp"], s: "HTML · Tailwind · JS" },
  { n: "Boutique Store Concept", c: "E-commerce Platforms", d: "An online store with categories, product search, cart and payment checkout.", f: ["Catalogue", "Cart & checkout", "Order admin"], s: "WordPress · WooCommerce" },
  { n: "Booking Dashboard Concept", c: "Custom Web Applications", d: "An admin panel for managing appointments, staff and customer records.", f: ["Role-based login", "Scheduling", "Reports"], s: "Laravel · MySQL" },
  { n: "Distributor Portal Concept", c: "B2B Solutions", d: "A portal for dealers to browse products, raise enquiries and track orders.", f: ["Dealer accounts", "Enquiries", "ERP sync"], s: "Laravel · REST APIs" },
];

const packages = [
  { n: "Basic", p: "7,999", s: "For small businesses establishing an online presence.", f: ["Up to 4 pages", "Responsive design", "Basic contact form", "WhatsApp integration", "Google Maps integration", "Basic on-page SEO", "Two revision rounds"] },
  { n: "Standard", p: "12,999", s: "For businesses needing a more customised website.", f: ["Up to 5 pages", "Customised visual design", "Gallery, portfolio or menu", "Contact form & WhatsApp", "Basic SEO & performance", "Three revision rounds", "30-day bug-fix support"], hot: true },
  { n: "Premium", p: "22,999", s: "For businesses needing more pages and features.", f: ["Up to 8 pages", "Advanced design customisation", "Enhanced gallery or portfolio", "Enquiry / booking requests", "Analytics & enhanced SEO", "Three revision rounds", "60-day bug-fix support"] },
];

const custom = [
  ["E-commerce website", "₹25,000 onwards"],
  ["Custom web application", "₹30,000 onwards"],
  ["B2B portal", "₹40,000 onwards"],
  ["API & ERP/CRM integrations", "Based on scope"],
  ["Advanced business systems", "Custom quotation"],
];

const maint = [
  { n: "Essential", p: "799", f: ["Basic health checks", "Backup checks where supported", "One small content update / month", "Contact form testing"] },
  { n: "Care", p: "1,499", f: ["Everything in Essential", "Scheduled updates where applicable", "Security checks & backup monitoring", "Up to 1 hour of minor changes"] },
  { n: "Priority", p: "2,999", f: ["Enhanced monitoring & backups", "Priority technical support", "Up to 2 hours of minor changes", "Routine troubleshooting"] },
];

const why = [
  ["Business-Focused", "Planned around your business goals and customer needs."],
  ["Responsive by Design", "Works across mobile, tablet and desktop."],
  ["Practical Experience", "Real-world web development, backends, databases and APIs."],
  ["Transparent Pricing", "Clear scope, deliverables and payment milestones."],
  ["Ongoing Support", "Optional maintenance to keep things running smoothly."],
  ["Scalable Solutions", "Technology chosen for today's needs and future plans."],
];

const faqs = [
  ["How much does a website cost?", "Business websites start at ₹7,999. The final price depends on the number of pages, design, features and integrations."],
  ["How long does development take?", "A basic website typically takes around 5–7 working days; customised websites and applications may take several weeks, depending on scope and content readiness."],
  ["Will my website work on mobile devices?", "Yes. Responsive design is included in all standard website packages."],
  ["Do you provide domain and hosting?", "We can assist with domain registration, hosting setup, SSL and deployment. Recurring charges are quoted separately unless included in a package."],
  ["Can you develop custom business applications?", "Yes — custom dashboards, database-driven applications, B2B portals and API integrations, according to agreed requirements."],
  ["Do you provide website maintenance?", "Yes. Optional monthly maintenance plans are available."],
  ["How do payments work?", "Projects generally begin with a 50% advance, with the balance payable per agreed milestones and before final handover."],
];

function Section({ id, eyebrow, title, children, className = "" }: { id?: string; eyebrow: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-20 px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-4xl leading-tight md:text-6xl">{title}</h2>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

const btn = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all";
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:opacity-90`;
const btnGhost = `${btn} border border-foreground/20 hover:bg-foreground/5`;

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={farzenMark.url} alt="Farzen Solutions logo" className="h-9 w-9 shrink-0 md:h-10 md:w-10" />
            <span className="flex flex-col font-display text-base leading-[1.1] tracking-tight sm:text-lg">
              <span>Farzen</span>
              <span className="text-accent">Solutions.</span>
            </span>
          </a>
          <nav className="hidden gap-8 text-sm md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="text-muted-foreground hover:text-foreground">{l}</a>)}
          </nav>
          <a href="#contact" className={`${btnPrimary} px-5 py-2`}>Start a project</a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="px-6 pb-24 pt-20 md:pt-32">
          <div className="mx-auto max-w-6xl animate-rise">
            <p className="font-display text-4xl tracking-tight md:text-6xl">
              Farzen <span className="text-accent">Solutions</span><span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-muted-foreground md:text-xs">Web Development · Coimbatore, India</p>
            <h1 className="mt-8 max-w-5xl text-5xl leading-[1.02] md:text-8xl">
              Professional Websites. <span className="text-primary">Powerful</span> Digital Solutions.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              Farzen Solutions helps businesses establish a strong online presence through modern websites, e-commerce platforms, and custom web applications built around their business needs.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contact" className={btnPrimary}>Start Your Project →</a>
              <a href="#services" className={btnGhost}>Explore Our Services</a>
            </div>
            <p className="mt-12 max-w-md border-l-2 border-accent pl-4 text-sm text-muted-foreground">
              Based in Coimbatore, Tamil Nadu, serving businesses looking for reliable and affordable web development solutions.
            </p>
          </div>
        </section>

        <Section id="about" eyebrow="About us" title="Technology that moves your business forward" className="bg-secondary">
          <div className="grid gap-10 text-lg leading-relaxed text-muted-foreground md:grid-cols-2">
            <p>Farzen Solutions is a web development and software solutions business founded by <span className="text-foreground font-semibold">Farhan</span>, focused on helping businesses build a strong digital presence and improve their online operations.</p>
            <div className="space-y-5">
              <p>We develop professional business websites, e-commerce platforms, and custom web applications tailored to each client — with a focus on clean implementation, responsive design, performance and maintainability.</p>
              <p>From a simple business website to a feature-rich application, our goal is practical technology that supports growth.</p>
            </div>
          </div>
        </Section>

        <Section id="services" eyebrow="Services" title="What we build">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.t} className={`rounded-2xl border p-8 transition hover:-translate-y-1 ${s.primary ? "bg-ink text-ink-foreground border-transparent lg:row-span-2" : "bg-card"}`}>
                {s.primary && <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Primary service</span>}
                <h3 className="text-3xl">{s.t}</h3>
                <p className={`mt-3 ${s.primary ? "opacity-80" : "text-muted-foreground"}`}>{s.d}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {s.i.map((x) => <li key={x} className="flex gap-2"><span className="text-accent">—</span>{x}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Technologies" title="Tools we work with" className="bg-secondary">
          <div className="grid gap-5 md:grid-cols-2">
            {tech.map((t) => (
              <article key={t.k} className={`flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 ${t.hot ? "border-transparent bg-ink text-ink-foreground md:col-span-2" : "bg-card hover:border-accent/50"}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl leading-tight">
                    <span className="mr-3 font-display text-sm tabular-nums text-accent">{t.n}</span>
                    {t.k}
                  </h3>
                  {t.hot && <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Primary focus</span>}
                </div>
                <p className={`mt-2 text-sm ${t.hot ? "opacity-70" : "text-muted-foreground"}`}>{t.d}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {t.items.map((x) => {
                    const core = t.hot && (x === "React.js" || x === "Next.js");
                    return (
                      <span
                        key={x}
                        className={
                          core
                            ? "rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
                            : t.hot
                              ? "rounded-full border border-ink-foreground/25 px-3 py-1 text-xs opacity-80"
                              : "rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                        }
                      >
                        {x}
                      </span>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 max-w-2xl text-xs text-muted-foreground">
            Frontends are built with React.js and Next.js for speed and scalability; backend, CMS and database choices follow each project.
          </p>
        </Section>

        <Section eyebrow="Process" title="How we work">
          <ol className="grid gap-x-10 gap-y-12 md:grid-cols-3">
            {steps.map(([t, d], i) => (
              <li key={t} className="border-t pt-6">
                <span className="font-display text-5xl text-accent">0{i + 1}</span>
                <h3 className="mt-2 text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Demonstration projects" className="bg-secondary">
          <p className="-mt-8 mb-10 max-w-2xl text-sm text-muted-foreground">
            The projects below are clearly labelled demonstration concepts showing the kind of work we deliver. Client work will be added here with permission.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.n} className="rounded-2xl border bg-card p-8">
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="eyebrow">{p.c}</span>
                  <span className="rounded-full border px-3 py-1 text-muted-foreground">Demo concept</span>
                </div>
                <h3 className="mt-4 text-3xl">{p.n}</h3>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.f.map((f) => <span key={f} className="rounded-full bg-secondary px-3 py-1 text-xs">{f}</span>)}
                </div>
                <p className="mt-5 text-xs text-muted-foreground">{p.s}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="pricing" eyebrow="Pricing" title="Website packages">
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((p) => (
              <article key={p.n} className={`flex flex-col rounded-2xl border p-8 ${p.hot ? "bg-ink text-ink-foreground border-transparent" : "bg-card"}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl">{p.n}</h3>
                  {p.hot && <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Popular</span>}
                </div>
                <p className={`mt-2 text-sm ${p.hot ? "opacity-75" : "text-muted-foreground"}`}>{p.s}</p>
                <p className="mt-6 text-xs uppercase tracking-widest opacity-70">Starting at</p>
                <p className="font-display text-5xl">₹{p.p}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {p.f.map((f) => <li key={f} className="flex gap-2"><span className="text-accent">✓</span>{f}</li>)}
                </ul>
                <a href="#contact" className={`mt-8 ${p.hot ? `${btn} bg-accent text-accent-foreground` : btnGhost}`}>Get started</a>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs text-muted-foreground">
            Prices are indicative starting rates. Final costs depend on design complexity, content, functionality, integrations and requirements. Domain, hosting, paid licences and third-party charges are separate unless explicitly included.
          </p>

          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl">Custom development</h3>
              <p className="mt-2 text-sm text-muted-foreground">Quoted individually after a requirement assessment.</p>
              <dl className="mt-6 divide-y border-y">
                {custom.map(([k, v]) => (
                  <div key={k} className="flex justify-between py-4 text-sm"><dt>{k}</dt><dd className="font-semibold">{v}</dd></div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="text-3xl">Maintenance plans</h3>
              <p className="mt-2 text-sm text-muted-foreground">Monthly care to keep your site healthy.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {maint.map((m) => (
                  <div key={m.n} className="rounded-xl border bg-card p-5">
                    <p className="font-semibold">{m.n}</p>
                    <p className="font-display text-3xl">₹{m.p}<span className="font-sans text-xs text-muted-foreground">/mo</span></p>
                    <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">{m.f.map((f) => <li key={f}>{f}</li>)}</ul>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Hosting, domain renewals, paid licences, major bug investigations, new features, redesigns and emergency recovery are excluded unless separately agreed.</p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Why Farzen" title="Built on clarity and care" className="bg-secondary">
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {why.map(([t, d]) => (
              <div key={t}><h3 className="text-2xl">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
            ))}
          </div>
        </Section>

        <Section eyebrow="FAQ" title="Common questions">
          <div className="divide-y border-y">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                  {q}<span className="text-accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-3xl text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section className="bg-ink px-6 py-24 text-ink-foreground md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl leading-tight md:text-6xl">Let's build something that works for your business.</h2>
            <p className="mx-auto mt-6 max-w-2xl opacity-75">Have an idea for a website, online store, or custom business application? Tell us your requirements and we'll help you find a practical solution.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="#contact" className={`${btn} bg-accent text-accent-foreground`}>Discuss Your Project</a>
              <a href={WA} target="_blank" rel="noreferrer" className={`${btn} border border-ink-foreground/30 hover:bg-ink-foreground/10`}>Get a Free Initial Consultation</a>
            </div>
          </div>
        </section>

        <Section id="contact" eyebrow="Contact" title="Tell us about your project">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div className="space-y-6">
              <div>
                <p className="font-display text-3xl">Farzen Solutions</p>
                <p className="text-muted-foreground">Farhan — Founder & Developer</p>
                <p className="text-muted-foreground">Coimbatore, Tamil Nadu, India</p>
              </div>
              <div className="space-y-2 text-sm">
                <a href={`mailto:${EMAIL}`} className="block hover:text-primary">✉ {EMAIL}</a>
                <a href="tel:+919566650503" className="block hover:text-primary">☏ +91 95666 50503</a>
                <a href={WA} target="_blank" rel="noreferrer" className="block hover:text-primary">◎ Chat on WhatsApp</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="border-t px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="inline-flex items-center gap-3">
              <img src={farzenMark.url} alt="Farzen Solutions logo" className="h-10 w-10 shrink-0" />
              <span className="font-display text-[1.6rem] tracking-tight sm:text-3xl">
                Farzen <span className="text-accent">Solutions</span><span className="text-accent">.</span>
              </span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">Web Development & Software Solutions. Professional business websites, e-commerce platforms, and custom web applications.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#top">Home</a>
            {nav.map(([l, h]) => <a key={h} href={h} className="hover:text-foreground">{l}</a>)}
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          </nav>
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">© {new Date().getFullYear()} Farzen Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

const field = "w-full rounded-lg border bg-card px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/20";

function ContactForm() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as { name: string; business: string; email: string; phone: string; type: string; budget: string; description: string };
    if (!d.name?.trim() || !d.email?.trim() || !d.phone?.trim() || !d.description?.trim()) return setError("Please fill in name, email, phone and project description.");
    if (!/^\S+@\S+\.\S+$/.test(d.email)) return setError("Please enter a valid email address.");
    if (!/^[+\d\s-]{8,15}$/.test(d.phone)) return setError("Please enter a valid phone number.");
    setError("");
    const text = `New project enquiry\n\nName: ${d.name}\nBusiness: ${d.business || "-"}\nEmail: ${d.email}\nPhone: ${d.phone}\nProject type: ${d.type}\nBudget: ${d.budget}\n\n${d.description}`;
    window.open(`${WA}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-2xl border bg-secondary p-6 sm:grid-cols-2 md:p-8">
      <input name="name" placeholder="Name *" className={field} maxLength={100} />
      <input name="business" placeholder="Business name" className={field} maxLength={100} />
      <input name="email" type="email" placeholder="Email address *" className={field} maxLength={255} />
      <input name="phone" type="tel" placeholder="Phone number *" className={field} maxLength={15} />
      <select name="type" className={field} defaultValue="Business Website">
        {["Business Website", "E-commerce Website", "Custom Web Application", "B2B Portal", "Maintenance & Support", "Other"].map((o) => <option key={o}>{o}</option>)}
      </select>
      <select name="budget" className={field} defaultValue="₹7,999 – ₹15,000">
        {["₹7,999 – ₹15,000", "₹15,000 – ₹30,000", "₹30,000 – ₹50,000", "₹50,000+", "Not sure yet"].map((o) => <option key={o}>{o}</option>)}
      </select>
      <textarea name="description" rows={5} placeholder="Project description *" className={`${field} sm:col-span-2`} maxLength={2000} />
      {error && <p className="text-sm text-destructive sm:col-span-2">{error}</p>}
      {sent && <p className="text-sm text-primary sm:col-span-2">WhatsApp has opened with your enquiry — press send there to reach us.</p>}
      <button type="submit" className={`${btnPrimary} sm:col-span-2`}>Send enquiry via WhatsApp</button>
    </form>
  );
}
