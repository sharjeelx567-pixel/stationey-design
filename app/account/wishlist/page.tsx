import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WishlistContent } from "@/components/wishlist-content"

export default function WishlistPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/40">
        <WishlistContent />
      </main>

      <Footer />
    </div>
  )
}
