"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun, Bell, Lock, User, Mail } from "lucide-react"

export function SettingsContent() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">Settings</h1>
        <p className="mb-8 text-sm text-muted-foreground sm:text-base">Manage your account settings and preferences</p>

        <div className="space-y-6">
          {/* Appearance Settings */}
          <Card className="p-4 sm:p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold sm:text-xl">
              {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              Appearance
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="theme" className="text-sm font-medium">
                  Theme
                </Label>
                <p className="mb-3 text-xs text-muted-foreground sm:text-sm">
                  Choose your preferred theme for the website
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    onClick={() => setTheme("light")}
                    className="flex items-center gap-2"
                  >
                    <Sun className="h-4 w-4" />
                    Light Mode
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    onClick={() => setTheme("dark")}
                    className="flex items-center gap-2"
                  >
                    <Moon className="h-4 w-4" />
                    Dark Mode
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Account Settings */}
          <Card className="p-4 sm:p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold sm:text-xl">
              <User className="h-5 w-5" />
              Account Information
            </h2>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstName" className="text-sm">
                    First Name
                  </Label>
                  <Input id="firstName" placeholder="John" defaultValue="John" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm">
                    Last Name
                  </Label>
                  <Input id="lastName" placeholder="Doe" defaultValue="Doe" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-sm">
                  Email Address
                </Label>
                <div className="mt-1 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="john@example.com" defaultValue="john@example.com" />
                </div>
              </div>
              <Button className="w-full sm:w-auto">Save Changes</Button>
            </div>
          </Card>

          {/* Security Settings */}
          <Card className="p-4 sm:p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold sm:text-xl">
              <Lock className="h-5 w-5" />
              Security
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="currentPassword" className="text-sm">
                  Current Password
                </Label>
                <Input id="currentPassword" type="password" placeholder="••••••••" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="newPassword" className="text-sm">
                  New Password
                </Label>
                <Input id="newPassword" type="password" placeholder="••••••••" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="confirmPassword" className="text-sm">
                  Confirm New Password
                </Label>
                <Input id="confirmPassword" type="password" placeholder="••••••••" className="mt-1" />
              </div>
              <Button className="w-full sm:w-auto">Update Password</Button>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="p-4 sm:p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold sm:text-xl">
              <Bell className="h-5 w-5" />
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Order Updates</Label>
                  <p className="text-xs text-muted-foreground sm:text-sm">Receive notifications about your orders</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Promotional Emails</Label>
                  <p className="text-xs text-muted-foreground sm:text-sm">Receive special offers and promotions</p>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-sm font-medium">Newsletter</Label>
                  <p className="text-xs text-muted-foreground sm:text-sm">Get updates about new products</p>
                </div>
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
              </div>
              <Button className="w-full sm:w-auto">Save Preferences</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
