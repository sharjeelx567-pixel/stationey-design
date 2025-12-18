import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <p className="text-sm sm:text-base text-muted-foreground">No products found matching your criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
          <Link href={`/product/${product.id}`}>
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-background">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                  <span className="text-sm font-semibold">Out of Stock</span>
                </div>
              )}
            </div>
          </Link>
          <CardContent className="p-3 sm:p-4">
            <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
            <Link href={`/product/${product.id}`}>
              <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2 hover:text-primary transition-colors">
                {product.name}
              </h3>
            </Link>
            <div className="flex items-center gap-1 mb-2 sm:mb-3">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 sm:h-4 sm:w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg font-bold text-primary">Rs. {product.price.toLocaleString()}</span>
              <AddToCartButton product={product} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
