type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={[
        "w-full max-w-screen-xl mx-auto",
        "rounded-lg",
        "shadow-[0_8px_20px_rgba(0,0,0,0.25)]",
        "px-6 sm:px-8 lg:px-12 py-24",
        "text-center",
        "bg-[var(--card-bg)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}