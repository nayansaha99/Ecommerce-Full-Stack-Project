"use client";

/**
 * ════════════════════════════════════════════════════════════════
 *  BazaarBD — UserDashboard.jsx
 *
 *  Premium, luxury-grade user dashboard.
 *
 *  Constraints:
 *  • One single useState hook (profile menu open/close)
 *  • No useEffect, useMemo, or other hooks
 *  • Raw JSX + Tailwind CSS only
 *  • lucide-react for icons
 *  • Fully responsive (mobile → tablet → desktop)
 *
 *  Usage:
 *    import UserDashboard from "@/components/UserDashboard";
 *    <UserDashboard />
 * ════════════════════════════════════════════════════════════════
 */

import { useState } from "react";
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
import Link from "next/link";

// ─── Static data ─────────────────────────────────────────────────────────────
// All data is defined as plain constants — no hooks needed.

const USER = {
  name: "Nadia Rahman",
  email: "nadia.rahman@gmail.com",
  initials: "NR",
  tier: "Gold Member",
  location: "Dhaka, Bangladesh",
};

const STATS = [
  {
    label: "Total Spent",
    value: "৳1,24,500",
    change: "+12% this month",
    positive: true,
    icon: TrendingUp,
    accent: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-100",
  },
  {
    label: "Active Orders",
    value: "3",
    change: "2 out for delivery",
    positive: true,
    icon: Package,
    accent: "bg-emerald-50 text-emerald-600",
    border: "border-emerald-100",
  },
  {
    label: "Loyalty Points",
    value: "4,280",
    change: "Redeem ৳428 off",
    positive: true,
    icon: Star,
    accent: "bg-amber-50 text-amber-600",
    border: "border-amber-100",
  },
  {
    label: "Wishlist Items",
    value: "14",
    change: "3 on sale now",
    positive: true,
    icon: Heart,
    accent: "bg-rose-50 text-rose-600",
    border: "border-rose-100",
  },
];

const ORDERS = [
  {
    id: "ORD-2025-8841",
    product: "22K Gold Bangles Set",
    date: "May 3, 2025",
    amount: "৳32,000",
    status: "Delivered",
    items: 1,
    img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=56&q=80",
  },
  {
    id: "ORD-2025-8720",
    product: "Banarasi Silk Saree",
    date: "Apr 28, 2025",
    amount: "৳4,500",
    status: "Shipped",
    items: 1,
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=56&q=80",
  },
  {
    id: "ORD-2025-8611",
    product: "Muslin Anarkali + Accessories",
    date: "Apr 15, 2025",
    amount: "৳7,250",
    status: "Processing",
    items: 3,
    img: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=56&q=80",
  },
  {
    id: "ORD-2025-8490",
    product: "Jamdani Saree – Heritage",
    date: "Apr 2, 2025",
    amount: "৳8,500",
    status: "Cancelled",
    items: 1,
    img: "https://images.unsplash.com/photo-1620910756680-4f3e7b4484bd?w=56&q=80",
  },
  {
    id: "ORD-2025-8312",
    product: "Kundan Choker + Jhumka Earrings",
    date: "Mar 18, 2025",
    amount: "৳5,650",
    status: "Delivered",
    items: 2,
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=56&q=80",
  },
];

const PAYMENTS = [
  { id: "TXN-88412", date: "May 3, 2025", amount: "৳32,000", method: "bKash", status: "Success", order: "ORD-2025-8841" },
  { id: "TXN-88201", date: "Apr 28, 2025", amount: "৳4,500", method: "VISA ••4421", status: "Success", order: "ORD-2025-8720" },
  { id: "TXN-88099", date: "Apr 15, 2025", amount: "৳7,250", method: "Nagad", status: "Success", order: "ORD-2025-8611" },
  { id: "TXN-87821", date: "Apr 2, 2025", amount: "৳8,500", method: "bKash", status: "Refunded", order: "ORD-2025-8490" },
  { id: "TXN-87512", date: "Mar 18, 2025", amount: "৳5,650", method: "Nagad", status: "Success", order: "ORD-2025-8312" },
];

const NAV_LINKS = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: ShoppingBag, label: "My Orders", active: false },
  { icon: Heart, label: "Wishlist", active: false },
  { icon: Wallet, label: "Wallet", active: false },
  { icon: Settings, label: "Settings", active: false },
];

