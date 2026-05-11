"use client";

import { useState } from "react";
import {
  User,
  ShoppingBag,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
  CheckCircle2,
  Truck,
  Clock,
  Menu,
  X,
} from "lucide-react";

// ─── Static Data ─────────────────────────────────────────────────────────────

const USER = {
  name: "Rahim Ahmed",
  email: "rahim@example.com",
  phone: "+880 171 234 5678",
  address: "House 12, Road 7, Banani, Dhaka 1213, Bangladesh",
  tier: "Gold Member",
  initials: "RA",
};

const ORDERS = [
  {
    id: "#BBD-2026-00142",
    item: "Embroidered Silk Shawl × 2",
    date: "28 Apr 2026",
    status: "Delivered",
  },
  {
    id: "#BBD-2026-00138",
    item: "Handcrafted Muslin Set",
    date: "20 Apr 2026",
    status: "Shipped",
  },
  {
    id: "#BBD-2026-00131",
    item: "Jamdani Saree — Heritage Edition",
    date: "09 Apr 2026",
    status: "Processing",
  },
  {
    id: "#BBD-2026-00122",
    item: "Gold-Trim Kurta Panjabi",
    date: "28 Mar 2026",
    status: "Delivered",
  },
  {
    id: "#BBD-2026-00115",
    item: "Nakshi Kantha Throw",
    date: "15 Mar 2026",
    status: "Delivered",
  },
];

const PAYMENTS = [
  {
    name: "Silk Shawl Purchase",
    txn: "SSL-2026-88421",
    method: "SSLCommerz",
    amount: "৳ 4,200",
    date: "28 Apr 2026",
  },
  {
    name: "Muslin Set",
    txn: "BK-2026-77302",
    method: "bKash",
    amount: "৳ 7,800",
    date: "20 Apr 2026",
  },
  {
    name: "Jamdani Saree",
    txn: "CARD-2026-55910",
    method: "Visa Card",
    amount: "৳ 12,500",
    date: "09 Apr 2026",
  },
  {
    name: "Gold-Trim Kurta",
    txn: "SSL-2026-44187",
    method: "SSLCommerz",
    amount: "৳ 5,600",
    date: "28 Mar 2026",
  },
  {
    name: "Nakshi Kantha Throw",
    txn: "BK-2026-31029",
    method: "bKash",
    amount: "৳ 3,900",
    date: "15 Mar 2026",
  },
];

// ─── Helper: Status Badge ─────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  const map = {
    Delivered: {
      icon: <CheckCircle2 size={11} />,
      cls: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    },
    Shipped: {
      icon: <Truck size={11} />,
      cls: "bg-sky-50 text-sky-700 border border-sky-200",
    },
    Processing: {
      icon: <Clock size={11} />,
      cls: "bg-amber-50 text-amber-700 border border-amber-200",
    },
  };
  const { icon, cls } = map[status] ?? {};
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium ${cls}`}
    >
      {icon}
      {status}
    </span>
  );
};

// ─── Helper: Payment Method Badge ────────────────────────────────────────────

const MethodBadge = ({ method }) => {
  const map = {
    SSLCommerz: "bg-pink-50 text-pink-700 border border-pink-200",
    bKash:      "bg-rose-50  text-rose-700  border border-rose-200",
    "Visa Card": "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };
  return (
    <span
      className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium ${
        map[method] ?? "bg-stone-100 text-stone-600"
      }`}
    >
      {method}
    </span>
  );
};

// ─── Tab: Profile ─────────────────────────────────────────────────────────────

