"use client";

import { Button } from "flowbite-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-foreground/60">
      <p>© {new Date().getFullYear()} Soaria. All rights reserved.</p>

      <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="space-x-4">
          <Link href="/terms" className="text-[#FF6B6B] hover:text-[#2CB67D] transition-colors duration-200">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-[#FF6B6B] hover:text-[#2CB67D] transition-colors duration-200">
            Privacy Policy
          </Link>
        </div>

        <Button
            color="purple"
            className="!text-sm !font-medium px-5 py-2"
            as="a"
            href="https://i.prefinery.com/projects/i1izdm4q/users/new?display=hosted"
            target="_blank"
            rel="noopener noreferrer"
        >
            Join Waitlist
        </Button>
      </div>
    </footer>
  );
}