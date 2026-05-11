'use client'
import React from 'react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation"

import {
    ShoppingCart, Heart, Search, Menu, X, ChevronLeft, ChevronRight,
    Star, Truck, Shield, RefreshCw, Headphones, Eye, EyeOff,
    CreditCard, Smartphone, Wallet, CheckCircle, User, LogIn,
    MapPin, Bell, Package, ArrowRight, Zap, Tag
} from "lucide-react";
import Link from 'next/link';
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '@/utility/FormHelper';
import { Toaster } from 'react-hot-toast';
import { body } from 'framer-motion/client';
import NextTopLoader from 'nextjs-toploader';
import SubmitButton from '../master/SubmitButton';
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
const SignUp = ({ }) => {



    const [showRegister, setShowRegister] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    // const [regForm, setRegForm] = useState({ name: "", email: "", password: "", confirm: "" });
    let [data, setData] = useState({ cus_name: "", cus_phone: "", email: "", password: "" })
    let [submit, setSubmit] = useState(false);
    const inputOnChange = (name, value) => {

        setData((data) => ({

            ...data,
            [name]: value

        }))

    }

    const formSubmit = async () => {
        if (IsEmpty(data.cus_name)) {
            ErrorToast("Your Name is Required")
        }
        else if (IsEmail(data.email)) {
            ErrorToast("Email Required!")
        }
        else if (IsEmpty(data.cus_phone)) {
            ErrorToast("Phone Number is Required!")
        }
        else if (IsEmpty(data.password)) {
            ErrorToast("Password is Required")
        }
        else {
            setSubmit(true);
            const options = { method: 'POST', body: JSON.stringify(data) }

            let res = await (await fetch("/api/user/registration", options)).json();
            
            console.log(res);
            setSubmit(false);

            if (res['status'] === "success") {

                SuccessToast("Request Success")
                await new Promise(r => setTimeout(r, 300));
                router.push("/otpverification")
                
            }
            else {
                ErrorToast("This email is Already Registered");
            }
        }
    }

    useEffect(() => {
        const popup = searchParams.get("popup");
        // This ensures showCart is always in sync with the URL
        setShowRegister(true);
    }, [searchParams.toString()]);

    const handleclose = () => {
        router.back();
        setShowRegister(false);
    }
    useEffect(() => {
        const handleBack = () => {
            router.push("/");
        };
        window.history.pushState(null, "", window.location.href);
        window.addEventListener("popstate", handleBack);

        return () => {
            window.removeEventListener("popstate", handleBack);
        };
    }, []);
    return (
        <div className="">
            <Toaster position="top-right" />
            <AnimatePresence>
                {showRegister && (
                    <><NextTopLoader />
                        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-5 py-4 bg-black/60 backdrop-blur-sm "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <motion.div className="bg-white rounded-2xl  shadow-2xl w-full max-w-md p-6 relative max-h-[100vh] overflow-y-auto scrollbar-hide"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{ duration: 0.25 }}>
                                <button onClick={() => handleclose()} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"><X className="w-5 h-5 text-slate-500" /></button>

                                <div className="text-center mb-5">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center mx-auto mb-3">
                                        <User className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-900">Create Account</h2>
                                    <p className="text-slate-500 text-sm mt-1">Join millions of shoppers on BazaarBD</p>
                                </div>

                                <motion.div className="space-y-2">

                                    {/* { label: "Full Name", key: "name", type: "text", placeholder: "Rahim Uddin" },
                                    { label: "Email Address", key: "email", type: "email", placeholder: "rahim@example.com" },
                                    { label: "Phone Number", key: "phone", type: "tel", placeholder: "+880 1XX XXXX XXXX" },
                                    { label: "Password", key: "password", type: "password", placeholder: "Min. 8 characters" }, */}


                                    <div key={""}>
                                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block form-label">Full Name</label>
                                        <input type="text" placeholder="Full Name"
                                            value={data.cus_name} onChange={(e) => { inputOnChange('cus_name', e.target.value) }}
                                            className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 outline-none focus:border-emerald-500 transition-colors placeholder-slate-400" />

                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Email Address</label>
                                        <input value={data.email} onChange={(e) => { inputOnChange('email', e.target.value) }} type="email" placeholder="rahim@example.com" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 outline-none focus:border-emerald-500 transition-colors placeholder-slate-400" />
                                    </div>

                                    <div>
                                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Phone Number</label>
                                        <input value={data.cus_phone}
                                            onChange={(e) => (inputOnChange('cus_phone', e.target.value))}
                                            type="number" placeholder="+880 1XX XXXX XXXX" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 outline-none focus:border-emerald-500 transition-colors placeholder-slate-400" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Password</label>
                                        <input type="password" value={data.password}
                                            onChange={(e) => (inputOnChange('password', e.target.value))} placeholder="Min. 8 characters" className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-700 outline-none focus:border-emerald-500 transition-colors placeholder-slate-400" />
                                    </div>

                                    <div className="flex items-start gap-3 pt-1">
                                        <input type="checkbox" id="terms" className="mt-0.5 w-4 h-4 accent-emerald-600" />
                                        <label htmlFor="terms" className="text-xs text-slate-500">
                                            I agree to the <a href="#" className="text-emerald-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <SubmitButton submit={submit} type='button' onClick={formSubmit} className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold py-2.5 rounded-xl transition-all">
                                        Create Account
                                    </SubmitButton>

                                    <p className="text-center text-sm text-slate-500">
                                        Already have an account?{" "}
                                        <Link href={"/login"} className="text-indigo-600 font-semibold hover:underline">Sign in</Link>
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SignUp;