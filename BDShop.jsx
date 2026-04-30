import { useState, useEffect } from "react";
import {
  ShoppingCart, Heart, Search, Menu, X, ChevronLeft, ChevronRight,
  Star, Truck, Shield, RefreshCw, Headphones, Eye, EyeOff,
  CreditCard, Smartphone, Wallet, CheckCircle, User, LogIn,
  MapPin, Bell, Package, ArrowRight, Zap, Tag
} from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Premium Silk Saree - Banarasi Weave", price: 4500, original: 6000, category: "Fashion", rating: 4.8, reviews: 124, badge: "HOT", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80" },
  { id: 2, name: "Apple iPhone 15 Pro - 256GB Titanium", price: 149999, original: 159999, category: "Electronics", rating: 4.9, reviews: 89, badge: "NEW", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80" },
  { id: 3, name: "Handcrafted Leather Messenger Bag", price: 2800, original: 3500, category: "Accessories", rating: 4.6, reviews: 67, badge: "SALE", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
  { id: 4, name: "Nakshi Kantha Embroidered Quilt", price: 3200, original: 4000, category: "Home & Living", rating: 4.7, reviews: 43, badge: "", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&q=80" },
  { id: 5, name: "Sony WH-1000XM5 Headphones", price: 32000, original: 38000, category: "Electronics", rating: 4.9, reviews: 201, badge: "TOP", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" },
  { id: 6, name: "Muslin Cotton Kurta Set - Hand Block Print", price: 1850, original: 2200, category: "Fashion", rating: 4.5, reviews: 156, badge: "SALE", img: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=400&q=80" },
  { id: 7, name: "Samsung 65\" QLED 4K Smart TV", price: 89999, original: 105000, category: "Electronics", rating: 4.7, reviews: 38, badge: "NEW", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80" },
  { id: 8, name: "Jamdani Saree - UNESCO Heritage Weave", price: 8500, original: 11000, category: "Fashion", rating: 4.9, reviews: 72, badge: "HOT", img: "https://images.unsplash.com/photo-1620910756680-4f3e7b4484bd?w=400&q=80" },
];

const BANNERS = [
  { id: 1, title: "Eid Collection 2025", subtitle: "Up to 50% off on premium sarees & kurti sets", cta: "Shop Now", color: "from-slate-800 to-indigo-900", accent: "#6366f1" },
  { id: 2, title: "Tech Fest Mega Sale", subtitle: "Smartphones, Laptops & Accessories at unbeatable prices", cta: "Explore Deals", color: "from-emerald-900 to-teal-800", accent: "#10b981" },
  { id: 3, title: "Home & Living Fair", subtitle: "Handcrafted Bangladeshi decor & lifestyle products", cta: "Discover More", color: "from-rose-900 to-pink-800", accent: "#f43f5e" },
];

const CATEGORIES = [
  { name: "Fashion", icon: "👗", count: "2.4k+" },
  { name: "Electronics", icon: "📱", count: "1.8k+" },
  { name: "Home & Living", icon: "🏠", count: "3.1k+" },
  { name: "Books", icon: "📚", count: "950+" },
  { name: "Beauty", icon: "💄", count: "1.2k+" },
  { name: "Sports", icon: "⚽", count: "780+" },
  { name: "Food & Grocery", icon: "🛒", count: "4.2k+" },
  { name: "Jewellery", icon: "💍", count: "620+" },
];

export default function BazaarBD() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("bkash");
  const [paymentDone, setPaymentDone] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [regForm, setRegForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentBanner(p => (p + 1) % BANNERS.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const showNotif = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 2500);
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    showNotif(`"${product.name.slice(0, 28)}..." added to cart`);
  };

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const cartTotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  const handlePay = () => {
    setPaymentDone(true);
    setTimeout(() => {
      setPaymentDone(false);
      setShowPayment(false);
      setShowCart(false);
      setCartItems([]);
      showNotif("Order placed successfully! 🎉");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-4 right-4 z-[999] flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl text-white text-sm font-medium transition-all ${notification.type === "success" ? "bg-emerald-600" : "bg-red-600"}`}>
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          {notification.msg}
        </div>
      )}

      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Free delivery on orders over ৳999</span>
          <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> Flash Sale ends in: 08:24:15</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Deliver to Dhaka</span>
          <button onClick={() => setShowLogin(true)} className="hover:text-white transition-colors">Sign In</button>
          <span className="text-slate-600">|</span>
          <button onClick={() => setShowRegister(true)} className="hover:text-white transition-colors">Register</button>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center">
                <span className="text-white font-black text-lg leading-none">B</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-black text-slate-900 tracking-tight">Bazaar</span>
                <span className="text-xl font-black text-indigo-600 tracking-tight">BD</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="flex items-center bg-slate-100 rounded-xl border border-slate-200 hover:border-indigo-400 transition-colors overflow-hidden">
              <input
                type="text"
                placeholder="Search products, brands, categories..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none"
              />
              <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white flex items-center gap-2 text-sm font-medium">
                <Search className="w-4 h-4" />
                <span className="hidden sm:block">Search</span>
              </button>
            </div>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-1">
            <button onClick={() => setShowLogin(true)} className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Account</span>
            </button>

            <button onClick={() => { }} className="relative p-2.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-700">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">{wishlist.length}</span>
              )}
            </button>

            <button onClick={() => setShowCart(true)} className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors text-white ml-1">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:block">Cart</span>
              {cartCount > 0 && (
                <span className="bg-amber-400 text-slate-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-black">{cartCount}</span>
              )}
            </button>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2.5 rounded-lg hover:bg-slate-100 transition-colors text-slate-700 ml-1">
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Category Nav */}
        <div className="border-t border-slate-100 bg-white hidden md:block">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
              {["All", "Fashion", "Electronics", "Home & Living", "Beauty", "Sports", "Books", "Food & Grocery"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${activeCategory === cat ? "border-indigo-600 text-indigo-600" : "border-transparent text-slate-600 hover:text-slate-900"}`}
                >
                  {cat}
                </button>
              ))}
              <button className="px-4 py-3 text-sm font-medium text-rose-600 whitespace-nowrap border-b-2 border-transparent flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Flash Sale
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3">
            <button onClick={() => { setShowLogin(true); setMobileMenu(false); }} className="flex items-center gap-3 w-full text-slate-700 font-medium py-2">
              <LogIn className="w-5 h-5 text-indigo-600" /> Sign In / Register
            </button>
            {["Fashion", "Electronics", "Home & Living", "Beauty"].map(c => (
              <button key={c} onClick={() => { setActiveCategory(c); setMobileMenu(false); }} className="flex items-center gap-3 w-full text-slate-700 py-2 border-b border-slate-100">
                <ArrowRight className="w-4 h-4 text-slate-400" /> {c}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 mt-5">
        <div className="relative overflow-hidden rounded-2xl h-64 md:h-96">
          {BANNERS.map((b, i) => (
            <div
              key={b.id}
              className={`absolute inset-0 bg-gradient-to-r ${b.color} transition-opacity duration-700 ${i === currentBanner ? "opacity-100" : "opacity-0"}`}
            >
              <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">Special Offer</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2">{b.title}</h1>
                <p className="text-white/80 text-sm md:text-lg mb-6 max-w-md">{b.subtitle}</p>
                <button className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors w-fit text-sm md:text-base">
                  {b.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, white 0%, transparent 60%)" }} />
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {BANNERS.map((_, i) => (
              <button key={i} onClick={() => setCurrentBanner(i)} className={`h-2 rounded-full transition-all ${i === currentBanner ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
            ))}
          </div>

          {/* Arrows */}
          <button onClick={() => setCurrentBanner(p => (p - 1 + BANNERS.length) % BANNERS.length)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => setCurrentBanner(p => (p + 1) % BANNERS.length)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Truck, label: "Free Delivery", sub: "Orders above ৳999", color: "text-indigo-600" },
            { icon: Shield, label: "Secure Payment", sub: "100% protected", color: "text-emerald-600" },
            { icon: RefreshCw, label: "Easy Returns", sub: "7-day return policy", color: "text-amber-600" },
            { icon: Headphones, label: "24/7 Support", sub: "Dedicated help", color: "text-rose-600" },
          ].map(({ icon: Icon, label, sub, color }) => (
            <div key={label} className="bg-white rounded-xl border border-slate-200 px-4 py-3 flex items-center gap-3">
              <Icon className={`w-6 h-6 flex-shrink-0 ${color}`} />
              <div>
                <p className="text-sm font-semibold text-slate-800">{label}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-black text-slate-900">Shop by Category</h2>
          <button className="text-sm text-indigo-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">View all <ArrowRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${activeCategory === cat.name ? "border-indigo-400 bg-indigo-50" : "border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50"}`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-xs font-semibold text-slate-700 text-center leading-tight">{cat.name}</span>
              <span className="text-xs text-slate-400">{cat.count}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-gradient-to-r from-rose-600 to-orange-500 rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-white fill-white" />
            <div>
              <p className="text-white font-black text-lg">Flash Sale Live Now!</p>
              <p className="text-white/80 text-sm">Limited time deals — grab before they're gone</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-white">
            {["08", "24", "15"].map((t, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="bg-white/20 rounded-lg px-2.5 py-1.5 font-black text-lg tabular-nums">{t}</span>
                {i < 2 && <span className="font-black text-xl">:</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-8 mb-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-black text-slate-900">
              {activeCategory === "All" ? "Featured Products" : activeCategory}
            </h2>
            <p className="text-sm text-slate-500 mt-0.5">{filteredProducts.length} products found</p>
          </div>
          <div className="flex items-center gap-2">
            <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 text-slate-700 bg-white outline-none cursor-pointer">
              <option>Best Selling</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p className="text-lg font-medium">No products found</p>
            <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} className="text-indigo-600 text-sm mt-2 hover:underline">Clear filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => {
              const discount = Math.round((1 - product.price / product.original) * 100);
              const isWished = wishlist.includes(product.id);
              return (
                <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square bg-slate-100">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    {product.badge && (
                      <span className={`absolute top-2 left-2 text-xs font-black px-2 py-1 rounded-lg ${product.badge === "SALE" ? "bg-rose-500 text-white" : product.badge === "NEW" ? "bg-emerald-500 text-white" : product.badge === "HOT" ? "bg-orange-500 text-white" : "bg-indigo-600 text-white"}`}>
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute top-2 right-10 bg-white text-rose-600 text-xs font-black px-2 py-1 rounded-lg border border-rose-100">
                      -{discount}%
                    </span>
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute top-2 right-2 p-1.5 rounded-lg transition-all ${isWished ? "bg-rose-500 text-white" : "bg-white text-slate-400 hover:text-rose-500"} shadow-sm`}
                    >
                      <Heart className={`w-4 h-4 ${isWished ? "fill-white" : ""}`} />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <p className="text-xs text-indigo-600 font-semibold mb-1">{product.category}</p>
                    <h3 className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2 mb-2">{product.name}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-slate-300"}`} />
                        ))}
                      </div>
                      <span className="text-xs text-slate-500">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg font-black text-slate-900">৳{product.price.toLocaleString()}</span>
                      <span className="text-xs text-slate-400 line-through">৳{product.original.toLocaleString()}</span>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-sm font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="bg-indigo-600 py-12">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Bell className="w-8 h-8 text-indigo-200 mx-auto mb-3" />
          <h2 className="text-2xl font-black text-white mb-2">Stay in the Loop</h2>
          <p className="text-indigo-200 text-sm mb-6">Get exclusive deals, new arrivals & offers delivered to your inbox.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email address" className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-indigo-200 text-sm outline-none focus:border-white/60 transition-colors" />
            <button className="bg-white text-indigo-700 font-bold px-5 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {[
            { title: "BazaarBD", links: ["About Us", "Careers", "Press", "Blog"] },
            { title: "Help", links: ["Track Order", "Returns", "FAQs", "Contact Us"] },
            { title: "Categories", links: ["Fashion", "Electronics", "Home & Living", "Beauty"] },
            { title: "Payment", links: ["Bkash", "Nagad", "VISA / Mastercard", "Cash on Delivery"] },
          ].map(col => (
            <div key={col.title}>
              <h3 className="text-white font-bold text-sm mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map(l => <li key={l}><a href="#" className="text-sm hover:text-white transition-colors">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
          © 2025 BazaarBD. All rights reserved. Made with ❤️ in Bangladesh.
        </div>
      </footer>

      {/* CART SIDEBAR */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/50" onClick={() => setShowCart(false)} />
          <div className="w-full max-w-md bg-white flex flex-col h-full shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-slate-200">
              <h2 className="text-lg font-black text-slate-900 flex items-center gap-2"><ShoppingCart className="w-5 h-5 text-indigo-600" /> My Cart ({cartCount})</h2>
              <button onClick={() => setShowCart(false)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors"><X className="w-5 h-5 text-slate-600" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 text-slate-400">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-40" />
                  <p className="font-medium">Your cart is empty</p>
                </div>
              ) : cartItems.map(item => (
                <div key={item.id} className="flex gap-3 bg-slate-50 rounded-xl p-3 border border-slate-200">
                  <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 line-clamp-1">{item.name}</p>
                    <p className="text-indigo-600 font-black text-sm mt-0.5">৳{item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i))} className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100 transition-colors text-lg leading-none">-</button>
                      <span className="text-sm font-bold text-slate-800 w-5 text-center">{item.qty}</span>
                      <button onClick={() => setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i))} className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100 transition-colors text-lg leading-none">+</button>
                      <button onClick={() => setCartItems(prev => prev.filter(i => i.id !== item.id))} className="ml-auto p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"><X className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {cartItems.length > 0 && (
              <div className="p-5 border-t border-slate-200 bg-slate-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-600 font-medium">Subtotal</span>
                  <span className="text-xl font-black text-slate-900">৳{cartTotal.toLocaleString()}</span>
                </div>
                <button onClick={() => { setShowPayment(true); }} className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2">
                  Proceed to Checkout <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* === LOGIN MODAL === */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"><X className="w-5 h-5 text-slate-500" /></button>

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
                <input type="email" placeholder="you@example.com" value={loginForm.email} onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 transition-colors placeholder-slate-400" />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Password</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} placeholder="Enter your password" value={loginForm.password} onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))} className="w-full border border-slate-200 rounded-xl px-4 py-3 pr-12 text-sm text-slate-700 outline-none focus:border-indigo-500 transition-colors placeholder-slate-400" />
                  <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <a href="#" className="text-xs text-indigo-600 hover:underline mt-1 block text-right">Forgot password?</a>
              </div>

              <button onClick={() => { setShowLogin(false); showNotif("Logged in successfully!"); }} className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold py-3.5 rounded-xl transition-all mt-2">
                Sign In
              </button>

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
                <button onClick={() => { setShowLogin(false); setShowRegister(true); }} className="text-indigo-600 font-semibold hover:underline">Create one</button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* === REGISTER MODAL === */}
      {showRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowRegister(false)} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"><X className="w-5 h-5 text-slate-500" /></button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Create Account</h2>
              <p className="text-slate-500 text-sm mt-1">Join millions of shoppers on BazaarBD</p>
            </div>

            <div className="space-y-4">
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
            </div>
          </div>
        </div>
      )}

      {/* === PAYMENT MODAL === */}
      {showPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
            <button onClick={() => setShowPayment(false)} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-colors"><X className="w-5 h-5 text-slate-500" /></button>

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
                    {cartItems.map(i => (
                      <div key={i.id} className="flex justify-between text-sm">
                        <span className="text-slate-600 truncate max-w-[220px]">{i.name.slice(0, 30)}... ×{i.qty}</span>
                        <span className="text-slate-800 font-semibold">৳{(i.price * i.qty).toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="border-t border-slate-200 pt-2 mt-2 flex justify-between">
                      <span className="font-bold text-slate-700">Total</span>
                      <span className="font-black text-indigo-700 text-lg">৳{cartTotal.toLocaleString()}</span>
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
                  <Shield className="w-5 h-5" /> Pay ৳{cartTotal.toLocaleString()} Securely
                </button>

                <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" /> Protected by SSL 256-bit encryption
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}