// ─── Helper: order status config ─────────────────────────────────────────────
function statusConfig(status) {
  const map = {
    Delivered: { icon: CheckCircle, classes: "text-emerald-700 bg-emerald-50 border-emerald-200" },
    Shipped: { icon: Truck, classes: "text-blue-700 bg-blue-50 border-blue-200" },
    Processing: { icon: Clock, classes: "text-amber-700 bg-amber-50 border-amber-200" },
    Cancelled: { icon: XCircle, classes: "text-rose-700 bg-rose-50 border-rose-200" },
    Success: { icon: CheckCircle, classes: "text-emerald-700 bg-emerald-50 border-emerald-200" },
    Refunded: { icon: ArrowUpRight, classes: "text-amber-700 bg-amber-50 border-amber-200" },
  };
  return map[status] ?? map.Processing;
}

// ─── Helper: payment method icon ─────────────────────────────────────────────
function MethodIcon({ method }) {
  if (method.includes("bKash") || method.includes("Nagad")) {
    return <Smartphone className="w-4 h-4" />;
  }
  if (method.includes("VISA") || method.includes("Card")) {
    return <CreditCard className="w-4 h-4" />;
  }
  return <Banknote className="w-4 h-4" />;
}

// ════════════════════════════════════════════════════════════════════════════
//  MAIN COMPONENT — one single useState hook
// ════════════════════════════════════════════════════════════════════════════
export default function UserDashboard() {
  // ── THE ONLY STATE: null | "profileMenu" | "editProfile" ──────────
  // "profileMenu"  → top-right profile dropdown is open
  // "editProfile"  → Edit Profile popup/modal is open
  const [profileOpen, setProfileOpen] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* ══════════════════════════════════════════════════════════
          LAYOUT WRAPPER — sidebar on left, content on right
      ══════════════════════════════════════════════════════════ */}
      <div className="flex min-h-screen">

        {/* ─────────────────────────────────────────────────────
            SIDEBAR — hidden on mobile, visible from lg upward
        ───────────────────────────────────────────────────── */}
        <aside className="hidden lg:flex flex-col w-64 xl:w-72 bg-white border-r border-slate-100 shadow-sm fixed top-0 left-0 h-full z-30">

          {/* Logo */}
          <div className="px-6 py-6 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-sm leading-none">B</span>
              </div>
              <div className="leading-tight">
                <span className="text-lg font-black text-slate-900 tracking-tight">Bazaar</span>
                <span className="text-lg font-black text-indigo-600 tracking-tight">BD</span>
              </div>
            </div>
          </div>

          {/* User mini-card */}
          <div className="px-4 py-5 border-b border-slate-100">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-black text-white">{USER.initials}</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">{USER.name}</p>
                <p className="text-xs text-amber-600 font-semibold flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                  {USER.tier}
                </p>
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-3">
              Main Menu
            </p>
            {NAV_LINKS.map(({ icon: Icon, label, active }) => (
              <a
                key={label}
                href="#"
                className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all group
                  ${active
                    ? "bg-indigo-600 text-white shadow-sm shadow-indigo-200"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
              >
                <Icon
                  className={`w-4.5 h-4.5 flex-shrink-0 transition-colors ${active ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`}
                  style={{ width: 18, height: 18 }}
                />
                {label}
                {active && <ChevronDown className="w-3.5 h-3.5 ml-auto rotate-[-90deg] text-indigo-200" />}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 mt-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-3">
                Account
              </p>
              {[
                { icon: User, label: "Profile" },
                { icon: HelpCircle, label: "Help Centre" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all group"
                >
                  <Icon className="w-4.5 h-4.5 text-slate-400 group-hover:text-slate-600 flex-shrink-0" style={{ width: 18, height: 18 }} />
                  {label}
                </a>
              ))}

              <a
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-all mt-1 group"
              >
                <LogOut className="w-4.5 h-4.5 flex-shrink-0" style={{ width: 18, height: 18 }} />
                Sign Out
              </a>
            </div>
          </nav>

          {/* Rewards card at bottom */}
          <div className="px-4 pb-5">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-4 text-white">
              <Gift className="w-5 h-5 text-indigo-200 mb-2" />
              <p className="text-xs font-black mb-0.5">4,280 Points</p>
              <p className="text-[11px] text-indigo-200 leading-relaxed mb-3">
                Redeem for ৳428 off your next order.
              </p>
              <a href="#" className="block text-center text-[11px] font-bold bg-white/20 hover:bg-white/30 rounded-xl py-2 transition-colors border border-white/20">
                Redeem Now →
              </a>
            </div>
          </div>
        </aside>

        {/* ─────────────────────────────────────────────────────
            MAIN AREA — fills remaining width on desktop
        ───────────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col lg:ml-64 xl:ml-72 min-h-screen">

          {/* ══════════════════════════════════════════════════
              TOP HEADER
          ══════════════════════════════════════════════════ */}
          <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-sm">
            <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">

              {/* Mobile logo (hidden on desktop where sidebar shows) */}
              <div className="lg:hidden flex items-center gap-2 mr-1">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <span className="text-white font-black text-xs leading-none">B</span>
                </div>
                <span className="font-black text-slate-900 text-sm tracking-tight">
                  Bazaar<span className="text-indigo-600">BD</span>
                </span>
              </div>

              {/* Search bar */}
              <div className="flex-1 max-w-md hidden sm:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search orders, products…"
                    className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all placeholder-slate-400 text-slate-700"
                  />
                </div>
              </div>

              {/* Right-side actions */}
              <div className="ml-auto flex items-center gap-2">

                {/* Search icon — mobile only */}
                <button className="sm:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-500">
                  <Search className="w-5 h-5" />
                </button>

                {/* Notification bell */}
                <button className="relative p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-500">
                  <Bell className="w-5 h-5" />
                  {/* Unread dot */}
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
                </button>

                {/* Cart icon */}
                <button className="relative p-2 rounded-xl hover:bg-slate-100 transition-colors text-slate-500 hidden sm:flex">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-indigo-600 text-white text-[9px] font-black rounded-full flex items-center justify-center">3</span>
                </button>

                {/* ── PROFILE TRIGGER — the one useState controls this ── */}
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(profileOpen === "profileMenu" ? null : "profileMenu")}
                    className={`flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl border transition-all ${profileOpen === "profileMenu" ? "border-indigo-400 bg-indigo-50 shadow-sm" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"}`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-[11px] font-black text-white">{USER.initials}</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-700 hidden sm:block max-w-[90px] truncate">
                      {USER.name.split(" ")[0]}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform hidden sm:block ${profileOpen === "profileMenu" ? "rotate-180" : ""}`} />
                  </button>

                  {/* ── PROFILE POP-UP / DROPDOWN ────────────────────── */}
                  {profileOpen === "profileMenu" && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/80 z-50 overflow-hidden">

                      {/* Header */}
                      <div className="px-4 py-4 bg-gradient-to-br from-indigo-600 to-violet-700 relative">
                        <button
                          onClick={() => setProfileOpen(null)}
                          className="absolute top-3 right-3 p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                          aria-label="Close profile menu"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center">
                            <span className="text-base font-black text-white">{USER.initials}</span>
                          </div>
                          <div>
                            <p className="text-sm font-black text-white leading-tight">{USER.name}</p>
                            <p className="text-xs text-indigo-200 mt-0.5">{USER.email}</p>
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-white/10 px-2 py-0.5 rounded-full mt-1">
                              <Star className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
                              {USER.tier}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Quick stats inside popup */}
                      <div className="grid grid-cols-3 divide-x divide-slate-100 border-b border-slate-100">
                        {[
                          { label: "Orders", value: "12" },
                          { label: "Points", value: "4.2k" },
                          { label: "Wishlist", value: "14" },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex flex-col items-center py-3">
                            <p className="text-base font-black text-slate-900">{value}</p>
                            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">{label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="p-2">
                        {/* My Profile — opens the Edit Profile popup */}
                        <Link href="/profile/user_update">
                          <button
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center flex-shrink-0 transition-colors">
                              <User className="w-4 h-4 text-slate-500 group-hover:text-indigo-600 transition-colors" />
                            </div>
                            <div className="min-w-0 text-left">
                              <p className="text-sm font-semibold text-slate-800">My Profile</p>
                              <p className="text-xs text-slate-400">Edit personal info</p>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-400 ml-auto transition-colors flex-shrink-0" />
                          </button>
                        </Link>
                        {/* Other links */}
                        {[
                          { icon: MapPin, label: "My Addresses", sub: "Manage delivery addresses" },
                          { icon: HelpCircle, label: "Help & Support", sub: "FAQs and contact us" },
                        ].map(({ icon: Icon, label, sub }) => (
                          <a
                            key={label}
                            href="#"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-indigo-100 flex items-center justify-center flex-shrink-0 transition-colors">
                              <Icon className="w-4 h-4 text-slate-500 group-hover:text-indigo-600 transition-colors" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-slate-800">{label}</p>
                              <p className="text-xs text-slate-400">{sub}</p>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-400 ml-auto transition-colors flex-shrink-0" />
                          </a>
                        ))}
                      </div>

                      {/* Sign out */}
                      <div className="p-2 border-t border-slate-100">
                        <a
                          href="#"
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-rose-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-rose-50 group-hover:bg-rose-100 flex items-center justify-center flex-shrink-0 transition-colors">
                            <LogOut className="w-4 h-4 text-rose-500" />
                          </div>
                          <p className="text-sm font-semibold text-rose-600">Sign Out</p>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile nav tabs (shown only on mobile/tablet) */}
            <div className="lg:hidden border-t border-slate-100 px-4 py-2 flex gap-1 overflow-x-auto">
              {NAV_LINKS.map(({ icon: Icon, label, active }) => (
                <a
                  key={label}
                  href="#"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex-shrink-0 transition-all
                    ${active ? "bg-indigo-600 text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </a>
              ))}
            </div>
          </header>

          {/* ══════════════════════════════════════════════════
              MAIN CONTENT
          ══════════════════════════════════════════════════ */}
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 space-y-8">

            {/* ── Welcome section ───────────────────────────── */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-0.5">Good afternoon 👋</p>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Welcome back, {USER.name.split(" ")[0]}
                  </h1>
                  <p className="text-sm text-slate-500 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {USER.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-indigo-200"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Shop Now
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl transition-colors"
                  >
                    <Gift className="w-4 h-4" />
                    Rewards
                  </a>
                </div>
              </div>
            </section>

            {/* ── Quick stats grid ──────────────────────────── */}
            <section>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {STATS.map(({ label, value, change, icon: Icon, accent, border }) => (
                  <div
                    key={label}
                    className={`bg-white rounded-2xl border ${border} shadow-sm p-4 sm:p-5 hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${accent}`}>
                        <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                    <p className="text-2xl font-black text-slate-900 leading-none mb-1">{value}</p>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-xs text-emerald-600 font-semibold">{change}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Profile update — trigger card ─────────────── */}
            <section>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="px-5 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md">
                      <span className="text-xl font-black text-white">{USER.initials}</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-black text-slate-900">{USER.name}</h3>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                        <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                        {USER.tier}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 mt-0.5">{USER.email}</p>
                    <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {USER.location}
                    </p>
                  </div>

                  {/* Edit button — opens the popup */}
                  <button
                    onClick={() => setProfileOpen("editProfile")}
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-colors shadow-sm shadow-indigo-200 flex-shrink-0"
                  >
                    <User className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>
              </div>
            </section>

            {/* ── Edit Profile POPUP / MODAL ─────────────────────
                Shown when profileOpen === "editProfile".
                Covers screen with a dark backdrop.
                The modal itself is centered and scrollable.
            ─────────────────────────────────────────────────── */}


            {/* ── Recent orders ─────────────────────────────── */}
            <section>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

                {/* Header */}
                <div className="px-5 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h2 className="text-base font-black text-slate-900">Recent Orders</h2>
                      <p className="text-xs text-slate-500">{ORDERS.length} orders found</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    View all <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Order list */}
                <div className="divide-y divide-slate-50">
                  {ORDERS.map((order) => {
                    const st = statusConfig(order.status);
                    const StatusIcon = st.icon;
                    return (
                      <div
                        key={order.id}
                        className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-4 hover:bg-slate-50/70 transition-colors"
                      >
                        {/* Product thumbnail */}
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                          <img
                            src={order.img}
                            alt={order.product}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        {/* Order info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-slate-900 truncate leading-snug">
                            {order.product}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            <span className="font-semibold text-slate-500">{order.id}</span>
                            {" · "}{order.date}
                            {" · "}{order.items} item{order.items > 1 ? "s" : ""}
                          </p>
                        </div>

                        {/* Amount — hidden on small mobile */}
                        <p className="text-sm font-black text-slate-900 hidden sm:block flex-shrink-0">
                          {order.amount}
                        </p>

                        {/* Status badge */}
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-full border flex-shrink-0 ${st.classes}`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          <span className="hidden sm:inline">{order.status}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ── Payment history ───────────────────────────── */}
            <section>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

                {/* Header */}
                <div className="px-5 sm:px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-violet-50 flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-violet-600" />
                    </div>
                    <div>
                      <h2 className="text-base font-black text-slate-900">Payment History</h2>
                      <p className="text-xs text-slate-500">All transactions</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-slate-600 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                    <Download className="w-3.5 h-3.5" />
                    Export
                  </button>
                </div>

                {/* Desktop table (hidden on mobile) */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        {["Transaction", "Order", "Method", "Amount", "Status", ""].map((h) => (
                          <th
                            key={h}
                            className="px-5 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left whitespace-nowrap"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {PAYMENTS.map((txn) => {
                        const st = statusConfig(txn.status);
                        const StatusIcon = st.icon;
                        return (
                          <tr key={txn.id} className="hover:bg-slate-50/60 transition-colors">
                            <td className="px-5 py-4">
                              <p className="text-sm font-bold text-slate-900">{txn.id}</p>
                              <p className="text-xs text-slate-400">{txn.date}</p>
                            </td>
                            <td className="px-5 py-4">
                              <p className="text-xs font-semibold text-slate-500">{txn.order}</p>
                            </td>
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                                <MethodIcon method={txn.method} />
                                {txn.method}
                              </div>
                            </td>
                            <td className="px-5 py-4">
                              <p className={`text-sm font-black ${txn.status === "Refunded" ? "text-amber-600" : "text-slate-900"}`}>
                                {txn.status === "Refunded" ? "−" : ""}{txn.amount}
                              </p>
                            </td>
                            <td className="px-5 py-4">
                              <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-full border ${st.classes}`}>
                                <StatusIcon className="w-3 h-3" />
                                {txn.status}
                              </span>
                            </td>
                            <td className="px-5 py-4">
                              <button className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors" aria-label="Download receipt">
                                <Download className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards (shown only on small screens) */}
                <div className="sm:hidden divide-y divide-slate-50">
                  {PAYMENTS.map((txn) => {
                    const st = statusConfig(txn.status);
                    return (
                      <div key={txn.id} className="px-5 py-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-sm font-bold text-slate-900">{txn.id}</p>
                            <p className="text-xs text-slate-400">{txn.date}</p>
                          </div>
                          <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1.5 rounded-full border ${st.classes}`}>
                            {txn.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-sm text-slate-600">
                            <MethodIcon method={txn.method} />
                            <span className="text-xs font-medium">{txn.method}</span>
                          </div>
                          <p className={`text-sm font-black ${txn.status === "Refunded" ? "text-amber-600" : "text-slate-900"}`}>
                            {txn.status === "Refunded" ? "−" : ""}{txn.amount}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Table footer */}
                <div className="px-5 sm:px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-xs text-slate-500">
                    Showing <span className="font-bold text-slate-700">{PAYMENTS.length}</span> transactions
                  </p>
                  <div className="flex items-center gap-3">
                    <p className="text-xs text-slate-500">Total paid:</p>
                    <p className="text-sm font-black text-slate-900">
                      ৳{PAYMENTS.filter(p => p.status === "Success").reduce((sum, p) => sum + parseInt(p.amount.replace(/[৳,]/g, "")), 0).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom spacer */}
            <div className="h-6" />
          </main>
        </div>
      </div>

      {/* ── Backdrop overlay when profile pop-up is open (mobile) ── */}
      {profileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/10 backdrop-blur-[1px] sm:hidden"
          onClick={() => setProfileOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}