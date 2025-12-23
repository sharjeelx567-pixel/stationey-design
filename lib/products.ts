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
    images: ["/hoodie-calvin-gray.jpg"],
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
    name: "BTUR BTNY Premium Striped Sweater",
    description:
      "Luxury striped sweater featuring iconic multicolor design in black, cream, red, and gray bands. Premium knit construction with embroidered BTUR BTNY branding. Elevate your casual wardrobe with this designer piece combining comfort and style.",
    price: 3200,
    category: "Apparel",
    categorySlug: "apparel",
    images: ["/sweater-striped.jpg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 341,
    features: [
      "BTUR BTNY branding",
      "Iconic stripe pattern",
      "Premium knit fabric",
      "Embroidered details",
      "Multiple color bands",
      "Comfortable fit",
    ],
  },

  // STATIONERY ITEMS CATEGORY
  {
    id: "3",
    name: "Premium Leather Notebook Collection - Multi-Color",
    description:
      "Beautiful collection of premium hardcover notebooks in multiple elegant colors including green, gray, brown, blue, and black. Features thick quality pages perfect for writing. Ideal for professionals, students, and executives who value quality stationery.",
    price: 1400,
    category: "Stationery Items",
    categorySlug: "stationery-items",
    images: ["/notebook-stack.jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 267,
    features: [
      "Multiple elegant colors",
      "Premium hardcover",
      "Thick quality pages",
      "Professional design",
      "Durable construction",
      "Perfect for writing",
    ],
  },
  {
    id: "4",
    name: "Premium Islamic Calligraphy Keychain",
    description:
      "Elegant stainless steel keychain featuring beautiful Arabic Islamic calligraphy. Premium metal construction with polished silver finish and sturdy ring. Perfect Islamic gift for Muslims, featuring traditional religious text in exquisite engraved design.",
    price: 350,
    category: "Stationery Items",
    categorySlug: "stationery-items",
    images: ["/keychain-islamic.jpg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 215,
    features: [
      "Islamic calligraphy",
      "Stainless steel",
      "Premium engraving",
      "Polished finish",
      "Sturdy metal ring",
      "Perfect Islamic gift",
    ],
  },
  {
    id: "5",
    name: "Executive Leather Planner with Pen Set - Orange",
    description:
      "Professional leather-bound planner in elegant orange color with metal clasp closure. Comes with premium pen set featuring chrome finish. Perfect for executives, professionals, and students. High-quality pages with organized sections for planning and note-taking.",
    price: 2800,
    category: "Stationery Items",
    categorySlug: "stationery-items",
    images: ["/planner-orange.jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 178,
    features: [
      "Premium leather binding",
      "Metal clasp closure",
      "Includes pen set",
      "Chrome finish pens",
      "Organized sections",
      "Professional design",
    ],
  },
  {
    id: "6",
    name: "Premium Black Water Bottle - Matte Finish",
    description:
      "Sleek matte black water bottle with screw-top lid. High-quality construction perfect for everyday use. Durable and leak-proof design keeps beverages fresh. Ideal for gym, office, or outdoor activities.",
    price: 800,
    category: "Stationery Items",
    categorySlug: "stationery-items",
    images: ["/bottle-black.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
    features: [
      "Matte black finish",
      "Screw-top lid",
      "Leak-proof design",
      "Durable construction",
      "Easy to clean",
      "Portable size",
    ],
  },
  {
    id: "7",
    name: "Insulated Water Bottles Collection - Multi-Color",
    description:
      "Premium insulated water bottles with protective black sleeves. Available in pink and blue color options with stainless steel lids. Double-wall insulation keeps drinks hot or cold for hours. Perfect for students and professionals.",
    price: 1200,
    category: "Stationery Items",
    categorySlug: "stationery-items",
    images: ["/bottles-insulated.jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 203,
    features: [
      "Double-wall insulation",
      "Multiple color options",
      "Protective sleeve",
      "Stainless steel lid",
      "Keeps drinks hot/cold",
      "Comfortable grip",
    ],
  },
  {
    id: "8",
    name: "Clear Glass Water Bottle with Metal Lid",
    description:
      "Elegant clear glass water bottle with premium stainless steel screw lid. BPA-free borosilicate glass construction. Comes with convenient carry strap. Perfect for office, home, or travel use. Easy to clean and eco-friendly.",
    price: 950,
    category: "Stationery Items",
    categorySlug: "stationery-items",
    images: ["/bottle-glass.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 142,
    features: [
      "Borosilicate glass",
      "Stainless steel lid",
      "BPA-free",
      "Carry strap included",
      "Eco-friendly",
      "Easy to clean",
    ],
  },
  {
    id: "9",
    name: "LBS Branded Pen - White",
    description:
      "Official Lyallpur Business School branded pen in elegant white color with blue accents. Smooth writing ballpoint pen with comfortable grip. Features LBS branding in professional font. Perfect for students, alumni, and staff.",
    price: 150,
    category: "Souvenirs",
    categorySlug: "souvenirs",
    images: ["/pen-lbs-white.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 89,
    features: [
      "LBS official branding",
      "Smooth ballpoint",
      "Comfortable grip",
      "Blue accents",
      "Professional design",
      "Perfect gift item",
    ],
  },
  {
    id: "10",
    name: "LBS Branded Pen - Black Premium",
    description:
      "Premium black Lyallpur Business School branded pen with elegant silver accents and chrome details. High-quality ballpoint pen with smooth ink flow. Features official LBS branding. Ideal for professionals, executives, and as corporate gifts.",
    price: 200,
    category: "Souvenirs",
    categorySlug: "souvenirs",
    images: ["/pen-lbs-black.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 124,
    features: [
      "Premium black finish",
      "LBS official branding",
      "Silver chrome accents",
      "Smooth ink flow",
      "Professional design",
      "Perfect corporate gift",
    ],
  },
  {
    id: "11",
    name: "LBS Official Keychain - Rectangular Black",
    description:
      "Official Lyallpur Business School rectangular black keychain featuring the prestigious LBS shield logo with stars. Premium quality metal construction with durable finish. Perfect souvenir for students, alumni, and staff members.",
    price: 400,
    category: "Souvenirs",
    categorySlug: "souvenirs",
    images: ["/keychain-lbs-rectangular.jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 167,
    features: [
      "Official LBS shield logo",
      "Rectangular design",
      "Premium metal construction",
      "Durable black finish",
      "Sturdy key ring",
      "Perfect souvenir",
    ],
  },
  {
    id: "12",
    name: "LBS Official Keychain - Round Black",
    description:
      "Official Lyallpur Business School black round keychain with embossed LBS shield emblem. Premium circular design with high-quality metal construction. Represents institutional pride and makes an excellent gift for the LBS community.",
    price: 380,
    category: "Souvenirs",
    categorySlug: "souvenirs",
    images: ["/keychain-lbs-round.jpg"],
    inStock: true,
    rating: 4.7,
    reviewCount: 145,
    features: [
      "Official LBS emblem",
      "Round circular design",
      "Embossed shield logo",
      "Premium metal",
      "Black finish",
      "Alumni favorite",
    ],
  },
  {
    id: "13",
    name: "Premium Hoodie - Forest Green",
    description:
      "Classic forest green hoodie with premium quality fabric. Features front kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for casual everyday wear with comfortable relaxed fit. High-quality cotton blend material.",
    price: 2400,
    category: "Apparel",
    categorySlug: "apparel",
    images: ["/hoodie-green.jpg"],
    inStock: true,
    rating: 4.8,
    reviewCount: 278,
    features: [
      "Forest green color",
      "Front kangaroo pocket",
      "Adjustable drawstring",
      "Ribbed cuffs and hem",
      "Premium cotton blend",
      "Comfortable fit",
    ],
  },
  {
    id: "14",
    name: "Premium Hoodie - Classic Black",
    description:
      "Timeless black hoodie with superior quality construction. Features spacious front pocket, soft fleece interior, and durable exterior. Versatile design suitable for all occasions. Premium fabric ensures long-lasting comfort and style.",
    price: 2400,
    category: "Apparel",
    categorySlug: "apparel",
    images: ["/hoodie-black.jpg"],
    inStock: true,
    rating: 4.9,
    reviewCount: 312,
    features: [
      "Classic black color",
      "Soft fleece interior",
      "Front kangaroo pocket",
      "Durable construction",
      "Premium quality fabric",
      "Versatile design",
    ],
  },
  {
    id: "15",
    name: "Black Refillable Bottles Set - 2 Pack",
    description:
      "Premium set of 2 black matte finish refillable bottles with screw caps. Perfect for storing liquids, lotions, shampoos, or other cosmetic products. BPA-free plastic construction. Ideal for travel, gym, or bathroom organization.",
    price: 600,
    category: "Stationery Items",
    categorySlug: "stationery-items",
    images: ["/bottles-refillable.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 189,
    features: [
      "Set of 2 bottles",
      "Black matte finish",
      "Screw-on caps",
      "BPA-free plastic",
      "Multi-purpose use",
      "Travel-friendly",
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

