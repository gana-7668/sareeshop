import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function CheckoutPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <h1 className="font-headline text-4xl font-bold text-center mb-8">Checkout</h1>
            <div className="grid md:grid-cols-2 gap-12">
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
                            {/* Dummy summary */}
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Elegant Maroon Silk Saree x 1</span>
                                <span>₹4,999</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Royal Blue Banarasi Saree x 1</span>
                                <span>₹7,500</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>₹12,499</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>₹50</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>₹12,549</span>
                            </div>
                        </CardContent>
                        <CardContent>
                             <Button className="w-full" size="lg">Place Order</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
