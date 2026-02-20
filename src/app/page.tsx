import React from 'react';
import { Wallet, Globe, Shield, CreditCard, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans selection:bg-blue-500/30">
      {/* Header */}
      <div className="flex justify-between items-center mb-12 max-w-6xl mx-auto">
        <div>
          <h1 className="text-blue-500 font-bold tracking-tighter text-2xl">UNICORN OS</h1>
          <p className="text-neutral-600 text-[10px] uppercase tracking-[0.2em]">Private Terminal // Node_01</p>
        </div>
        <div className="bg-neutral-900/50 border border-neutral-800 px-4 py-2 rounded-full text-xs text-neutral-400 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          SYSTEM ACTIVE: <span className="text-blue-400 font-mono">cmwrxh</span>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* PayPal/Wise Liquidity Card */}
        <div className="bg-neutral-900/20 border border-neutral-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <CreditCard size={80} />
          </div>
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium uppercase tracking-widest mb-4">
            <Wallet size={14} className="text-blue-500" />
            Total Liquidity (PayPal • Wise)
          </div>
          <p className="text-5xl font-bold tracking-tighter">$7,240.00</p>
          <div className="mt-6 flex items-center gap-2">
            <span className="text-green-500 text-sm font-bold">+12.5%</span>
            <span className="text-neutral-600 text-xs font-medium">Growth this cycle</span>
          </div>
        </div>

        {/* Global Latency Card */}
        <div className="bg-neutral-900/20 border border-neutral-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all group">
          <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium uppercase tracking-widest mb-4">
            <Globe size={14} className="text-blue-500" />
            Global Edge Network
          </div>
          <p className="text-5xl font-bold tracking-tighter">14<span className="text-2xl text-neutral-600">ms</span></p>
          <div className="mt-6 flex items-center gap-2 text-neutral-400 text-xs">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-neutral-800" />
              ))}
            </div>
            12 Nodes Active
          </div>
        </div>
      </div>
    </main>
  );
}