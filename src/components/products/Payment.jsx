'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion";



import {
    ShoppingCart, Heart, Search, Menu, X, ChevronLeft, ChevronRight,
    Star, Truck, Shield, RefreshCw, Headphones, Eye, EyeOff,
    CreditCard, Smartphone, Wallet, CheckCircle, User, LogIn,
    MapPin, Bell, Package, ArrowRight, Zap, Tag
} from "lucide-react";
import { useNotif } from '../master/SuccessTrigger';

const Payment = ({ }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showPayment, setShowPayment] = useState(false);
    const [paymentDone, setPaymentDone] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState("bkash");
    const notif = useNotif();
    const showNotif = notif?.showNotif;
    useEffect(() => {
        const popup = searchParams.get("popup");
        setShowPayment(true);

    }, [searchParams.toString()]);
    const handleclose = () => {
        setShowPayment(false);

        router.push("/AllProducts");
    }

    // ✅ show message (no URL)

    const handlePay = () => {
        setPaymentDone(true);
        setTimeout(() => {
            setPaymentDone(false);
            setShowPayment(false);
            router.push(`/`);
            showNotif("Order placed successfully! 🎉");
        }, 2000);
    };
    return (
        <div>
            <AnimatePresence>
                {showPayment && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <motion.div
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ duration: 0.25 }}>
                            <button onClick={() => handleclose()} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"><X className="w-5 h-5 text-slate-500" /></button>

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

                                            <div key={""} className="flex justify-between text-sm">
                                                <span className="text-slate-600 truncate max-w-[220px]"></span>
                                                <span className="text-slate-800 font-semibold">৳</span>
                                            </div>

                                            <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between">
                                                <span className="font-bold text-slate-700">Total</span>
                                                <span className="font-black text-indigo-700 text-lg">৳</span>
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
                                        <Shield className="w-5 h-5" /> Pay ৳ Securely
                                    </button>

                                    <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                                        <Shield className="w-3 h-3" /> Protected by SSL 256-bit encryption
                                    </p>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Payment;