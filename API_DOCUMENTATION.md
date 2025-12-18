# E-Commerce Backend API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication
All authenticated endpoints require a JWT token in the `Authorization` header:
```
Authorization: Bearer <token>
```

---

## Authentication Endpoints

### 1. Register User
**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "Password123",
  "name": "John Doe",
  "phone": "1234567890",
  "address": "123 Main St",
  "city": "New York",
  "zipCode": "10001"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user_1234567890",
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Password Requirements:**
- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 lowercase letter
- At least 1 number

---

### 2. Login User
**POST** `/auth/login`

Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "Password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "user": {
    "id": "user_1234567890",
    "email": "user@example.com",
    "name": "John Doe",
    "phone": "1234567890",
    "address": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

## User Profile Endpoints

### 3. Get User Profile
**GET** `/users/profile`

Retrieve authenticated user's profile information.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "user": {
    "id": "user_1234567890",
    "email": "user@example.com",
    "name": "John Doe",
    "phone": "1234567890",
    "address": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  }
}
```

### 4. Update User Profile
**PATCH** `/users/profile`

Update user's profile information.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "Jane Doe",
  "phone": "9876543210",
  "address": "456 Oak Ave",
  "city": "Los Angeles",
  "zipCode": "90001"
}
```

**Response (200):**
```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": "user_1234567890",
    "email": "user@example.com",
    "name": "Jane Doe",
    "phone": "9876543210",
    "address": "456 Oak Ave",
    "city": "Los Angeles",
    "zipCode": "90001"
  }
}
```

---

## Order Endpoints

### 5. Create Order
**POST** `/orders`

Create a new order from cart items.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "items": [
    {
      "productId": "1",
      "productName": "LBS Keychain",
      "quantity": 2,
      "price": 80,
      "image": "/images/keychain.jpg"
    }
  ],
  "total": 160,
  "paymentMethod": "card",
  "shippingAddress": {
    "name": "John Doe",
    "phone": "1234567890",
    "address": "123 Main St",
    "city": "New York",
    "zipCode": "10001"
  }
}
```

**Response (201):**
```json
{
  "message": "Order created successfully",
  "order": {
    "id": "order_1234567890",
    "items": [...],
    "total": 160,
    "status": "pending",
    "paymentStatus": "pending",
    "createdAt": "2025-12-19T10:00:00Z"
  }
}
```

### 6. Get User Orders
**GET** `/orders`

Retrieve all orders for authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "orders": [
    {
      "id": "order_1234567890",
      "items": [...],
      "total": 160,
      "status": "processing",
      "paymentStatus": "completed",
      "createdAt": "2025-12-19T10:00:00Z",
      "updatedAt": "2025-12-19T10:15:00Z"
    }
  ]
}
```

### 7. Get Order Details
**GET** `/orders/:id`

Retrieve specific order details.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "order": {
    "id": "order_1234567890",
    "userId": "user_1234567890",
    "items": [...],
    "total": 160,
    "status": "processing",
    "paymentStatus": "completed",
    "shippingAddress": {...},
    "createdAt": "2025-12-19T10:00:00Z",
    "updatedAt": "2025-12-19T10:15:00Z"
  }
}
```

### 8. Update Order
**PATCH** `/orders/:id`

Update order status (admin or order owner).

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "status": "shipped",
  "paymentStatus": "completed"
}
```

**Status Options:** `pending`, `processing`, `shipped`, `delivered`, `cancelled`

**Response (200):**
```json
{
  "message": "Order updated successfully",
  "order": {...}
}
```

---

## Payment Endpoints

### 9. Process Payment
**POST** `/payments`

Process payment for an order.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "orderId": "order_1234567890",
  "amount": 160,
  "method": "card",
  "transactionId": "txn_abc123"
}
```

**Payment Methods:** `card`, `bank`, `cod` (Cash on Delivery)

**Response (201):**
```json
{
  "message": "Payment processed",
  "payment": {
    "id": "payment_1234567890",
    "orderId": "order_1234567890",
    "amount": 160,
    "method": "card",
    "status": "completed",
    "transactionId": "txn_abc123"
  },
  "orderStatus": "processing"
}
```

### 10. Get Payment History
**GET** `/payments?orderId=order_id`

Retrieve payment records for an order.

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `orderId` (required): Order ID

**Response (200):**
```json
{
  "payments": [
    {
      "id": "payment_1234567890",
      "orderId": "order_1234567890",
      "amount": 160,
      "method": "card",
      "status": "completed",
      "createdAt": "2025-12-19T10:05:00Z"
    }
  ]
}
```

---

## Review Endpoints

### 11. Create Product Review
**POST** `/reviews`

Add a review to a product.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "productId": "1",
  "rating": 5,
  "comment": "Amazing product! Very satisfied with the quality."
}
```