const ProfileTab = () => {
  const [form, setForm] = useState({ ...USER });
  const [saved, setSaved] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div>
      <p className="text-[11px] uppercase tracking-widest text-stone-400 mb-5 font-medium">
        Personal Details
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Full Name */}
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-stone-400 mb-1.5 font-medium">
            Full Name
          </label>
          <input
            value={form.name}
            onChange={handleChange("name")}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-[13px] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-stone-400 mb-1.5 font-medium">
            Email Address
          </label>
          <input
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-[13px] text-stone-800 focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-stone-400 mb-1.5 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={handleChange("phone")}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-[13px] text-stone-800 focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
          />
        </div>

        {/* Membership (read-only) */}
        <div>
          <label className="block text-[11px] uppercase tracking-widest text-stone-400 mb-1.5 font-medium">
            Membership Tier
          </label>
          <input
            readOnly
            value="Premium — Gold Tier"
            className="w-full px-4 py-2.5 rounded-xl border border-amber-200 bg-amber-50 text-[13px] text-amber-700 cursor-not-allowed opacity-80"
          />
        </div>

        {/* Address — full width */}
        <div className="sm:col-span-2">
          <label className="block text-[11px] uppercase tracking-widest text-stone-400 mb-1.5 font-medium">
            Shipping Address
          </label>
          <input
            value={form.address}
            onChange={handleChange("address")}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-[13px] text-stone-800 focus:outline-none focus:border-amber-400 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="border-t border-stone-100 pt-5 flex items-center justify-between">
        {saved && (
          <span className="text-[12px] text-emerald-600 flex items-center gap-1">
            <CheckCircle2 size={13} /> Changes saved successfully
          </span>
        )}
        {!saved && <span />}
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 text-amber-400 text-[13px] font-medium rounded-xl hover:bg-stone-800 active:scale-95 transition-all duration-150"
        >
          Save Changes <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

// ─── Tab: Orders ──────────────────────────────────────────────────────────────

