import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import DetailGrid from "@/components/DetailGrid";
import Gradient from "@/components/Gradient";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-background text-foreground">

      <section className="relative isolate overflow-hidden min-h-[60vh]">

        <Gradient />

        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-screen-xl space-y-24">
            <Hero />
          </div>
        </div>
      </section>

       <section className="py-24 sm:py-32">
        <ValueProp />
      </section>
      <DetailGrid />
      <Footer />
    </main>
  );
}