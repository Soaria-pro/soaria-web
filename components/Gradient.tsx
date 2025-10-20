"use client";

export default function StaticGradientBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full opacity-40"
      style={{
        background: `
          radial-gradient(circle at 30% 30%, #7F5AF0 0%, #2c96b6ff 60%, transparent 70%),
          radial-gradient(circle at 70% 70%, #FF6B6B 0%, #2CB67D 40%, transparent 75%),
          radial-gradient(circle at 80% 20%, #2CB67D 0%, #FF6B6B 60%, transparent 85%)
        `,
        backgroundBlendMode: "screen",
      }}
    />
  );
}