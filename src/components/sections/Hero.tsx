export function Hero() {
  return (
    <section className="text-center">
      <div
        style={{
          fontSize: "var(--text-hero)",
          lineHeight: "var(--leading-hero)",
          letterSpacing: "var(--tracking-hero)",
        }}
      >
        <p>
          Simon Lodemann, with over a decade of
          <br className="hidden md:block" /> experience, i have led{" "}
          <em>design</em> teams and worked
          <br className="hidden md:block" /> with enterprise companies and
          startups.
        </p>
        <p className="mt-10">
          I specialize in building <em>brand identities</em> and
          <br className="hidden md:block" /> reimagining <em>user interfaces</em>.
        </p>
      </div>
    </section>
  );
}
