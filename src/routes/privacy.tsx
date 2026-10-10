import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Farzen Solutions" },
      { name: "description", content: "How Farzen Solutions handles information shared through enquiries." },
      { property: "og:title", content: "Privacy Policy — Farzen Solutions" },
      { property: "og:description", content: "How Farzen Solutions handles information shared through enquiries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link to="/" className="text-sm text-primary">← Back home</Link>
      <h1 className="mt-6 text-5xl">Privacy Policy</h1>
      <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
        <p>Farzen Solutions collects only the details you choose to share when you contact us — such as your name, business name, email, phone number and project description.</p>
        <p>This information is used solely to respond to your enquiry and to prepare quotations. We do not sell or share your personal information with third parties.</p>
        <p>For any questions or to request deletion of your data, email farzensolutions@gmail.com.</p>
      </div>
    </main>
  );
}
