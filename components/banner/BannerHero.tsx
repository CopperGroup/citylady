import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BannerHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <Image
        src="/assets/banner-hero.jpg"
        alt="Stylish modern fashion"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent">
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-2xl space-y-8">
            <h1 className="font-bold text-white max-[1380px]:text-[72px] max-[1380px]:leading-[81px] max-[1260px]:text-[64px] max-[1260px]:leading-[72px] max-[1130px]:text-[60px] max-[1130px]:leading-[67px] max-[1070px]:text-[56px] max-[1070px]:leading-[63px] max-[360px]:text-[50px] max-[360px]:leading-[55px]">
              Timeless
              <br />
              <span className="text-neutral-300">Style & Elegance</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-xl">
              Discover a collection designed for those who appreciate quality, sophistication, and modern aesthetics.
            </p>
            <div className="flex gap-4 max-[465px]:flex-col">
              <Button size="lg" className="bg-white text-black rounded-none hover:bg-neutral-200 px-8 py-6 text-lg">
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white rounded-none hover:bg-white/10 px-8 py-6 text-lg"
              >
                Explore Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
