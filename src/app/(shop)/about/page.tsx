import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gem, Users, Target } from 'lucide-react';

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-banner');

    return (
        <div>
            <section className="relative h-[40vh] w-full bg-primary/10">
                {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover object-center"
                    priority
                    data-ai-hint={aboutImage.imageHint}
                />
                )}
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold drop-shadow-lg">
                        Our Story
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow">
                        Weaving Threads of Tradition and Style
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Gem className="h-12 w-12 text-primary mx-auto mb-6" />
                        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">From Our Looms to Your Wardrobe</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Saree Shop was born from a passion for India's incredible textile diversity. We believe that a saree is not just a garment, but a piece of art, a slice of history, and a legacy passed down through generations. Our journey began with a simple mission: to bridge the gap between the master weavers in remote villages and the modern woman who appreciates timeless elegance. We travel across the country, from the vibrant markets of Varanasi to the serene villages of Kanchipuram, to handpick sarees that embody exquisite craftsmanship and authentic designs.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                             <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">Our Mission & Values</h3>
                             <div className="space-y-6">
                                <div className="flex gap-4">
                                    <Target className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Preserve Heritage</h4>
                                        <p className="text-muted-foreground">To support and sustain the ancient art of handloom weaving by providing a global platform for our artisans.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Users className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Empower Weavers</h4>
                                        <p className="text-muted-foreground">To ensure fair wages and a dignified livelihood for our weaver communities, fostering economic independence.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Gem className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-lg">Deliver Quality</h4>
                                        <p className="text-muted-foreground">To offer our customers authentic, high-quality, handcrafted sarees that they can cherish for a lifetime.</p>
                                    </div>
                                </div>
                             </div>
                        </div>
                         <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="https://picsum.photos/seed/weavers/600/400"
                                alt="Weavers working on a saree"
                                fill
                                className="object-cover"
                                data-ai-hint="Indian artisans"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
