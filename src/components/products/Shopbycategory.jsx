'use client'
import React from 'react';
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
const SPRING = { type: "spring", stiffness: 300, damping: 30 };
import {
    ShoppingCart, Heart, Search, Menu, X,
    ChevronLeft, ChevronRight, Star, Truck, Shield,
    RefreshCw, Headphones, Eye, EyeOff, CreditCard,
    CheckCircle, User, LogIn, MapPin, Bell, Package,
    ArrowRight, Zap, Lock, Mail, Phone, Trash2,
} from "lucide-react";
const CATEGORIES_LIST = [
    { name: "Dresses", icon: "👗", count: "2.4k+" },
    { name: "Ornaments", icon: "💍", count: "1.2k+" },
    { name: "Electronics", icon: "📱", count: "1.8k+" },
    { name: "Home & Living", icon: "🏠", count: "3.1k+" },
    { name: "Beauty", icon: "💄", count: "780+" },
    { name: "Sports", icon: "⚽", count: "620+" },
    { name: "Books", icon: "📚", count: "950+" },
    { name: "Food", icon: "🛒", count: "4.2k+" },
];
const Shopbycategory = () => {
   const [activeCategory, setActiveCategory] = useState("All");
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-black text-slate-900">Shop by Category</h2>
                    <button className="text-sm text-indigo-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">View all <ArrowRight className="w-4 h-4" /></button>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {CATEGORIES_LIST.map(cat => (
                        <motion.button key={cat.name} whileTap={{ scale: 0.93 }} transition={SPRING}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all
                           ${activeCategory === cat.name ? "border-indigo-400 bg-indigo-50" : "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50"}`}>
                            <span className="text-2xl">{cat.icon}</span>
                            <span className="text-xs font-semibold text-slate-700 text-center leading-tight">{cat.name}</span>
                            <span className="text-xs text-slate-400">{cat.count}</span>
                        </motion.button>
                    ))}
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 mt-8">
                <div className="bg-gradient-to-r from-rose-600 to-orange-500 rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Zap className="w-6 h-6 text-white fill-white flex-shrink-0" />
                        <div>
                            <p className="text-white font-black text-lg">Flash Sale Live Now!</p>
                            <p className="text-white/80 text-sm">Limited time deals — grab before they're gone</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                        {["08", "24", "15"].map((t, i) => (
                            <span key={i} className="flex items-center gap-1">
                                <span className="bg-white/20 rounded-lg px-2.5 py-1.5 font-black text-lg tabular-nums">{t}</span>
                                {i < 2 && <span className="font-black text-xl">:</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shopbycategory;