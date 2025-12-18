"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import type { Product } from "@/lib/products"

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1)
  }

  return (
    <Button size="sm" disabled={!product.inStock} onClick={handleAddToCart}>
      {product.inStock ? "Add to Cart" : "Out of Stock"}
    </Button>
  )
}
