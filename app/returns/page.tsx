import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, RefreshCw } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="border-b bg-muted/40">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Returns & Exchanges</h1>
            <p className="text-muted-foreground">Our hassle-free return and exchange policy</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">30-Day Returns</h3>
                  <p className="text-sm text-muted-foreground">Return within 30 days of delivery</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <RefreshCw className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Easy Exchanges</h3>
                  <p className="text-sm text-muted-foreground">Exchange for a different product</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Full Refund</h3>
                  <p className="text-sm text-muted-foreground">Money back for eligible returns</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Return Policy</h2>
                <div className="bg-muted/40 rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    We want you to be completely satisfied with your purchase. If you're not happy with your order, you
                    can return it within 30 days of delivery for a full refund.
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">Eligible Items:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Items must be unused and in original condition</li>
                      <li>Items must be in original packaging</li>
                      <li>Items must be returned within 30 days of delivery</li>
                      <li>Proof of purchase (order number or receipt) required</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Non-Returnable Items:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Personalized or custom-made items</li>
                      <li>Items marked as final sale</li>
                      <li>Items that have been opened, used, or damaged</li>
                      <li>Gift cards</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">How to Return an Item</h2>
                <div className="bg-muted/40 rounded-lg p-6">
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                    <li>
                      Contact our customer service team at <a href="mailto:shahidx345@gmail.com" className="hover:underline">shahidx345@gmail.com</a> or call <a href="tel:03424832105" className="hover:underline">03424832105</a> to
                      initiate a return
                    </li>
                    <li>Provide your order number and the reason for return</li>
                    <li>We'll send you a prepaid return shipping label via email</li>
                    <li>Package your items securely in the original packaging if possible</li>
                    <li>Attach the return label to the outside of the package</li>
                    <li>Drop off the package at any authorized shipping location</li>
                    <li>You'll receive a refund within 5-7 business days after we receive your return</li>
                  </ol>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
                <div className="bg-muted/40 rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    If you'd like to exchange an item for a different product, follow the same return process outlined
                    above. Once we receive your return, you can place a new order for the item you'd like instead.
                  </p>
                  <p className="text-muted-foreground">
                    For faster service, you can also place a new order before returning the original item. Once we
                    receive and process your return, we'll refund the original purchase.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
                <div className="bg-muted/40 rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Once we receive your return, we'll inspect the items and process your refund within 2-3 business
                    days.
                  </p>
                  <p className="text-muted-foreground">
                    Refunds will be issued to your original payment method. Please allow 5-7 business days for the
                    refund to appear in your account, depending on your bank or credit card company.
                  </p>
                  <p className="text-muted-foreground">
                    You'll receive an email confirmation once your refund has been processed.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Damaged or Defective Items</h2>
                <div className="bg-muted/40 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    If you receive a damaged or defective item, please contact us immediately at
                    <a href="mailto:shahidx345@gmail.com" className="hover:underline"> shahidx345@gmail.com</a> or call <a href="tel:03424832105" className="hover:underline">03424832105</a> with photos of the damage. We'll arrange for a replacement or full
                    refund at no cost to you.
                  </p>
                  <p className="text-muted-foreground">
                    For damaged items, you do not need to return the original product unless we specifically request it.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Questions?</h2>
                <div className="bg-muted/40 rounded-lg p-6">
                  <p className="text-muted-foreground">
                    If you have any questions about our return policy or need assistance with a return, please contact
                    our customer service team at returns@lexonstationery.com or call us at +1 (555) 123-4567.
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
