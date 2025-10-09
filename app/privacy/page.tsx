import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-3xltext-foreground/80">
         {/* Back to Home */}
        <div className="pb-6">
          <Link
            href="https://www.soaria.xyz/"
            className="inline-block text-[#FF6B6B] hover:underline transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        <p className="mb-6 text-lg leading-relaxed">
          Your privacy is important to us. This Privacy Policy explains how Soaria collects, uses,
          and protects your information when you use our Services.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect personal information you provide directly (such as your name, email, or
          contact details) and usage data automatically (such as analytics or cookies).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">2. How We Use Information</h2>
        <p className="mb-6">
          We use collected data to provide, improve, and personalize our Services, communicate with
          users, and maintain security.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">3. Sharing of Information</h2>
        <p className="mb-6">
          We do not sell your personal information. We may share limited data with trusted service
          providers (like analytics or hosting partners) who help us operate the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">4. Data Retention & Security</h2>
        <p className="mb-6">
          We retain your data only as long as necessary to provide our Services. We take reasonable
          steps to protect it from unauthorized access or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">5. Your Rights</h2>
        <p className="mb-6">
          You may request access to, correction of, or deletion of your personal data by contacting us
          at{" "}
          <a href="mailto:contact@soaria.io" className="text-[#FF6B6B] hover:underline">
            spencer@soaria.pro
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">6. Updates to This Policy</h2>
        <p className="mb-6">
          We may update this policy periodically. Changes will be posted here with the updated
          effective date.
        </p>

        <p className="mt-10 text-sm text-foreground/60">
          Last updated: {new Date().toLocaleDateString()}
        </p>

      </div>
    </main>
  );
}