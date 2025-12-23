import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, LogOut } from "lucide-react"

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg font-bold text-xs sm:text-sm" style={{ backgroundColor: '#ADD8E6', color: '#000000' }}>
              LEX
            </div>
            <div>
              <span className="font-semibold text-lg">Lexon Stationery</span>
              <span className="block text-xs text-muted-foreground">Admin Dashboard</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/admin/orders" className="text-sm font-medium hover:text-primary transition-colors">
              Orders
            </Link>
            <Link href="/admin/customers" className="text-sm font-medium hover:text-primary transition-colors">
              Customers
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                View Store
              </Link>
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
