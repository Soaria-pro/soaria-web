import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ValueProp from "@/components/ValueProp";
import DetailGrid from "@/components/DetailGrid";
import Gradient from "@/components/Gradient";

export default function Page() {
  return (
    <main className="bg-background text-foreground">

      <section className="relative isolate overflow-hidden h-[60vh]">

        <Gradient />

        <div className="relative z-10">
          <Hero />
          <Features />
        </div>
      </section>

      <ValueProp />
      <DetailGrid />
    </main>
  );
}