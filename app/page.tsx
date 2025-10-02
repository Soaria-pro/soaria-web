import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ValueProp from "@/components/ValueProp";
import DetailGrid from "@/components/DetailGrid";
import Gradient from "@/components/Gradient";

export default function Page() {
  return (
    <main className="bg-background text-foreground">

      <section className="relative isolate overflow-hidden min-h-[60vh]">

        <Gradient />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto w-full max-w-screen-xl space-y-12">
            <Hero />
            <Features />
          </div>
        </div>
      </section>

      <ValueProp />
      <DetailGrid />
    </main>
  );
}