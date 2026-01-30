// components/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cobalt-500/10 to-teal-600/20" />
      
      <div className="max-w-6xl mx-auto text-center text-white relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-400/30 mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Your mind, amplified. Your life, simplified.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-teal-100 to-cobalt-100 bg-clip-text text-transparent mb-6 leading-tight"
        >
          MindPilot AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Your intelligent life assistant. 100% AI-powered. No human backend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/signup"
            className="group bg-gradient-to-r from-teal-500 to-cobalt-500 hover:from-teal-600 hover:to-cobalt-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 flex items-center gap-3 hover:scale-105"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/demo"
            className="text-slate-300 hover:text-white px-12 py-4 font-semibold text-lg border border-slate-700/50 hover:border-slate-600/50 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/5"
          >
            Watch Demo
          </Link>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-1/2 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-1/4 right-20 w-96 h-96 bg-cobalt-500/5 rounded-full blur-3xl"
      />
    </section>
  )
}