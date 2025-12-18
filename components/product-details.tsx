"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart, Heart, Share2, Check } from "lucide-react"
import type { Product } from "@/lib/products"
import Link from "next/link"
import { useCartStore } from "@/lib/cart-store"
import { useRouter } from "next/navigation"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)
  const router = useRouter()

  const handleAddToCart = () => {
    addItem(product, quantity)
    router.push("/cart")
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap pb-2">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        {" / "}
        <Link href="/shop" className="hover:text-foreground">
          Shop
        </Link>
        {" / "}
        <Link href={`/shop?category=${product.categorySlug}`} className="hover:text-foreground">
          {product.category}
        </Link>
        {" / "}
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-3 sm:space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border bg-background">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedImage === index ? "border-primary" : "border-transparent hover:border-muted-foreground"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{product.name}</h1>

            <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 mb-3 sm:mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 sm:h-5 sm:w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">
              Rs. {product.price.toLocaleString()}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Quantity & Actions */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col xs:flex-row xs:items-center gap-3 xs:gap-4">
              <div className="flex items-center border rounded-lg w-fit">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 px-3 sm:px-4"
                >
                  -
                </Button>
                <span className="w-10 sm:w-12 text-center font-medium text-sm sm:text-base">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 px-3 sm:px-4"
                >
                  +
                </Button>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="flex flex-col xs:flex-row gap-2 sm:gap-4">
              <Button
                size="lg"
                className="flex-1 gap-2 h-11 sm:h-12 text-sm sm:text-base"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="xs:w-auto h-11 sm:h-12 bg-transparent">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Button size="lg" variant="outline" className="xs:w-auto h-11 sm:h-12 bg-transparent">
                <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Share product</span>
              </Button>
            </div>
          </div>

          {/* Shipping Info */}
          <Card className="bg-muted">
            <CardContent className="p-3 sm:p-4">
              <p className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">Free shipping on orders over Rs. 10,000</p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Pakistan-wide delivery available. Estimated delivery: 3-7 business days
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
