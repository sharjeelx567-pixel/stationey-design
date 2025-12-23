# Firebase Firestore Security Rules - CRITICAL

## ⚠️ IMPORTANT: Update Your Firestore Security Rules

Your Firebase project still has the default restrictive security rules. This is why orders can't be saved.

### Step-by-Step Instructions:

1. **Go to Firebase Console:**
   - Open: https://console.firebase.google.com/
   - Select project: `e-commerce-website-d3fdb`

2. **Navigate to Firestore:**
   - Left sidebar → Click **"Firestore Database"**
   - At the top, click the **"Rules"** tab

3. **Replace all rules with this code:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow all read/write operations for development
    // IN PRODUCTION: Implement proper authentication
    match /orders/{document=**} {
      allow read, write: if true;
    }
    match /users/{document=**} {
      allow read, write: if true;
    }
    match /payments/{document=**} {
      allow read, write: if true;
    }
    match /reviews/{document=**} {
      allow read, write: if true;
    }
  }
}
```

4. **Click the "Publish" button** (blue button on the right)

5. **Wait for the confirmation message:**
   - You should see: "Your security rules have been updated"

6. **Restart your app:**
   ```powershell
   cd d:\e-commerce-website-design
   pnpm dev
   ```

---

## What's Wrong:

Current error: `PERMISSION_DENIED: Permission denied on resource project e-commerce-website-d3fdb`

This means Firestore is blocking all write operations because the default rules require authentication and proper permissions setup.

---

## Test After Update:

1. Go to http://localhost:3000/shop
2. Add a product to cart
3. Go to /checkout
4. Fill in the form and click "Complete Order"
5. Check if order was saved in Firestore (should see `orders` collection)

---

## For Production (Later):

Once you go live, use more secure rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public can create orders without auth (guest checkout)
    match /orders/{orderId} {
      allow create: if true;
      allow read: if request.auth.uid == resource.data.userId || resource.data.userId == null;
      allow update: if request.auth.uid == resource.data.userId;
    }
    
    // Users manage their own data
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Payments linked to orders
    match /payments/{paymentId} {
      allow create: if true;
      allow read: if request.auth != null;
    }
    
    // Public reviews
    match /reviews/{reviewId} {
      allow read: if true;
      allow create: if true;
    }
  }
}
```

---

**Have you updated the Firebase rules yet?** If yes, the app should work now! 🚀
