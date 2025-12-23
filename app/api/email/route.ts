import { NextRequest, NextResponse } from "next/server"
import type { Order } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { order, userEmail } = body

    if (!order) {
      return NextResponse.json({ error: "Order data is required" }, { status: 400 })
    }

    // Email content for admin notification
    const adminEmailContent = `
================================================================================
NEW ORDER NOTIFICATION - LBS STATIONERY
================================================================================

ORDER DETAILS:
--------------
Order ID: ${order.id}
Order Date: ${new Date().toLocaleString()}
Total Amount: Rs. ${order.total.toLocaleString()}
Payment Method: ${order.paymentMethod === "cod" ? "Cash on Delivery" : order.paymentMethod}
Status: ${order.status}

CUSTOMER INFORMATION:
---------------------
Name: ${order.shippingAddress.name}
Phone: ${order.shippingAddress.phone}
Email: ${userEmail || "Not provided"}

SHIPPING ADDRESS:
-----------------
Address: ${order.shippingAddress.address}
City: ${order.shippingAddress.city}
Zip Code: ${order.shippingAddress.zipCode}
Business Location: LBS GCUF

ORDER ITEMS:
------------
${order.items
  .map(
    (item: any) =>
      `  - ${item.productName}
    Quantity: ${item.quantity}
    Unit Price: Rs. ${item.price.toLocaleString()}
    Subtotal: Rs. ${(item.price * item.quantity).toLocaleString()}`,
  )
  .join("\n")}

IMPORTANT NOTES:
----------------
- This is a Cash on Delivery order
- Payment will be collected when items are delivered
- Address: LBS GCUF
- Contact: shahidx345@gmail.com | 03424832105

================================================================================
This is an automated order notification. Please do not reply to this email.
================================================================================
    `.trim()

    // Email content for customer
    const customerEmailContent = `
Dear ${order.shippingAddress.name},

Your order has been successfully placed!

ORDER CONFIRMATION:
===================
Order ID: ${order.id}
Order Date: ${new Date().toLocaleString()}
Total: Rs. ${order.total.toLocaleString()}

SHIPPING ADDRESS:
=================
${order.shippingAddress.address}
${order.shippingAddress.city}
${order.shippingAddress.zipCode}

ORDER ITEMS:
============
${order.items
  .map(
    (item: any) =>
      `- ${item.productName} (Qty: ${item.quantity}) = Rs. ${(item.price * item.quantity).toLocaleString()}`,
  )
  .join("\n")}

PAYMENT METHOD:
===============
Cash on Delivery - You will pay the delivery person upon receipt

WHAT NEXT:
==========
1. Your order has been received
2. We are preparing your items
3. You will receive a call from our delivery team
4. Pay Rs. ${order.total.toLocaleString()} when items are delivered

For any questions, contact us:
Email: shahidx345@gmail.com
Phone: 03424832105

Thank you for your order!
Lexon Stationery (LBS GCUF)
    `.trim()

    // Log emails to console (they would be sent in production)
    console.log("\n========== EMAIL TO ADMIN ==========")
    console.log(adminEmailContent)
    console.log("\n========== EMAIL TO CUSTOMER ==========")
    console.log(customerEmailContent)

    // In production, you would send these using:
    // - Resend API
    // - SendGrid API
    // - AWS SES
    // - Google Cloud Mail
    // - Mailgun
    // - Or any other email service

    // For now, we'll simulate successful email sending
    return NextResponse.json(
      {
        message: "Order confirmation emails queued for sending",
        emailSent: true,
        orderConfirmation: {
          orderId: order.id,
          timestamp: new Date().toISOString(),
          businessAddress: "LBS GCUF",
          adminEmail: "shahidx345@gmail.com",
          customerEmail: userEmail || "Not provided",
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Email processing error:", error)
    return NextResponse.json({ error: "Failed to process email", details: String(error) }, { status: 500 })
  }
}
