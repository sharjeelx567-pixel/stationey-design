import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="border-b bg-muted/40">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About LEXON</h1>
              <p className="text-xl text-muted-foreground font-semibold">
                Quality You Use, Value You Feel.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Brand Story */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Brand Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  LEXON is a curated lifestyle and gift brand offering customized souvenirs, quality stationery, and 
                  everyday apparel, designed to combine function, identity, and modern style.
                </p>
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Mission Statement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to offer well-designed, high-quality products for everyday use and gifting, making 
                  customization simple, meaningful, and accessible.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Vision Statement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to build a trusted lifestyle and gift brand that starts locally and grows globally 
                  through quality, design, and consistency.
                </p>
              </div>
            </section>

            {/* Brand Introduction */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Brand Introduction</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  LEXON (Lyallpur EXclusive ON) is a curated lifestyle &amp; gift brand that offers customized souvenirs, 
                  quality stationery, and everyday apparel under one identity.
                </p>
                <p>
                  The brand focuses on thoughtfully selected products that are useful, meaningful, and designed with a 
                  clean, modern aesthetic.
                </p>
                <p>
                  LEXON represents local identity with a premium touch, combining customization, quality, and simplicity 
                  for both daily use and gifting purposes.
                </p>
              </div>
            </section>

            {/* Investor Section */}
            <section className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-8">LEXON – Investor Section</h2>
              
              <div className="space-y-8">
                {/* Investor Overview */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Investor Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    LEXON is a growing lifestyle and gift brand focused on curated products, customization, and modern 
                    design. The brand operates at the intersection of everyday use, gifting, and institutional branding, 
                    with strong potential for scalability.
                  </p>
                </div>

                {/* Market Opportunity */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Market Opportunity</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-semibold mb-2">Growing demand for:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Customized products</li>
                        <li>Branded institutional merchandise</li>
                        <li>Lifestyle apparel</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Strong customer base:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Students</li>
                        <li>Professionals</li>
                        <li>Events &amp; institutions</li>
                      </ul>
                    </div>
                    <p>Fest stalls and online platforms provide direct market access</p>
                  </div>
                </div>

                {/* Business Model */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Business Model</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-semibold mb-2">Product-based revenue through:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Customized souvenirs</li>
                        <li>Quality stationery</li>
                        <li>Lifestyle apparel</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Sales channels:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Physical stalls &amp; events</li>
                        <li>E-commerce website</li>
                        <li>Social media platforms (Instagram &amp; Facebook)</li>
                      </ul>
                    </div>
                    <p>B2C + future B2B institutional orders</p>
                  </div>
                </div>

                {/* Growth Strategy */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Growth Strategy</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Expand customized souvenir offerings for universities, schools, and corporate institutions</li>
                    <li>Strengthen online presence through e-commerce and social media marketing</li>
                    <li>Gradual expansion into new cities</li>
                    <li>Introduce limited edition product lines</li>
                  </ul>
                </div>

                {/* Use of Investment */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Use of Investment</h3>
                  <p className="text-muted-foreground font-semibold mb-2">Investment will be utilized for:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Product development &amp; inventory</li>
                    <li>Branding &amp; packaging</li>
                    <li>Website &amp; e-commerce optimization</li>
                    <li>Marketing &amp; customer acquisition</li>
                    <li>Operational scale-up</li>
                  </ul>
                </div>

                {/* Why Invest */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Invest in LEXON</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Clear and focused brand identity</li>
                    <li>Scalable product categories</li>
                    <li>Customization-driven differentiation</li>
                    <li>Strong local foundation with global potential</li>
                    <li>Low initial overhead with high growth opportunity</li>
                  </ul>
                </div>

                {/* Future Vision */}
                <div>
                  <h3 className="text-2xl font-bold mb-4">Future Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    LEXON aims to evolve from a local curated brand into a recognized lifestyle and gift brand, supported 
                    by strong design, quality standards, and consistent customer experience.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
