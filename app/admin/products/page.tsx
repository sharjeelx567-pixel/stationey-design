import { AdminHeader } from "@/components/admin-header"
import { AdminProductList } from "@/components/admin-product-list"

export default function AdminProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <AdminProductList />
    </div>
  )
}
