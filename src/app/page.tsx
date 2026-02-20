"use client";
import React, { useState, useEffect } from 'react';
import { Wallet, Globe, ArrowUpRight, Plus } from 'lucide-react';

export default function UnicornDashboard() {
  // Real-time Mock Balances
  const [paypalBalance, setPaypalBalance] = useState(12450.80);
  const [wiseBalance, setWiseBalance] = useState(8320.15);

  // Simulation: Make the money "move" slightly every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPaypalBalance(prev => prev + (Math.random() * 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-tighter text-red-600">UNICORN OS</h1>
        <div className="text-sm text-gray-400">User: cmwrxh | Host: Charles-Mwaura</div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* PAYPAL CARD */}
        <div className="bg-zinc-900 border border-blue-500/30 p-6 rounded-2xl hover:bg-zinc-800 transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-600/10 rounded-lg">
              <Wallet className="text-blue-500" size={24} />
            </div>
            <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">PAYPAL PRIMARY</span>
          </div>
          <p className="text-gray-400 text-sm">Available Balance</p>
          <h2 className="text-4xl font-mono mt-1">${paypalBalance.toLocaleString(undefined, {minimumFractionDigits: 2})}</h2>
          <div className="mt-4 flex gap-2">
            <button className="text-xs bg-blue-600 px-3 py-1 rounded-full font-bold">Transfer</button>
          </div>
        </div>

        {/* WISE CARD */}
        <div className="bg-zinc-900 border border-green-500/30 p-6 rounded-2xl hover:bg-zinc-800 transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-green-600/10 rounded-lg">
              <Globe className="text-green-500" size={24} />
            </div>
            <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded">WISE MULTI-CURRENCY</span>
          </div>
          <p className="text-gray-400 text-sm">Total Holdings (USD)</p>
          <h2 className="text-4xl font-mono mt-1">${wiseBalance.toLocaleString(undefined, {minimumFractionDigits: 2})}</h2>
          <div className="mt-4 flex gap-2">
            <button className="text-xs bg-green-600 px-3 py-1 rounded-full font-bold text-black">Exchange</button>
          </div>
        </div>

      </div>

      {/* DEADPOOL QUICK ACTION */}
      <div className="mt-12 p-6 bg-red-600/5 border border-red-600/20 rounded-2xl flex items-center justify-between">
        <div>
          <h3 className="text-red-500 font-bold">System Status: Maximum Effort</h3>
          <p className="text-gray-500 text-xs">All encrypted channels active.</p>
        </div>
        <Plus className="text-red-600 cursor-pointer hover:rotate-90 transition-transform" />
      </div>
    </div>
  );
}