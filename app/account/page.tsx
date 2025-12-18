import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AccountDashboard } from "@/components/account-dashboard"

export default function AccountPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/40">
        <AccountDashboard />
      </main>

      <Footer />
    </div>
  )
}
