'use client'
import React from 'react';

const DeliveryStatus = () => {
    return (
        <div>
            <section className="xl:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                    <div>
                        <h2 className="text-base font-bold text-slate-800">Delivery Status</h2>
                        <p className="text-xs text-slate-400 mt-0.5">Live order tracking</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Live
                    </span>
                </div>

                <div className="flex-1 px-6 py-5 space-y-5 overflow-y-auto">
                    {[
                        {
                            id: "ORD-4421",
                            item: "Samsung 65\" QLED TV",
                            status: "Out for Delivery",
                            eta: "Today, 4–6 PM",
                            statusStyle: "bg-blue-500",
                            badge: "bg-blue-50 text-blue-700 border-blue-100",
                            steps: ["Ordered", "Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered"],
                            current: 4,
                        },
                        {
                            id: "ORD-4388",
                            item: "Nike Air Max 270",
                            status: "Shipped",
                            eta: "8 May 2026",
                            statusStyle: "bg-violet-500",
                            badge: "bg-violet-50 text-violet-700 border-violet-100",
                            steps: ["Ordered", "Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered"],
                            current: 3,
                        },
                        {
                            id: "ORD-4312",
                            item: "Anker 65W GaN Charger",
                            status: "Delivered",
                            eta: "Delivered 4 May",
                            statusStyle: "bg-emerald-500",
                            badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
                            steps: ["Ordered", "Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered"],
                            current: 5,
                        },
                    ].map((order) => (
                        <div key={order.id} className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-slate-200 transition-colors">
                            <div className="flex items-start justify-between gap-2 mb-3">
                                <div>
                                    <p className="text-sm font-bold text-slate-800 leading-tight">{order.item}</p>
                                    <p className="text-xs text-slate-400 mt-0.5 font-mono">{order.id}</p>
                                </div>
                                <span className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full border ${order.badge}`}>
                                    {order.status}
                                </span>
                            </div>

                            {/* Progress Bar Timeline */}
                            <div className="relative flex items-center justify-between mb-3">
                                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-slate-200 rounded-full"></div>
                                <div
                                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 rounded-full transition-all"
                                    style={{
                                        width: `${(order.current / (order.steps.length - 1)) * 100}%`,
                                        background: order.current === 5
                                            ? "linear-gradient(to right, #10b981, #14b8a6)"
                                            : order.current === 4
                                                ? "linear-gradient(to right, #3b82f6, #6366f1)"
                                                : "linear-gradient(to right, #8b5cf6, #a855f7)",
                                    }}
                                ></div>
                                {order.steps.map((step, i) => (
                                    <div
                                        key={step}
                                        title={step}
                                        className={`relative z-10 w-3 h-3 rounded-full border-2 transition-all ${i <= order.current
                                            ? `border-white shadow-sm ${order.statusStyle}`
                                            : "border-slate-300 bg-white"
                                            }`}
                                    ></div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-xs text-slate-500">
                                    <span className="font-semibold text-slate-700">Step {order.current + 1}/6:</span> {order.steps[order.current]}
                                </p>
                                <p className="text-xs text-slate-400 flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {order.eta}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DeliveryStatus;