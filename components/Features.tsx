// components/Features.tsx
import { motion } from 'framer-motion'
import { CheckCircle, Zap, Shield, Brain, MessageCircle, FileText } from 'lucide-react'

const features = [
  {
    title: 'AI Task Manager',
    free: 'Manual tasks + simple reminders',
    premium: 'Auto-generated tasks, priority sorting, location-based reminders',
    icon: Zap
  },
  {
    title: 'AI Finance Manager',
    free: 'Manual tracking + basic stats',
    premium: 'Auto categorization, spending insights, bill alerts, forecasting',
    icon: Shield
  },
  {
    title: 'AI Life Organizer',
    free: 'Up to 10 documents',
    premium: 'Unlimited storage + automatic AI sorting',
    icon: FileText
  },
  {
    title: 'AI Wellness Coach',
    free: 'Mood tracking only',
    premium: 'Personalized routines, wellness insights, habit automation',
    icon: Brain
  },
  {
    title: 'AI Personal Coach',
    free: 'Up to 3 goals/month',
    premium: 'Unlimited goals + monthly action plans',
    icon: CheckCircle
  },
  {
    title: 'Smart Communication',
    free: '5 summaries/day',
    premium: 'Unlimited summaries + voice mode + instant digests',
    icon: MessageCircle
  }
]

export function Features() {
  return (
    <section id="features" className="py-32 px-4 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cobalt-400 bg-clip-text text-transparent mb-6">
            Everything you need, amplified by AI
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Core features designed for modern professionals aged 25-50.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 hover:border-teal-500/50 hover:bg-slate-900/70 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500/20 to-cobalt-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-teal-400" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-400 text-sm font-medium">Free</span>
                    <span className="text-slate-300 ml-auto">{feature.free}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-cobalt-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-400 text-sm font-medium">Premium</span>
                    <span className="text-emerald-400 ml-auto font-semibold">{feature.premium}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}