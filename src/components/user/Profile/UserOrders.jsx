'use client'
import React from 'react';
const UserOrders = () => {
    return (
        <div>
             <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-800">Recent Orders</h2>
                <p className="text-xs text-slate-400 mt-0.5">Your latest purchases at a glance</p>
              </div>
              <button className="text-xs text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center gap-1">
                All Orders
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="divide-y divide-slate-50">
              {[
                { id: "ORD-4421", product: "Samsung 65\" QLED TV", category: "Electronics", price: "৳85,000", date: "5 May 2026", status: "Out for Delivery", color: "bg-blue-50 text-blue-700 border-blue-100", thumb: "📺" },
                { id: "ORD-4388", product: "Nike Air Max 270 — Black/White", category: "Footwear", price: "৳8,500", date: "2 May 2026", status: "Shipped", color: "bg-violet-50 text-violet-700 border-violet-100", thumb: "👟" },
                { id: "ORD-4312", product: "Anker 65W GaN Charger", category: "Accessories", price: "৳2,200", date: "28 Apr 2026", status: "Delivered", color: "bg-emerald-50 text-emerald-700 border-emerald-100", thumb: "🔌" },
                { id: "ORD-4280", product: "Levi's 511 Slim Jeans — Dark Blue", category: "Fashion", price: "৳4,350", date: "21 Apr 2026", status: "Delivered", color: "bg-emerald-50 text-emerald-700 border-emerald-100", thumb: "👖" },
              ].map((order) => (
                <div key={order.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50/60 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">
                    {order.thumb}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate">{order.product}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{order.category} · {order.date}</p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end gap-1.5 flex-shrink-0">
                    <p className="text-sm font-bold text-slate-800">{order.price}</p>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${order.color}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="hidden md:block flex-shrink-0">
                    <button className="text-xs text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 border border-transparent hover:border-emerald-100 px-3 py-1.5 rounded-lg transition-all font-medium">
                      Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
    );
};

export default  UserOrders;