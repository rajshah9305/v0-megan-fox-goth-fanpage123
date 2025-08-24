import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background gothic-pattern">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-10" />
        <Image
          src="/images/megan-gothic-cathedral.jpg"
          alt="Megan Fox Gothic"
          fill
          className="object-contain"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-wide">MEGAN FOX</h1>
          <p className="font-serif text-2xl md:text-3xl text-primary mb-8 italic">Gothic Goddess</p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {"Enter the dark realm of beauty, mystery, and seduction"}
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3">
            Explore the Darkness
          </Button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">Dark Elegance</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            {"A collection of gothic beauty and mysterious allure"}
          </p>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large featured image */}
            <Card className="lg:col-span-2 lg:row-span-2 overflow-hidden group cursor-pointer">
              <div className="relative h-[500px] lg:h-[600px]">
                <Image
                  src="/images/megan-red-dress.jpg"
                  alt="Megan Fox in Red Lace"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">Crimson Temptation</h3>
                  <p className="text-sm opacity-90">{"Elegance wrapped in mystery"}</p>
                </div>
              </div>
            </Card>

            {/* Snow scene */}
            <Card className="overflow-hidden group cursor-pointer">
              <div className="relative h-80">
                <Image
                  src="/images/megan-snow-black.jpg"
                  alt="Megan Fox in Snow"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-lg font-bold">Winter Gothic</h3>
                </div>
              </div>
            </Card>

            {/* Runway */}
            <Card className="overflow-hidden group cursor-pointer">
              <div className="relative h-80">
                <Image
                  src="/images/megan-runway.jpg"
                  alt="Megan Fox Runway"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-lg font-bold">Dark Couture</h3>
                </div>
              </div>
            </Card>

            {/* Elegant black */}
            <Card className="overflow-hidden group cursor-pointer">
              <div className="relative h-80">
                <Image
                  src="/images/megan-elegant-black.jpg"
                  alt="Megan Fox Elegant"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-lg font-bold">Midnight Lace</h3>
                </div>
              </div>
            </Card>

            {/* Hallway scene */}
            <Card className="lg:col-span-2 overflow-hidden group cursor-pointer">
              <div className="relative h-80">
                <Image
                  src="/images/megan-hallway.jpg"
                  alt="Megan Fox Hallway"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">Cathedral Dreams</h3>
                  <p className="text-sm opacity-90">{"Where shadows dance with light"}</p>
                </div>
              </div>
            </Card>

            {/* Magazine style */}
            <Card className="overflow-hidden group cursor-pointer">
              <div className="relative h-80">
                <Image
                  src="/images/megan-magazine.jpg"
                  alt="Megan Fox Magazine"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-lg font-bold">Gothic Glamour</h3>
                </div>
              </div>
            </Card>

            {/* Neon night */}
            <Card className="overflow-hidden group cursor-pointer">
              <div className="relative h-80">
                <Image
                  src="/images/megan-neon-night.jpg"
                  alt="Megan Fox Neon"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-lg font-bold">Neon Noir</h3>
                </div>
              </div>
            </Card>

            {/* Beach sunset */}
            <Card className="overflow-hidden group cursor-pointer">
              <div className="relative h-80">
                <Image
                  src="/images/megan-beach-sunset.jpg"
                  alt="Megan Fox Beach"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-lg font-bold">Sunset Seduction</h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-serif text-3xl md:text-4xl font-light text-foreground mb-8 italic">
            {'"I embrace the darkness within me, for it is where my true power lies."'}
          </blockquote>
          <cite className="text-primary text-lg font-semibold">— Megan Fox</cite>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Join the Dark Side</h3>
          <p className="text-muted-foreground mb-8">
            {"Subscribe to receive the latest updates from the gothic realm"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-8">{"© 2025 Gothic Goddess Fanpage. All rights reserved."}</p>
        </div>
      </footer>
    </div>
  )
}
