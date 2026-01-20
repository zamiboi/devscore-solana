"use client";

import React, { useState } from 'react';
import { Terminal, ShieldCheck, Zap, Code2, Globe, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DevScoreDashboard() {
  const [isScanning, setIsScanning] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  // This function simulates a complex "on-chain" scan
  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setHasResult(true);
    }, 3000); // 3 seconds of "fake" processing
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#00ff41] font-mono p-4 md:p-10 selection:bg-[#00ff41] selection:text-black">
      
      {/* Navigation Header */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-16 border-b border-[#00ff41]/20 pb-6">
        <div className="flex items-center gap-2">
          <Terminal className="w-8 h-8" />
          <span className="text-2xl font-black tracking-tighter">DEVSCORE.IO</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <a href="#" className="hover:text-[#00ff41] transition">Protocol</a>
          <a href="#" className="hover:text-[#00ff41] transition">Governance</a>
          <a href="#" className="hover:text-[#00ff41] transition">Whitepaper</a>
        </div>
        <button className="border border-[#00ff41] px-6 py-2 hover:bg-[#00ff41] hover:text-black transition-all font-bold text-sm">
          CONNECT WALLET
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quantifying Developer <span className="text-[#00ff41]">Alpha</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            The first decentralized reputation protocol for Solana builders. Scan your GitHub & Wallet to claim your DevBag allocation.
          </p>
        </motion.div>

        {/* Input Box / Action Section */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden">
          {!hasResult ? (
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Enter Solana Address or GitHub Username..."
                className="w-full bg-black border border-zinc-700 p-4 text-[#00ff41] outline-none focus:border-[#00ff41] transition rounded"
              />
              <button 
                onClick={startScan}
                disabled={isScanning}
                className="w-full bg-[#00ff41] text-black py-4 font-black text-xl hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all"
              >
                {isScanning ? "ANALYZING REPOS & WALLET..." : "INITIALIZE SCAN"}
              </button>
            </div>
          ) : (
            /* Fake Results Section */
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-black border border-[#00ff41]/30 rounded">
                <div className="text-xs text-zinc-500 mb-2">DEV RANK</div>
                <div className="text-4xl font-bold text-white tracking-widest underline decoration-[#00ff41]">#412</div>
              </div>
              <div className="p-6 bg-black border border-[#00ff41]/30 rounded">
                <div className="text-xs text-zinc-500 mb-2">ALPHA SCORE</div>
                <div className="text-4xl font-bold text-[#00ff41]">982/1000</div>
              </div>
              <div className="p-6 bg-black border border-[#00ff41]/30 rounded">
                <div className="text-xs text-zinc-500 mb-2">POTENTIAL AIRDROP</div>
                <div className="text-4xl font-bold text-white">4,250 $DBAG</div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Fake Tech Stats - This makes it look "full" */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="space-y-3">
            <ShieldCheck className="w-10 h-10 text-[#00ff41]" />
            <h3 className="text-white font-bold">ZKP Verification</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Zero-Knowledge Proofs are used to verify your GitHub contributions without leaking source code metadata.</p>
          </div>
          <div className="space-y-3">
            <Code2 className="w-10 h-10 text-[#00ff41]" />
            <h3 className="text-white font-bold">Commit Indexing</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Our indexer scans over 40 million Solana-related commits to weigh contribution impact.</p>
          </div>
          <div className="space-y-3">
            <Zap className="w-10 h-10 text-[#00ff41]" />
            <h3 className="text-white font-bold">Real-time Velocity</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Scores fluctuate based on network activity, keeping the developer rankings dynamic.</p>
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="mt-32 text-center text-zinc-700 text-[10px] tracking-[0.3em] uppercase">
        Built for the Solana Foundation Hackathon - 2026 Edition
      </footer>
    </div>
  );
}