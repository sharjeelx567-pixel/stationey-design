import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="border-b bg-muted/40">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto prose prose-zinc">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using Lexon Stationery's website and services, you agree to be bound by these Terms and
                Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Use of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not
                to use our services in any way that could damage, disable, or impair our website or interfere with any
                other party's use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Product Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product
                descriptions, pricing, or other content is accurate, complete, reliable, or error-free. We reserve the
                right to correct any errors or omissions and to change or update information at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Orders and Payment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any
                order for any reason. Payment must be received before orders are processed. Prices are subject to change
                without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, and images, is the property of Lexon
                Stationery and is protected by copyright and other intellectual property laws. You may not reproduce,
                distribute, or create derivative works from our content without written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lexon Stationery shall not be liable for any indirect, incidental, special, or consequential damages
                arising out of or in connection with your use of our services or products. Our total liability shall not
                exceed the amount paid by you for the products or services in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                immediately upon posting to the website. Your continued use of our services following any changes
                constitutes acceptance of those changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us at
                legal@lexonstationery.com or call us at +1 (555) 123-4567.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
