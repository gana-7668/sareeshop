'use client';

import { products } from '@/lib/data';
import ProductCard from './product-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function AiRecommendations() {
  const recommendedProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 5); // Shuffle and take 5 for demo

  return (
    <div className="w-full">
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Based on your preferences and browsing history, we think you'll love these.
      </p>
       <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {recommendedProducts.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
