"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const wishlistItems = [
  {
    id: "6",
    name: "Premium Leather Journal - Black",
    price: 24.99,
    image: "/images/whatsapp-20image-202025-12-18-20at-208.jpeg",
    inStock: true,
  },
  {
    id: "10",
    name: "Glass Water Bottle with Metal Cap",
    price: 18.99,
    image: "/images/whatsapp-20image-202025-12-18-20at-208.jpeg",
    inStock: true,
  },
  {
    id: "8",
    name: "Executive Leather Planner - Assorted Colors",
    price: 29.99,
    image: "/images/whatsapp-20image-202025-12-18-20at-208.jpeg",
    inStock: true,
  },
]

export function WishlistContent() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">My Wishlist</h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          Items you've saved for later ({wishlistItems.length})
        </p>
      </div>

      {wishlistItems.length === 0 ? (
        <Card className="p-8 text-center sm:p-12">
          <Heart className="mx-auto mb-4 h-12 w-12 text-muted-foreground sm:h-16 sm:w-16" />
          <h2 className="mb-2 text-lg font-semibold sm:text-xl">Your wishlist is empty</h2>
          <p className="mb-6 text-sm text-muted-foreground sm:text-base">
            Start adding items you love to your wishlist
          </p>
          <Button asChild>
            <Link href="/shop">Browse Products</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                <button className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-red-50">
                  <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="mb-2 line-clamp-2 text-sm font-semibold sm:text-base">{item.name}</h3>
                <p className="mb-4 text-lg font-bold sm:text-xl">${item.price}</p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button className="flex-1" size="sm">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
