import React from 'react';
import { motion } from 'framer-motion';
import { Download, Cpu, Shield, Zap, Mail, GraduationCap } from 'lucide-react';

// TUZE PHOTOS ITHE IMPORT KELYET
import screen1 from './assets/screen1.jpeg'; 
import screen2 from './assets/screen2.jpeg';
import screen3 from './assets/screen3.jpeg';
import screen4 from './assets/screen4.jpeg';

function App() {
  const screenshots = [screen1, screen2, screen3, screen4];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500 overflow-x-hidden">
      
      {/* --- STICKY GLOSSY NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex justify-between items-center shadow-2xl">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
              E
            </div>
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              EduNexus <span className="text-purple-500">Pro</span>
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#interface" className="hover:text-white transition-colors">Interface</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="https://github.com/Mayureshkhanvilkar30/EduNexus-Pro/releases/latest" 
               className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all text-xs">
              Download
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-black mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent tracking-tighter"
        >
          EduNexus Pro
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          An AI-Integrated ecosystem that automates student productivity. 
          Moving from manual entry to intelligent automation with <b>Gemini 1.5 Flash</b>.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="https://github.com/Mayureshkhanvilkar30/EduNexus-Pro/releases/latest" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all shadow-2xl shadow-white/10">
            <Download size={20} /> Download APK
          </a>
        </motion.div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Why EduNexus Pro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group">
            <Zap className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold mb-4">AI Intent Extraction</h3>
            <p className="text-gray-400 text-sm">Automated task scheduling using LLM to parse natural language queries.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group">
            <Cpu className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold mb-4">OCR Note Scanner</h3>
            <p className="text-gray-400 text-sm">Leveraging ML Kit to digitize physical notes into actionable academic data.</p>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group">
            <Shield className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-xl font-bold mb-4">Gamified Habits</h3>
            <p className="text-gray-400 text-sm">Reward-based engagement with Streaks and XP to ensure consistency.</p>
          </div>
        </div>
      </section>

      {/* 3. APP INTERFACE SECTION */}
      <section id="interface" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">App Interface</h2>
            <p className="text-gray-500">Premium iOS-inspired design for high-level student performance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {screenshots.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
                <img 
                  src={img} 
                  alt={`EduNexus Screen ${index + 1}`} 
                  className="relative rounded-[2rem] border-2 border-white/10 shadow-2xl w-full h-auto object-cover bg-gray-900"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x600?text=Image+Not+Found'; }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="py-20 bg-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center w-full">Contact & Collaboration</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 text-gray-300 items-center">
            <div className="flex items-center gap-3">
              <Mail className="text-purple-500" /> mayuresh.khanvilkar30@gmail.com
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="text-purple-500" /> Viva College, Virar (CS Dept)
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5">
        © 2026 Mayuresh Khanvilkar | AI-Integrated Student Productivity Project
      </footer>
    </div>
  );
}

export default App;