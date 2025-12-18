"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AdminOrderList() {
  const orders = [
    {
      id: "ORD-2024-001",
      customer: "John Doe",
      email: "john@example.com",
      date: "Jan 15, 2024",
      total: 89.98,
      status: "Processing",
      items: 3,
    },
    {
      id: "ORD-2024-002",
      customer: "Jane Smith",
      email: "jane@example.com",
      date: "Jan 16, 2024",
      total: 45.99,
      status: "Shipped",
      items: 2,
    },
    {
      id: "ORD-2024-003",
      customer: "Bob Johnson",
      email: "bob@example.com",
      date: "Jan 17, 2024",
      total: 129.97,
      status: "Delivered",
      items: 4,
    },
    {
      id: "ORD-2024-004",
      customer: "Alice Brown",
      email: "alice@example.com",
      date: "Jan 18, 2024",
      total: 34.99,
      status: "Processing",
      items: 1,
    },
    {
      id: "ORD-2024-005",
      customer: "Charlie Wilson",
      email: "charlie@example.com",
      date: "Jan 19, 2024",
      total: 67.98,
      status: "Shipped",
      items: 2,
    },
  ]

  return (
    <main className="flex-1 bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Orders</h1>
          <p className="text-muted-foreground">Manage and track customer orders</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Order List</CardTitle>
                <CardDescription>{orders.length} total orders</CardDescription>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search orders..." className="pl-10" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell className="font-medium">${order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Processing"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
