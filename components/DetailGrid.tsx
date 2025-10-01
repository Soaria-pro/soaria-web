"use client";

import Card from "@/components/Card";

type Item = { title: string; body: string };

const ITEMS: Item[] = [
  {
    title: "Noise → Signal",
    body:
      "Today’s job market is flooded with blind applications and ATS keyword spam. Soaria flips this: every action builds signal, creating a self-reinforcing loop that drives better outcomes, faster.",
  },
  {
    title: "Candidate — First",
    body:
      "Designed around the job seeker, not recruiters or ATS vendors. Soaria puts control back in the candidate’s hand, while still creating value for companies. Candidate-first signal has a ripple effect throughout the entire ecosystem.",
  },
  {
    title: "ML — Native Flywheel",
    body:
      "Fresh jobs → personalized streams → résumé optimization → semantic graph. Every interaction and improvement helps Soaria improve and predict the role & resumes most likely to land you more interviews.",
  },
  {
    title: "Transparency = Trust",
    body:
      "No black-box algorithms or generic AI tools. Every score, edit, and optimization is visible, ATS-safe, and always “human in the loop” — building long term trust and stickiness in a way others can’t.",
  },
  {
    title: "Outcomes > Features",
    body:
      "Soaria isn’t another job board — it’s something else entirely. Candidates land interviews faster and convert to offers sooner. Land your next opportunity in weeks, not months, on your own terms. Enjoy your freedom, without burnout.",
  },
];

export default function DetailGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {ITEMS.map((item, idx) => (
            <Card
              key={item.title}
              className={[
                "text-left px-6 sm:px-8 lg:px-10 py-10",
                // place center card on first row for large screens to mimic mock
                idx === 1 ? "lg:col-start-2" : "",
                idx === 3 ? "lg:col-start-2" : "",
              ].join(" ")}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-foreground/80 text-sm sm:text-base leading-relaxed">
                {item.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}