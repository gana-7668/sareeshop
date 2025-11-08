import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { products, categories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ProductCard from '@/components/product-card';
import AiRecommendations from '@/components/ai-recommendations';
import { ArrowRight, Gem } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-banner');
  const featuredProducts = products.slice(0, 4);
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-banner');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-top"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
            Draped in Elegance
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow">
            Discover our exquisite collection of sarees, where tradition meets contemporary style.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
            {categories.slice(1).map((category, index) => (
              <Link href={category.href} key={category.name} className="group flex flex-col items-center gap-4 text-center">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-transparent group-hover:border-accent transition-all duration-300">
                  <Image
                    src={products[index].image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    data-ai-hint={products[index].imageHint}
                  />
                </div>
                <h3 className="font-headline text-lg font-semibold group-hover:text-primary">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">
              Featured Sarees
            </h2>
            <Button variant="link" asChild className="text-primary">
              <Link href="/products">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet Section */}
      <section className="bg-primary/5">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Gem className="h-10 w-10 text-primary mb-4" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">The Art of the Saree</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Saree Shop is a celebration of India's rich textile heritage. We travel the country to source the most beautiful, handcrafted sarees, connecting you with the art of our master weavers. Each piece in our collection tells a story of tradition, craftsmanship, and timeless elegance.
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="order-1 md:order-2 aspect-square relative rounded-lg overflow-hidden shadow-lg">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* AI Recommendations Section */}
      <section className="py-16 md:py-24">
         <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
            Just For You
          </h2>
           <AiRecommendations />
         </div>
      </section>
    </div>
  );
}
