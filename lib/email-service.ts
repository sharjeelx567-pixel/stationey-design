// Email service using SMTP
import nodemailer from "nodemailer"

// Create transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "shahidx345@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD || "uaqk fwkw ytxc atou",
  },
})

export async function sendOrderConfirmationEmail(userEmail: string, order: any) {
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
Lexon Stationery
    `.trim()

  const adminEmailContent = `
================================================================================
NEW ORDER NOTIFICATION - LEXON STATIONERY
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
- Contact: shahidx345@gmail.com | 03424832105

================================================================================
This is an automated order notification. Please do not reply to this email.
================================================================================
    `.trim()

  try {
    // Send email to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER || "shahidx345@gmail.com",
      to: userEmail,
      subject: `Order Confirmation - ${order.id}`,
      text: customerEmailContent,
      html: formatEmailAsHTML(customerEmailContent),
    })

    // Send email to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER || "shahidx345@gmail.com",
      to: process.env.GMAIL_USER || "shahidx345@gmail.com",
      subject: `New Order - ${order.id}`,
      text: adminEmailContent,
      html: formatEmailAsHTML(adminEmailContent),
    })

    return { success: true, message: "Emails sent successfully" }
  } catch (error) {
    console.error("Email sending error:", error)
    return { success: false, message: "Failed to send emails", error: String(error) }
  }
}

export async function sendNewsletterEmail(email: string) {
  const content = `
Thank you for subscribing to our newsletter!

You will now receive:
- Exclusive offers and discounts
- New product announcements
- Tips and guides about stationery
- Special promotions

Best regards,
Lexon Stationery Team
Email: shahidx345@gmail.com
Phone: 03424832105
    `.trim()

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER || "shahidx345@gmail.com",
      to: email,
      subject: "Welcome to Lexon Stationery Newsletter",
      text: content,
      html: formatEmailAsHTML(content),
    })

    return { success: true, message: "Newsletter subscription confirmed" }
  } catch (error) {
    console.error("Newsletter email error:", error)
    return { success: false, message: "Failed to send newsletter email", error: String(error) }
  }
}

function formatEmailAsHTML(text: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; }
        a { color: #ADD8E6; text-decoration: none; }
    </style>
</head>
<body>
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <pre>${text}</pre>
        <hr>
        <p style="font-size: 12px; color: #666;">
            This email was sent from Lexon Stationery. If you did not request this, please contact us.
        </p>
    </div>
</body>
</html>
  `.trim()
}
