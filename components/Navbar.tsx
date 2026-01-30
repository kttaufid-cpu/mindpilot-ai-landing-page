// components/Navbar.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cobalt-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-teal-500/20 transition-all">
            <span className="text-white font-bold text-lg">MP</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white via-teal-100 to-cobalt-100 bg-clip-text text-transparent">
            MindPilot AI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">Features</Link>
          <Link href="#pricing" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">Pricing</Link>
          <Link href="/demo" className="text-slate-300 hover:text-teal-400 transition-colors font-medium">Demo</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-slate-300 hover:text-white font-semibold transition-colors">
            Log In
          </Link>
          <Link
            href="/signup"
            className="bg-gradient-to-r from-teal-500 to-cobalt-500 hover:from-teal-600 hover:to-cobalt-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-teal-500/20 transition-all hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}