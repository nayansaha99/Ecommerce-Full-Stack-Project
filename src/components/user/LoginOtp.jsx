"use client"
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, RefreshCw, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from '@/utility/FormHelper';
import SubmitButton from '../master/SubmitButton';
import { Toaster } from 'react-hot-toast';

const SPRING = { type: "spring", stiffness: 300, damping: 30 };
const otpModalVar = {
    hidden: { opacity: 0, scale: 0.94, y: 16 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { ...SPRING } },
    exit: { opacity: 0, scale: 0.94, y: 16, transition: { duration: 0.18 } }
};
const backdropVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
};

const TOTAL_DIGITS = 6;

const LoginOtp = (props) => {
    const router = useRouter();
    const [otpOpen, setOtpOpen] = useState(false);
    const [digits, setDigits] = useState(Array(TOTAL_DIGITS).fill(""));
    const [status, setStatus] = useState("idle");
    const [resendTimer, setResendTimer] = useState(0);
    const [expireTimer, setExpireTimer] = useState(0);
    const [canResend, setCanResend] = useState(false);
    const [otpExpired, setOtpExpired] = useState(false);
    const [resending, setResending] = useState(false);
    const [submit, setSubmit] = useState(false);

    const digitsRef = useRef(digits);
    const inputRefs = useRef([]);
    const resendRef = useRef(null);
    const expireRef = useRef(null);

    useEffect(() => { digitsRef.current = digits; }, [digits]);
    useEffect(() => {
        if (!otpOpen) return;

        const empty = Array(TOTAL_DIGITS).fill("");
        setDigits(empty);
        digitsRef.current = empty;
        setStatus("idle");
        setTimeout(() => inputRefs.current[0]?.focus(), 320);

        async function fetchOtpStatus() {
            try {
                const res = await fetch("/api/user/otp-status", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include"
                }).then(r => r.json());
                console.log("OTP STATUS RESPONSE:", res);
                if (res.status === "success") {
                    if (res.otpResendAt) startResendTimer(res.otpResendAt);
                    if (res.otpExpireAt) startExpireTimer(res.otpExpireAt);
                }
            } catch (e) {
                console.error("OTP status fetch failed", e);
            }
        }
        fetchOtpStatus();

        return () => {
            clearInterval(resendRef.current);
            clearInterval(expireRef.current);
        };
    }, [otpOpen]);

    useEffect(() => { setOtpOpen(true); }, []);

    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") handleClose(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    function startResendTimer(otpResendAt) {
        clearInterval(resendRef.current);
        setCanResend(false);
        resendRef.current = setInterval(() => {
            const secondsLeft = Math.ceil((new Date(otpResendAt) - new Date()) / 1000);
            if (secondsLeft <= 0) {
                clearInterval(resendRef.current);
                setResendTimer(0);
                setCanResend(true); // ✅ Resend button active হবে
                return;
            }
            setResendTimer(secondsLeft); // ✅ এটাই timer দেখাবে
        }, 1000);
    }

    function startExpireTimer(otpExpireAt) {
        clearInterval(expireRef.current);
        setOtpExpired(false);
        expireRef.current = setInterval(() => {
            const secondsLeft = Math.ceil((new Date(otpExpireAt) - new Date()) / 1000);
            if (secondsLeft <= 0) {
                clearInterval(expireRef.current);
                setExpireTimer(0);
                setOtpExpired(true);
                return;
            }
            setExpireTimer(secondsLeft);
        }, 1000);
    }

    const formSubmit = async (e) => {
        e?.preventDefault();
        const finalOtp = digits.join("");
        if (finalOtp.length < TOTAL_DIGITS) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 700);
            ErrorToast("Enter all 6 digits");
            return;
        }
        if (submit) return;
        setSubmit(true);
        setStatus("loading");
        try {
            const res = await fetch(`/api/user/verify-otp`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ otp: finalOtp, token: props.token })
            }).then(r => r.json());

            if (res.status === "success") {
                setStatus("success");
                SuccessToast("Login Successful");
                setTimeout(() => { router.push("/"); router.refresh(); }, 800);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 700);
                ErrorToast("Invalid OTP");
            }
        } catch {
            setStatus("idle");
            ErrorToast("Something went wrong");
        } finally {
            setSubmit(false);
        }
    };

    const handleResend = async () => {
        if (!canResend || resending) return;
        setResending(true);
        const empty = Array(TOTAL_DIGITS).fill("");
        setDigits(empty);
        digitsRef.current = empty;
        setStatus("idle");

        try {
            const res = await fetch(`/api/user/resend-otp`, { method: 'POST' }).then(r => r.json());
            if (res.status === "success") {
                startResendTimer(res.otpResendAt);
                startExpireTimer(res.otpExpireAt);
                SuccessToast("Code resent!");
            } else {
                ErrorToast(res.message || "Resend failed");
            }
        } catch {
            ErrorToast("Resend failed");
        } finally {
            setResending(false);
            setTimeout(() => inputRefs.current[0]?.focus(), 100);
        }
    };

    const handleClose = () => { setOtpOpen(false); router.back(); };

    function handleKeyDown(i, e) {
        if (
            !/^\d$/.test(e.key) &&
            !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key) &&
            !e.ctrlKey && !e.metaKey
        ) { e.preventDefault(); return; }

        const current = digitsRef.current;
        if (e.key === "Backspace") {
            e.preventDefault();
            if (current[i]) {
                const n = [...current]; n[i] = "";
                setDigits(n); digitsRef.current = n;
            } else if (i > 0) {
                const n = [...current]; n[i - 1] = "";
                setDigits(n); digitsRef.current = n;
                inputRefs.current[i - 1]?.focus();
            }
        } else if (e.key === "ArrowLeft" && i > 0) {
            inputRefs.current[i - 1]?.focus();
        } else if (e.key === "ArrowRight" && i < TOTAL_DIGITS - 1) {
            inputRefs.current[i + 1]?.focus();
        }
    }

    function handleChange(i, e) {
        const char = e.target.value.replace(/\D/g, "").slice(-1);
        if (!char) { e.target.value = digitsRef.current[i]; return; }
        const n = [...digitsRef.current]; n[i] = char;
        setDigits(n); digitsRef.current = n;
        if (i < TOTAL_DIGITS - 1) inputRefs.current[i + 1]?.focus();
        else inputRefs.current[i]?.blur();
    }

    function handlePaste(e) {
        e.preventDefault();
        const text = e.clipboardData?.getData("text") || "";
        const pasted = text.replace(/\D/g, "").slice(0, TOTAL_DIGITS);
        if (!pasted) return;
        const startIndex = inputRefs.current.findIndex(ref => ref === document.activeElement);
        const from = startIndex < 0 ? 0 : startIndex;
        const n = [...digitsRef.current];
        pasted.split("").forEach((ch, idx) => { if (from + idx < TOTAL_DIGITS) n[from + idx] = ch; });
        setDigits(n); digitsRef.current = n;
        setTimeout(() => inputRefs.current[Math.min(from + pasted.length, TOTAL_DIGITS - 1)]?.focus(), 0);
    }

    const isFilled = digits.join("").length === TOTAL_DIGITS;
