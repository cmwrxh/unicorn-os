"use client";
import React, { useState, useEffect } from 'react';
import { Wallet, Globe, ArrowUpRight, ArrowDownLeft, Plus, DollarSign } from 'lucide-react';

export default function UnicornDashboard() {
  const [paypalBalance, setPaypalBalance] = useState(12450.80);
  const [wiseBalance, setWiseBalance] = useState(8320.15);
  const [currency, setCurrency] = useState('USD');

  // Transactions Mock Data
  const transactions = [
    { id: 1, name: "GitHub Subscriptions", date: "Feb 20", amount: -19.00, type: "debit" },
    { id: 2, name: "Wise Exchange - EUR", date: "Feb 19", amount: +450.00, type: "credit" },
    { id: 3, name: "PayPal Transfer", date: "Feb 18", amount: -1200.00, type: "debit" },
    { id: 4, name: "Stripe Payout", date: "Feb 18", amount: +2800.50, type: "credit" },
  ];

  const getCurrencyValue = (val: number) => {
    if (currency === 'EUR') return (val * 0.92).toFixed(2);
    if (currency === 'GBP') return (val * 0.79).toFixed(2);
    return val.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-tighter text-white">UNICORN OS</h1>
        <div className="text-sm text-gray-500">User: {typeof window !== 'undefined' ? 'cmwrxh' : ''} | Host: Charles-Mwaura</div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* PAYPAL CARD */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-600/10 rounded-lg"><Wallet className="text-blue-500" size={24} /></div>
            <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">PAYPAL</span>
          </div>
          <p className="text-gray-400 text-sm">Available Balance</p>
          <h2 className="text-4xl font-mono mt-1">${paypalBalance.toLocaleString()}</h2>
        </div>

        {/* WISE CARD WITH CURRENCY TOGGLE */}
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-green-600/10 rounded-lg"><Globe className="text-green-500" size={24} /></div>
            <div className="flex gap-1 bg-black p-1 rounded-lg border border-zinc-800">
              {['USD', 'EUR', 'GBP'].map((curr) => (
                <button 
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`text-[10px] px-2 py-1 rounded ${currency === curr ? 'bg-green-600 text-black font-bold' : 'text-gray-500'}`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
          <p className="text-gray-400 text-sm">Wise Multi-Currency ({currency})</p>
          <h2 className="text-4xl font-mono mt-1">
            {currency === 'EUR' ? '€' : currency === 'GBP' ? '£' : '$'}
            {getCurrencyValue(wiseBalance)}
          </h2>
        </div>
      </div>

      {/* TRANSACTION HISTORY */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
          <h3 className="font-bold text-lg">Recent Transactions</h3>
          <button className="text-xs text-gray-400 hover:text-white transition-colors">View All</button>
        </div>
        <div className="divide-y divide-zinc-800">
          {transactions.map((tx) => (
            <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${tx.type === 'credit' ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                  {tx.type === 'credit' ? <ArrowDownLeft className="text-green-500" size={18} /> : <ArrowUpRight className="text-red-500" size={18} />}
                </div>
                <div>
                  <p className="font-medium text-sm">{tx.name}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
              </div>
              <p className={`font-mono text-sm ${tx.type === 'credit' ? 'text-green-500' : 'text-white'}`}>
                {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}