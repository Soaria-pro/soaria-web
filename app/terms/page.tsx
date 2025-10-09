import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-foreground/80">
       {/* Back to Home */}
        <div className="pb-6">
          <Link
            href="https://www.soaria.xyz/"
            className="inline-block text-[#FF6B6B] hover:underline transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-foreground">Terms of Service</h1>
        <p className="mb-6 text-lg leading-relaxed">
          Welcome to Soaria! These Terms of Service (“Terms”) govern your access to and use of
          Soaria’s website, products, and services (“Services”).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By using our Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">2. Use of Services</h2>
        <p className="mb-6">
          You agree to use Soaria only for lawful purposes and in accordance with these Terms. You must not attempt to disrupt or compromise the integrity of the Services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">3. Intellectual Property</h2>
        <p className="mb-6">
          All content, branding, and materials on Soaria are owned or licensed by Soaria and are protected by intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">4. Disclaimer & Limitation of Liability</h2>
        <p className="mb-6">
          The Services are provided “as is” without warranties of any kind. Soaria is not responsible for any damages arising from your use of the Services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">5. Changes to These Terms</h2>
        <p className="mb-6">
          We may update these Terms from time to time. The date of the latest revision will always be posted at the top of this page.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">6. Contact Us</h2>
        <p className="mb-6">
          If you have questions about these Terms, please contact us at{" "}
          <a href="mailto:contact@soaria.io" className="text-[#FF6B6B] hover:underline">
            spencer@soaria.pro
          </a>.
        </p>
      </div>
    </main>
  );
}