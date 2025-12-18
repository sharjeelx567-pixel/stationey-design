import { AdminHeader } from "@/components/admin-header"
import { AdminCustomerList } from "@/components/admin-customer-list"

export default function AdminCustomersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <AdminCustomerList />
    </div>
  )
}
