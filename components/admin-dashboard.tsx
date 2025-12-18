"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, ShoppingCart, Users, DollarSign, TrendingUp, TrendingDown } from "lucide-react"
import { products } from "@/lib/products"

export function AdminDashboard() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,345.67",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Orders",
      value: "145",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
    },
    {
      title: "Products",
      value: products.length.toString(),
      change: "+2",
      trend: "up",
      icon: Package,
    },
    {
      title: "Customers",
      value: "1,234",
      change: "+15.3%",
      trend: "up",
      icon: Users,
    },
  ]

  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", total: 89.98, status: "Processing" },
    { id: "ORD-002", customer: "Jane Smith", total: 45.99, status: "Shipped" },
    { id: "ORD-003", customer: "Bob Johnson", total: 129.97, status: "Delivered" },
    { id: "ORD-004", customer: "Alice Brown", total: 34.99, status: "Processing" },
    { id: "ORD-005", customer: "Charlie Wilson", total: 67.98, status: "Shipped" },
  ]

  const topProducts = [
    { name: "Premium Leather Journal", sold: 245, revenue: "$7,347.55" },
    { name: "Executive Fountain Pen Set", sold: 189, revenue: "$9,448.11" },
    { name: "Gel Pen Collection", sold: 312, revenue: "$5,300.88" },
    { name: "Minimalist Desk Organizer", sold: 178, revenue: "$6,224.22" },
  ]

  return (
    <main className="flex-1 bg-muted/40">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard Overview</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2 p-4 sm:p-6 sm:pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="text-xl sm:text-2xl font-bold mb-1">{stat.value}</div>
                <div className="flex items-center text-xs">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600 mr-1" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
                  <span className="text-muted-foreground ml-1 hidden xs:inline">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Recent Orders */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">Recent Orders</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Latest orders from your customers</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-3 sm:space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between pb-2 sm:pb-3 border-b last:border-0">
                    <div>
                      <p className="font-medium text-sm sm:text-base">{order.id}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm sm:text-base">${order.total}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Processing"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-base sm:text-lg">Top Selling Products</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Best performing products this month</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-3 sm:space-y-4">
                {topProducts.map((product, index) => (
                  <div
                    key={product.name}
                    className="flex items-center gap-3 sm:gap-4 pb-2 sm:pb-3 border-b last:border-0"
                  >
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-sm sm:text-base">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm sm:text-base truncate">{product.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{product.sold} sold</p>
                    </div>
                    <p className="font-bold text-primary text-sm sm:text-base whitespace-nowrap">{product.revenue}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
