import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Package, Truck, Shield, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-muted to-background">
          <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Discover Quality <span className="text-primary">Apparel, Souvenirs & Stationery</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  From premium hoodies and official LBS souvenirs to elegant diaries and professional writing
                  instruments. Shop the complete Lexon collection.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
                    <Link href="/shop">
                      Shop Now
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                    <Link href="/categories">Browse Categories</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] order-first lg:order-last">
                <Image
                  src="/notebook-stack.jpg"
                  alt="Premium products workspace"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 border-y bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Quality Products</h3>
                <p className="text-sm text-muted-foreground">Carefully selected premium items</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Affordable Shipping</h3>
                <p className="text-sm text-muted-foreground">Free delivery on orders over Rs. 3,000</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">Safe and encrypted transactions</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Top Rated</h3>
                <p className="text-sm text-muted-foreground">Trusted by students and professionals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-12 sm:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Featured Products</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
                Explore our handpicked selection from Apparel, Souvenirs, and Stationery
              </p>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64 overflow-hidden bg-background">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">Rs. {product.price}</span>
                      <Button size="sm" asChild>
                        <Link href={`/product/${product.id}`}>View</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6 sm:mt-8">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Link href="/shop">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Shop by Category</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
                Browse our complete collection across Apparel, Souvenirs, and Stationery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {categories.map((category) => (
                <Link key={category.name} href={`/shop?category=${category.slug}`} className="group">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4 sm:p-6 text-center">
                      <h3 className="font-bold text-lg sm:text-xl mb-2">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance px-4">
              Ready to Shop Quality Products?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-primary-foreground/90 px-4">
              Join thousands of satisfied customers with affordable prices for everyone
            </p>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const featuredProducts = [
  {
    id: "1",
    name: "Calvin Premium Hoodie - Gray",
    category: "Apparel",
    price: 2500,
    image: "/hoodie-calvin-gray.jpg",
  },
  {
    id: "2",
    name: "BTUR BTNY Premium Striped Sweater",
    category: "Apparel",
    price: 3200,
    image: "/sweater-striped.jpg",
  },
  {
    id: "3",
    name: "Premium Leather Notebook Collection",
    category: "Stationery Items",
    price: 1400,
    image: "/notebook-stack.jpg",
  },
  {
    id: "4",
    name: "Premium Islamic Calligraphy Keychain",
    category: "Stationery Items",
    price: 350,
    image: "/keychain-islamic.jpg",
  },
  {
    id: "5",
    name: "Executive Leather Planner with Pen Set",
    category: "Stationery Items",
    price: 2800,
    image: "/planner-orange.jpg",
  },
]


const categories = [
  {
    name: "Apparel",
    slug: "apparel",
    description: "Premium hoodies and designer sweaters",
    image: "/hoodie-calvin-gray.jpg",
  },
  {
    name: "Stationery Items",
    slug: "stationery-items",
    description: "Quality notebooks, planners, and water bottles",
    image: "/notebook-stack.jpg",
  },
  {
    name: "Souvenirs",
    slug: "souvenirs",
    description: "Official LBS branded pens and keychains",
    image: "/keychain-lbs-rectangular.jpg",
  },
]


