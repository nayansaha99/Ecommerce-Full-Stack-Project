'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { startTransition } from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation"
import {
    ShoppingCart, X, ArrowRight,
} from "lucide-react";
const CartList = ({ }) => {
    const router = useRouter();
    const [cartItems, setCartItems] = useState([]);
    const handleclose = () => {
        startTransition(() => {
            router.back();
        });
    };
    const addToCart = (product) => {
        setCartItems(prev => {
            const exists = prev.find(i => i.id === product.id);
            if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
            return [...prev, { ...product, qty: 1 }];
        });
        showNotif(`"${product.name.slice(0, 28)}..." added to cart`);
    };
    const cartTotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
    const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);
    return (
        <div>
            {/* //modal */}
            <motion.div
                className="fixed inset-0 z-50 flex bg-black/50 backdrop-blur-sm overflow-hidden touch-none overscroll-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="flex-1 bg-black/50"
                    onClick={() => handleclose()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="w-full max-w-md bg-white flex flex-col h-dvh overflow-y-auto shadow-2xl"
                >
                    <div className="flex items-center justify-between p-5 border-b border-slate-200">
                        <h2 className="text-lg font-black text-slate-900 flex items-center gap-2">
                            <ShoppingCart className="w-5 h-5 text-indigo-600" /> My Cart ({cartCount})
                        </h2>
                        <button onClick={() => handleclose()} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                            <X className="w-5 h-5 text-slate-600" />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-16 text-slate-400">
                                <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-40" />
                                <p className="font-medium">Your cart is empty</p>
                            </div>
                        ) : cartItems.map(item => (
                            <div key={item.id} className="flex gap-3 bg-slate-50 rounded-xl p-3 border border-slate-200">
                                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-slate-800 line-clamp-1">{item.name}</p>
                                    <p className="text-indigo-600 font-black text-sm mt-0.5">৳{item.price.toLocaleString()}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button onClick={() => setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))} className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100 transition-colors text-lg leading-none">-</button>
                                        <span className="text-sm font-bold text-slate-800 w-5 text-center">{item.qty}</span>
                                        <button onClick={() => setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i))} className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100 transition-colors text-lg leading-none">+</button>
                                        <button onClick={() => setCartItems(prev => prev.filter(i => i.id !== item.id))} className="ml-auto p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-5 border-t border-slate-200 bg-slate-50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-slate-600 font-medium">Subtotal</span>
                            <span className="text-xl font-black text-slate-900">৳{cartTotal.toLocaleString()}</span>
                        </div>
                        <Link href={""} className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
                            Proceed to Checkout
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
export default CartList;
