'use client'
import React from 'react';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingCart, Heart, Search, Menu, X, ChevronLeft, ChevronRight,
    Star, Truck, Shield, RefreshCw, Headphones, Eye, EyeOff,
    CreditCard, Smartphone, Wallet, CheckCircle, User, LogIn,
    MapPin, Bell, Package, ArrowRight, Zap, Tag
} from "lucide-react";
const PRODUCTS = [
  { id:1,  name:"Banarasi Silk Saree",       price:4500,   original:6000,   category:"Dresses",   rating:4.8, reviews:124, badge:"HOT",  img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=85", description:"Luxurious Banarasi weave with intricate zari work." },
  { id:2,  name:"Jamdani Cotton Kurti",       price:1850,   original:2400,   category:"Dresses",   rating:4.6, reviews:98,  badge:"SALE", img:"https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=85", description:"Breathable Dhaka muslin with traditional block-print motifs." },
  { id:3,  name:"Muslin Anarkali Dress",      price:2200,   original:2800,   category:"Dresses",   rating:4.5, reviews:67,  badge:"", img:"https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=85", description:"Breathable Dhaka muslin with traditional block-print motifs." },
  { id:4,  name:"Jamdani Saree – Heritage",   price:8500,   original:11000,  category:"Dresses",   rating:4.9, reviews:72,  badge:"TOP",  img:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=85", description:"Luxurious Banarasi weave with intricate zari work." },
  { id:5,  name:"22K Gold Bangles Set",       price:32000,  original:38000,  category:"Ornaments", rating:4.9, reviews:54,  badge:"NEW",  img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85", description:"22-karat gold bangles with intricate filigree detailing." },
  { id:6,  name:"Pearl Drop Necklace",        price:4200,   original:5500,   category:"Ornaments", rating:4.7, reviews:89,  badge:"SALE", img:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=85", description:"Freshwater pearl necklace with sterling silver clasp." },
  { id:7,  name:"Kundan Bridal Choker",       price:7800,   original:9500,   category:"Ornaments", rating:4.8, reviews:41,  badge:"HOT",  img:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85", description:"Handcrafted kundan choker with polki stone settings." },
  { id:8,  name:"Gold Jhumka Earrings",       price:3600,   original:4500,   category:"Ornaments", rating:4.6, reviews:113, badge:"",     img:"https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=85", description:"Traditional jhumka earrings with meenakari enamel work." },
];
const BADGE_STYLES = {
  HOT:  "bg-orange-500 text-white",
  NEW:  "bg-emerald-500 text-white",
  SALE: "bg-rose-500 text-white",
  TOP:  "bg-indigo-600 text-white",
};
const SPRING = { type: "spring", stiffness: 300, damping: 30 };
const FeaturedProduct = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery,    setSearchQuery]    = useState("");
    const filtered = PRODUCTS.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat    = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 mt-10 mb-14">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              {activeCategory === "All" ? "Featured Products" : activeCategory}
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">{filtered.length} item{filtered.length !== 1 ? "s" : ""} available</p>
          </div>
          <select className="text-sm border border-slate-200 rounded-xl px-3 py-2 text-slate-700 bg-white outline-none hover:border-indigo-400 transition-colors cursor-pointer">
            <option>Best Selling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <Package className="w-12 h-12 mx-auto mb-3 opacity-40" />
            <p className="font-semibold text-slate-600">No products found</p>
            <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="text-indigo-600 text-sm mt-2 hover:underline">Clear filters</button>
          </div>
        )}

        {/* THE FIXED PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map(product => {
            return (
              <motion.article
                key={product.id}
                whileHover={{ y: -6, boxShadow: "0 20px 48px -8px rgba(99,102,241,0.16)" }}
                transition={SPRING}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden group flex flex-col"
              >
                {/*
                  aspect-[3/4] = portrait card ratio (like a clothing/jewellery card)
                  object-cover + object-center = fills the box, crops edges, never distorts
                  This makes ALL cards exactly the same height regardless of source image dimensions.
                */}
                <div className="relative w-full aspect-[3/4] bg-slate-100 overflow-hidden flex-shrink-0">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {product.badge && (
                    <span className={`absolute top-2.5 left-2.5 text-[11px] font-black px-2.5 py-1 rounded-lg z-10 ${BADGE_STYLES[product.badge] ?? "bg-slate-700 text-white"}`}>
                      {product.badge}
                    </span>
                  )}
               
                    <span className="absolute top-2.5 right-11 bg-white/90 text-rose-600 text-[11px] font-black px-2 py-1 rounded-lg border border-rose-100 z-10">
                     Discount
                    </span>
                

                  {/*
                    WISHLIST BUTTON — toggles between outline ♡ and filled ♥
                    clicking → adds to wishlistItems state AND opens the drawer
                  */}
                  <motion.button
                    onClick={e => { e.stopPropagation();}}
                    whileTap={{ scale: 0.72 }}
                    transition={SPRING}
                    aria-label="Add to wishlist"
                    className={`absolute top-2.5 right-2.5 z-10 p-2 rounded-xl shadow-sm transition-colors
                     "bg-rose-500 text-white" : "bg-white/90 text-slate-400 hover:bg-rose-50 hover:text-rose-500"}`}
                  >
                    <Heart className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-[11px] font-semibold text-indigo-500 uppercase tracking-wide mb-1">{product.category}</p>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-1.5 flex-1">{product.name}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">{product.description}</p>

                  <div className="flex items-center gap-1.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} />
                    ))}
                    <span className="text-xs text-slate-500">({product.reviews})</span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-lg font-black text-slate-900">৳{product.price.toLocaleString()}</span>
                    <span className="text-xs text-slate-400 line-through">৳{product.original.toLocaleString()}</span>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    transition={SPRING}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors mt-auto"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </motion.button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
       <section className="bg-indigo-600 py-20 px-4">
              <div className="max-w-xl mx-auto text-center">
                <Bell className="w-8 h-8 text-indigo-200 mx-auto mb-3" />
                <h2 className="text-2xl font-black text-white mb-2">Stay in the Loop</h2>
                <p className="text-indigo-200 text-sm mb-6">Exclusive deals & new arrivals delivered to your inbox.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="Your email address"
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-indigo-200 text-sm outline-none focus:border-white/60 transition-colors" />
                  <button className="bg-white text-indigo-700 font-bold px-5 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm whitespace-nowrap">Subscribe</button>
                </div>
              </div>
            </section>
    </div>
  );
};

export default FeaturedProduct;