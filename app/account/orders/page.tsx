"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Eye, Package, Truck, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import type { Order } from "@/lib/db"

const getStatusIcon = (status: string) => {
  switch (status) {
    case "pending":
      return <Clock className="h-4 w-4" />
    case "processing":
      return <Package className="h-4 w-4" />
    case "shipped":
      return <Truck className="h-4 w-4" />
    case "delivered":
      return <CheckCircle2 className="h-4 w-4" />
    default:
      return <AlertCircle className="h-4 w-4" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-700 border-yellow-200"
    case "processing":
      return "bg-blue-100 text-blue-700 border-blue-200"
    case "shipped":
      return "bg-purple-100 text-purple-700 border-purple-200"
    case "delivered":
      return "bg-green-100 text-green-700 border-green-200"
    case "cancelled":
      return "bg-red-100 text-red-700 border-red-200"
    default:
      return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

const getPaymentStatusColor = (status: string, method: string) => {
  if (method === "cod" && status === "pending") {
    return "bg-orange-50 text-orange-700"
  }
  switch (status) {
    case "completed":
      return "bg-green-50 text-green-700"
    case "failed":
      return "bg-red-50 text-red-700"
    default:
      return "bg-yellow-50 text-yellow-700"
  }
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      setLoading(true)
      // Get user ID from localStorage or use a guest ID
      const userId = localStorage.getItem("userId") || `user_${Date.now()}`

      const response = await fetch(`/api/orders?userId=${userId}`)
      if (response.ok) {
        const data = await response.json()
        setOrders(data.orders)
      }
    } catch (error) {
      console.error("Error fetching orders:", error)
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
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Order History</h1>
              <p className="text-muted-foreground">Loading your orders...</p>
            </div>
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Order History</h1>
            <p className="text-muted-foreground">View and track all your orders</p>
          </div>

          {orders.length === 0 ? (
            <Card className="text-center py-12">
              <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">No orders yet</p>
              <p className="text-muted-foreground mb-6">Start shopping to create your first order</p>
              <Link href="/shop">
                <Button>Continue Shopping</Button>
              </Link>
            </Card>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg">{order.id}</CardTitle>
                        <CardDescription>
                          {new Date(order.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="capitalize">{order.status}</span>
                        </div>
                        <div className={`text-xs font-medium px-3 py-1 rounded-full ${getPaymentStatusColor(order.paymentStatus, order.paymentMethod)}`}>
                          {order.paymentMethod === "cod" && order.paymentStatus === "pending"
                            ? "Payment on Delivery"
                            : order.paymentStatus === "completed"
                              ? "Paid"
                              : order.paymentStatus === "failed"
                                ? "Payment Failed"
                                : "Pending Payment"}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <Separator />

                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      {/* Order Items Summary */}
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Items ({order.items.length})</h4>
                        <div className="space-y-1">
                          {order.items.slice(0, 2).map((item, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {item.productName} × {item.quantity}
                            </p>
                          ))}
                          {order.items.length > 2 && (
                            <p className="text-sm text-muted-foreground">
                              +{order.items.length - 2} more item{order.items.length - 2 > 1 ? "s" : ""}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Shipping Address */}
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Delivery To</h4>
                        <p className="text-sm text-muted-foreground">
                          {order.shippingAddress.address}, {order.shippingAddress.city} {order.shippingAddress.zipCode}
                        </p>
                      </div>

                      {/* Order Total and Actions */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t gap-4">
                        <p className="text-lg font-bold text-primary">Rs. {order.total.toLocaleString()}</p>
                        <div className="flex gap-2">
                          <Link href={`/account/orders/${order.id}`}>
                            <Button variant="outline" size="sm" className="gap-2">
                              <Eye className="h-4 w-4" />
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
