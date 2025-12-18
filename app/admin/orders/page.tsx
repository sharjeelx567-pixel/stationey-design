import { AdminHeader } from "@/components/admin-header"
import { AdminOrderList } from "@/components/admin-order-list"

export default function AdminOrdersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <AdminOrderList />
    </div>
  )
}
