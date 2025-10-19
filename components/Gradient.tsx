"use client";
import { useEffect, useRef } from "react";
import Granim from "granim";

const GradientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    new Granim({
      element: canvasRef.current,
      name: "granim",
      direction: "radial",
      states: {
        "default-state": {
          gradients: [
            ["#7F5AF0", "#2CB67D"],
            ["#7F5AF0", "#2CB67D"],
            ["#7F5AF0", "#FF6B6B"],
          ],
          transitionSpeed: 8000,
        },
      },
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Granim gradient canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Noise overlay*/} 
      <div
        className="
          absolute inset-0
          bg-[url('/noise.png')]
          bg-repeat
          opacity-10
          pointer-events-none
        "
      />
    </div>
  );
};

export default GradientBackground;