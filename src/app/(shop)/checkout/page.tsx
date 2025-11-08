
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import Link from "next/link";

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
                            <CardHeader><CardTitle className="font-headline">Payment Method</CardTitle></CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="card-number">Card Number</Label>
                                    <Input id="card-number" placeholder="**** **** **** 1234" />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="expiry">Expiry</Label>
                                        <Input id="expiry" placeholder="MM/YY" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cvc">CVC</Label>
                                        <Input id="cvc" placeholder="123" />
                                    </div>
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
}
