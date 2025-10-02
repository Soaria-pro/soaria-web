import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ValueProp from "@/components/ValueProp";
import DetailGrid from "@/components/DetailGrid";

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative isolate bg-black bg-landing-gradient"> 
        <Hero />
        <Features />
      </section>
      <ValueProp />
      <DetailGrid />
    </main>
  );
}