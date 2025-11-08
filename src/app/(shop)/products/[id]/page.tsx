import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, Info, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/product-card";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const relatedProducts = products.filter(p => p.id !== params.id && p.category === product?.category).slice(0, 4);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            data-ai-hint={product.imageHint}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name}</h1>
          <div className="flex items-center mt-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-accent fill-accent' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-3">({product.reviewCount} reviews)</span>
          </div>
          <p className="text-3xl font-bold text-primary mt-4">₹{product.price.toLocaleString()}</p>
          <Separator className="my-6" />
          <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              <Heart className="mr-2 h-5 w-5" /> Add to Favorites
            </Button>
          </div>
          <div className="mt-8 space-y-4 text-sm bg-primary/5 p-4 rounded-lg">
            <p><Info className="inline-block mr-2 h-4 w-4 text-primary" /> <span className="font-semibold">Category:</span> <span className="text-primary">{product.category}</span>, <span className="font-semibold">Fabric:</span> {product.fabric}, <span className="font-semibold">Color:</span> {product.color}</p>
            <p><Sparkles className="inline-block mr-2 h-4 w-4 text-primary" /> <span className="font-semibold">Best for:</span> {product.occasion}</p>
            <p><Info className="inline-block mr-2 h-4 w-4 text-primary" /> <span className="font-semibold">Care:</span> {product.careInstructions}</p>
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <h2 className="font-headline text-3xl font-bold text-center mb-8">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </div>
    </div>
  );
}
