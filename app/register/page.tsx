import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-muted/40 flex items-center justify-center py-12">
        <RegisterForm />
      </main>

      <Footer />
    </div>
  )
}
