import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ShoppingBag, Heart, User, LogOut } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-[1fr_3fr] gap-12">
        <aside>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="https://picsum.photos/seed/avatar/200" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="font-headline text-2xl font-semibold">Jane Doe</h2>
              <p className="text-muted-foreground text-sm">jane.doe@example.com</p>
              <Button variant="outline" size="sm" className="mt-4">Edit Profile</Button>
            </CardContent>
            <Separator />
            <nav className="p-4">
              <Link href="/account" className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all hover:text-primary">
                <User className="h-4 w-4" />
                Profile
              </Link>
              <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <ShoppingBag className="h-4 w-4" />
                Orders
              </Link>
              <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <Heart className="h-4 w-4" />
                Favorites
              </Link>
              <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                <LogOut className="h-4 w-4" />
                Logout
              </Link>
            </nav>
          </Card>
        </aside>

        <main>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">You have no recent orders.</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
