// app/demo/page.tsx - Demo Page
'use client'
import { motion } from 'framer-motion'
import { Play, Smartphone, Zap, Shield, Brain, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const demos = [
  {
    title: 'AI Task Manager',
    description: 'Watch tasks auto-organize with smart prioritization',
    icon: Zap,
    video: '/demo/task-manager.mp4',
    gradient: 'from-teal-500 to-emerald-500'
  },
  {
    title: 'Smart Finance',
    description: 'See spending insights appear automatically',
    icon: Shield,
    video: '/demo/finance.mp4',
    gradient: 'from-cobalt-500 to-teal-500'
  },
  {
    title: 'Wellness Coach',
    description: 'Personalized routines generated instantly',
    icon: Brain,
    video: '/demo/wellness.mp4',
    gradient: 'from-purple-500 to-teal-500'
  }
]

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900/20 to-cobalt-900/30">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-teal-100 to-cobalt-100 bg-clip-text text-transparent mb-6"
          >
            Live Demo
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          >
            See MindPilot AI in action. No signup required.
          </motion.p>
        </div>
      </section>

      {/* Demo Videos */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {demos.map((demo, index) => {
            const Icon = demo.icon
            return (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 aspect-video mb-6 hover:border-teal-500/50 transition-all group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80 group-hover:opacity-0 transition-opacity" />
                  <video
                    src={demo.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className={`w-20 h-20 bg-gradient-to-r ${demo.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${demo.gradient}/20 rounded-2xl flex items-center justify-center border border-${demo.gradient.split('-')[0]}-500/30`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{demo.title}</h3>
                  <p className="text-slate-400">{demo.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Phone Mockup */}
      <section className="py-32 px-4 bg-slate-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto w-[300px] h-[650px] md:w-[390px] md:h-[844px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/demo/dashboard-screenshot.png')] bg-cover bg-center" />
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-teal-500 to-cobalt-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-xl font-bold text-white">MP</span>
            </div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-400 mt-12 max-w-2xl mx-auto"
          >
            Your complete life dashboard. Ready in seconds.
          </motion.p>
        </div>
      </section>
    </main>
  )
}