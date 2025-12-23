import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { products } from "@/lib/products"
import { Suspense } from "react"

async function ShopContent({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string; search?: string }>
}) {
  const params = await searchParams
  let filteredProducts = [...products]

  // Filter by category
  if (params.category) {
    filteredProducts = filteredProducts.filter((p) => p.categorySlug === params.category)
  }

  // Filter by search
  if (params.search) {
    const search = params.search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (p) => p.name.toLowerCase().includes(search) || p.description.toLowerCase().includes(search),
    )
  }

  // Sort products
  if (params.sort === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (params.sort === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (params.sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating)
  }

  return (
    <>
      <main className="flex-1">
        <div className="border-b bg-muted/40">
          <div className="container mx-auto px-4 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Shop All Products</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Discover our complete collection of premium stationery
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters />
            </aside>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                </p>
              </div>

              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string; search?: string }>
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Suspense fallback={<LoadingShop />}>
        <ShopContent searchParams={searchParams} />
      </Suspense>
      <Footer />
    </div>
  )
}

function LoadingShop() {
  return (
    <main className="flex-1">
      <div className="border-b bg-muted/40">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Shop All Products</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Loading products...</p>
        </div>
      </div>
    </main>
  )
}
