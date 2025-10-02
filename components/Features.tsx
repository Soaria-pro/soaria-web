"use client";

import Card from "@/components/Card";

export default function Features() {
  const items = [
    {
      title: "Fresh Feed",
      body: "No noise. Only high-fit roles, updated daily",
    },
    {
      title: "Resume Alignment",
      body: "Edits you control, tailored for every role",
    },
    {
      title: "Faster Outcomes",
      body: "More interviews = More offers",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card
              key={it.title}
              className="flex flex-col items-center justify-center text-center px-6 sm:px-8 lg:px-10 py-12">
              <h3 className="text-xl font-semibold text-foreground">{it.title}</h3>
              <p className="mt-3 text-foreground/80 text-base">{it.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}