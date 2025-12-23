import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="xs:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg font-bold text-sm" style={{ backgroundColor: '#ADD8E6', color: '#000000' }}>
                LBS
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg" style={{ color: '#000000' }}>LEXON</span>
                <span className="text-[10px] tracking-wider text-muted-foreground">WHERE IDEAS BEGIN</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              Quality stationery products for students, professionals, and creative minds worldwide.
            </p>
            <div className="text-xs sm:text-sm text-muted-foreground space-y-1">
              <p><strong>Phone:</strong> <a href="tel:03424832105" className="hover:text-foreground">03424832105</a></p>
              <p><strong>Email:</strong> <a href="mailto:shahidx345@gmail.com" className="hover:text-foreground">shahidx345@gmail.com</a></p>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com"
                className="h-9 w-9 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="h-9 w-9 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="h-9 w-9 rounded-full bg-background border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Customer Service</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-muted-foreground hover:text-foreground transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Newsletter</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              Subscribe to get special offers and updates
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="Enter your email" className="w-full text-sm" />
              <Button type="submit" className="w-full h-9 sm:h-10 text-sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lexon Stationery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
