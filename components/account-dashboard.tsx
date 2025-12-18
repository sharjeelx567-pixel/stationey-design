"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Package, Heart, Settings, LogOut } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export function AccountDashboard() {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY 10001",
  })

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">My Account</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Manage your account settings and view your orders</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <Card>
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm sm:text-lg">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm sm:text-base truncate">{user.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{user.email}</p>
                </div>
              </div>
              <nav className="space-y-1">
                <Link
                  href="/account"
                  className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span className="text-xs sm:text-sm font-medium">Profile</span>
                </Link>
                <Link
                  href="/account/orders"
                  className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Package className="h-4 w-4" />
                  <span className="text-xs sm:text-sm font-medium">Orders</span>
                </Link>
                <Link
                  href="/account/wishlist"
                  className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Heart className="h-4 w-4" />
                  <span className="text-xs sm:text-sm font-medium">Wishlist</span>
                </Link>
                <Link
                  href="/account/settings"
                  className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <Settings className="h-4 w-4" />
                  <span className="text-xs sm:text-sm font-medium">Settings</span>
                </Link>
                <Separator className="my-2" />
                <button className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 rounded-lg hover:bg-muted transition-colors w-full text-left text-destructive">
                  <LogOut className="h-4 w-4" />
                  <span className="text-xs sm:text-sm font-medium">Logout</span>
                </button>
              </nav>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="profile" className="space-y-4 sm:space-y-6">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="profile" className="text-xs sm:text-sm">
                Profile
              </TabsTrigger>
              <TabsTrigger value="orders" className="text-xs sm:text-sm">
                Orders
              </TabsTrigger>
              <TabsTrigger value="settings" className="text-xs sm:text-sm">
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-4 sm:space-y-6">
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">Personal Information</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue={user.phone} />
                  </div>
                  <Button className="w-full sm:w-auto">Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">Shipping Address</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">Manage your default shipping address</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" defaultValue="123 Main Street" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="New York" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="NY" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" defaultValue="10001" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="United States" />
                    </div>
                  </div>
                  <Button className="w-full sm:w-auto">Update Address</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">Order History</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">View and track your orders</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-3 sm:p-4">
                        <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
                          <div>
                            <p className="font-semibold text-sm sm:text-base">Order #{order.id}</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">{order.date}</p>
                          </div>
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
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
                        <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-3">
                          {order.items.map((item, index) => (
                            <p key={index} className="text-xs sm:text-sm">
                              {item.name} × {item.quantity}
                            </p>
                          ))}
                        </div>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <p className="font-bold text-sm sm:text-base">${order.total}</p>
                          <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-transparent">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-4 sm:space-y-6">
              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">Change Password</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Update your password to keep your account secure
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="w-full sm:w-auto">Update Password</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-base sm:text-lg">Email Preferences</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    Manage your email notification settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <div className="flex items-start sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-sm sm:text-base">Order Updates</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Receive updates about your orders</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm flex-shrink-0 bg-transparent">
                      Enabled
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-start sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-sm sm:text-base">Promotional Emails</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Receive special offers and updates</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm flex-shrink-0 bg-transparent">
                      Enabled
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-start sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-sm sm:text-base">Product Recommendations</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Get personalized product suggestions</p>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs sm:text-sm flex-shrink-0 bg-transparent">
                      Disabled
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

const mockOrders = [
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
