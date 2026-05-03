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
const SignUp = ({setShowRegister, setShowLogin,showRegister, showNotif}) => {
  
     const [regForm, setRegForm] = useState({ name: "", email: "", password: "", confirm: "" });
    

    return (
        <div>
            
            <AnimatePresence>
                {showRegister && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <motion.div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative max-h-[90vh] overflow-y-auto"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ duration: 0.25 }}>
                            <button onClick={() => setShowRegister(false)} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"><X className="w-5 h-5 text-slate-500" /></button>

                            <div className="text-center mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center mx-auto mb-3">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Create Account</h2>
                                <p className="text-slate-500 text-sm mt-1">Join millions of shoppers on BazaarBD</p>
                            </div>

                            <motion.div className="space-y-4">
                                {[
                                    { label: "Full Name", key: "name", type: "text", placeholder: "Rahim Uddin" },
                                    { label: "Email Address", key: "email", type: "email", placeholder: "rahim@example.com" },
                                    { label: "Phone Number", key: "phone", type: "tel", placeholder: "+880 1XX XXXX XXXX" },
                                    { label: "Password", key: "password", type: "password", placeholder: "Min. 8 characters" },
                                    { label: "Confirm Password", key: "confirm", type: "password", placeholder: "Re-enter password" },
                                ].map(field => (
                                    <div key={field.key}>
                                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block">{field.label}</label>
                                        <input type={field.type} placeholder={field.placeholder} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-emerald-500 transition-colors placeholder-slate-400" />
                                    </div>
                                ))}

                                <div className="flex items-start gap-3 pt-1">
                                    <input type="checkbox" id="terms" className="mt-0.5 w-4 h-4 accent-emerald-600" />
                                    <label htmlFor="terms" className="text-xs text-slate-500">
                                        I agree to the <a href="#" className="text-emerald-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a>
                                    </label>
                                </div>

                                <button onClick={() => { setShowRegister(false); showNotif("Account created successfully! Welcome to BazaarBD 🎉"); }} className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold py-3.5 rounded-xl transition-all">
                                    Create Account
                                </button>

                                <p className="text-center text-sm text-slate-500">
                                    Already have an account?{" "}
                                    <button onClick={() => { setShowRegister(false); setShowLogin(true); }} className="text-indigo-600 font-semibold hover:underline">Sign in</button>
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SignUp;