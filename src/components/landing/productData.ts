import sprayImg from "@/assets/product-setting-spray.jpg";
import lipstickImg from "@/assets/product-lipstick.jpg";
import paletteImg from "@/assets/product-palette.jpg";
import foundationImg from "@/assets/product-foundation.jpg";
import mascaraImg from "@/assets/product-mascara.jpg";
import blushImg from "@/assets/product-blush.jpg";
import primerImg from "@/assets/product-primer.jpg";
import concealerImg from "@/assets/product-concealer.jpg";

export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  tag?: string;
  colors?: string[];
}

export const allProducts: Product[] = [
  {
    id: "spray-01",
    name: "Makeup Setting Spray Long Lasting",
    brand: "Nigar Beauty",
    image: sprayImg,
    price: 1299,
    oldPrice: 1899,
    rating: 4.5,
    reviews: 234,
    tag: "Best Seller",
    colors: ["#f5c6c6", "#e8a0a0", "#d4756b", "#c9544a"],
  },
  {
    id: "lip-01",
    name: "Velvet Matte Lipstick Waterproof",
    brand: "Nigar Cosmetics",
    image: lipstickImg,
    price: 699,
    oldPrice: 999,
    rating: 4.8,
    reviews: 512,
    tag: "Trending",
    colors: ["#c0392b", "#e74c3c", "#ff6b81", "#d63384", "#922b21", "#7b241c"],
  },
  {
    id: "pal-01",
    name: "Warm Tone Eyeshadow Palette 12 Shades",
    brand: "Nigar Eyes",
    image: paletteImg,
    price: 2499,
    oldPrice: 3499,
    rating: 4.7,
    reviews: 189,
    colors: ["#d4a574", "#c68642", "#8d6e63", "#5d4037"],
  },
  {
    id: "fnd-01",
    name: "Flawless Full Coverage Foundation",
    brand: "Nigar Skin",
    image: foundationImg,
    price: 1599,
    oldPrice: 2199,
    rating: 4.6,
    reviews: 345,
    tag: "New",
    colors: ["#fce4c7", "#f5d0a9", "#e8b886", "#d4a06a", "#c08c5a", "#a0724a"],
  },
  {
    id: "mas-01",
    name: "Volume & Length Mascara Blackest Black",
    brand: "Nigar Eyes",
    image: mascaraImg,
    price: 899,
    rating: 4.4,
    reviews: 156,
    colors: ["#1a1a1a", "#2c2c2c"],
  },
  {
    id: "blush-01",
    name: "Silk Finish Blush Natural Glow",
    brand: "Nigar Glow",
    image: blushImg,
    price: 999,
    oldPrice: 1499,
    rating: 4.9,
    reviews: 423,
    tag: "Hot",
    colors: ["#f8a4b8", "#e88da0", "#d4758a", "#cc6680"],
  },
  {
    id: "primer-01",
    name: "Glow Primer Pore Minimizing",
    brand: "Nigar Skin",
    image: primerImg,
    price: 1199,
    rating: 4.3,
    reviews: 98,
    colors: ["#fff5e6", "#ffe0cc"],
  },
  {
    id: "conc-01",
    name: "HD Pro Concealer Full Coverage",
    brand: "Nigar Skin",
    image: concealerImg,
    price: 799,
    oldPrice: 1099,
    rating: 4.5,
    reviews: 267,
    tag: "Popular",
    colors: ["#fce4c7", "#f0d0a8", "#dbb88a", "#c49a6c", "#a87d54"],
  },
];
