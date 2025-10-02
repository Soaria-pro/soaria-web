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
        "text-center",
        "bg-[var(--card-bg)]",
        "border border-gray-700",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}