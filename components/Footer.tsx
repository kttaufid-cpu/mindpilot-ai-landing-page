// components/Footer.tsx
import { Github, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-16 px-4 bg-gradient-to-t from-slate-950 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cobalt-500 rounded-2xl flex items-center justify-center">
                <span className="text-xl font-bold text-white">MP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cobalt-400 bg-clip-text text-transparent">
                  MindPilot AI
                </h3>
                <p className="text-sm text-slate-500">Your mind, amplified.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Features</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Pricing</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Demo</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Download</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">About</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Careers</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:text-right">
            <h4 className="text-lg font-semibold text-white mb-6">Stay updated</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-12 h-12 bg-slate-900/50 hover:bg-teal-500/20 border border-slate-800/50 hover:border-teal-500/50 rounded-2xl flex items-center justify-center transition-all group">
                <Github className="w-5 h-5 text-slate-400 group-hover:text-teal-400" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900/50 hover:bg-teal-500/20 border border-slate-800/50 hover:border-teal-500/50 rounded-2xl flex items-center justify-center transition-all group">
                <Twitter className="w-5 h-5 text-slate-400 group-hover:text-teal-400" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900/50 hover:bg-teal-500/20 border border-slate-800/50 hover:border-teal-500/50 rounded-2xl flex items-center justify-center transition-all group">
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-teal-400" />
              </a>
            </div>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cobalt-500 hover:from-teal-600 hover:to-cobalt-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-xl hover:shadow-teal-500/25 transition-all"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800/50 mt-16 pt-12 text-center text-sm text-slate-500">
          <p>&copy; 2026 MindPilot AI. All rights reserved. Made with ❤️ for your productivity.</p>
        </div>
      </div>
    </footer>
  )
}