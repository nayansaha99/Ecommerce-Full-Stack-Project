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
import Login from '../user/Login';
import SignUp from '../user/SignUp';
import WishList from '../products/WishList';
import CartList from '../products/CartList';
import MobileNav from '../products/MobileNav';

const SPRING = { type: "spring", stiffness: 300, damping: 30 };

const slideLeftVar = {
    hidden: { x: "-100%", opacity: 0.8 },
    visible: { x: 0, opacity: 1, transition: { ...SPRING } },
    exit: { x: "-100%", opacity: 0.8, transition: { duration: 0.22 } },
};
const backdropVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

// const CATEGORIES_LIST = [
//     { name: "Dresses", icon: "👗", count: "2.4k+" },
//     { name: "Ornaments", icon: "💍", count: "1.2k+" },
//     { name: "Electronics", icon: "📱", count: "1.8k+" },
//     { name: "Home & Living", icon: "🏠", count: "3.1k+" },
//     { name: "Beauty", icon: "💄", count: "780+" },
//     { name: "Sports", icon: "⚽", count: "620+" },
//     { name: "Books", icon: "📚", count: "950+" },
//     { name: "Food", icon: "🛒", count: "4.2k+" },
// ];
const Appnavbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [wishlistOpen, setWishlistOpen] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState("bkash");
    const [paymentDone, setPaymentDone] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [notification, setNotification] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const showNotif = (msg, type = "success") => {
        setNotification({ msg, type });
        setTimeout(() => setNotification(null), 2500);
    };
    const handlePay = () => {
        setPaymentDone(true);
        setTimeout(() => {
            setPaymentDone(false);
            setShowPayment(false);
            setShowCart(false);
            setCartItems([]);
            showNotif("Order placed successfully! 🎉");
        }, 2000);
    };
    return (
        <>
            <div className="bg-slate-50 font-sans">
                {/* Notification Toast */}
                {notification && (
                    <div className={`fixed top-4 right-4 z-[999] flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl text-white text-sm font-medium transition-all ${notification.type === "success" ? "bg-emerald-600" : "bg-red-600"}`}>
                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                        {notification.msg}
                    </div>
                )}
                {/* Top Bar */}
                <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 hidden md:flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free delivery on orders over ৳999</span>
                        <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> Flash Sale ends in: 08:24:15</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Deliver to Dhaka</span>
                        <button onClick={() => setShowLogin(true)} className="hover:text-white transition-colors">Sign In</button>
                        <span className="text-slate-600">|</span>
                        <button onClick={() => setShowRegister(true)} className="hover:text-white transition-colors">Register</button>
                    </div>
                </div>

                {/* Main Navbar */}
                <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center">
                                    <span className="text-white font-black text-lg leading-none">B</span>
                                </div>
                                <div className="hidden sm:block">
                                    <span className="text-xl font-black text-slate-900 tracking-tight">Bazaar</span>
                                    <span className="text-xl font-black text-indigo-600 tracking-tight">BD</span>
                                </div>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="flex-1 max-w-2xl mx-auto">
                            <div className="flex items-center bg-slate-100 rounded-xl border border-slate-200 hover:border-indigo-400 transition-colors overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Search products, brands, categories..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    className="flex-1 bg-transparent px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none"
                                />
                                <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white flex items-center gap-2 text-sm font-medium">
                                    <Search className="w-4 h-4" />
                                    <span className="hidden sm:block">Search</span>
                                </button>
                            </div>

                        </div>
                        {/* Nav Actions */}
                        {/* {signinbutton} */}
                        <div className="flex items-center gap-1">
                            <Login
                                setShowRegister={setShowRegister}
                                setShowLogin={setShowLogin}
                                showLogin={showLogin}
                                showNotif={showNotif}
                            />
                            <WishList
                                setWishlistOpen={setWishlistOpen}
                                wishlistOpen={wishlistOpen}
                                showNotif={showNotif}

                            />

                            <CartList
                                showCart={showCart}
                                setShowCart={setShowCart}
                                showNotif={showNotif}
                            />
                            <MobileNav
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                activeCategory={activeCategory}
                                setShowRegister={setShowRegister}
                                setShowLogin={setShowLogin}
                                showLogin={showLogin} />

                        </div>
                    </div>

                    {/* Category Nav */}
                    <div className="border-t border-slate-100 bg-white hidden md:block">
                        <div className="max-w-7xl mx-auto px-4">
                            <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
                                {["All", "Dresses", "Ornaments", "Electronics", "Home & Living", "Beauty", "Sports", "Food"].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeCategory === cat ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-600 hover:text-slate-900"}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                                <button className="px-4 py-3 text-sm font-medium text-rose-600 whitespace-nowrap border-b-2 border-transparent flex items-center gap-1">
                                    <Zap className="w-3.5 h-3.5" /> Flash Sale
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu */}
                </header>
                {/* LOGIN MODAL  */}
                {/* REGISTER MODAL */}
                <SignUp setShowRegister={setShowRegister}
                    setShowLogin={setShowLogin}
                    showRegister={showRegister}
                    showNotif={showNotif} />
                {/* Wishlist */}
                {/*CART SIDEBAR */}
                {/* PAYMENT MODAL */}
                {showPayment && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
                            <button onClick={() => setShowPayment(false)} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"><X className="w-5 h-5 text-slate-500" /></button>

                            {paymentDone ? (
                                <div className="text-center py-8">
                                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-10 h-10 text-emerald-600" />
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-900">Payment Successful!</h2>
                                    <p className="text-slate-500 mt-2">Your order has been placed. Thank you for shopping at BazaarBD!</p>
                                </div>
                            ) : (
                                <>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                                            <CreditCard className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-black text-slate-900">Secure Checkout</h2>
                                            <p className="text-sm text-slate-500">SSL encrypted & secure</p>
                                        </div>
                                    </div>

                                    {/* Order Summary */}
                                    <div className="bg-slate-50 rounded-xl p-4 mb-5 border border-slate-200">
                                        <h3 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2"><Tag className="w-4 h-4 text-indigo-500" /> Order Summary</h3>
                                        <div className="space-y-1.5">
                                            {cartItems.map(i => (
                                                <div key={i.id} className="flex justify-between text-sm">
                                                    <span className="text-slate-600 truncate max-w-[220px]">{i.name.slice(0, 30)}... ×{i.qty}</span>
                                                    <span className="text-slate-800 font-semibold">৳{(i.price * i.qty).toLocaleString()}</span>
                                                </div>
                                            ))}
                                            <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between">
                                                <span className="font-bold text-slate-700">Total</span>
                                                <span className="font-black text-indigo-700 text-lg">৳{cartTotal.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Payment Methods */}
                                    <h3 className="text-sm font-bold text-slate-700 mb-3">Select Payment Method</h3>
                                    <div className="grid grid-cols-3 gap-3 mb-5">
                                        {[
                                            { key: "bkash", label: "bKash", color: "bg-pink-600", icon: "📱", sub: "Mobile Banking" },
                                            { key: "nagad", label: "Nagad", color: "bg-orange-500", icon: "💸", sub: "Mobile Banking" },
                                            { key: "card", label: "Card", color: "bg-blue-600", icon: "💳", sub: "VISA / MasterCard" },
                                        ].map(method => (
                                            <button
                                                key={method.key}
                                                onClick={() => setSelectedPayment(method.key)}
                                                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${selectedPayment === method.key ? "border-indigo-500 bg-indigo-50" : "border-slate-200 bg-white hover:border-slate-300"}`}
                                            >
                                                <span className="text-2xl">{method.icon}</span>
                                                <span className={`text-xs font-black px-2 py-0.5 rounded-md text-white ${method.color}`}>{method.label}</span>
                                                <span className="text-xs text-slate-400">{method.sub}</span>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Payment Input */}
                                    <div className="mb-5">
                                        {selectedPayment !== "card" ? (
                                            <div>
                                                <label className="text-sm font-semibold text-slate-700 mb-1.5 block">
                                                    {selectedPayment === "bkash" ? "bKash" : "Nagad"} Account Number
                                                </label>
                                                <input type="tel" placeholder="+880 1XX XXXX XXXX" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 transition-colors" />
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                <div>
                                                    <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Card Number</label>
                                                    <input type="text" placeholder="1234 5678 9012 3456" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 transition-colors" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Expiry</label>
                                                        <input type="text" placeholder="MM / YY" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 transition-colors" />
                                                    </div>
                                                    <div>
                                                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block">CVV</label>
                                                        <input type="text" placeholder="•••" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 transition-colors" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <button onClick={handlePay} className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-base">
                                        <Shield className="w-5 h-5" /> Pay ৳{cartTotal.toLocaleString()} Securely
                                    </button>

                                    <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                                        <Shield className="w-3 h-3" /> Protected by SSL 256-bit encryption
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Appnavbar;