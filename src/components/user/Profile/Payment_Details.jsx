'use client'
import React from 'react';
const PaymentDetails = () => {
    return (
        <div>
            <section className="xl:col-span-3 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-800">Payment History</h2>
                  <p className="text-xs text-slate-400 mt-0.5">All recent transactions</p>
                </div>
                <button className="text-xs text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center gap-1">
                  View All
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-6 py-3 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-[11px] font-bold text-slate-400 uppercase tracking-wider">Transaction ID</th>
                      <th className="px-6 py-3 text-right text-[11px] font-bold text-slate-400 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-center text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { date: "05 May 2026", txn: "TXN-8821-BD", amount: "৳4,350", status: "Paid", statusColor: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                      { date: "02 May 2026", txn: "TXN-8756-BD", amount: "৳1,200", status: "Paid", statusColor: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                      { date: "28 Apr 2026", txn: "TXN-8612-BD", amount: "৳8,900", status: "Pending", statusColor: "bg-amber-50 text-amber-700 border-amber-100" },
                      { date: "21 Apr 2026", txn: "TXN-8534-BD", amount: "৳2,750", status: "Paid", statusColor: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                      { date: "15 Apr 2026", txn: "TXN-8421-BD", amount: "৳650", status: "Refunded", statusColor: "bg-rose-50 text-rose-700 border-rose-100" },
                      { date: "10 Apr 2026", txn: "TXN-8390-BD", amount: "৳3,100", status: "Paid", statusColor: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                    ].map((row) => (
                      <tr key={row.txn} className="hover:bg-slate-50/70 transition-colors group">
                        <td className="px-6 py-4 text-sm text-slate-600 font-medium">{row.date}</td>
                        <td className="px-6 py-4">
                          <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{row.txn}</span>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-slate-800 text-right">{row.amount}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${row.statusColor}`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
        </div>
    );
};

export default PaymentDetails;