"use client"
import React from 'react';
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShoppingCart, Heart, Search, Menu, X,
    ChevronLeft, ChevronRight, Star, Truck, Shield,
    RefreshCw, Headphones, Eye, EyeOff, CreditCard,
    CheckCircle, User, LogIn, MapPin, Bell, Package,
    ArrowRight, Zap, Lock, Mail, Phone, Trash2,
    Minus, Plus, ArrowLeft, Share2, Check,
} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation"
import { ErrorToast, GetEmail, IsEmpty, SuccessToast } from '@/utility/FormHelper';
import SubmitButton from '../master/SubmitButton';
import { Toaster } from 'react-hot-toast';
// ─── Spring config ───────────────────────────────────────────────────────────
const SPRING = { type: "spring", stiffness: 300, damping: 30 };
const otpModalVar = { hidden: { opacity: 0, scale: 0.94, y: 16 }, visible: { opacity: 1, scale: 1, y: 0, transition: { ...SPRING } }, exit: { opacity: 0, scale: 0.94, y: 16, transition: { duration: 0.18 } } };
const backdropVar = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.25 } }, exit: { opacity: 0, transition: { duration: 0.2 } } };
const TOTAL_DIGITS = 6;
const RESEND_SECS = 60;
const RegOTP = (props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [otpOpen, setOtpOpen] = useState(false);
    const [digits, setDigits] = useState(Array(TOTAL_DIGITS).fill(""));
    const [status, setStatus] = useState("idle");
    const [timer, setTimer] = useState(RESEND_SECS);
    const [resending, setResending] = useState(false);

    const inputRefs = useRef([]);
    let [otpExpire, setotpExpire] = useState(false)
    let [data, setData] = useState({ otp: "" })
    let [submit, setSubmit] = useState(false)
    // input event
    const inputOnChange = (name, value) => {
        setData((data) => ({
            ...data,
            [name]: value
        }))
    }
    // OTPformSubmit
    const formSubmit = async () => {
        try {
            const finalOtp = data.otp.join("");
            if (IsEmpty(data.otp)) {
                ErrorToast("Valid PIN Required")
            }
            else {
                setSubmit(true);
                const body = { otp: finalOtp, token: props }
                console.log(body);


                const options = { method: 'POST', body: JSON.stringify(body) }
                let res = await (await fetch(`/api/user/verify-otp`, options)).json();
                console.log("Hello");

                setSubmit(false);
                if (res['status'] === "success") {
                    console.log(res.data);
                    SuccessToast("Registration Completed. Welcome to BazaarBD");

                    await fetch("/api/user/logout", {
                        method: "GET"
                    });
                    await new Promise(r => setTimeout(r, 300));
                    router.push("/login");
                }
                else {
                    ErrorToast("Invalid Pin")
                }
            }
        }
        catch (e) {
            ErrorToast("Otp Send Failed")
            setSubmit(false);



        }
    }
    // ResendOTP
    const RegresendOTP = async () => {
        try {
            setResending(true);
            const options = { method: 'POST' }
            const res = await (await fetch(`api/user/resend-otp`, options)).json();
            setResending(false);
            if (res['status'] === "success") {
                SuccessToast("Resent a code")

            }
            else {
                ErrorToast("Invalid pin")
            }
        }
        catch (e) {
            ErrorToast("Resend Failed")
            setResending(false);

        }
    }
    // after refresh update otpExpiry
    useEffect(() => {

        fetch("/api/user/updateOtpExpiry", {
            method: "POST"
        });

    }, []);
    // otp is Expired
    useEffect(() => {
        const interval = setInterval(() => {
            fetch("/api/user/verify-otp")
                .then(res => res.json())
                .then(data => {
                    console.log("OTP cleanup called", data);
                })
                .catch(err => {
                    console.error("Error calling API", err);
                });
        }, 60000); // 1 minute
        return () => clearInterval(interval);

    }, []);

    // OTP open
    useEffect(() => {
        const popup = searchParams.get("popup");

        // This ensures showCart is always in sync with the URL
        setOtpOpen(true);

    }, [searchParams.toString()]);

    const handleclose = async () => {
        setOtpOpen(false);
        await fetch("/api/user/logout", {
            method: "GET"
        });
        await new Promise(r => setTimeout(r, 50));
        router.push("/");
    }
    // browserBack
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

    // otp Form
    async function handleVerify() {
        const otp = digits.join("");
        if (otp.length < TOTAL_DIGITS) { setStatus("error"); setTimeout(() => setStatus("idle"), 700); return; }
        setStatus("loading");
        await new Promise(r => setTimeout(r, 1200));
        setStatus("success");
        setTimeout(() => { (otp); setOtpOpen?.(); }, 1000);
    }
    async function handleResend() {
        if (timer > 0 || resending) return;
        setResending(true); setDigits(Array(TOTAL_DIGITS).fill("")); setStatus("idle");
        await new Promise(r => setTimeout(r, 800));
        setTimer(RESEND_SECS); setResending(false);
        setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
    useEffect(() => { document.body.style.overflow = otpOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [otpOpen]);
    useEffect(() => {
        if (otpOpen) { setDigits(Array(TOTAL_DIGITS).fill("")); setStatus("idle"); setTimer(RESEND_SECS); setTimeout(() => inputRefs.current[0]?.focus(), 320); }

    }, [otpOpen]);
    useEffect(() => {
        if (!otpOpen || timer <= 0) return;
        const t = setInterval(() => setTimer(s => s - 1), 1000);
        return () => clearInterval(t);
    }, [otpOpen, timer]);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setOtpOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // Cleanup function to prevent memory leaks
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [setOtpOpen]); // Only depend on the setter function itself

    function handleChange(i, e) {
        const char = e.target.value.replace(/\D/g, "").slice(-1);
        if (!char) return;
        setDigits(prev => { const n = [...prev]; n[i] = char; return n; });
        if (i < TOTAL_DIGITS - 1) inputRefs.current[i + 1]?.focus();
        else inputRefs.current[i]?.blur();
    }

    function handleKeyDown(i, e) {
        if (e.key === "Backspace") {
            if (digits[i]) { setDigits(prev => { const n = [...prev]; n[i] = ""; return n; }); }
            else if (i > 0) { inputRefs.current[i - 1]?.focus(); setDigits(prev => { const n = [...prev]; n[i - 1] = ""; return n; }); }
        } else if (e.key === "ArrowLeft" && i > 0) inputRefs.current[i - 1]?.focus();
        else if (e.key === "ArrowRight" && i < TOTAL_DIGITS - 1) inputRefs.current[i + 1]?.focus();
    }

    function handlePaste(e) {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, TOTAL_DIGITS);
        if (!pasted) return;
        const next = Array(TOTAL_DIGITS).fill("");
        pasted.split("").forEach((ch, i) => { next[i] = ch; });
        setDigits(next);
        inputRefs.current[Math.min(pasted.length, TOTAL_DIGITS - 1)]?.focus();
    }

    async function handleVerify() {
        const otp = digits.join("");
        if (otp.length < TOTAL_DIGITS) { setStatus("error"); setTimeout(() => setStatus("idle"), 700); return; }
        setStatus("loading");
        await new Promise(r => setTimeout(r, 1200));
        setStatus("success");
        setTimeout(() => { (otp); setOtpOpen(false)?.(); }, 1000);
    }

    async function handleResend() {
        if (timer > 0 || resending) return;
        setResending(true); setDigits(Array(TOTAL_DIGITS).fill("")); setStatus("idle");
        await new Promise(r => setTimeout(r, 800));
        setTimer(RESEND_SECS); setResending(false);
        setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }

    const isFilled = digits.join("").length === TOTAL_DIGITS;
    const mins = String(Math.floor(timer / 60)).padStart(2, "0");
    const secs = String(timer % 60).padStart(2, "0");

    return (
        <div>
            <Toaster position="top-right" />
            <AnimatePresence>
                {otpOpen && (
                    <>
                        <motion.div key="otp-bd" variants={backdropVar} initial="hidden" animate="visible" exit="exit"
                            onClick={() => handleclose()} className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md" aria-hidden="true" />
                        <motion.div key="otp-modal" variants={otpModalVar} initial="hidden" animate="visible" exit="exit"
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none" role="dialog" aria-modal="true">
                            <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl pointer-events-auto overflow-hidden">
                                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500" />
                                <button onClick={() => handleclose()} className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10" aria-label="Close">
                                    <X className="w-4 h-4" />
                                </button>
                                <div className="px-7 pt-8 pb-9">
                                    <div className="flex flex-col items-center mb-8">
                                        <div className="relative mb-5">
                                            <AnimatePresence mode="wait">
                                                {status === "success" ? (
                                                    <motion.div key="ok" initial={{ scale: 0 }} animate={{ scale: 1, transition: SPRING }} className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                                                        <CheckCircle className="w-8 h-8 text-emerald-600" />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div key="shield" className="relative w-16 h-16">
                                                        <motion.div animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.1, 0.4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                            className="absolute inset-0 rounded-2xl bg-indigo-200" />
                                                        <div className="relative w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center">
                                                            <Shield className="w-8 h-8 text-indigo-600" />
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1.5">
                                            {status === "success" ? "Verified!" : "OTP Verification"}
                                        </h2>
                                        <p className="text-sm text-slate-500 text-center leading-relaxed">
                                            {status === "success"
                                                ? "Your number has been verified successfully."
                                                : <><span>We sent a 6-digit code to</span><br /><span className="font-semibold text-slate-700">@gmail.com</span></>
                                            }
                                        </p>
                                    </div>

                                    {/* OTP digit inputs */}
                                    <motion.div
                                        animate={status === "error" ? { x: [0, -8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex items-center justify-center gap-2.5 mb-7"
                                    >
                                        {digits.map((data, i) => (
                                            <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0, transition: { ...SPRING, delay: i * 0.06 } }} className="relative">
                                                <input
                                                    ref={el => { inputRefs.current[i] = el; }}
                                                    type="text"
                                                    inputMode="numeric"
                                                    pattern="[0-9]*"
                                                    maxLength={1}
                                                    value={data.otp}
                                                    onChange={e => {
                                                        handleChange(i, e);
                                                        const value = e.target.value;
                                                        setData(prev => {
                                                            const otpArray = [...prev.otp];
                                                            otpArray[i] = value
                                                            return {
                                                                ...prev,
                                                                otp: otpArray
                                                            }
                                                        })
                                                    }}
                                                    onKeyDown={e => handleKeyDown(i, e)}
                                                    onPaste={handlePaste}
                                                    aria-label={`data ${i + 1}`}
                                                    disabled={status === "loading" || status === "success"}
                                                    className={`w-11 h-14 text-center text-xl font-black rounded-xl border-2 outline-none transition-all duration-150 select-none
                                      ${data ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md shadow-indigo-100" : "border-slate-200 bg-slate-50 text-slate-900 hover:border-slate-300"}
                                      ${status === "error" ? "border-rose-400 bg-rose-50 text-rose-700" : ""}
                                      ${status === "loading" || status === "success" ? "opacity-60 cursor-not-allowed" : ""}
                                      focus:border-indigo-500 focus:bg-indigo-50 focus:shadow-md focus:shadow-indigo-100`}
                                                />
                                                {data && status !== "error" && (
                                                    <motion.div layoutId={`bar-${i}`} className="absolute bottom-1.5 left-2 right-2 h-0.5 bg-indigo-500 rounded-full" />
                                                )}
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    <AnimatePresence>
                                        {status === "error" && (
                                            <motion.p key="err" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                                                className="text-center text-xs font-semibold text-rose-600 mb-4 -mt-4">
                                                Please enter all 6 digits to verify.
                                            </motion.p>
                                        )}
                                    </AnimatePresence>

                                    <SubmitButton onClick={formSubmit}
                                        submit={submit}
                                        disabled={status === "loading" || status === "success"}
                                        whileTap={{ scale: 0.97 }} transition={SPRING}
                                        className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-black text-sm tracking-wide transition-all
                                ${status === "success" ? "bg-emerald-600 text-white"
                                                : isFilled ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200"
                                                    : "bg-slate-100 text-slate-400 cursor-not-allowed"}
                                ${status === "loading" ? "opacity-70" : ""}`}>
                                        {status === "loading" && <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>}
                                        {status === "success" && <CheckCircle className="w-4 h-4" />}
                                        {status === "success" ? "Verified Successfully" : status === "loading" ? "Verifying…" : "Verify Code"}
                                    </SubmitButton>

                                    <div className="flex items-center justify-center gap-1.5 mt-5">
                                        <p className="text-sm text-slate-500">Didn't receive the code?</p>
                                        {timer > 0
                                            ? <span className="text-sm font-bold text-indigo-600 tabular-nums">{mins}:{secs}</span>
                                            : <motion.button
                                                onClick={async () => {
                                                    if (resending) return;

                                                    await RegresendOTP();
                                                    handleResend();
                                                }}
                                                disabled={resending}
                                                whileTap={{ scale: 0.95 }}
                                                transition={SPRING}
                                                className="flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors disabled:opacity-50"
                                            >
                                                <RefreshCw
                                                    className={`w-3.5 h-3.5 ${resending ? "animate-spin" : ""}`}
                                                />

                                                {resending ? "Resending…" : "Resend Code"}
                                            </motion.button>
                                        }
                                    </div>
                                    <p className="text-center text-[11px] text-slate-400 mt-4 leading-relaxed">
                                        🔒 This code expires in 10 minutes. Never share it with anyone.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default RegOTP;