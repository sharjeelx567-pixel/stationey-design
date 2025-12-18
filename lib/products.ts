export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  categorySlug: string
  images: string[]
  inStock: boolean
  rating: number
  reviewCount: number
  features: string[]
}

export const products: Product[] = [
  // APPAREL CATEGORY
  {
    id: "1",
    name: "Calvin Premium Hoodie - Gray",
    description:
      "Premium quality gray hoodie featuring bold 'Calvin' branding with stylish lightning bolt design. Made from high-quality comfortable fabric with spacious front kangaroo pocket. Perfect for casual wear representing modern streetwear style.",
    price: 2500,
    category: "Apparel",
    categorySlug: "apparel",
    images: ["/hoodie-calvin.jpeg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 423,
    features: [
      "Premium gray fabric",
      "Bold Calvin branding",
      "Lightning bolt design",
      "Comfortable fit",
      "Front kangaroo pocket",
      "High-quality material",
    ],
  },
  {
    id: "2",
    name: "Burberry Premium Sweater - Luxury Striped",
    description:
      "Luxury Burberry sweater featuring iconic multicolor striped design in black, cream, red, and gray bands. Premium knit construction with embroidered Burberry branding. Elevate your casual wardrobe with this designer piece.",
    price: 3800,
    category: "Apparel",
    categorySlug: "apparel",
    images: ["/sweater-burberry.jpeg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 341,
    features: [
      "Luxury Burberry design",
      "Iconic stripe pattern",
      "Premium knit fabric",
      "Embroidered branding",
      "Multiple color bands",
      "Comfortable fit",
    ],
  },

  // STATIONERY ITEMS CATEGORY
  {
    id: "3",
    name: "Premium Leather Notebook Collection - Multi-Color",
    description:
      "Beautiful collection of premium hardcover notebooks in multiple elegant colors including green, gray, brown, blue, and black. Features thick quality pages with elastic closures. Perfect for professionals, students, and executives.",
    price: 1400,
    category: "Stationery Items",
    categorySlug: "stationery-items",
    images: ["/notebook-collection.jpeg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 267,
    features: [
      "Multiple colors",
      "Premium hardcover",
      "Thick quality pages",
      "Elastic closures",
      "Professional design",
      "Set of 5 notebooks",
    ],
  },
  {
    id: "4",
    name: "LBS Metal Keychain - Classic Black",
    description:
      "Classic black metal keychain with elegant design and sturdy metal ring. Premium stainless steel construction with polished finish. Perfect accessory for students, alumni, and professionals.",
    price: 280,
    category: "Stationery Items",
    categorySlug: "stationery-items",
    images: ["/keychain-black.jpeg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 93,
    features: [
      "Stainless steel construction",
      "Classic design",
      "Sturdy metal ring",
      "Black polished finish",
      "Durable and reliable",
      "Perfect accessory",
    ],
  },
  {
    id: "5",
    name: "LBS Luxury Metal Keychain with Engraving",
    description:
      "Premium engraved metal keychain featuring beautiful decorative text design. Durable stainless steel construction with elegant polished finish. Perfect souvenir for students and alumni of Lyallpur Business School.",
    price: 350,
    category: "Stationery Items",
    categorySlug: "stationery-items",
    images: ["/keychain-luxury.jpeg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 87,
    features: [
      "Stainless steel material",
      "Beautiful engraved design",
      "Durable construction",
      "Polished finish",
      "Perfect gift item",
      "Premium quality",
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export const categories = [
  {
    name: "Apparel",
    slug: "apparel",
    description: "Premium hoodies and designer sweaters",
    image: "/hoodie-calvin.jpeg",
  },
  {
    name: "Stationery Items",
    slug: "stationery-items",
    description: "Quality notebooks, diaries, and keychains",
    image: "/notebook-collection.jpeg",
  },
  {
    name: "Souvenir Shop",
    slug: "souvenir-shop",
    description: "Official LBS branded keychains and souvenirs",
    image: "/keychain-luxury.jpeg",
  },
]
