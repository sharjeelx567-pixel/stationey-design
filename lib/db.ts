// Database types - now using Firebase Firestore
import type { Product } from "./products"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
} from "firebase/firestore"
import { db } from "./firebase"

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

export interface NewsletterSubscriber {
  id: string
  email: string
  subscribedAt: Date
  active: boolean
}

// Re-export from mock database
// This is a temporary solution while Firebase rules are being debugged
export * from "./mock-db"
export async function createUser(userData: Omit<User, "id" | "createdAt">): Promise<User> {
  const user: User = {
    ...userData,
    id: `user_${Date.now()}`,
    createdAt: new Date(),
  }

  try {
    const usersRef = collection(db, "users")
    await setDoc(doc(usersRef, user.id), user)
    return user
  } catch (error) {
    console.error("Error creating user:", error)
    throw error
  }
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  try {
    const usersRef = collection(db, "users")
    const q = query(usersRef, where("email", "==", email))
    const snapshot = await getDocs(q)

    if (snapshot.empty) {
      return undefined
    }

    return snapshot.docs[0].data() as User
  } catch (error) {
    console.error("Error getting user by email:", error)
    return undefined
  }
}

export async function getUserById(id: string): Promise<User | undefined> {
  try {
    const userRef = doc(db, "users", id)
    const snapshot = await getDoc(userRef)

    if (!snapshot.exists()) {
      return undefined
    }

    return snapshot.data() as User
  } catch (error) {
    console.error("Error getting user by ID:", error)
    return undefined
  }
}

export async function updateUser(id: string, updates: Partial<User>): Promise<User | undefined> {
  try {
    const userRef = doc(db, "users", id)
    await updateDoc(userRef, updates)
    const updated = await getDoc(userRef)
    return updated.data() as User
  } catch (error) {
    console.error("Error updating user:", error)
    return undefined
  }
}

// Order functions - Firebase Firestore
export async function createOrder(
  userId: string,
  items: OrderItem[],
  total: number,
  shippingAddress: Order["shippingAddress"],
  paymentMethod: Order["paymentMethod"],
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

  try {
    const ordersRef = collection(db, "orders")
    await setDoc(doc(ordersRef, order.id), {
      ...order,
      createdAt: order.createdAt.toISOString(),
      updatedAt: order.updatedAt.toISOString(),
    })
    return order
  } catch (error) {
    console.error("Error creating order:", error)
    throw error
  }
}

export async function getOrderById(id: string): Promise<Order | undefined> {
  try {
    const orderRef = doc(db, "orders", id)
    const snapshot = await getDoc(orderRef)

    if (!snapshot.exists()) {
      return undefined
    }

    const data = snapshot.data()
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
    } as Order
  } catch (error) {
    console.error("Error getting order:", error)
    return undefined
  }
}

export async function getOrdersByUserId(userId: string): Promise<Order[]> {
  try {
    const ordersRef = collection(db, "orders")
    const q = query(ordersRef, where("userId", "==", userId))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
      } as Order
    })
  } catch (error) {
    console.error("Error getting orders by user:", error)
    return []
  }
}

export async function updateOrder(id: string, updates: Partial<Order>): Promise<Order | undefined> {
  try {
    const orderRef = doc(db, "orders", id)
    const updateData = {
      ...updates,
      updatedAt: new Date().toISOString(),
    }
    await updateDoc(orderRef, updateData)
    const updated = await getDoc(orderRef)
    const data = updated.data()
    return {
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
    } as Order
  } catch (error) {
    console.error("Error updating order:", error)
    return undefined
  }
}

export async function getAllOrders(): Promise<Order[]> {
  try {
    const ordersRef = collection(db, "orders")
    const snapshot = await getDocs(ordersRef)

    return snapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        createdAt: new Date(data.createdAt),
        updatedAt: new Date(data.updatedAt),
      } as Order
    })
  } catch (error) {
    console.error("Error getting all orders:", error)
    return []
  }
}

// Payment functions - Firebase Firestore
export async function createPayment(
  orderId: string,
  userId: string,
  amount: number,
  method: Payment["method"],
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

  try {
    const paymentsRef = collection(db, "payments")
    // Remove undefined fields before saving to Firestore
    const paymentData: any = { ...payment }
    if (transactionId === undefined) {
      delete paymentData.transactionId
    }
    paymentData.createdAt = payment.createdAt.toISOString()
    
    await setDoc(doc(paymentsRef, payment.id), paymentData)
    return payment
  } catch (error) {
    console.error("Error creating payment:", error)
    throw error
  }
}

