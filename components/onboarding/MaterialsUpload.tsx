"use client";

import React, { useState } from "react";
import Card from "@/components/Card";
import { Button, FileInput } from "flowbite-react";

interface MaterialsUploadProps {
  data: {
    title?: string;
    subtitle?: string;
  };
  onNext: () => void;
  onBack?: () => void;
}

export default function MaterialsUpload({
  data,
  onNext,
  onBack,
}: MaterialsUploadProps) {
  // ✅ Hooks must always run — place them here
  const [resume, setResume] = useState<string>("");
  const [caseStudy, setCaseStudy] = useState<string>("");

  if (!data) return null; // ✅ This check comes after hooks

  // Fake upload handler
  const handleFakeUpload = (
    e: React.MouseEvent<HTMLButtonElement>,
    setFile: React.Dispatch<React.SetStateAction<string>>,
    label: string
  ) => {
    e.preventDefault();
    setFile(`${label}_sample.pdf`);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen px-6 sm:px-12 py-12 sm:py-20">
      <Card className="relative max-w-3xl w-full bg-background/80 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl px-16 sm:px-24 py-24 sm:py-28 flex flex-col justify-between text-white">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Let&rsquo;s build your job engine!
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-16">
            We&rsquo;ll use your experience and background to build your personalized profile.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onNext();
          }}
          className="flex flex-col gap-12 text-left mt-16"
        >
          {/* Resume Upload */}
          <div className="flex flex-col gap-3 mt-10">
            <h3 className="text-lg font-medium text-white">
              Resume Upload (PDF or docx)
            </h3>

            {/* --- Original Flowbite Input (for future reference) --- */}
            {/* <FileInput id="resume" required className="text-white" /> */}

            {/* Dummy Input Simulation */}
            <div className="flex items-center gap-4">
              <input
                type="text"
                readOnly
                value={resume || ""}
                placeholder="No file chosen"
                className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={(e) => handleFakeUpload(e, setResume, "resume")}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition"
              >
                Upload
              </button>
            </div>

            <p className="text-sm text-gray-500">
              * Required — helps us personalize your job recommendations.
            </p>
          </div>

          {/* Case Studies Upload */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-medium text-white">
              Case Studies Upload (PDF or docx)
            </h3>

            {/* --- Original Flowbite Input (for future reference) --- */}
            {/* <FileInput id="case-studies" className="text-white" /> */}

            {/* Dummy Input Simulation */}
            <div className="flex items-center gap-4">
              <input
                type="text"
                readOnly
                value={caseStudy || ""}
                placeholder="No file chosen"
                className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={(e) => handleFakeUpload(e, setCaseStudy, "case_study")}
                className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition"
              >
                Upload
              </button>
            </div>

            <p className="text-sm text-gray-500">
              Optional — helps us build the most optimized profile & job feed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-14">
            {onBack && (
              <Button
                type="button"
                color="gray"
                onClick={onBack}
                className="text-gray-300 hover:text-white bg-transparent border border-gray-500 hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-base px-8 py-3 transition"
              >
                Back
              </Button>
            )}

            <Button
              type="submit"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-8 py-3 dark:bg-purple-600 dark:hover:bg-purple-700 transition"
            >
              Continue
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}