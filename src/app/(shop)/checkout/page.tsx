
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Wallet, Landmark } from "lucide-react";

// Placeholder for payment gateway icons - in a real app, you'd use actual image assets
const PayPalIcon = () => (
  <svg className="h-6 w-auto" viewBox="0 0 78 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38.306 4.417h25.04c3.486 0 6.314 2.828 6.314 6.314v26.54c0 3.485-2.828 6.313-6.314 6.313h-25.04c-3.486 0-6.314-2.828-6.314-6.313v-26.54c0-3.486 2.828-6.314 6.314-6.314z" fill="#003087"/>
    <path d="M47.41 4.417h-9.104c-3.486 0-6.314 2.828-6.314 6.314v26.54c0 3.485 2.828 6.313 6.314 6.313h9.104c3.486 0 6.314-2.828 6.314-6.313v-26.54c0-3.486-2.828-6.314-6.314-6.314z" fill="#009CDE"/>
    <path d="M38.306 4.417h16.293c3.486 0 6.314 2.828 6.314 6.314v26.54c0 3.485-2.828 6.313-6.314 6.313h-16.293c-3.486 0-6.314-2.828-6.314-6.313v-26.54c0-3.486 2.828-6.314 6.314-6.314z" fill="#012169"/>
    <path d="M21.108 24.32c.16-.968.6-3.815 3.32-3.815 2.924 0 4.29 2.052 4.09 3.815-.19 1.76-1.543 2.76-3.232 2.76h-2.02l-.636 4.09c-.1.64.214 1.05.86 1.05.518 0 .866-.196.963-.4l.32-2.14h3.69c.16-.968.6-3.815 3.32-3.815 2.925 0 4.29 2.052 4.09 3.815-.19 1.76-1.543 2.76-3.232 2.76h-2.02l-.636 4.09c-.1.64.213 1.05.86 1.05.517 0 .866-.196.963-.4l.32-2.14h3.69c.16-.968.6-3.815 3.32-3.815 2.925 0 4.29 2.052 4.09 3.815-.19 1.76-1.543 2.76-3.232 2.76h-2.02l-.636 4.09c-.1.64.213 1.05.86 1.05.517 0 .866-.196.963-.4l.32-2.14H50v-1.12l-5.69-1.02c-.8-.146-.923-.74-.8-1.5.152-.968.6-3.815 3.32-3.815 2.925 0 4.29 2.052 4.09 3.815-.19 1.76-1.543 2.76-3.232 2.76h-2.02l-.636 4.09c-.1.64.213 1.05.86 1.05.517 0 .866-.196.963-.4l.32-2.14h3.69c.16-.968.6-3.815 3.32-3.815 2.925 0 4.29 2.052 4.09 3.815-.19 1.76-1.543 2.76-3.232 2.76h-2.02l-.636 4.09c-.1.64.213 1.05.86 1.05.517 0 .866-.196.963-.4l.32-2.14H70v-1.12L18.428 12.015c-.8-.146-.923-.74-.8-1.5.213-1.343.86-5.342 4.647-5.342 3.788 0 5.258 2.873 5.045 4.545-.213 1.672-1.895 2.5-3.788 2.5h-2.3l-.9 5.65z" fill="#FFF"/>
  </svg>
);
const RazorpayIcon = () => <span className="text-2xl font-bold text-[#02042B]">Razorpay</span>;
const PaytmIcon = () => <span className="text-2xl font-bold text-[#00B9F1]">Paytm</span>;

