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
const MobileNav = ({setIsOpen,isOpen,activeCategory,setShowRegister, setShowLogin}) => {
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  function Backdrop({ onClick }) {
    return (
      <motion.div
        key="backdrop"
        variants={backdropVar}
        initial="hidden" animate="visible" exit="exit"
        onClick={onClick}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        aria-hidden="true"
      />
    );
  }
  return (
    <div>
      <motion.button whileTap={{ scale:0.88 }} transition={SPRING}
        onClick={() => (isOpen ? onClose() : onOpen())}
      className="md:hidden p-2 ml-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-700" aria-label="Open menu">
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <>
            <Backdrop onClick={onClose} />
            <motion.nav
              key="mobile-nav"
              variants={slideLeftVar}
              initial="hidden" animate="visible" exit="exit"
              role="dialog" aria-modal="true" aria-label="Mobile navigation"
              className="fixed top-0 left-0 z-[60] h-full w-72 bg-white flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center"><span className="text-white font-black">B</span></div>
                  <span className="font-black text-slate-900">Bazaar<span className="text-indigo-600">BD</span></span>
                </div>
                <motion.button whileTap={{ scale: 0.85, rotate: 90 }} transition={SPRING} onClick={onClose}
                  className="p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-500"><X className="w-5 h-5" /></motion.button>
              </div>

              <div className="px-5 py-4 bg-indigo-50 border-b border-indigo-100">
                <p className="text-xs text-indigo-600 font-semibold mb-2.5">Sign in for exclusive deals</p>
                <div className="flex gap-2">
                  <button onClick={() => { onClose(); setShowLogin(true) }}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 rounded-xl transition-colors">
                    <LogIn className="w-3.5 h-3.5" /> Sign In
                  </button>
                  <button onClick={() => { onClose(); setShowRegister(true); }}
                    className="flex-1 flex items-center justify-center gap-1.5 border border-indigo-200 text-indigo-700 text-xs font-bold py-2.5 rounded-xl hover:bg-indigo-100 transition-colors">
                    <User className="w-3.5 h-3.5" /> Register
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto py-3">
                <div className="px-5">
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Categories</p>
                  <ul className="space-y-0.5">

                    <li>
                      <button
                        onClick={() => { setActiveCategory("All"); onClose(); }}
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors group${activeCategory === "All" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100"}`}
                      >
                        <span className="flex items-center gap-2">
                          <span>🏠</span>All
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-400 transition-colors" />
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() => { setActiveCategory("Electronics"); onClose(); }}
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors group${activeCategory === "Electronics" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100"}`}
                      >
                        <span className="flex items-center gap-2">
                          <span>📱</span>Electronics
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-400 transition-colors" />
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() => { setActiveCategory("Fashion"); onClose(); }}
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors group ${activeCategory === "Fashion" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100"}`}
                      >
                        <span className="flex items-center gap-2">
                          <span>👕</span>Fashion
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-400 transition-colors" />
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={() => { setActiveCategory("Home"); onClose(); }}
                        className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors group ${activeCategory === "Home" ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100"}`}
                      >
                        <span className="flex items-center gap-2">
                          <span>🏡</span>Home
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-400 transition-colors" />
                      </button>
                    </li>

                  </ul>
                </div>
              </div>

              <div className="px-5 py-4 border-t border-slate-100 bg-slate-50">
                <p className="text-xs text-slate-400 text-center">© 2025 BazaarBD · Made in 🇧🇩</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;