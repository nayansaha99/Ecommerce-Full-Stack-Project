"use client"
import { useState, useEffect } from "react";
import Link from 'next/link';
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
import Payment from '../products/Payment';
import Otpverification from '../user/Otpverification';

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
const Appnavbar = (props) => {
    const [showLogin, setShowLogin] = useState(false);

    const [showRegister, setShowRegister] = useState(false);

    const [showCart, setShowCart] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState("bkash");

    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [notification, setNotification] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [otpOpen, setOtpOpen] = useState(false);
    const [mounted, setMounted] = useState(false);


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
                        <Link href={"/login"} className="hover:text-white transition-colors">Sign In</Link>
                        <span className="text-slate-600">|</span>
                        <Link href={"/signup"} className="hover:text-white transition-colors">Register</Link>
                        <Link href={"/otpverification"} className="hover:text-amber-400 transition-colors font-semibold text-amber-500">Try OTP ↗</Link>
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
                            {/* <Login
                                setShowRegister={setShowRegister}
                                setShowLogin={setShowLogin}
                                showLogin={showLogin}
                                showNotif={showNotif}
                            /> */}
                            {
                                
                               props.isLogin ? (
                                   
                                    <Link href={""}>
                                        
                                        <motion.button
                                        
                                            whileHover="hover"
                                            whileTap="tap"
                                            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700"
                                        >
                                            <motion.div
                                                variants={{
                                                    hover: { rotate: 15 },
                                                    tap: { scale: 0.9 },
                                                }}
                                            >
                                                <User className="w-5 h-5" />
                                            </motion.div>

                                            <span className="text-sm font-medium">Logout</span>
                                            
                                        </motion.button>

                                    </Link>
                                ) : (
                                    <>
                                        <Link href={"/login"}>
                                            <motion.button
                                                whileHover="hover"
                                                whileTap="tap"
                                                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-700"
                                            >
                                                <motion.div
                                                    variants={{
                                                        hover: { rotate: 15 },
                                                        tap: { scale: 0.9 },
                                                    }}
                                                >
                                                    <User className="w-5 h-5" />
                                                </motion.div>

                                                <span className="text-sm font-medium">Account</span>
                                            </motion.button>
                                        </Link>
                                    </>
                                )
                                
                            }

                           
                            {/* <WishList
                                setWishlistOpen={setWishlistOpen}
                                wishlistOpen={wishlistOpen}
                                showNotif={showNotif}
                                setShowPayment={setShowPayment}
                            /> */}
                            <motion.div
                                whileTap={{ scale: 0.78 }}
                                transition={SPRING}
                            >
                                <Link
                                    href={"./wishlist"}
                                    className="relative p-2.5 rounded-xl hover:bg-slate-100 transition-colors bg-red-100 text-slate-500 hover:text-rose-500 flex items-center justify-center"
                                >
                                    <Heart className="w-5 h-5" fill="none" strokeWidth={2} />
                                </Link>
                            </motion.div>
                            {/* <CartList
                                showCart={showCart}
                                setShowCart={setShowCart}
                                showNotif={showNotif}
                                 setShowPayment ={setShowPayment} 
                            /> */}
                            <Link href={"/cartlist"} className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors text-white ml-1">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="text-sm font-medium hidden sm:block">Cart</span>
                                <span className="bg-amber-400 text-slate-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-black">1</span>

                            </Link>

                            {/* <MobileNav
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                activeCategory={activeCategory}
                                setShowRegister={setShowRegister}
                                setShowLogin={setShowLogin}
                                showLogin={showLogin} /> */}

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

                {/* Wishlist */}
                {/*CART SIDEBAR */}
                {/* PAYMENT MODAL */}
                {/* <Payment
                    setShowPayment={setShowPayment}
                    showPayment={showPayment}
                    setShowCart={setShowCart}
                    showNotif={showNotif} /> */}

            </div>
        </>
    );
};

export default Appnavbar;