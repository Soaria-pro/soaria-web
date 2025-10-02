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
            ["#7F5AF0", "#2CB67D"],
            ["#2CB67D", "#7F5AF0"],  
            ["#7F5AF0", "#FF6B6B"],  
          ],
          transitionSpeed: 8000,
        },
      },
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
    />
  );
};

export default GradientBackground;