
'use client';

import { products } from '@/lib/data';
import ProductCard from './product-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from 'react';
import type { Product } from '@/lib/types';
import { getSareeRecommendations } from '@/ai/ai-saree-recommendations';
import { Skeleton } from './ui/skeleton';

export default function AiRecommendations() {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      setLoading(true);
      try {
        // In a real application, user profile and trends would be dynamic
        const userProfile = "The user has previously bought silk and cotton sarees. They prefer bright colors like red and blue and traditional motifs. Their budget is moderate to high.";
        const trendingItems = "Kanjivaram sarees with floral patterns are currently trending for weddings.";
        const socialMediaTrends = "Pastel-colored organza sarees are popular among influencers for summer events.";

        const result = await getSareeRecommendations({ userProfile, trendingItems, socialMediaTrends });
        
        let finalProducts: Product[] = [];

        if (result.recommendations.length > 0) {
          const recommendedNames = result.recommendations.map(r => r.toLowerCase());
          const filteredProducts = products
            .filter(p => recommendedNames.some(name => p.name.toLowerCase().includes(name) || name.includes(p.name.toLowerCase())))
            .slice(0, 5); // Take up to 5 matches

          finalProducts = filteredProducts;
        }
        
        // If not enough matches or AI fails, fill with random products
        if (finalProducts.length < 5) {
            const existingIds = new Set(finalProducts.map(p => p.id));
            const randomProducts = [...products]
              .filter(p => !existingIds.has(p.id)) // Exclude already selected
              .sort(() => 0.5 - Math.random())
              .slice(0, 5 - finalProducts.length);
            finalProducts = [...finalProducts, ...randomProducts];
        }
        
        setRecommendedProducts(finalProducts);

      } catch (error) {
        console.error("Failed to fetch AI recommendations:", error);
        // Fallback to random products on error
        const randomProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 5);
        setRecommendedProducts(randomProducts);
      } finally {
        setLoading(false);
      }
    }

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
        <div className="w-full">
             <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our AI is curating a special collection just for you...
            </p>
            <div className="flex justify-center gap-4">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="h-[400px] w-[300px] rounded-lg" />
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                ))}
            </div>
        </div>
    );
  }

  return (
    <div className="w-full">
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Based on your unique style, we think you'll love these.
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
