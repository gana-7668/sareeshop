import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-[3/4] relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.imageHint}
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="font-headline text-lg font-semibold truncate">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-sm text-muted-foreground mt-1 h-10 overflow-hidden">{product.description}</p>
        <div className="flex items-center mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'text-accent fill-accent' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-2">({product.reviewCount} reviews)</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</p>
        <Button size="sm">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
