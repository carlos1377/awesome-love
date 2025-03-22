"use client";

import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Card, CardContent } from "@/components/ui/card";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const slides = [
  {
    image: "/assets/foto1.jpeg",
    text: "A gente sendo cool 😎",
  },
  {
    image: "/assets/foto2.jpeg",
    text: "Nós dois juntos 💑",
  },
  {
    image: "/assets/foto3.jpeg",
    text: "O dia que você chorou 😢",
  },
  {
    image: "/assets/foto4.jpeg",
    text: "O dia que começamos a usar alianças 💍",
  },
  {
    image: "/assets/foto5.jpeg",
    text: "Nosso primeiro encontro 💖",
  },
  {
    image: "/assets/foto6.jpeg",
    text: "Nós com a Maia 🐱",
  },
  {
    image: "/assets/foto7.jpeg",
    text: "O dia que a gente fez musse de maracujá 🍮",
  },
  {
    image: "/assets/foto8.jpeg",
    text: "Nós dois biscoitando no espelho 🍪",
  },
];

function Carrossel() {
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 2,
      spacing: 16,
    },
  });

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next()
    }, 4000)
  
    return () => clearInterval(interval)
  }, [slider])

  return (
    <div
      ref={sliderInstanceRef}
      className="keen-slider w-full rounded-xl overflow-hidden"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="keen-slider__slide relative h-[400px] md:h-[500px]"
        >
          <Image
            width={1920}
            height={1080}
            src={slide.image}
            alt={`Slide ${i}`}
            className="w-full h-full object-cover"
          />

          <Card className="absolute inset-0 bg-black/40 border-none rounded-none flex items-center justify-center">
            <CardContent className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white">{slide.text}</h2>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Carrossel;
