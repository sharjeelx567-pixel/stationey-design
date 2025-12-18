import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartContent } from "@/components/cart-content"

export default function CartPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="border-b bg-muted/40">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold">Shopping Cart</h1>
          </div>
        </div>

        <CartContent />
      </main>

      <Footer />
    </div>
  )
}
