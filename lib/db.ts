// Database types and mock data storage
import type { Product } from "./products"

export interface User {
  id: string
  email: string
  password: string
  name: string
  phone: string
  address: string
  city: string
  zipCode: string
  createdAt: Date
}

export interface OrderItem {
  productId: string
  productName: string
  quantity: number
  price: number
  image: string
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  paymentStatus: "pending" | "completed" | "failed"
  paymentMethod: "card" | "bank" | "cod"
  shippingAddress: {
    name: string
    phone: string
    address: string
    city: string
    zipCode: string
  }
  createdAt: Date
  updatedAt: Date
}

export interface Payment {
  id: string
  orderId: string
  userId: string
  amount: number
  method: "card" | "bank" | "cod"
  transactionId?: string
  status: "pending" | "completed" | "failed"
  createdAt: Date
}

export interface Review {
  id: string
  productId: string
  userId: string
  rating: number
  comment: string
  createdAt: Date
}

// Mock database storage - In production, use a real database
let users: User[] = []
let orders: Order[] = []
let payments: Payment[] = []
let reviews: Review[] = []

// User functions
export function createUser(userData: Omit<User, "id" | "createdAt">): User {
  const user: User = {
    ...userData,
    id: `user_${Date.now()}`,
    createdAt: new Date(),
  }
  users.push(user)
  return user
}

export function getUserByEmail(email: string): User | undefined {
  return users.find((u) => u.email === email)
}

export function getUserById(id: string): User | undefined {
  return users.find((u) => u.id === id)
}

export function updateUser(id: string, updates: Partial<User>): User | undefined {
  const user = users.find((u) => u.id === id)
  if (!user) return undefined
  Object.assign(user, updates)
  return user
}

// Order functions
export function createOrder(
  userId: string,
  items: OrderItem[],
  total: number,
  shippingAddress: Order["shippingAddress"],
  paymentMethod: Order["paymentMethod"],
): Order {
  const order: Order = {
    id: `order_${Date.now()}`,
    userId,
    items,
    total,
    status: "pending",
    paymentStatus: "pending",
    paymentMethod,
    shippingAddress,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  orders.push(order)
  return order
}

export function getOrderById(id: string): Order | undefined {
  return orders.find((o) => o.id === id)
}

export function getOrdersByUserId(userId: string): Order[] {
  return orders.filter((o) => o.userId === userId)
}

export function updateOrder(id: string, updates: Partial<Order>): Order | undefined {
  const order = orders.find((o) => o.id === id)
  if (!order) return undefined
  Object.assign(order, { ...updates, updatedAt: new Date() })
  return order
}

export function getAllOrders(): Order[] {
  return orders
}

// Payment functions
export function createPayment(
  orderId: string,
  userId: string,
  amount: number,
  method: Payment["method"],
  transactionId?: string,
): Payment {
  const payment: Payment = {
    id: `payment_${Date.now()}`,
    orderId,
    userId,
    amount,
    method,
    transactionId,
    status: "pending",
    createdAt: new Date(),
  }
  payments.push(payment)
  return payment
}

export function getPaymentById(id: string): Payment | undefined {
  return payments.find((p) => p.id === id)
}

export function getPaymentsByOrderId(orderId: string): Payment[] {
  return payments.filter((p) => p.orderId === orderId)
}

export function updatePayment(id: string, updates: Partial<Payment>): Payment | undefined {
  const payment = payments.find((p) => p.id === id)
  if (!payment) return undefined
  Object.assign(payment, updates)
  return payment
}

// Review functions
export function createReview(productId: string, userId: string, rating: number, comment: string): Review {
  const review: Review = {
    id: `review_${Date.now()}`,
    productId,
    userId,
    rating,
    comment,
    createdAt: new Date(),
  }
  reviews.push(review)
  return review
}

export function getReviewsByProductId(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId)
}

export function getAllReviews(): Review[] {
  return reviews
}

// Authentication helper
export function authenticateUser(email: string, password: string): User | null {
  const user = getUserByEmail(email)
  if (!user) return null

  // In production, use proper password hashing (bcrypt)
  if (user.password === password) {
    return user
  }

  return null
}
