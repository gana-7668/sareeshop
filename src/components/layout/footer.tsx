
import Link from 'next/link';
import { Gem, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Gem className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">
                Saree Shop
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Exquisite sarees for every occasion, celebrating tradition with a modern touch.
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm hover:text-primary">All Sarees</Link></li>
              <li><Link href="/products?category=Silk" className="text-sm hover:text-primary">Silk Sarees</Link></li>
              <li><Link href="/products?category=Banarasi" className="text-sm hover:text-primary">Banarasi Sarees</Link></li>
              <li><Link href="/products?category=Cotton" className="text-sm hover:text-primary">Cotton Sarees</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary">Our Story</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm hover:text-primary">Shipping & Returns</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Saree Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
