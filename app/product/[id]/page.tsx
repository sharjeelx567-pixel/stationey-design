import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductById } from "@/lib/products"
import { notFound } from "next/navigation"
import { ProductDetails } from "@/components/product-details"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <ProductDetails product={product} />
      </main>

      <Footer />
    </div>
  )
}
