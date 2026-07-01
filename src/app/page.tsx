import { Hero } from "@/components/sections/Hero";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main>
        <Hero />
      </main>
    </>
  );
}
