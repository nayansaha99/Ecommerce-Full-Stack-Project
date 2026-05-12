'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingCart, Heart, Search, Menu, X, ChevronLeft, ChevronRight,
    Star, Truck, Shield, RefreshCw, Headphones, Eye, EyeOff,
    CreditCard, Smartphone, Wallet, CheckCircle, User, LogIn,
    MapPin, Bell, Package, ArrowRight, Zap, Tag
} from "lucide-react";
import Appnavbar from '../master/Appnavbar';
import Link from 'next/link';
import { useSearchParams, useRouter } from "next/navigation"
import SubmitButton from '../master/SubmitButton';
import { Toaster } from 'react-hot-toast'
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '@/utility/FormHelper';
const Login = () => {
    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();
    let [data, setData] = useState({ email: "", password: "" })
    let [submit, setSubmit] = useState(false);
    //inputOnchange
    const inputOnChange = (name, value) => {

        setData((data) => ({

            ...data,
            [name]: value

        }))

    }

    //Form Submission
    const formSubmit = async () => {
        
        if (IsEmail(data.email)) {
            ErrorToast("Email Required!")
        }
        else if (IsEmpty(data.password)) {
            ErrorToast("Password is Required")
        }
        else {
            setSubmit(true);
            const options = { method: 'POST', body: JSON.stringify(data) }

            let res = await (await fetch("/api/user/login", options)).json();

            console.log(res);
            setSubmit(false);
            if (res['status'] === "success") {

                SuccessToast("Request Success")
                await  new Promise(r => setTimeout(r, 300));
                router.push("/loginotpverification")

            }
            else {
                ErrorToast("This email is Invalid");
            }
        }
    }
    useEffect(() => {
        const popup = searchParams.get("popup");
        // This ensures showCart is always in sync with the URL
        setShowLogin(true);
    }, [searchParams.toString()]);

    const handleclose = () => {
        setShowLogin(false);
        router.push('/');
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
        <div>
            <Toaster position="top-right" />
            <AnimatePresence>
                {showLogin && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ duration: 0.25 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
                        >
                            <button onClick={() => handleclose()} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"><X className="w-5 h-5 text-slate-500" /></button>

                            <div className="text-center mb-7">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto mb-3">
                                    <span className="text-white font-black text-xl">B</span>
                                </div>
                                <h2 className="text-2xl font-black text-slate-900">Welcome Back</h2>
                                <p className="text-slate-500 text-sm mt-1">Sign in to your BazaarBD account</p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Email Address</label>
                                    <input type="email" value={data.email} onChange={(e) => (inputOnChange('email', e.target.value))}   placeholder="you@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 transition-colors placeholder-slate-400" />
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Password</label>
                                    <div className="relative">
                                        <input type="password" value={data.password}
                                            onChange={(e) => (inputOnChange('password', e.target.value))} placeholder="Enter your password"  className="w-full border border-slate-200 rounded-xl px-4 py-3 pr-12 text-sm text-slate-700 outline-none focus:border-indigo-500 transition-colors placeholder-slate-400" />
                                        <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    <a href="#" className="text-xs text-indigo-600 hover:underline mt-1 block text-right">Forgot password?</a>
                                </div>

                                <SubmitButton submit={submit} type='button' onClick={formSubmit} className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold py-3.5 rounded-xl transition-all mt-2">
                                    Sign In
                                </SubmitButton>

                                <div className="relative my-4">
                                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
                                    <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-slate-400">or continue with</span></div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                                        <span className="text-base">🇬</span> Google
                                    </button>
                                    <button className="flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                                        <span className="text-base">📘</span> Facebook
                                    </button>
                                </div>

                                <p className="text-center text-sm text-slate-500 mt-2">
                                    Don't have an account?{" "}
                                    <Link
                                        href={"/signup"}
                                        className="text-indigo-600 font-semibold hover:underline"
                                    >
                                        Create one
                                    </Link>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Login;