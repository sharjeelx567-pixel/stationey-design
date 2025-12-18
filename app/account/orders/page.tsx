import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "January 15, 2024",
      status: "Delivered",
      items: [
        { name: "Premium Leather Journal", quantity: 1 },
        { name: "Gel Pen Collection", quantity: 1 },
      ],
      total: "46.98",
    },
    {
      id: "ORD-2024-002",
      date: "January 22, 2024",
      status: "Processing",
      items: [{ name: "Minimalist Desk Organizer", quantity: 2 }],
      total: "69.98",
    },
    {
      id: "ORD-2024-003",
      date: "February 3, 2024",
      status: "Shipped",
      items: [
        { name: "Professional Notebook Set", quantity: 1 },
        { name: "Colorful Sticky Notes Pack", quantity: 3 },
      ],
      total: "63.96",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Order History</h1>
            <p className="text-muted-foreground">View and track all your orders</p>
          </div>

          <div className="space-y-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Order #{order.id}</CardTitle>
                      <CardDescription>{order.date}</CardDescription>
                    </div>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
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
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {order.items.map((item, index) => (
                      <p key={index} className="text-sm">
                        {item.name} × {item.quantity}
                      </p>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <p className="font-bold text-lg">${order.total}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Track Order
                      </Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
