import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <section className="text-center space-y-10">
      <div
        className="space-y-16"
        style={{
          fontSize: "var(--text-hero)",
          lineHeight: "var(--leading-hero)",
          letterSpacing: "var(--tracking-hero)",
        }}
      >
        <FadeIn>
          <p>
            I&apos;m a <em>product</em> and <em>brand designer</em> working
            across
            <br className="hidden md:block" /> startups and enterprise
            environments,
            <br className="hidden md:block" /> collaborating closely with
            founders and product
            <br className="hidden md:block" /> leaders to translate complex
            ideas into clear,
            <br className="hidden md:block" /> compelling experiences.
          </p>
        </FadeIn>
        <FadeIn>
          <p>
            Currently experimenting with how <em>artificial</em>
            <br className="hidden md:block" /> <em>intelligence</em> can extend
            existing products,
            <br className="hidden md:block" /> introduce new design workflows,
            and enable
            <br className="hidden md:block" /> entirely new creative tools.
          </p>
        </FadeIn>
      </div>

      <a
        href="mailto:lodemannsimon@gmail.com"
        className="inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm transition-opacity hover:opacity-80"
        style={{
          backgroundColor: "var(--surface-inverse)",
          color: "var(--text-inverse)",
        }}
      >
        Contact <span aria-hidden>↗</span>
      </a>
    </section>
  );
}