const OrdersTab = () => (
  <div>
    <p className="text-[11px] uppercase tracking-widest text-stone-400 mb-5 font-medium">
      Recent Orders
    </p>
    <div className="space-y-3">
      {ORDERS.map((order) => (
        <div
          key={order.id}
          className="flex items-center justify-between px-5 py-4 rounded-xl border border-stone-100 bg-stone-50 hover:border-stone-200 hover:bg-white transition-all duration-150 cursor-pointer group"
        >
          <div>
            <p className="text-[11px] text-stone-400 mb-0.5 font-mono">
              {order.id}
            </p>
            <p className="text-[13px] text-stone-800 font-medium">{order.item}</p>
          </div>
          <div className="text-right flex flex-col items-end gap-1.5">
            <p className="text-[11px] text-stone-400">{order.date}</p>
            <StatusBadge status={order.status} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Tab: Payments ────────────────────────────────────────────────────────────

const PaymentsTab = () => (
  <div>
    <p className="text-[11px] uppercase tracking-widest text-stone-400 mb-5 font-medium">
      Transaction History
    </p>
    <div className="divide-y divide-stone-100">
      {PAYMENTS.map((p) => (
        <div
          key={p.txn}
          className="flex items-center justify-between py-4 hover:bg-stone-50 -mx-1 px-1 rounded-lg transition-all duration-150"
        >
          <div>
            <p className="text-[13px] text-stone-800 font-medium">{p.name}</p>
            <p className="text-[11px] text-stone-400 mt-0.5 font-mono">
              TXN • {p.txn}
            </p>
          </div>
          <div className="flex items-center gap-3 text-right">
            <MethodBadge method={p.method} />
            <div>
              <p className="text-[15px] text-stone-900 font-semibold">{p.amount}</p>
              <p className="text-[11px] text-stone-400">{p.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Nav Config ───────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "profile",  label: "My Profile",     icon: User },
  { id: "orders",   label: "Order History",  icon: ShoppingBag },
  { id: "payments", label: "Payments",       icon: CreditCard },
];

const NAV_BOTTOM = [
  { id: "settings", label: "Settings", icon: Settings },
  { id: "logout",   label: "Sign Out",  icon: LogOut },
];

// ─── Main Dashboard ───────────────────────────────────────────────────────────

const ProfileDashboard = () => {
  const [activeTab, setActiveTab]   = useState("profile");
  const [mobileOpen, setMobileOpen] = useState(false);

  const TAB_META = {
    profile:  { title: "My Profile",        sub: "Manage your personal information" },
    orders:   { title: "Order History",     sub: "Track and review your purchases" },
    payments: { title: "Payment History",   sub: "All transactions at a glance" },
  };

  const { title, sub } = TAB_META[activeTab] ?? TAB_META.profile;

  const handleNav = (id) => {
    setActiveTab(id);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-start justify-center p-4 sm:p-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex">

        {/* ── Desktop Sidebar ── */}
        <aside className="hidden md:flex flex-col w-56 bg-stone-950 flex-shrink-0">
          {/* Logo */}
          <div className="px-6 py-6 border-b border-white/[0.07]">
            <p className="text-white text-xl font-semibold tracking-wide" style={{ fontFamily: "'Georgia', serif" }}>
              BazaarBD
            </p>
            <p className="text-amber-400 text-[10px] tracking-[0.2em] uppercase mt-0.5">
              Luxury Commerce
            </p>
          </div>

          {/* Avatar */}
          <div className="flex items-center gap-3 px-5 py-5 border-b border-white/[0.07]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-stone-900 text-sm font-bold flex-shrink-0">
              {USER.initials}
            </div>
            <div>
              <p className="text-white text-[13px] font-medium leading-tight">{USER.name}</p>
              <p className="text-white/40 text-[11px] mt-0.5">Premium Member</p>
            </div>
          </div>

          {/* Primary Nav */}
          <nav className="flex-1 py-4 space-y-0.5">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`w-full flex items-center gap-3 px-6 py-3 text-left border-l-2 transition-all duration-150
                  ${activeTab === id
                    ? "border-amber-400 bg-amber-400/10 text-amber-300"
                    : "border-transparent text-white/40 hover:bg-white/[0.04] hover:text-white/70"
                  }`}
              >
                <Icon size={15} />
                <span className="text-[13px] font-medium">{label}</span>
              </button>
            ))}
          </nav>

          {/* Bottom Nav */}
          <div className="py-4 border-t border-white/[0.07] space-y-0.5">
            {NAV_BOTTOM.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className="w-full flex items-center gap-3 px-6 py-3 text-white/30 hover:text-white/60 hover:bg-white/[0.04] transition-all duration-150 text-left border-l-2 border-transparent"
              >
                <Icon size={15} />
                <span className="text-[13px]">{label}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 min-w-0 flex flex-col">

          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
            {/* Mobile: hamburger */}
            <button
              className="md:hidden mr-3 p-1.5 rounded-lg text-stone-500 hover:bg-stone-100 transition-all"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>

            <div>
              <h1 className="text-xl text-stone-900 font-semibold" style={{ fontFamily: "'Georgia', serif" }}>
                {title}
              </h1>
              <p className="text-[12px] text-stone-400 mt-0.5">{sub}</p>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-medium">
              ✦ {USER.tier}
            </span>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            {activeTab === "profile"  && <ProfileTab />}
            {activeTab === "orders"   && <OrdersTab />}
            {activeTab === "payments" && <PaymentsTab />}
          </div>

          {/* Mobile Bottom Nav */}
          <div className="flex md:hidden border-t border-stone-100 bg-white">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`flex-1 flex flex-col items-center py-3 gap-1 text-[10px] font-medium transition-all duration-150
                  ${activeTab === id ? "text-amber-600" : "text-stone-400 hover:text-stone-600"}`}
              >
                <Icon size={18} />
                {label.split(" ")[0]}
              </button>
            ))}
          </div>
        </main>
      </div>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="relative w-64 h-full bg-stone-950 flex flex-col shadow-2xl">
            {/* Close */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/[0.07]">
              <div>
                <p className="text-white text-lg font-semibold" style={{ fontFamily: "'Georgia', serif" }}>BazaarBD</p>
                <p className="text-amber-400 text-[10px] tracking-widest uppercase">Luxury Commerce</p>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white/40 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-all"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Avatar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.07]">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-stone-900 text-sm font-bold">
                {USER.initials}
              </div>
              <div>
                <p className="text-white text-[13px] font-medium">{USER.name}</p>
                <p className="text-white/40 text-[11px]">Premium Member</p>
              </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 py-4 space-y-0.5">
              {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className={`w-full flex items-center gap-3 px-6 py-3 text-left border-l-2 transition-all duration-150
                    ${activeTab === id
                      ? "border-amber-400 bg-amber-400/10 text-amber-300"
                      : "border-transparent text-white/40 hover:bg-white/[0.04] hover:text-white/70"
                    }`}
                >
                  <Icon size={15} />
                  <span className="text-[13px] font-medium">{label}</span>
                </button>
              ))}
            </nav>

            <div className="py-4 border-t border-white/[0.07] space-y-0.5">
              {NAV_BOTTOM.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  className="w-full flex items-center gap-3 px-6 py-3 text-white/30 hover:text-white/60 transition-all text-left"
                >
                  <Icon size={15} />
                  <span className="text-[13px]">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDashboard;