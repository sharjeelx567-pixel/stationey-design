import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="border-b bg-muted/40">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto prose prose-zinc">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, including your name, email address, postal address,
                phone number, and payment information when you create an account, make a purchase, or contact us for
                support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to process your orders, communicate with you about your purchases,
                send you marketing communications (with your consent), improve our services, and comply with legal
                obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell or rent your personal information to third parties. We may share your information with
                service providers who help us operate our business, such as payment processors and shipping companies.
                These providers are required to protect your information and use it only for the services they provide
                to us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to improve your browsing experience, analyze site
                traffic, and personalize content. You can control cookies through your browser settings, but disabling
                cookies may affect your ability to use certain features of our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to access, correct, or delete your personal information. You can also object to or
                restrict certain processing of your information. To exercise these rights, please contact us at
                privacy@lexonstationery.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our services are not directed to children under 13. We do not knowingly collect personal information
                from children under 13. If you believe we have collected information from a child under 13, please
                contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date. Your continued use of our services after
                any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at privacy@lexonstationery.com or
                write to us at 123 Stationery Street, New York, NY 10001.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
