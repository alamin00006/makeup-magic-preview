import { motion } from "framer-motion";
import { Heart, Star, ShoppingBag } from "lucide-react";

import sprayImg from "@/assets/product-setting-spray.jpg";
import lipstickImg from "@/assets/product-lipstick.jpg";
import paletteImg from "@/assets/product-palette.jpg";
import foundationImg from "@/assets/product-foundation.jpg";
import mascaraImg from "@/assets/product-mascara.jpg";
import blushImg from "@/assets/product-blush.jpg";
import primerImg from "@/assets/product-primer.jpg";
import concealerImg from "@/assets/product-concealer.jpg";

export interface Product {
  name: string;
  nameBn: string;
  brand: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  tag?: string;
}

export const allProducts: Product[] = [
  { name: "Makeup Setting Spray", nameBn: "সেটিং স্প্রে", brand: "Nigar Beauty", image: sprayImg, price: 1299, oldPrice: 1899, rating: 4.5, reviews: 234, tag: "Best Seller" },
  { name: "Velvet Matte Lipstick", nameBn: "ম্যাট লিপস্টিক", brand: "Nigar Cosmetics", image: lipstickImg, price: 699, oldPrice: 999, rating: 4.8, reviews: 512, tag: "Trending" },
  { name: "Warm Tone Palette", nameBn: "আইশ্যাডো প্যালেট", brand: "Nigar Eyes", image: paletteImg, price: 2499, oldPrice: 3499, rating: 4.7, reviews: 189 },
  { name: "Flawless Foundation", nameBn: "ফাউন্ডেশন", brand: "Nigar Skin", image: foundationImg, price: 1599, oldPrice: 2199, rating: 4.6, reviews: 345, tag: "New" },
  { name: "Volume Mascara", nameBn: "ম্যাসকারা", brand: "Nigar Eyes", image: mascaraImg, price: 899, rating: 4.4, reviews: 156 },
  { name: "Silk Blush", nameBn: "ব্লাশ", brand: "Nigar Glow", image: blushImg, price: 999, oldPrice: 1499, rating: 4.9, reviews: 423, tag: "Hot" },
  { name: "Glow Primer", nameBn: "প্রাইমার", brand: "Nigar Skin", image: primerImg, price: 1199, rating: 4.3, reviews: 98 },
  { name: "HD Concealer", nameBn: "কনসিলার", brand: "Nigar Skin", image: concealerImg, price: 799, oldPrice: 1099, rating: 4.5, reviews: 267, tag: "Popular" },
];

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06 }}
    className="group bg-card rounded-xl border border-border hover:border-pink/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
  >
    {/* Image */}
    <div className="relative aspect-square overflow-hidden bg-muted">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width={300}
        height={300}
      />
      {product.tag && (
        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-pink text-primary-foreground font-body text-[9px] font-bold uppercase tracking-wider rounded-sm">
          {product.tag}
        </span>
      )}
      <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-1.5">
        <button className="w-8 h-8 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-pink hover:text-primary-foreground transition-colors">
          <Heart className="w-3.5 h-3.5" />
        </button>
        <button className="w-8 h-8 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-pink hover:text-primary-foreground transition-colors">
          <ShoppingBag className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>

    {/* Info */}
    <div className="p-3.5">
      <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{product.brand}</p>
      <h4 className="font-body text-sm text-foreground font-medium leading-tight mb-0.5 line-clamp-1">{product.name}</h4>
      <p className="font-body text-[11px] text-muted-foreground mb-2">{product.nameBn}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        <div className="flex">
          {[...Array(5)].map((_, j) => (
            <Star
              key={j}
              className={`w-3 h-3 ${j < Math.floor(product.rating) ? "fill-gold text-gold" : "text-border"}`}
            />
          ))}
        </div>
        <span className="font-body text-[10px] text-muted-foreground">({product.reviews})</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2">
        <span className="font-display text-base text-foreground">৳{product.price.toLocaleString()}</span>
        {product.oldPrice && (
          <span className="font-body text-xs text-muted-foreground line-through">৳{product.oldPrice.toLocaleString()}</span>
        )}
        {product.oldPrice && (
          <span className="font-body text-[10px] text-pink font-semibold">
            {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

interface ProductGridProps {
  id?: string;
  title: string;
  titleBn: string;
  products: Product[];
  bgClass?: string;
}

const ProductGrid = ({ id, title, titleBn, products, bgClass = "bg-background" }: ProductGridProps) => (
  <section id={id} className={`py-12 ${bgClass}`}>
    <div className="container mx-auto px-6">
      <div className="flex items-end justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg md:text-xl font-display uppercase tracking-wider text-foreground">
            {title}
          </h2>
          <p className="font-body text-xs text-muted-foreground mt-0.5">{titleBn}</p>
        </motion.div>
        <button className="font-body text-xs text-pink hover:text-hot-pink font-medium uppercase tracking-wider transition-colors">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {products.map((p, i) => (
          <ProductCard key={p.name} product={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
