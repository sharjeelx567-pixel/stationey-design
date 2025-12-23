"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import {
  CheckCircle2,
  Clock,
  Package,
  Truck,
  MapPin,
  Phone,
  DollarSign,
  ArrowLeft,
  AlertCircle,
} from "lucide-react"
import type { Order } from "@/lib/db"

const OrderTimeline = ({ status }: { status: string }) => {
  const steps = [
    { id: "pending", label: "Order Placed", icon: Clock },
    { id: "processing", label: "Processing", icon: Package },
    { id: "shipped", label: "Shipped", icon: Truck },
    { id: "delivered", label: "Delivered", icon: CheckCircle2 },
  ]

  const statusIndex = steps.findIndex((step) => step.id === status)
  const isCompleted = status === "delivered"

  return (
    <div className="py-6">
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = index <= statusIndex
          const isLastActive = index === statusIndex

          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                  isActive
                    ? "bg-green-500 border-green-500 text-white"
                    : "bg-white border-gray-300 text-gray-400"
                } ${isLastActive ? "ring-4 ring-green-200" : ""}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <p
                className={`text-xs sm:text-sm font-medium text-center mt-2 ${
                  isActive ? "text-green-600" : "text-gray-500"
                }`}
              >
                {step.label}
              </p>
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-0.5 ${
                    isActive ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function OrderDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const orderId = params.id as string

  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrderDetails()
  }, [orderId])

  const fetchOrderDetails = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/orders/${orderId}`)
      if (response.ok) {
        const data = await response.json()
        setOrder(data.order)
      } else if (response.status === 404) {
        // Try to get from user orders list
        const userId = localStorage.getItem("userId") || `user_${Date.now()}`
        const listResponse = await fetch(`/api/orders?userId=${userId}`)
        if (listResponse.ok) {
          const listData = await listResponse.json()
          const foundOrder = listData.orders.find((o: Order) => o.id === orderId)
          if (foundOrder) {
            setOrder(foundOrder)
          }
        }
      }
    } catch (error) {
      console.error("Error fetching order:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-muted/40">
          <div className="container mx-auto px-4 py-8">
            <p>Loading order details...</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!order) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 bg-muted/40">
          <div className="container mx-auto px-4 py-8">
            <Card className="text-center py-12">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-red-500" />
              <p className="text-lg font-medium mb-4">Order Not Found</p>
              <Button onClick={() => router.back()}>Go Back</Button>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Order Details</h1>
              <p className="text-muted-foreground">{order.id}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Status Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <OrderTimeline status={order.status} />
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    {order.status === "pending" && "Your order is being prepared"}
                    {order.status === "processing" && "Your order is being packed and prepared for shipment"}
                    {order.status === "shipped" && "Your order is on its way"}
                    {order.status === "delivered" && "Your order has been delivered"}
                    {order.status === "cancelled" && "Your order has been cancelled"}
                  </p>
                </CardContent>
              </Card>

              {/* COD Payment Notice */}
              {order.paymentMethod === "cod" && order.paymentStatus === "pending" && (
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-900 flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Payment on Delivery
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-orange-900">
                    <p className="mb-2 font-medium">Total Amount Due on Delivery: Rs. {order.total.toLocaleString()}</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Please have the exact amount ready when the delivery agent arrives</li>
                      <li>Inspect the items before making the payment</li>
                      <li>You will receive a receipt after payment</li>
                      <li>For any issues, contact our customer service</li>
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Order Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Items ({order.items.length})</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {order.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <p className="font-medium">{item.productName}</p>
                          <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-medium">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                      {idx < order.items.length - 1 && <Separator />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">Rs. {(order.total * 0.95).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">Rs. {(order.total * 0.05).toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">Rs. {order.total.toLocaleString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <MapPin className="h-4 w-4" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="font-medium">{order.shippingAddress.name}</p>
                  <p className="text-muted-foreground">{order.shippingAddress.address}</p>
                  <p className="text-muted-foreground">
                    {order.shippingAddress.city}, {order.shippingAddress.zipCode}
                  </p>
                  <Separator />
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    {order.shippingAddress.phone}
                  </div>
                </CardContent>
              </Card>

              {/* Payment Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <DollarSign className="h-4 w-4" />
                    Payment Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Method</span>
                    <span className="font-medium capitalize">
                      {order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span
                      className={`font-medium capitalize ${
                        order.paymentStatus === "completed"
                          ? "text-green-600"
                          : order.paymentStatus === "pending"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    >
                      {order.paymentStatus === "pending" && order.paymentMethod === "cod"
                        ? "Awaiting Payment"
                        : order.paymentStatus}
                    </span>
                  </div>
                  <Separator />
                  <p className="text-xs text-muted-foreground">
                    Order Date: {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