const mins = String(Math.floor(resendTimer / 60)).padStart(2, "0"); // "00"
const secs = String(resendTimer % 60).padStart(2, "0"); 

    return (
        <div>
            <Toaster position="top-right" />
            <AnimatePresence>
                {otpOpen && (
                    <>
                        <motion.div key="otp-bd" variants={backdropVar} initial="hidden" animate="visible" exit="exit"
                            onClick={handleClose} className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md" />

                        <motion.div key="otp-modal" variants={otpModalVar} initial="hidden" animate="visible" exit="exit"
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
                            <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl pointer-events-auto overflow-hidden">
                                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500" />
                                <button onClick={handleClose}
                                    className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10">
                                    <X className="w-4 h-4" />
                                </button>

                                <div className="px-7 pt-8 pb-9">
                                    <div className="flex flex-col items-center mb-8">
                                        <div className="relative mb-5">
                                            <AnimatePresence mode="wait">
                                                {status === "success" ? (
                                                    <motion.div key="ok" initial={{ scale: 0 }} animate={{ scale: 1, transition: SPRING }}
                                                        className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                                                        <CheckCircle className="w-8 h-8 text-emerald-600" />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div key="shield" className="relative w-16 h-16">
                                                        <motion.div animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.1, 0.4] }}
                                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
                                            {status === "success" ? "Your account has been verified successfully." : "We sent a 6-digit code to your email"}
                                        </p>
                                    </div>

                                    <motion.div animate={status === "error" ? { x: [0, -8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
                                        transition={{ duration: 0.5 }} className="flex items-center justify-center gap-2.5 mb-7">
                                        {digits.map((digit, i) => (
                                            <motion.div key={i} initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0, transition: { ...SPRING, delay: i * 0.06 } }} className="relative">
                                                <input
                                                    ref={el => { inputRefs.current[i] = el; }}
                                                    type="text" inputMode="numeric" pattern="[0-9]*"
                                                    maxLength={1} value={digit}
                                                    onChange={e => handleChange(i, e)}
                                                    onKeyDown={e => handleKeyDown(i, e)}
                                                    onPaste={handlePaste}
                                                    disabled={status === "loading" || status === "success"}
                                                    className={`w-11 h-14 text-center text-xl font-black rounded-xl border-2 outline-none transition-all duration-150 select-none
                                                        ${digit ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md shadow-indigo-100" : "border-slate-200 bg-slate-50 text-slate-900 hover:border-slate-300"}
                                                        ${status === "error" ? "border-rose-400 bg-rose-50 text-rose-700" : ""}
                                                        ${status === "loading" || status === "success" ? "opacity-60 cursor-not-allowed" : ""}
                                                        focus:border-indigo-500 focus:bg-indigo-50 focus:shadow-md focus:shadow-indigo-100`}
                                                />
                                                {digit && status !== "error" && (
                                                    <motion.div layoutId={`bar-${i}`} className="absolute bottom-1.5 left-2 right-2 h-0.5 bg-indigo-500 rounded-full" />
                                                )}
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    <AnimatePresence>
                                        {status === "error" && (
                                            <motion.p key="err" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                                                className="text-center text-xs font-semibold text-rose-600 mb-4 -mt-4">
                                                Invalid OTP. Please try again.
                                            </motion.p>
                                        )}
                                    </AnimatePresence>

                                    <SubmitButton onClick={formSubmit} submit={submit}
                                        disabled={status === "loading" || status === "success" || !isFilled}
                                        className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-black text-sm tracking-wide transition-all
                                            ${status === "success" ? "bg-emerald-600 text-white" : isFilled ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200" : "bg-slate-100 text-slate-400 cursor-not-allowed"}
                                            ${status === "loading" ? "opacity-70" : ""}`}>
                                        {status === "loading" && <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>}
                                        {status === "success" && <CheckCircle className="w-4 h-4" />}
                                        {status === "success" ? "Verified Successfully" : status === "loading" ? "Verifying…" : "Verify Code"}
                                    </SubmitButton>

                                    {/*Resend Section */}
                                    <div className="flex items-center justify-center gap-1.5 mt-5">
                                        <p className="text-sm text-slate-500">Didn't receive the code?</p>

                                        {resendTimer > 0
                                         
                                            ? <span className="text-sm font-bold text-indigo-600 tabular-nums">
                                                {mins > 0 ? `${mins}:${secs}` : `${secs}s`} 
                                            </span>
                                            : canResend
                                                ? <motion.button
                                                    onClick={handleResend}
                                                    disabled={resending}
                                                    whileTap={{ scale: 0.95 }}
                                                    transition={SPRING}
                                                    className="flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors disabled:opacity-50">
                                                    <RefreshCw className={`w-3.5 h-3.5 ${resending ? "animate-spin" : ""}`} />
                                                    {resending ? "Resending…" : "Resend Code"}
                                                </motion.button>

                                                // ✅ API load হচ্ছে → কিছুই দেখাবে না
                                                : null
                                        }
                                    </div>

                                    {/*Expire Timer */}
                                    <p className="text-center text-[11px] text-slate-400 mt-4 leading-relaxed">
                                        {otpExpired
                                            ? "⚠️ OTP expired! Please resend."
                                            : `🔒 This code expires in ${expireTimer}s. Never share it with anyone.`
                                        }
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

export default LoginOtp;