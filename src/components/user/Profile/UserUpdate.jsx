'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    ShoppingBag,
    Heart,
    Wallet,
    Settings,
    Bell,
    Search,
    ChevronDown,
    User,
    HelpCircle,
    LogOut,
    TrendingUp,
    Package,
    Star,
    ArrowRight,
    Truck,
    Clock,
    CheckCircle,
    XCircle,
    CreditCard,
    Smartphone,
    Banknote,
    Download,
    ArrowUpRight,
    ShoppingCart,
    MapPin,
    Gift,
    X,
} from "lucide-react";
const USER = {
    name: "Nadia Rahman",
    email: "nadia.rahman@gmail.com",
    initials: "NR",
    tier: "Gold Member",
    location: "Dhaka, Bangladesh",
    State: "Dhaka",
    
};
const  UserUpdate = () => {
     const router = useRouter();
    const [profileOpen, setProfileOpen] = useState(false);
    const searchParams = useSearchParams();
    useEffect(() => {
        const popup = searchParams.get("popup");

        // This ensures showCart is always in sync with the URL
        setProfileOpen(true);

    }, [searchParams.toString()]);
    const handleclose = () => {
        setProfileOpen(false);
        router.back();
    }

    return (

        <div>
            <AnimatePresence>
                {profileOpen && (
                    <>
                        {/* Dark backdrop — click to close */}
                        <motion.div
                            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]"
                            onClick={() => handleclose()}
                            aria-hidden="true"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal box */}
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>

                            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl shadow-slate-300/60 overflow-hidden pointer-events-auto">

                                {/* Modal header */}
                                <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                                            <User className="w-4.5 h-4.5 text-indigo-600" style={{ width: 18, height: 18 }} />
                                        </div>
                                        <div>
                                            <h2 className="text-base font-black text-slate-900">Edit Profile</h2>
                                            <p className="text-xs text-slate-500">Update your personal information</p>
                                        </div>
                                    </div>
                                    {/* Close X button */}
                                    <button
                                        onClick={() => handleclose()}
                                        className="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
                                        aria-label="Close edit profile popup"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Avatar row inside modal */}
                                <div className="px-6 pt-5 pb-2 flex items-center gap-4 border-b border-slate-50">
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md">
                                            <span className="text-lg font-black text-white">{USER.initials}</span>
                                        </div>
                                        <button
                                            className="absolute -bottom-1 -right-1 w-6 h-6 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors"
                                            aria-label="Change avatar"
                                        >
                                            <svg className="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                                                <circle cx="12" cy="13" r="4" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">{USER.name}</p>
                                        <p className="text-xs text-slate-500">{USER.email}</p>
                                        <button className="text-xs text-indigo-600 font-semibold hover:underline mt-0.5">
                                            Change photo
                                        </button>
                                    </div>
                                </div>

                                {/* Form fields */}
                                <div className="px-3 py-2 lg:px-4 lg:py-3">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 mb-5">

                                        {/* Full Name */}
                                        <div className="">
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                                Full Name
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                <input
                                                    type="text"
                                                    defaultValue={USER.name}
                                                    className="w-full pl-10 pr-4 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all placeholder-slate-400"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className='mt-1 lg:mt-0'>
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                                <input
                                                    type="email"
                                                    defaultValue={USER.email}
                                                    className="w-full pl-10 pr-4 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all placeholder-slate-400"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className='mt-1 lg:mt-0'>
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7 2 2 0 011.72 2z" /></svg>
                                                <input
                                                    type="tel"
                                                    defaultValue="+880 1712 345 678"
                                                    className="w-full pl-10 pr-4 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all placeholder-slate-400"
                                                />
                                            </div>
                                        </div>

                                        {/* Address */}
                                        <div className='mt-1 lg:mt-0'>
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                                Delivery Address
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                <input
                                                    type="text"
                                                    defaultValue="Flat 4B, House 12, Dhanmondi, Dhaka"
                                                    className="w-full pl-10 pr-4 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all placeholder-slate-400"
                                                />
                                            </div>
                                        </div>
                                        {/* State */}
                                        <div className='mt-1 lg:mt-0'>
                                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                                State
                                            </label>
                                            <div className="relative">
                                                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                                <input
                                                    type="text"
                                                    defaultValue="Flat 4B, House 12, Dhanmondi, Dhaka"
                                                    className="w-full pl-10 pr-4 py-2.5 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all placeholder-slate-400"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Modal action buttons */}
                                    <div className="flex items-center gap-3 border-t border-slate-100">
                                        <button
                                            type="button"
                                            className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-indigo-200"
                                        >
                                            <CheckCircle className="w-4 h-4" />
                                            Save Changes
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleclose()}
                                            className="px-4 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-semibold rounded-xl transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>




    );
};

export default UserUpdate;