"use client"

import type React from "react"

import { useState } from "react"
import { useCartStore } from "@/lib/cart-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Truck, User } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function CheckoutForm() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = getTotal()
  const shipping = subtotal >= 3000 ? 0 : 100
  const total = subtotal + shipping

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart and redirect to success page
    clearCart()
    router.push("/checkout/success")
  }

  if (items.length === 0) {
    router.push("/cart")
    return null
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <User className="h-4 w-4 sm:h-5 sm:w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required />
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Truck className="h-4 w-4 sm:h-5 sm:w-5" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State / Province</Label>
                  <Input id="state" required />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP / Postal Code</Label>
                  <Input id="zip" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM / YY" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input id="cardName" required />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="lg:sticky lg:top-24">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-2 sm:gap-3">
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 overflow-hidden rounded border bg-background">
                      <Image
                        src={item.product.images[0] || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium line-clamp-2">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-xs sm:text-sm font-medium">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="flex justify-between text-sm sm:text-base">
                <span>Subtotal</span>
                <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span>Shipping</span>
                <span className="font-medium">{shipping === 0 ? "Free" : `Rs. ${shipping.toLocaleString()}`}</span>
              </div>

              <Separator />

              <div className="flex justify-between text-base sm:text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">Rs. {total.toLocaleString()}</span>
              </div>

              <Button
                type="submit"
                className="w-full h-11 sm:h-12 text-sm sm:text-base"
                size="lg"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Complete Order"}
              </Button>

              <div className="text-xs text-muted-foreground text-center">
                By completing your order, you agree to our terms and conditions.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  )
}
