import { AdminDashboard } from "@/components/admin-dashboard"
import { AdminHeader } from "@/components/admin-header"

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <AdminDashboard />
    </div>
  )
}
