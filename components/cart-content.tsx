"use client"

import { useCartStore } from "@/lib/cart-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartContent() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <ShoppingBag className="h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Add some products to get started!</p>
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  const subtotal = getTotal()
  const shipping = subtotal >= 3000 ? 0 : 100
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-3 sm:space-y-4">
          {items.map((item) => (
            <Card key={item.product.id}>
              <CardContent className="p-3 sm:p-4">
                <div className="flex gap-3 sm:gap-4">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-hidden rounded-lg border bg-background">
                    <Image
                      src={item.product.images[0] || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <Link href={`/product/${item.product.id}`}>
                          <h3 className="font-semibold text-sm sm:text-base hover:text-primary transition-colors line-clamp-2">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.product.category}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <X className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center border rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="h-7 px-2 sm:h-8 sm:px-2"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 sm:w-10 text-center text-xs sm:text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="h-7 px-2 sm:h-8 sm:px-2"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="font-bold text-primary text-sm sm:text-base">
                        Rs. {(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="lg:sticky lg:top-24">
            <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h2 className="text-lg sm:text-xl font-bold">Order Summary</h2>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Subtotal</span>
                  <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Shipping</span>
                  <span className="font-medium">{shipping === 0 ? "Free" : `Rs. ${shipping.toLocaleString()}`}</span>
                </div>
                {subtotal < 3000 && subtotal > 0 && (
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Add Rs. {(3000 - subtotal).toLocaleString()} more for free shipping
                  </p>
                )}
              </div>

              <Separator />

              <div className="flex justify-between text-base sm:text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">Rs. {total.toLocaleString()}</span>
              </div>

              <Button className="w-full h-11 sm:h-12 text-sm sm:text-base" size="lg" asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <Button variant="outline" className="w-full h-11 sm:h-12 text-sm sm:text-base bg-transparent" asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>

              <div className="text-xs text-muted-foreground text-center pt-2">Secure checkout powered by Stripe</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
