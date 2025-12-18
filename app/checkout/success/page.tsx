import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
              <p className="text-muted-foreground mb-2">Thank you for your purchase.</p>
              <p className="text-muted-foreground mb-8">
                We've sent a confirmation email with your order details and tracking information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/account/orders">View Orders</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
