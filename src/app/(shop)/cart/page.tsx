
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="font-headline text-4xl font-bold text-center mb-8">Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          <div className="space-y-6">
            {cartItems.map(item => (
              <Card key={item.product.id} className="flex items-center p-4">
                <div className="relative w-24 h-32 rounded-md overflow-hidden">
                  <Image src={item.product.image} alt={item.product.name} fill className="object-cover" data-ai-hint={item.product.imageHint} />
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.product.category}</p>
                  <p className="font-bold text-primary mt-2">₹{item.product.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}><Minus className="h-4 w-4" /></Button>
                  <span>{item.quantity}</span>
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}><Plus className="h-4 w-4" /></Button>
                </div>
                <Button variant="ghost" size="icon" className="ml-4" onClick={() => removeFromCart(item.product.id)}>
                  <X className="h-5 w-5" />
                </Button>
              </Card>
            ))}
          </div>
          <Card className="p-6 h-fit sticky top-28">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" size="lg">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground mb-4">Your cart is empty.</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
