// API client for frontend to communicate with backend

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"

interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

class ApiClient {
  private getHeaders(): HeadersInit {
    return {
      "Content-Type": "application/json",
    }
  }

  async fetch<T>(path: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${API_BASE}${path}`

    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options.headers,
      },
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || "API error")
    }

    return data
  }

  // Auth endpoints
  async register(email: string, name: string) {
    return this.fetch<{
      user: { id: string; email: string; name: string }
    }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, name }),
    })
  }

  async login(email: string) {
    return this.fetch<{
      user: any
    }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email }),
    })
  }

  // Order endpoints
  async createOrder(userId: string, items: any[], total: number, shippingAddress: any, paymentMethod: string) {
    return this.fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({ userId, items, total, shippingAddress, paymentMethod }),
    })
  }

  async getOrders(userId: string) {
    return this.fetch(`/api/orders?userId=${userId}`)
  }

  async getOrder(orderId: string) {
    return this.fetch(`/api/orders/${orderId}`)
  }

  // Payment endpoints
  async processPayment(userId: string, orderId: string, amount: number, method: string, transactionId?: string) {
    return this.fetch("/api/payments", {
      method: "POST",
      body: JSON.stringify({ userId, orderId, amount, method, transactionId }),
    })
  }

  async getPayments(orderId: string) {
    return this.fetch(`/api/payments?orderId=${orderId}`)
  }

  // Review endpoints
  async createReview(userId: string, productId: string, rating: number, comment: string) {
    return this.fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({ userId, productId, rating, comment }),
    })
  }

  async getReviews(productId: string) {
    return this.fetch(`/api/reviews?productId=${productId}`)
  }
}

export const apiClient = new ApiClient()
