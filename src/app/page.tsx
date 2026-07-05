import { Hero } from "@/components/sections/Hero";
import { CasesSlider } from "@/components/sections/CasesSlider";
import { About } from "@/components/sections/About";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LocalTime } from "@/components/ui/LocalTime";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main className="space-y-24 md:space-y-32">
        <Hero />
        <CasesSlider />
        <About />
      </main>
      <footer
        className="mt-40 text-center text-[13px]"
        style={{ color: "var(--text-tertiary)" }}
      >
        <LocalTime />
      </footer>
    </>
  );
}
