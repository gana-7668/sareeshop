
'use client';
import ProductCard from "@/components/product-card";
import { products, categories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ListFilter, LayoutGrid, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');

  const category = searchParams.get('category');

  useEffect(() => {
    let currentProducts = products;
    if (category) {
      currentProducts = products.filter(p => p.category === category);
    }
    
    if (searchTerm) {
        currentProducts = currentProducts.filter(p => 
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.fabric.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    setFilteredProducts(currentProducts);
  }, [category, searchTerm]);

  const handleCategoryFilter = (categoryName: string) => {
    const params = new URLSearchParams(searchParams);
    if (categoryName === 'All') {
        params.delete('category');
    } else {
        params.set('category', categoryName);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">{ category ? `${category} Sarees` : 'Our Saree Collection' }</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Browse through our handpicked collection of exquisite sarees, perfect for every taste and occasion.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="w-full md:w-auto flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
                placeholder="Search by name, color, fabric..." 
                className="pl-10 w-full md:w-80" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <ListFilter className="h-4 w-4" />
                Filter & Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuItem>Popularity</DropdownMenuItem>
              <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
              <DropdownMenuItem>Newest</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Category</DropdownMenuLabel>
              {categories.map(cat => (
                <DropdownMenuItem key={cat.name} onClick={() => handleCategoryFilter(cat.name)}>
                    {cat.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon" className="hidden md:inline-flex">
            <LayoutGrid className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
          <div className="text-center col-span-full py-16">
              <p className="text-xl text-muted-foreground">No sarees found matching your criteria.</p>
          </div>
      )}

      {filteredProducts.length > 0 && (
        <div className="mt-12 flex justify-center">
            <Button variant="outline">Load More</Button>
        </div>
      )}
    </div>
  );
}
