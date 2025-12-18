"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AdminCustomerList() {
  const customers = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      joined: "Dec 1, 2023",
      orders: 5,
      spent: "$345.67",
      status: "Active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      joined: "Dec 5, 2023",
      orders: 3,
      spent: "$189.99",
      status: "Active",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      joined: "Dec 10, 2023",
      orders: 8,
      spent: "$567.89",
      status: "Active",
    },
    {
      id: "4",
      name: "Alice Brown",
      email: "alice@example.com",
      joined: "Dec 15, 2023",
      orders: 2,
      spent: "$89.99",
      status: "Active",
    },
    {
      id: "5",
      name: "Charlie Wilson",
      email: "charlie@example.com",
      joined: "Dec 20, 2023",
      orders: 6,
      spent: "$423.45",
      status: "Active",
    },
  ]

  return (
    <main className="flex-1 bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Customers</h1>
          <p className="text-muted-foreground">View and manage customer accounts</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Customer List</CardTitle>
                <CardDescription>{customers.length} total customers</CardDescription>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search customers..." className="pl-10" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                          {customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-muted-foreground">{customer.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{customer.joined}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell className="font-medium">{customer.spent}</TableCell>
                    <TableCell>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                        {customer.status}
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
