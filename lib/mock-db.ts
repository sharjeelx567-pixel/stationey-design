// Mock database - stores data in memory for development
// This is a temporary solution while Firebase rules are being fixed

import type { User, Order, Payment, Review } from "./db"

// In-memory storage
const mockStorage = {
  orders: new Map<string, Order>(),
  users: new Map<string, User>(),
  payments: new Map<string, Payment>(),
  reviews: new Map<string, Review>(),
}

// User functions
export async function createUser(userData: Omit<User, "id" | "createdAt">): Promise<User> {
  const user: User = {
    ...userData,
    id: `user_${Date.now()}`,
    createdAt: new Date(),
  }
  mockStorage.users.set(user.id, user)
  console.log("Mock DB: User created:", user.id)
  return user
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  for (const user of mockStorage.users.values()) {
    if (user.email === email) return user
  }
  return undefined
}

export async function getUserById(id: string): Promise<User | undefined> {
  return mockStorage.users.get(id)
}

export async function updateUser(id: string, updates: Partial<User>): Promise<User | undefined> {
  const user = mockStorage.users.get(id)
  if (!user) return undefined
  const updated = { ...user, ...updates }
  mockStorage.users.set(id, updated)
  return updated
}

// Order functions
export async function createOrder(
  userId: string,
  items: any[],
  total: number,
  shippingAddress: any,
  paymentMethod: any,
): Promise<Order> {
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
  mockStorage.orders.set(order.id, order)
  console.log("Mock DB: Order created:", order.id)
  return order
}

export async function getOrderById(id: string): Promise<Order | undefined> {
  return mockStorage.orders.get(id)
}

export async function getOrdersByUserId(userId: string): Promise<Order[]> {
  const orders: Order[] = []
  for (const order of mockStorage.orders.values()) {
    if (order.userId === userId) orders.push(order)
  }
  return orders
}

export async function updateOrder(id: string, updates: Partial<Order>): Promise<Order | undefined> {
  const order = mockStorage.orders.get(id)
  if (!order) return undefined
  const updated = { ...order, ...updates, updatedAt: new Date() }
  mockStorage.orders.set(id, updated)
  return updated
}

export async function getAllOrders(): Promise<Order[]> {
  return Array.from(mockStorage.orders.values())
}

// Payment functions
export async function createPayment(
  orderId: string,
  userId: string,
  amount: number,
  method: any,
  transactionId?: string,
): Promise<Payment> {
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
  mockStorage.payments.set(payment.id, payment)
  console.log("Mock DB: Payment created:", payment.id)
  return payment
}

export async function getPaymentById(id: string): Promise<Payment | undefined> {
  return mockStorage.payments.get(id)
}

export async function getPaymentsByOrderId(orderId: string): Promise<Payment[]> {
  const payments: Payment[] = []
  for (const payment of mockStorage.payments.values()) {
    if (payment.orderId === orderId) payments.push(payment)
  }
  return payments
}

export async function updatePayment(id: string, updates: Partial<Payment>): Promise<Payment | undefined> {
  const payment = mockStorage.payments.get(id)
  if (!payment) return undefined
  const updated = { ...payment, ...updates }
  mockStorage.payments.set(id, updated)
  return updated
}

// Review functions
export async function createReview(
  productId: string,
  userId: string,
  rating: number,
  comment: string,
): Promise<Review> {
  const review: Review = {
    id: `review_${Date.now()}`,
    productId,
    userId,
    rating,
    comment,
    createdAt: new Date(),
  }
  mockStorage.reviews.set(review.id, review)
  return review
}

export async function getReviewsByProductId(productId: string): Promise<Review[]> {
  const reviews: Review[] = []
  for (const review of mockStorage.reviews.values()) {
    if (review.productId === productId) reviews.push(review)
  }
  return reviews
}

export async function getAllReviews(): Promise<Review[]> {
  return Array.from(mockStorage.reviews.values())
}

// Authentication helper
export async function authenticateUser(email: string, password: string): Promise<User | null> {
  const user = await getUserByEmail(email)
  if (!user) return null
  if (user.password === password) {
    return user
  }
  return null
}

// Log all stored data (for debugging)
export function getAllData() {
  return {
    orders: Array.from(mockStorage.orders.values()),
    users: Array.from(mockStorage.users.values()),
    payments: Array.from(mockStorage.payments.values()),
    reviews: Array.from(mockStorage.reviews.values()),
  }
}
