'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, Gem } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { categories } from '@/lib/data';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Gem className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold text-primary">
            Saree Shop
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {categories.slice(1, 5).map((category) => (
             <Link
                key={category.name}
                href={category.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {category.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Input type="search" placeholder="Search sarees..." className="w-48 lg:w-64" />
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                  <Gem className="h-8 w-8 text-primary" />
                  <span className="font-headline text-2xl font-bold text-primary">
                    Saree Shop
                  </span>
                </Link>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Input type="search" placeholder="Search sarees..." />
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 mt-4">
                  {categories.map((category) => (
                     <Link
                        key={category.name}
                        href={category.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
