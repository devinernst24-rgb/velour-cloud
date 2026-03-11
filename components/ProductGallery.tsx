"use client";

import { useState } from "react";
import Image from "next/image";

const thumbnails = [
  { src: "/images/product-white.png", alt: "White variant" },
  { src: "/images/product-pink.png", alt: "Pink variant" },
  { src: "/images/product-blue.png", alt: "Blue variant" },
  { src: "/images/product-variants.jpg", alt: "Fragrance refill pod variety" },
];

export default function ProductGallery() {
  const [heroImage, setActiveImage] = useState("/images/product-hero.png");

  return (
    <div className="lg:sticky lg:top-24 space-y-4">
      <div className="rounded-2xl overflow-hidden aspect-square relative">
        <Image
          src={heroImage}
          alt="Velour Cloud Aroma Diffuser"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {thumbnails.map(({ src, alt }, i) => (
          <button
            key={i}
            onClick={() => setActiveImage(src)}
            className={`rounded-xl overflow-hidden aspect-square relative block w-full ${
              heroImage === src ? "ring-2 ring-plum" : ""
            }`}
          >
            <Image src={src} alt={alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
