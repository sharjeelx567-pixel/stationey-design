"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { CheckCircle, Clock, Truck, DollarSign } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"
import type { Order } from "@/lib/db"

function CheckoutSuccessContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  useEffect(() => {
    if (orderId) {
      fetchOrder()
    } else {
      setLoading(false)
    }
  }, [orderId])

  const fetchOrder = async () => {
    if (!orderId) return
    try {
      const userId = localStorage.getItem("userId") || `user_${Date.now()}`
      const response = await fetch(`/api/orders?userId=${userId}`)
      if (response.ok) {
        const data = await response.json()
        const found = data.orders.find((o: Order) => o.id === orderId)
        if (found) {
          setOrder(found)
          setShowConfirmation(true)
          // Send confirmation email
          await sendConfirmationEmail(found)
        }
      }
    } catch (error) {
      console.error("Error fetching order:", error)
    } finally {
      setLoading(false)
    }
  }

  const sendConfirmationEmail = async (orderData: Order) => {
    try {
      const userEmail = localStorage.getItem("userEmail") || "customer@example.com"
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: orderData,
          userEmail,
        }),
      })

      if (response.ok) {
        setEmailSent(true)
      }
    } catch (error) {
      console.error("Error sending email:", error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Order Confirmation
            </AlertDialogTitle>
            <AlertDialogDescription className="space-y-3">
              <p className="text-foreground font-medium">
                Your order has been successfully placed!
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded p-2">
                <p className="text-xs text-muted-foreground">Order ID:</p>
                <p className="text-lg font-bold text-blue-600">{order?.id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Order Amount: Rs. {order?.total.toLocaleString()}</p>
                <p className="text-sm font-medium text-foreground">Payment Method: Cash on Delivery (COD)</p>
              </div>
              {emailSent && (
                <p className="text-sm text-green-700 bg-green-50 p-2 rounded border border-green-200">
                  ✓ Confirmation email sent to shahidx345@gmail.com
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                <strong>Business Address:</strong> LBS GCUF
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction onClick={() => setShowConfirmation(false)}>
            Continue
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>

      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg">
              <div className="h-20 w-20 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <CardTitle className="text-3xl sm:text-4xl">Order Confirmed!</CardTitle>
              <CardDescription className="text-base">
                Thank you for your purchase. Your order has been successfully placed.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              {loading ? (
                <p className="text-center text-muted-foreground">Loading order details...</p>
              ) : order ? (
                <div className="space-y-6">
                  {/* Order ID */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                    <p className="text-2xl font-bold text-blue-600">{order.id}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Please save this number for your records
                    </p>
                  </div>

                  <Separator />

                  {/* Order Info Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Truck className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Delivery Address</p>
                        <p className="text-sm text-muted-foreground">
                          {order.shippingAddress.address}, {order.shippingAddress.city}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <DollarSign className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Order Total</p>
                        <p className="text-sm text-muted-foreground">Rs. {order.total.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Order Status</p>
                        <p className="text-sm text-muted-foreground capitalize">{order.status}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Payment Method</p>
                        <p className="text-sm text-muted-foreground capitalize">
                          {order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Notice */}
                  {order.paymentMethod === "cod" && order.paymentStatus === "pending" && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <p className="font-medium text-orange-900 mb-2">Cash on Delivery</p>
                      <p className="text-sm text-orange-800">
                        You will pay Rs. {order.total.toLocaleString()} when the delivery agent brings your order to your doorstep.
                        Please have the exact amount ready.
                      </p>
                    </div>
                  )}

                  {/* Next Steps */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium mb-3">What's Next?</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>You will receive a confirmation email with order details</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Your order will be prepared and packaged</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>You'll get a tracking update when your order ships</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-600">✓</span>
                        <span>Monitor your order status in your account dashboard</span>
                      </li>
                    </ul>
                  </div>

                  <Separator />

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="flex-1">
                      <Link href={`/account/orders/${order.id}`}>View Order Details</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="flex-1">
                      <Link href="/account/orders">View All Orders</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="flex-1">
                      <Link href="/shop">Continue Shopping</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-center text-muted-foreground">
                    Your order has been successfully placed!
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    We've sent a confirmation email with your order details and tracking information.
                  </p>
                  <Separator />
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg">
                      <Link href="/shop">Continue Shopping</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="/account/orders">View Orders</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <CheckoutSuccessContent />
    </Suspense>
  )
}

function LoadingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">Loading...</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
