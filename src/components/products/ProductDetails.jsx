
'use client'
import React from 'react';
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
const SPRING = { type: "spring", stiffness: 300, damping: 30 };
import { useSearchParams, useRouter } from "next/navigation"
import {
    ShoppingCart, Heart, Search, Menu, X,
    ChevronLeft, ChevronRight, Star, Truck, Shield,
    RefreshCw, Headphones, Eye, EyeOff, CreditCard,
    CheckCircle, User, LogIn, MapPin, Bell, Package,
    ArrowRight, Zap, Lock, Mail, Phone, Trash2,
    Minus, Plus, ArrowLeft, Share2, Check,
    Stars,
} from "lucide-react";
import CartList from './CartList';
import Payment from './Payment'
import WishList from './WishList';
const PRODUCTS = [
    { id: 1, name: "Banarasi Silk Saree", price: 4500, original: 6000, category: "Dresses", rating: 4.8, reviews: 124, badge: "HOT", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=85", description: "Luxurious Banarasi weave with intricate zari work.", sizes: ["XS", "S", "M", "L", "XL"], colors: [{ name: "Crimson", hex: "#DC2626" }, { name: "Navy", hex: "#1D4ED8" }, { name: "Emerald", hex: "#059669" }], images: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85", "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&q=85", "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85"], specs: [{ label: "Material", value: "Pure Silk" }, { label: "Weight", value: "650g" }, { label: "Weave", value: "Banarasi" }, { label: "Care", value: "Dry clean only" }] },
    { id: 2, name: "Jamdani Cotton Kurti", price: 1850, original: 2400, category: "Dresses", rating: 4.6, reviews: 98, badge: "SALE", img: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=85", description: "Breathable Dhaka muslin with traditional block-print motifs.", sizes: ["S", "M", "L", "XL"], colors: [{ name: "White", hex: "#F8FAFC" }, { name: "Indigo", hex: "#4338CA" }], images: ["https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&q=85", "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85"], specs: [{ label: "Material", value: "100% Muslin" }, { label: "Print", value: "Hand Block" }, { label: "Origin", value: "Dhaka" }] },
    { id: 3, name: "Muslin Anarkali Dress", price: 2200, original: 2800, category: "Dresses", rating: 4.5, reviews: 67, badge: "", img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=85", description: "Flowing muslin anarkali with hand-embroidered neckline.", sizes: ["XS", "S", "M", "L"], colors: [{ name: "Peach", hex: "#FBBF80" }, { name: "Mint", hex: "#6EE7B7" }], images: ["https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85", "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85"], specs: [{ label: "Material", value: "Pure Muslin" }, { label: "Neck", value: "Embroidered V-neck" }, { label: "Length", value: "Floor-length" }] },
    { id: 4, name: "Jamdani Saree – Heritage", price: 8500, original: 11000, category: "Dresses", rating: 4.9, reviews: 72, badge: "TOP", img: "https://images.unsplash.com/photo-1620910756680-4f3e7b4484bd?w=600&q=85", description: "Authentic UNESCO-recognised Jamdani heritage weave.", sizes: ["Free Size"], colors: [{ name: "Ivory", hex: "#FFFBEB" }, { name: "Gold", hex: "#D97706" }], images: ["https://images.unsplash.com/photo-1620910756680-4f3e7b4484bd?w=800&q=85", "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85"], specs: [{ label: "Weave", value: "Jamdani" }, { label: "UNESCO", value: "Heritage Craft" }, { label: "Weight", value: "400g" }] },
    { id: 5, name: "22K Gold Bangles Set", price: 32000, original: 38000, category: "Ornaments", rating: 4.9, reviews: 54, badge: "NEW", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85", description: "22-karat gold bangles with intricate filigree detailing. Hand-crafted by master goldsmiths of Dhaka, these bangles feature the intricate filigree technique passed down through generations. Perfect as a bridal set.", sizes: ["2.2", "2.4", "2.6", "2.8", "3.0"], colors: [{ name: "Yellow Gold", hex: "#D4A017" }, { name: "Rose Gold", hex: "#B87333" }, { name: "White Gold", hex: "#C0C0C0" }], images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85", "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=85"], specs: [{ label: "Material", value: "22K Yellow Gold" }, { label: "Weight", value: "28–32g" }, { label: "Purity", value: "916 Hallmarked" }, { label: "Stones", value: "White Zircon" }, { label: "Set", value: "2 Bangles + Gift Box" }], customerReviews: [{ id: 1, name: "Nadia Rahman", avatar: "NR", rating: 5, date: "March 2025", text: "Absolutely stunning! The filigree work is even more beautiful in person.", verified: true }, { id: 2, name: "Priya Das", avatar: "PD", rating: 5, date: "Feb 2025", text: "Exceptional quality. The hallmark certificate gave me full confidence.", verified: true }, { id: 3, name: "Sadia Islam", avatar: "SI", rating: 4, date: "Jan 2025", text: "Beautiful craftsmanship. Worth every taka.", verified: false }] },
    { id: 6, name: "Pearl Drop Necklace", price: 4200, original: 5500, category: "Ornaments", rating: 4.7, reviews: 89, badge: "SALE", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=85", description: "Freshwater pearl necklace with sterling silver clasp.", sizes: ["16in", "18in", "20in"], colors: [{ name: "White", hex: "#F8FAFC" }, { name: "Cream", hex: "#FEF9C3" }], images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85"], specs: [{ label: "Material", value: "Freshwater Pearl" }, { label: "Clasp", value: "Sterling Silver" }, { label: "Length", value: "16–20 inches" }] },
    { id: 7, name: "Kundan Bridal Choker", price: 7800, original: 9500, category: "Ornaments", rating: 4.8, reviews: 41, badge: "HOT", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85", description: "Handcrafted kundan choker with polki stone settings.", sizes: ["One Size"], colors: [{ name: "Gold", hex: "#D97706" }, { name: "Antique", hex: "#92400E" }], images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=85", "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85"], specs: [{ label: "Style", value: "Kundan Choker" }, { label: "Stones", value: "Polki" }, { label: "Finish", value: "Antique Gold" }] },
    { id: 8, name: "Gold Jhumka Earrings", price: 3600, original: 4500, category: "Ornaments", rating: 4.6, reviews: 113, badge: "", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=85", description: "Traditional jhumka earrings with meenakari enamel work.", sizes: ["One Size"], colors: [{ name: "Gold Red", hex: "#DC2626" }, { name: "Gold Blue", hex: "#1D4ED8" }], images: ["https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85"], specs: [{ label: "Style", value: "Jhumka" }, { label: "Work", value: "Meenakari Enamel" }, { label: "Metal", value: "Gold-plated Brass" }] },
];
const TOTAL_DIGITS = 6;
const RESEND_SECS = 60;
const ProductDetails = ({ id, title, children, product, onBack, onWishlist, isWished }) => {
    const [activeImage, setActiveImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(PRODUCTS.sizes?.[0] ?? null);
    const [selectedColor, setSelectedColor] = useState(PRODUCTS.colors?.[0] ?? null);
    const [qty, setQty] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("description");
    const [cartFlash, setCartFlash] = useState(false);
    const [open, setOpen] = useState({ description: true, specs: false, reviews: false });
    const thumbRowRef = useRef(null);
    const [digits, setDigits] = useState(Array(TOTAL_DIGITS).fill(""));
    const router = useRouter();
    const discount = Math.round((1 - PRODUCTS.price / PRODUCTS.original) * 100);
    const images = PRODUCTS.images || [PRODUCTS.img];
    const reviews = PRODUCTS.customerReviews || [];
    // useEffect(() => { if (thumbRowRef.current) { const t = thumbRowRef.current.children[activeImage]; t?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" }); } }, [activeImage]);//
    const TABS = [{ key: "description", label: "Description" }, { key: "specs", label: "Specifications" }, { key: "reviews", label: `Reviews (${reviews.length})` }];

    function handlePaste(e) {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, TOTAL_DIGITS);
        if (!pasted) return;
        const next = Array(TOTAL_DIGITS).fill("");
        pasted.split("").forEach((ch, i) => { next[i] = ch; });
        setDigits(next);
        inputRefs.current[Math.min(pasted.length, TOTAL_DIGITS - 1)]?.focus();
    }
    // useEffect(() => {
    //     const handleBack = () => {
    //         router.push("/");
    //     };

    //     window.history.pushState(null, "", window.location.href);
    //     window.addEventListener("popstate", handleBack);

    //     return () => {
    //         window.removeEventListener("popstate", handleBack);
    //     };
    // }, []);

    return (
        <>
            <div className="border-b border-slate-200 bg-white px-4">
                <button
                    onClick={() => setOpen(o => ({ ...o, [id]: !o[id] }))}
                    className="flex items-center justify-between w-full py-4 text-left"
                >
                    <span className="font-bold text-slate-900 text-sm">{title}</span>
                    <motion.div
                        animate={{ rotate: open?.[id] ? 180 : 0 }}
                        transition={SPRING}
                    >
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                    </motion.div>
                </button>
                <AnimatePresence initial={false}>
                    {open?.[id] && (
                        <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1, transition: { ...SPRING, duration: 0.28 } }}
                            exit={{ height: 0, opacity: 0, transition: { duration: 0.18 } }}
                            className="overflow-hidden"
                        >
                            <div className="pb-5 text-sm text-slate-600 leading-relaxed">{children}</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* 2. Main Product Page */}
            <div className="min-h-screen bg-slate-50">
                <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                        <motion.button whileTap={{ scale: 0.9 }} transition={SPRING} onClick={""} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium text-sm">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </motion.button>
                        <a href="#" className="flex items-center gap-1.5"><div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center"><span className="text-white font-black text-sm leading-none">B</span></div><span className="font-black text-slate-900 hidden sm:block text-sm">Bazaar<span className="text-indigo-600">BD</span></span></a>
                        <button className="p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-600" aria-label="Share"><Share2 className="w-4 h-4" /></button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-6 lg:py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Images */}
                        <div className="flex flex-col gap-4">
                            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImage}
                                        src={
                                            activeImage === 0
                                                ? "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85"
                                                : activeImage === 1
                                                    ? "https://via.placeholder.com/600x600?text=Demo+2"
                                                    : "https://via.placeholder.com/600x600?text=Demo+3"
                                        }
                                        alt={PRODUCTS.name}
                                        initial={{ opacity: 0, scale: 1.04 }}
                                        animate={{ opacity: 1, scale: 1, transition: { ...SPRING } }}
                                        exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.15 } }}
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        loading="eager"
                                    />
                                </AnimatePresence>
                                {PRODUCTS.badge && <span className={`absolute top-3 left-3 text-xs font-black px-2.5 py-1 rounded-lg ${BADGE_STYLES[PRODUCTS.badge] ?? "bg-slate-700 text-white"}`}>{PRODUCTS.badge}</span>}
                                {discount > 0 && <span className="absolute top-3 right-3 bg-white/90 text-rose-600 text-xs font-black px-2.5 py-1 rounded-lg border border-rose-100">-{discount}%</span>}
                                <motion.button onClick={() => onWishlist?.(PRODUCTS)} whileTap={{ scale: 0.78 }} transition={SPRING}
                                    className={`absolute bottom-3 right-3 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg transition-colors ${isWished ? "bg-rose-500 text-white" : "bg-white/90 text-slate-500 hover:text-rose-500"}`}>
                                    <Heart className="w-5 h-5" fill={isWished ? "currentColor" : "none"} strokeWidth={isWished ? 0 : 2} />
                                </motion.button>
                                <>
                                    {/* Prev Button */}
                                    <button
                                        onClick={() => setActiveImage(i => (i - 1 + 3) % 3)}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-xl flex items-center justify-center shadow-md transition-colors"
                                        aria-label="Prev"
                                    >
                                        <ChevronLeft className="w-4 h-4 text-slate-700" />
                                    </button>

                                    {/* Next Button */}
                                    <button
                                        onClick={() => setActiveImage(i => (i + 1) % 3)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-xl flex items-center justify-center shadow-md transition-colors"
                                        aria-label="Next"
                                    >
                                        <ChevronRight className="w-4 h-4 text-slate-700" />
                                    </button>

                                    {/* Dots */}
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 lg:hidden">

                                        <button
                                            onClick={() => setActiveImage(0)}
                                            className={`h-1.5 rounded-full transition-all ${activeImage === 0 ? "w-5 bg-indigo-600" : "w-1.5 bg-white/70"
                                                }`}
                                        />
                                        <button
                                            onClick={() => setActiveImage(1)}
                                            className={`h-1.5 rounded-full transition-all ${activeImage === 1 ? "w-5 bg-indigo-600" : "w-1.5 bg-white/70"
                                                }`}
                                        />
                                        <button
                                            onClick={() => setActiveImage(2)}
                                            className={`h-1.5 rounded-full transition-all ${activeImage === 2 ? "w-5 bg-indigo-600" : "w-1.5 bg-white/70"
                                                }`}
                                        />

                                    </div>
                                </>

                                {/* Thumbnails image */}

                            </div>
                            <div
                                ref={thumbRowRef}
                                className="flex gap-2.5 overflow-x-auto pb-1 scroll-smooth"
                                style={{ scrollbarWidth: "none" }}
                            >

                                {/* Img 1 */}
                                <motion.button
                                    whileTap={{ scale: 0.93 }}
                                    transition={SPRING}
                                    onClick={() => setActiveImage(0)}
                                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === 0
                                        ? "border-indigo-500 shadow-md shadow-indigo-100"
                                        : "border-transparent hover:border-slate-300"
                                        }`}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=85"
                                        alt="Thumb 1"
                                        className="w-full h-full object-cover object-center"
                                        loading="lazy"
                                    />
                                </motion.button>

                                {/* Img 2 */}
                                <motion.button
                                    whileTap={{ scale: 0.93 }}
                                    transition={SPRING}
                                    onClick={() => setActiveImage(1)}
                                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === 1
                                        ? "border-indigo-500 shadow-md shadow-indigo-100"
                                        : "border-transparent hover:border-slate-300"
                                        }`}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85"
                                        alt="Thumb 2"
                                        className="w-full h-full object-cover object-center"
                                        loading="lazy"
                                    />
                                </motion.button>

                                {/* Img 3 */}
                                <motion.button
                                    whileTap={{ scale: 0.93 }}
                                    transition={SPRING}
                                    onClick={() => setActiveImage(2)}
                                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === 2
                                        ? "border-indigo-500 shadow-md shadow-indigo-100"
                                        : "border-transparent hover:border-slate-300"
                                        }`}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85"
                                        alt="Thumb 3"
                                        className="w-full h-full object-cover object-center"
                                        loading="lazy"
                                    />
                                </motion.button>

                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <span>Home</span><ChevronRight className="w-3 h-3" /><span>{PRODUCTS.category}</span><ChevronRight className="w-3 h-3" /><span className="text-slate-800 font-medium truncate">

                                    {/* {PRODUCTS.name.split("—")[0].trim()} */}

                                </span>
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight tracking-tight">{PRODUCTS.name}</h1>
                                <div className="flex items-center gap-3 mt-3 flex-wrap">
                                    <Stars rating={PRODUCTS.rating} /><span className="text-sm font-bold text-slate-800">{PRODUCTS.rating}</span>
                                    <span className="text-sm text-slate-500">({PRODUCTS.reviews} reviews)</span>
                                    <span className="hidden sm:block text-slate-300">|</span><span className="text-sm text-emerald-600 font-semibold">✓ In Stock</span>
                                </div>
                            </div>

                            <div>
                                {/* Colours */}
                                <p className="text-sm font-bold text-slate-800 mb-3">
                                    Colour:{" "}
                                    <span className="font-normal text-slate-600">
                                        {selectedColor?.name}
                                    </span>
                                </p>

                                <div className="flex items-center gap-3 flex-wrap">

                                    {/* Red */}
                                    <motion.button
                                        whileTap={{ scale: 0.85 }}
                                        transition={SPRING}
                                        onClick={() =>
                                            setSelectedColor({ name: "Red", hex: "#ef4444" })
                                        }
                                        className={`relative w-10 h-10 rounded-full border-2 transition-all ${selectedColor?.name === "Red"
                                            ? "border-indigo-600 shadow-md shadow-indigo-100"
                                            : "border-transparent hover:border-slate-300"
                                            }`}
                                        style={{ backgroundColor: "#ef4444" }}
                                    >
                                        {selectedColor?.name === "Red" && (
                                            <motion.div
                                                layoutId="clr-check"
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <Check className="w-4 h-4 text-white drop-shadow" strokeWidth={3} />
                                            </motion.div>
                                        )}
                                    </motion.button>

                                    {/* Blue */}
                                    <motion.button
                                        whileTap={{ scale: 0.85 }}
                                        transition={SPRING}
                                        onClick={() =>
                                            setSelectedColor({ name: "Blue", hex: "#3b82f6" })
                                        }
                                        className={`relative w-10 h-10 rounded-full border-2 transition-all ${selectedColor?.name === "Blue"
                                            ? "border-indigo-600 shadow-md shadow-indigo-100"
                                            : "border-transparent hover:border-slate-300"
                                            }`}
                                        style={{ backgroundColor: "#3b82f6" }}
                                    >
                                        {selectedColor?.name === "Blue" && (
                                            <motion.div
                                                layoutId="clr-check"
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <Check className="w-4 h-4 text-white drop-shadow" strokeWidth={3} />
                                            </motion.div>
                                        )}
                                    </motion.button>

                                    {/* Green */}
                                    <motion.button
                                        whileTap={{ scale: 0.85 }}
                                        transition={SPRING}
                                        onClick={() =>
                                            setSelectedColor({ name: "Green", hex: "#22c55e" })
                                        }
                                        className={`relative w-10 h-10 rounded-full border-2 transition-all ${selectedColor?.name === "Green"
                                            ? "border-indigo-600 shadow-md shadow-indigo-100"
                                            : "border-transparent hover:border-slate-300"
                                            }`}
                                        style={{ backgroundColor: "#22c55e" }}
                                    >
                                        {selectedColor?.name === "Green" && (
                                            <motion.div
                                                layoutId="clr-check"
                                                className="absolute inset-0 flex items-center justify-center"
                                            >
                                                <Check className="w-4 h-4 text-white drop-shadow" strokeWidth={3} />
                                            </motion.div>
                                        )}
                                    </motion.button>

                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    {/* Sizes */}
                                    <p className="text-sm font-bold text-slate-800">
                                        Size:{" "}
                                        <span className="font-normal text-slate-600">
                                            {selectedSize}
                                        </span>
                                    </p>
                                    <button className="text-xs text-indigo-600 font-semibold hover:underline">
                                        Size Guide
                                    </button>
                                </div>

                                <div className="flex items-center gap-2 flex-wrap">

                                    {/* S */}
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        transition={SPRING}
                                        onClick={() => setSelectedSize("S")}
                                        className={`min-w-[52px] h-11 px-4 rounded-xl text-sm font-bold border-2 transition-all ${selectedSize === "S"
                                            ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-100"
                                            : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                                            }`}
                                    >
                                        S
                                    </motion.button>

                                    {/* M */}
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        transition={SPRING}
                                        onClick={() => setSelectedSize("M")}
                                        className={`min-w-[52px] h-11 px-4 rounded-xl text-sm font-bold border-2 transition-all ${selectedSize === "M"
                                            ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-100"
                                            : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                                            }`}
                                    >
                                        M
                                    </motion.button>

                                    {/* L */}
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        transition={SPRING}
                                        onClick={() => setSelectedSize("L")}
                                        className={`min-w-[52px] h-11 px-4 rounded-xl text-sm font-bold border-2 transition-all ${selectedSize === "L"
                                            ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-100"
                                            : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                                            }`}
                                    >
                                        L
                                    </motion.button>

                                    {/* XL */}
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        transition={SPRING}
                                        onClick={() => setSelectedSize("XL")}
                                        className={`min-w-[52px] h-11 px-4 rounded-xl text-sm font-bold border-2 transition-all ${selectedSize === "XL"
                                            ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-100"
                                            : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                                            }`}
                                    >
                                        XL
                                    </motion.button>

                                </div>
                            </div>

                            <div className="flex lg:flex  items-center gap-3">
                                <div className="flex items-center">

                                    <motion.button
                                        whileTap={{ scale: 0.85 }}
                                        transition={SPRING}
                                        onClick={() => setQty(q => Math.max(1, q - 1))}
                                        className="w-10 h-10 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors"
                                    >
                                        <Minus className="w-3.5 h-3.5" />
                                    </motion.button>

                                    <div className="flex w-12 h-10 border-y border-slate-200 items-center justify-center text-sm font-black text-slate-900 bg-white select-none">
                                        {qty}
                                    </div>

                                    <motion.button
                                        whileTap={{ scale: 0.85 }}
                                        transition={SPRING}
                                        onClick={() => setQty(q => Math.min(10, q + 1))}
                                        className="w-10 h-10 rounded-r-xl border border-l-0 border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors"
                                    >
                                        <Plus className="w-3.5 h-3.5" />
                                    </motion.button>

                                </div>
                                <Link href={"/AllProducts"} className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors text-white ml-1">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span className="text-sm font-medium hidden sm:block">Cart</span>

                                    <span className="bg-amber-400 text-slate-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-black">1</span>

                                </Link>

                                <motion.div
                                    whileTap={{ scale: 0.78 }}
                                    transition={SPRING}
                                >
                                    <Link
                                        href={"/AllProducts"}
                                        className="relative p-2.5 rounded-xl hover:bg-slate-100 transition-colors bg-red-100 text-slate-500 hover:text-rose-500 flex items-center justify-center"
                                    >
                                        <Heart className="w-5 h-5" fill="none" strokeWidth={2} />
                                    </Link>
                                </motion.div>





                                {/* Desktop tabs */}

                            </div>

                            <div className=" lg:block">

                                {/* Tabs */}
                                <div className="flex border-b border-slate-200 mb-5">

                                    <button
                                        onClick={() => setActiveTab("description")}
                                        className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === "description"
                                            ? "border-indigo-600 text-indigo-600"
                                            : "border-transparent text-slate-500 hover:text-slate-800"
                                            }`}
                                    >
                                        Description
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("specs")}
                                        className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === "specs"
                                            ? "border-indigo-600 text-indigo-600"
                                            : "border-transparent text-slate-500 hover:text-slate-800"
                                            }`}
                                    >
                                        Specs
                                    </button>

                                    <button
                                        onClick={() => setActiveTab("reviews")}
                                        className={`px-4 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === "reviews"
                                            ? "border-indigo-600 text-indigo-600"
                                            : "border-transparent text-slate-500 hover:text-slate-800"
                                            }`}
                                    >
                                        Reviews
                                    </button>

                                </div>

                                <AnimatePresence mode="wait">

                                    {/* Description */}
                                    {activeTab === "description" && (
                                        <motion.div
                                            key="desc"
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0, transition: SPRING }}
                                            exit={{ opacity: 0, y: -4 }}
                                            className="text-sm text-slate-600 leading-relaxed whitespace-pre-line"
                                        >
                                            This is a demo product description. It explains the product features,
                                            quality, and usage. You can replace this with real dynamic content later.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </motion.div>
                                    )}

                                    {/* Specs */}
                                    {activeTab === "specs" && (
                                        <motion.div
                                            key="specs"
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0, transition: SPRING }}
                                            exit={{ opacity: 0, y: -4 }}
                                        >
                                            <div className="divide-y divide-slate-100 rounded-xl overflow-hidden border border-slate-200">

                                                <div className="flex text-sm bg-white">
                                                    <span className="w-40 px-4 py-3 font-semibold text-slate-700 border-r border-slate-200">
                                                        Material
                                                    </span>
                                                    <span className="flex-1 px-4 py-3 text-slate-600">
                                                        Cotton
                                                    </span>
                                                </div>

                                                <div className="flex text-sm bg-slate-50">
                                                    <span className="w-40 px-4 py-3 font-semibold text-slate-700 border-r border-slate-200">
                                                        Weight
                                                    </span>
                                                    <span className="flex-1 px-4 py-3 text-slate-600">
                                                        200g
                                                    </span>
                                                </div>

                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Reviews */}
                                    {activeTab === "reviews" && (
                                        <motion.div
                                            key="reviews"
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0, transition: SPRING }}
                                            exit={{ opacity: 0, y: -4 }}
                                        >
                                            <div className="space-y-4">

                                                <div className="p-4 bg-white rounded-2xl border border-slate-200">
                                                    <div className="flex items-start gap-3 mb-2">
                                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                                            <span className="text-sm font-black text-indigo-700">A</span>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-sm font-bold text-slate-900">
                                                                    Alex
                                                                </span>
                                                                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                                                                    ✓ Verified
                                                                </span>
                                                            </div>
                                                            <Stars rating={4} />
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-slate-600">
                                                        Great product! Really liked the quality and design.
                                                    </p>
                                                </div>

                                            </div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ProductDetails;