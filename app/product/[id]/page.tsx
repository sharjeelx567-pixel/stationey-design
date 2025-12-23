import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductById } from "@/lib/products"
import { notFound } from "next/navigation"
import { ProductDetails } from "@/components/product-details"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

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
