import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="border-b bg-muted/40">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">Find answers to common questions about our products and services</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">What is your shipping policy?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer free shipping on all orders over $50. For orders under $50, standard shipping is $5.99.
                  Orders are typically processed within 1-2 business days and delivered within 3-7 business days
                  depending on your location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Do you ship internationally?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We ship to most countries worldwide. International shipping times vary by destination, typically
                  7-14 business days. Additional customs fees may apply depending on your country's regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">What is your return policy?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept returns within 30 days of purchase for unused items in original condition. Simply contact
                  our customer service team to initiate a return. Refunds will be processed to your original payment
                  method within 5-7 business days of receiving the return.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">How can I track my order?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Once your order ships, you'll receive a tracking number via email. You can also track your order by
                  logging into your account and viewing your order history. If you have any issues tracking your order,
                  please contact our support team.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Are your products eco-friendly?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We're committed to sustainability. Many of our products are made from recycled materials or
                  sustainable sources like bamboo. We're constantly working to expand our eco-friendly product line and
                  reduce our environmental impact.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Do you offer bulk discounts?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We offer special pricing for bulk orders. Please contact our sales team at
                  sales@lexonstationery.com with details about your order, and we'll provide you with a custom quote.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and Apple
                  Pay. All transactions are secured with SSL encryption for your safety.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">Can I cancel or modify my order?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You can cancel or modify your order within 24 hours of placing it by contacting our customer service
                  team. Once an order has been shipped, it cannot be modified, but you can return items after delivery
                  according to our return policy.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
