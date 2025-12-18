import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SettingsContent } from "@/components/settings-content"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/40">
        <SettingsContent />
      </main>

      <Footer />
    </div>
  )
}