export async function getPaymentById(id: string): Promise<Payment | undefined> {
  try {
    const paymentRef = doc(db, "payments", id)
    const snapshot = await getDoc(paymentRef)

    if (!snapshot.exists()) {
      return undefined
    }

    const data = snapshot.data()
    return {
      ...data,
      createdAt: new Date(data.createdAt),
    } as Payment
  } catch (error) {
    console.error("Error getting payment:", error)
    return undefined
  }
}

export async function getPaymentsByOrderId(orderId: string): Promise<Payment[]> {
  try {
    const paymentsRef = collection(db, "payments")
    const q = query(paymentsRef, where("orderId", "==", orderId))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        createdAt: new Date(data.createdAt),
      } as Payment
    })
  } catch (error) {
    console.error("Error getting payments:", error)
    return []
  }
}

export async function updatePayment(id: string, updates: Partial<Payment>): Promise<Payment | undefined> {
  try {
    const paymentRef = doc(db, "payments", id)
    await updateDoc(paymentRef, updates)
    const updated = await getDoc(paymentRef)
    const data = updated.data()
    return {
      ...data,
      createdAt: new Date(data.createdAt),
    } as Payment
  } catch (error) {
    console.error("Error updating payment:", error)
    return undefined
  }
}

// Review functions - Firebase Firestore
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

  try {
    const reviewsRef = collection(db, "reviews")
    await setDoc(doc(reviewsRef, review.id), {
      ...review,
      createdAt: review.createdAt.toISOString(),
    })
    return review
  } catch (error) {
    console.error("Error creating review:", error)
    throw error
  }
}

export async function getReviewsByProductId(productId: string): Promise<Review[]> {
  try {
    const reviewsRef = collection(db, "reviews")
    const q = query(reviewsRef, where("productId", "==", productId))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        createdAt: new Date(data.createdAt),
      } as Review
    })
  } catch (error) {
    console.error("Error getting reviews:", error)
    return []
  }
}

export async function getAllReviews(): Promise<Review[]> {
  try {
    const reviewsRef = collection(db, "reviews")
    const snapshot = await getDocs(reviewsRef)

    return snapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        createdAt: new Date(data.createdAt),
      } as Review
    })
  } catch (error) {
    console.error("Error getting all reviews:", error)
    return []
  }
}

// Authentication helper
export async function authenticateUser(email: string, password: string): Promise<User | null> {
  try {
    const user = await getUserByEmail(email)
    if (!user) return null

    // In production, use proper password hashing (bcrypt)
    if (user.password === password) {
      return user
    }

    return null
  } catch (error) {
    console.error("Error authenticating user:", error)
    return null
  }
}
// Newsletter Subscription functions
export async function subscribeToNewsletter(email: string): Promise<NewsletterSubscriber> {
  try {
    const id = `subscriber_${Date.now()}`
    const subscriber: NewsletterSubscriber = {
      id,
      email,
      subscribedAt: new Date(),
      active: true,
    }

    const docRef = doc(db, "newsletter", id)
    await setDoc(docRef, {
      ...subscriber,
      subscribedAt: subscriber.subscribedAt.toISOString(),
    })

    return subscriber
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    throw error
  }
}

export async function getNewsletterSubscriber(email: string): Promise<NewsletterSubscriber | undefined> {
  try {
    const q = query(collection(db, "newsletter"), where("email", "==", email))
    const snapshot = await getDocs(q)

    if (snapshot.empty) return undefined

    const doc = snapshot.docs[0]
    const data = doc.data()
    return {
      ...data,
      subscribedAt: new Date(data.subscribedAt),
    } as NewsletterSubscriber
  } catch (error) {
    console.error("Error getting newsletter subscriber:", error)
    return undefined
  }
}

export async function unsubscribeFromNewsletter(email: string): Promise<boolean> {
  try {
    const q = query(collection(db, "newsletter"), where("email", "==", email))
    const snapshot = await getDocs(q)

    if (snapshot.empty) return false

    const docId = snapshot.docs[0].id
    const docRef = doc(db, "newsletter", docId)
    await updateDoc(docRef, { active: false })

    return true
  } catch (error) {
    console.error("Error unsubscribing from newsletter:", error)
    return false
  }
}

export async function getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  try {
    const q = query(collection(db, "newsletter"), where("active", "==", true))
    const snapshot = await getDocs(q)

    return snapshot.docs.map((doc) => {
      const data = doc.data()
      return {
        ...data,
        subscribedAt: new Date(data.subscribedAt),
      } as NewsletterSubscriber
    })
  } catch (error) {
    console.error("Error getting all newsletter subscribers:", error)
    return []
  }
}