export default function CheckoutPage() {
    const { cartItems } = useCart();
    const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 50 : 0;
    const total = subtotal + shipping;

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <h1 className="font-headline text-4xl font-bold text-center mb-8">Checkout</h1>
            {cartItems.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <Card>
                            <CardHeader><CardTitle className="font-headline">Shipping Information</CardTitle></CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4">
                                <div className="col-span-1 space-y-2">
                                    <Label htmlFor="first-name">First Name</Label>
                                    <Input id="first-name" placeholder="John" />
                                </div>
                                <div className="col-span-1 space-y-2">
                                    <Label htmlFor="last-name">Last Name</Label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" placeholder="123 Saree Street" />
                                </div>
                                <div className="col-span-2 space-y-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input id="city" placeholder="Mumbai" />
                                </div>
                                <div className="col-span-1 space-y-2">
                                    <Label htmlFor="state">State</Label>
                                    <Input id="state" placeholder="Maharashtra" />
                                </div>
                                <div className="col-span-1 space-y-2">
                                    <Label htmlFor="zip">ZIP Code</Label>
                                    <Input id="zip" placeholder="400001" />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline">Payment Options</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <RadioGroup defaultValue="card" className="space-y-4">
                                    <Label
                                        htmlFor="card"
                                        className="flex items-start gap-4 rounded-md border p-4 hover:bg-accent has-[[data-state=checked]]:border-primary"
                                    >
                                        <RadioGroupItem value="card" id="card" className="mt-0.5" />
                                        <div className="flex-1">
                                            <div className="font-semibold flex items-center gap-2">
                                                <CreditCard className="h-5 w-5" />
                                                Credit/Debit Card
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Pay with your Visa, MasterCard, or RuPay card.
                                            </p>
                                            <div className="mt-4 space-y-2">
                                                <div className="space-y-1">
                                                    <Label htmlFor="card-number" className="text-xs">Card Number</Label>
                                                    <Input id="card-number" placeholder="**** **** **** 1234" />
                                                </div>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="space-y-1">
                                                        <Label htmlFor="expiry" className="text-xs">Expiry</Label>
                                                        <Input id="expiry" placeholder="MM/YY" />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <Label htmlFor="cvc" className="text-xs">CVC</Label>
                                                        <Input id="cvc" placeholder="123" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Label>
                                    <Label
                                        htmlFor="upi"
                                        className="flex items-start gap-4 rounded-md border p-4 hover:bg-accent has-[[data-state=checked]]:border-primary"
                                    >
                                        <RadioGroupItem value="upi" id="upi" className="mt-0.5" />
                                        <div className="flex-1">
                                            <div className="font-semibold flex items-center gap-2">
                                                <Wallet className="h-5 w-5" />
                                                UPI & Wallets
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Pay via UPI apps or popular wallets.
                                            </p>
                                        </div>
                                    </Label>
                                    <Label
                                        htmlFor="netbanking"
                                        className="flex items-start gap-4 rounded-md border p-4 hover:bg-accent has-[[data-state=checked]]:border-primary"
                                    >
                                        <RadioGroupItem value="netbanking" id="netbanking" className="mt-0.5" />
                                        <div className="flex-1">
                                            <div className="font-semibold flex items-center gap-2">
                                                <Landmark className="h-5 w-5" />
                                                Net Banking
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Pay from your bank account directly.
                                            </p>
                                        </div>
                                    </Label>
                                     <Label
                                        htmlFor="paypal"
                                        className="flex items-start gap-4 rounded-md border p-4 hover:bg-accent has-[[data-state=checked]]:border-primary"
                                    >
                                        <RadioGroupItem value="paypal" id="paypal" className="mt-0.5" />
                                        <div className="flex-1">
                                            <div className="font-semibold flex items-center gap-2">
                                                <PayPalIcon />
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Pay with PayPal (for international orders).
                                            </p>
                                        </div>
                                    </Label>
                                </RadioGroup>
                                <Separator className="my-6" />
                                <div className="flex items-center justify-center gap-4">
                                  <p className="text-sm text-muted-foreground">Secure Payments by</p>
                                  <RazorpayIcon />
                                  <PaytmIcon />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="h-fit sticky top-28">
                        <Card>
                            <CardHeader><CardTitle className="font-headline">Order Summary</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item.product.id} className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-16 h-20 rounded-md overflow-hidden">
                                                <Image src={item.product.image} alt={item.product.name} fill className="object-cover" data-ai-hint={item.product.imageHint} />
                                            </div>
                                            <div>
                                                <span className="font-semibold">{item.product.name}</span>
                                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <span>₹{(item.product.price * item.quantity).toLocaleString()}</span>
                                    </div>
                                ))}
                                <Separator />
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span>₹{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Shipping</span>
                                    <span>₹{shipping.toLocaleString()}</span>
                                </div>
                                <Separator />
                                <div className="flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span>₹{total.toLocaleString()}</span>
                                </div>
                            </CardContent>
                            <CardFooter>
                                 <Button className="w-full" size="lg">Place Order</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl text-muted-foreground mb-4">Your cart is empty.</p>
                    <Button asChild>
                        <Link href="/cart">Return to Cart</Link>
                    </Button>
                </div>
            )}
        </div>
    );

    