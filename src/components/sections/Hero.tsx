export function Hero() {
  return (
    <section className="space-y-10">
      <div
        style={{
          fontSize: "var(--text-hero)",
          lineHeight: "var(--leading-hero)",
          letterSpacing: "var(--tracking-hero)",
          fontWeight: 400,
          color: "var(--foreground)",
        }}
      >
        <p>
          Simon Lodemann, with over a decade of experience, i have led{" "}
          <em>design</em> teams and worked with enterprise companies and
          startups. I specialize in building <em>brand identities</em> and
          reimagining <em>user interfaces</em>.
        </p>

        <p className="mt-8 text-[var(--muted)]" style={{ fontSize: "var(--text-body)", letterSpacing: "var(--tracking-body)", lineHeight: "var(--leading-body)" }}>
          I&apos;m a <em>product</em> and <em>brand designer</em> working across
          startups and enterprise environments, collaborating closely with
          founders and product leaders to translate complex ideas into clear,
          compelling experiences.
        </p>

        <p className="mt-4 text-[var(--muted)]" style={{ fontSize: "var(--text-body)", letterSpacing: "var(--tracking-body)", lineHeight: "var(--leading-body)" }}>
          Currently experimenting with how{" "}
          <em>artificial intelligence</em> can extend existing products,
          introduce new design workflows, and enable entirely new creative tools.
        </p>
      </div>

      <p
        style={{ fontSize: "var(--text-body)", color: "var(--muted)" }}
      >
        Hamburg, Germany
      </p>
    </section>
  );
}
