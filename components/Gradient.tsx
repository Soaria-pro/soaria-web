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
      direction: 'radial',
      states: {
        "default-state": {
          gradients: [
            ["#0f0f1c", "#1a1a2e"], 
            ["#1a1a2e", "#163d3c"], 
            ["#1a1a2e", "#3a2b4a"], 
            ["#163d3c", "#0f0f1c"], 
          ],
          transitionSpeed: 10000,
        },
      },
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-80"
    />
  );
};

export default GradientBackground;