**Rating:** 1-5 stars
**Comment:** Minimum 10 characters

**Response (201):**
```json
{
  "message": "Review created successfully",
  "review": {
    "id": "review_1234567890",
    "productId": "1",
    "rating": 5,
    "comment": "Amazing product! Very satisfied with the quality.",
    "createdAt": "2025-12-19T10:30:00Z"
  }
}
```

### 12. Get Product Reviews
**GET** `/reviews?productId=product_id`

Retrieve all reviews for a product.

**Query Parameters:**
- `productId` (required): Product ID

**Response (200):**
```json
{
  "reviews": [
    {
      "id": "review_1234567890",
      "rating": 5,
      "comment": "Amazing product!",
      "createdAt": "2025-12-19T10:30:00Z"
    }
  ],
  "average": 4.8,
  "count": 15
}
```

---

## Admin Endpoints

### 13. Get All Orders (Admin)
**GET** `/admin/orders`

Retrieve all orders in the system (admin only).

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "orders": [
    {
      "id": "order_1234567890",
      "userId": "user_1234567890",
      "items": [...],
      "total": 160,
      "status": "processing",
      "paymentStatus": "completed",
      "createdAt": "2025-12-19T10:00:00Z",
      "updatedAt": "2025-12-19T10:15:00Z"
    }
  ],
  "total": 1
}
```

### 14. Get All Products (Admin)
**GET** `/admin/products`

Retrieve all products (admin only).

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "products": [...],
  "total": 45
}
```

### 15. Create Product (Admin)
**POST** `/admin/products`

Add a new product to the catalog.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "Premium Notebook",
  "description": "High-quality notebook for professionals",
  "price": 350,
  "category": "Stationery",
  "categorySlug": "stationery",
  "images": ["/images/notebook.jpg"],
  "inStock": true,
  "features": ["A4 size", "100 pages", "Hardcover"]
}
```

**Response (201):**
```json
{
  "message": "Product created successfully",
  "product": {
    "id": "product_1234567890",
    "name": "Premium Notebook",
    ...
  }
}
```

### 16. Update Product (Admin)
**PATCH** `/admin/products/:id`

Update product details.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "price": 400,
  "inStock": true,
  "description": "Updated description"
}
```

**Response (200):**
```json
{
  "message": "Product updated successfully",
  "product": {...}
}
```

### 17. Delete Product (Admin)
**DELETE** `/admin/products/:id`

Remove a product from catalog.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "message": "Product deleted successfully"
}
```

---

## Error Responses

All endpoints return error responses in this format:

```json
{
  "error": "Error description"
}
```

### Common Error Codes

- **400** - Bad Request (missing/invalid fields)
- **401** - Unauthorized (missing/invalid token)
- **403** - Forbidden (insufficient permissions)
- **404** - Not Found (resource doesn't exist)
- **409** - Conflict (duplicate email, etc.)
- **500** - Internal Server Error

---

## Usage Example (Frontend)

```typescript
import { apiClient } from "@/lib/api-client"

// Register
const registerResponse = await apiClient.register(
  "user@example.com",
  "Password123",
  "John Doe",
)

// Login
const loginResponse = await apiClient.login("user@example.com", "Password123")

// Create Order
const orderResponse = await apiClient.createOrder(
  items,
  total,
  shippingAddress,
  "card",
)

// Process Payment
const paymentResponse = await apiClient.processPayment(
  orderResponse.order.id,
  total,
  "card",
)

// Get Orders
const ordersResponse = await apiClient.getOrders()

// Create Review
const reviewResponse = await apiClient.createReview(productId, 5, "Great product!")
```

---

## Implementation Notes

1. **Token Storage**: Client automatically stores JWT token in `localStorage` after login/register
2. **Authentication**: Include token in all authenticated requests
3. **Password Security**: Passwords are validated but should be hashed in production (use bcrypt)
4. **Database**: Currently uses in-memory storage. For production, integrate with MongoDB, PostgreSQL, etc.
5. **Payment**: Simulated payment processing. Integrate Stripe, PayPal, or other payment gateways
6. **Admin Access**: Currently all authenticated users can access admin endpoints. Add proper role-based access control
