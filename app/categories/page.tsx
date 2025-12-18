import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="border-b bg-muted/40">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Browse Categories</h1>
            <p className="text-muted-foreground">Explore our curated collections of premium stationery</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => {
              const categoryCount = products.filter((p) => p.categorySlug === category.slug).length
              return (
                <Link key={category.slug} href={`/shop?category=${category.slug}`} className="group">
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-64 overflow-hidden bg-muted">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <p className="text-sm font-medium text-primary">{categoryCount} Products Available</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
