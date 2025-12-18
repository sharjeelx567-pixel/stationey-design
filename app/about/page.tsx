import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Heart, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="border-b bg-muted/40">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Lexon Stationery</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're passionate about providing quality stationery products that inspire creativity and enhance
                productivity for students, professionals, and creative minds worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, Lexon Stationery began with a simple mission: to make quality stationery accessible
                  to everyone. What started as a small collection of notebooks has grown into a comprehensive range of
                  premium stationery products.
                </p>
                <p>
                  We believe that the right tools can transform the way you work, learn, and create. That's why we
                  carefully curate every product in our collection, ensuring it meets our high standards for quality,
                  functionality, and design.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers globally, helping them find the perfect stationery
                  for their unique needs and style.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/modern-office-workspace-with-stationery.jpg" alt="Our workspace" fill className="object-cover" />
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Quality First</h3>
                  <p className="text-sm text-muted-foreground">
                    We source only the finest materials and work with trusted manufacturers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Customer Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Your satisfaction is our priority. We're here to help every step of the way.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    We ship worldwide, bringing quality stationery to your doorstep.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Passion</h3>
                  <p className="text-sm text-muted-foreground">
                    We love what we do and it shows in every product we offer.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
