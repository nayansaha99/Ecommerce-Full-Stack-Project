'use client'
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
const [currentBanner, setCurrentBanner] = useState(0);
const totalBanners = 3;

useEffect(() => {
    const timer = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % totalBanners);
    }, 5000);
    return () => clearInterval(timer);
}, []);

return (
    <div className="w-full">
        <section className="max-w-7xl mx-auto px-4 mt-5">
            {/* Main Slider Container */}
            <div className="relative overflow-hidden rounded-2xl h-64 md:h-96">
                
                {/* SLIDE 1: EID COLLECTION */}
                <div className={`absolute inset-0 bg-gradient-to-r from-slate-800 to-indigo-900 transition-opacity duration-700 
                    ${currentBanner === 0 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
                        <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest mb-3">
                            Special Offer 
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-2">Eid Collection 2026</h1>
                        <p className="text-white/80 text-sm md:text-lg mb-6 max-w-md">Up to 50% off on premium sarees & kurti sets</p>
                        <button className="flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-all w-fit">
                            Shop Now <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* SLIDE 2: TECH FEST */}
                <div className={`absolute inset-0 bg-gradient-to-r from-emerald-900 to-teal-800 transition-opacity duration-700 
                    ${currentBanner === 1 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
                        <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest mb-3">
                            Special Offer
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-2">Tech Fest Mega Sale</h1>
                        <p className="text-white/80 text-sm md:text-lg mb-6 max-w-md">Smartphones & Laptops at unbeatable prices</p>
                        <button className="flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-all w-fit">
                            Explore Deals <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* SLIDE 3: HOME & LIVING */}
                <div className={`absolute inset-0 bg-gradient-to-r from-rose-900 to-pink-800 transition-opacity duration-700 
                    ${currentBanner === 2 ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
                        <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest mb-3">
                            Special Offer
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-2">Home & Living Fair</h1>
                        <p className="text-white/80 text-sm md:text-lg mb-6 max-w-md">Handcrafted decor & lifestyle products</p>
                        <button className="flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-all w-fit">
                            Discover More <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* NAVIGATION DOTS */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    <button onClick={() => setCurrentBanner(0)} 
                        className={`h-2 rounded-full transition-all ${currentBanner === 0 ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
                    <button onClick={() => setCurrentBanner(1)} 
                        className={`h-2 rounded-full transition-all ${currentBanner === 1 ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
                    <button onClick={() => setCurrentBanner(2)} 
                        className={`h-2 rounded-full transition-all ${currentBanner === 2 ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
                </div>

                {/* LEFT & RIGHT ARROWS */}
                {/* BACK ARROW */}
                <button 
                    onClick={() => setCurrentBanner(e => (e - 1 + totalBanners) % totalBanners)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-20 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                {/* LEFT ARROW */}
                <button 
                    onClick={() => setCurrentBanner(e => (e + 1) % totalBanners)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-20 transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

            </div>
        </section>
    </div>
);
};

export default Hero;