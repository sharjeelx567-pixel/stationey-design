import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Package, Truck } from "lucide-react"

export default function ShippingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="border-b bg-muted/40">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Shipping Information</h1>
            <p className="text-muted-foreground">Learn about our shipping policies and delivery times</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">On orders over $50</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">3-7 business days</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Ships worldwide</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Domestic Shipping (United States)</h2>
                <div className="bg-muted/40 rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Standard Shipping</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Cost: $5.99 (Free on orders over $50)</li>
                      <li>Delivery Time: 3-7 business days</li>
                      <li>Tracking: Included</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Express Shipping</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Cost: $14.99</li>
                      <li>Delivery Time: 2-3 business days</li>
                      <li>Tracking: Included</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Overnight Shipping</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Cost: $24.99</li>
                      <li>Delivery Time: 1 business day</li>
                      <li>Tracking: Included</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">International Shipping</h2>
                <div className="bg-muted/40 rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    We ship to most countries worldwide. International shipping rates and delivery times vary by
                    destination.
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">Typical Delivery Times:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Canada & Mexico: 7-10 business days</li>
                      <li>Europe: 10-14 business days</li>
                      <li>Asia & Australia: 12-16 business days</li>
                      <li>Other regions: 14-21 business days</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Note: International orders may be subject to customs fees and import duties. These charges are the
                    responsibility of the recipient and are not included in your order total.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Order Processing</h2>
                <div className="bg-muted/40 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Orders are processed Monday through Friday (excluding holidays). Orders placed after 2 PM EST will
                    be processed the next business day.
                  </p>
                  <p className="text-muted-foreground">
                    You will receive a confirmation email when your order is placed, and a shipping confirmation with
                    tracking information once your order ships.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Tracking Your Order</h2>
                <div className="bg-muted/40 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    All orders include tracking. Once your order ships, you'll receive an email with your tracking
                    number and a link to track your package.
                  </p>
                  <p className="text-muted-foreground">
                    You can also track your order by logging into your account and viewing your order history.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Questions?</h2>
                <div className="bg-muted/40 rounded-lg p-6">
                  <p className="text-muted-foreground">
                    If you have any questions about shipping or need assistance with your order, please contact our
                    customer service team at support@lexonstationery.com or call us at +1 (555) 123-4567.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
