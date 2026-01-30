// app/(auth)/login/page.tsx - Auth Flow
'use client'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, Github, Google } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900/20 to-cobalt-900/30 flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-teal-500 to-cobalt-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <span className="text-2xl font-bold text-white">MP</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-teal-100 to-cobalt-100 bg-clip-text text-transparent mb-4">
            Welcome Back
          </h1>
          <p className="text-xl text-slate-400">Sign in to your MindPilot account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/70 focus:ring-2 focus:ring-teal-500/30 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-700/50 rounded-2xl px-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/70 focus:ring-2 focus:ring-teal-500/30 pr-12 transition-all"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-700/50 rounded-lg transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5 text-slate-500" /> : <Eye className="w-5 h-5 text-slate-500" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-700/50 bg-slate-800/50 focus:ring-teal-500 text-teal-500" />
              Remember me
            </label>
            <Link href="#" className="text-teal-400 hover:text-teal-300 font-semibold">Forgot Password?</Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-teal-500 to-cobalt-500 hover:from-teal-600 hover:to-cobalt-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-teal-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 mb-6">Or continue with</p>
          <div className="flex gap-4 justify-center">
            <button className="w-12 h-12 bg-slate-900/50 hover:bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 rounded-2xl flex items-center justify-center transition-all group">
              <Github className="w-6 h-6 text-slate-400 group-hover:text-slate-200" />
            </button>
            <button className="w-12 h-12 bg-slate-900/50 hover:bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/50 rounded-2xl flex items-center justify-center transition-all group">
              <Google className="w-6 h-6 text-slate-400 group-hover:text-slate-200" />
            </button>
          </div>
        </div>

        <p className="text-center mt-12 text-sm text-slate-500">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-teal-400 hover:text-teal-300 font-semibold">
            Sign up here
          </Link>
        </p>
      </motion.div>
    </main>
  )
}