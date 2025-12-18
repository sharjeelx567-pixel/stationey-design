"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/products"

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get("category") || "all"
  const currentSort = searchParams.get("sort") || "featured"

  const updateFilters = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(updates).forEach(([key, value]) => {
      if (value === "all" || value === "featured") {
        params.delete(key)
      } else {
        params.set(key, value)
      }
    })

    router.push(`/shop?${params.toString()}`)
  }

  const clearFilters = () => {
    router.push("/shop")
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <RadioGroup value={currentCategory} onValueChange={(value) => updateFilters({ category: value })}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="font-normal cursor-pointer text-sm">
                All Products
              </Label>
            </div>
            {categories.map((category) => (
              <div key={category.slug} className="flex items-center space-x-2">
                <RadioGroupItem value={category.slug} id={category.slug} />
                <Label htmlFor={category.slug} className="font-normal cursor-pointer text-sm">
                  {category.name}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-base sm:text-lg">Sort By</CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <RadioGroup value={currentSort} onValueChange={(value) => updateFilters({ sort: value })}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="featured" id="featured" />
              <Label htmlFor="featured" className="font-normal cursor-pointer text-sm">
                Featured
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="price-low" id="price-low" />
              <Label htmlFor="price-low" className="font-normal cursor-pointer text-sm">
                Price: Low to High
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="price-high" id="price-high" />
              <Label htmlFor="price-high" className="font-normal cursor-pointer text-sm">
                Price: High to Low
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rating" id="rating" />
              <Label htmlFor="rating" className="font-normal cursor-pointer text-sm">
                Highest Rated
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {(currentCategory !== "all" || currentSort !== "featured") && (
        <Button variant="outline" className="w-full bg-transparent h-10 text-sm" onClick={clearFilters}>
          Clear All Filters
        </Button>
      )}
    </div>
  )
}
