// components/Pricing.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Crown, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const pricingPlans = [
  {
    name: 'Free',
    price: 'Lifetime',
    period: 'Access',
    features: [
      'Lifetime access with limitations',
      'Minimal & non-intrusive ads',
      '10-15 AI responses per day',
      'Limited storage (10 documents)',
      'Basic summaries only'
    ],
    popular: false
  },
  {
    name: 'Premium',
    price: 'RM19.90',
    period: '/month',
    features: [
      '7-day free trial',
      'Unlimited AI responses',
      'Unlimited cloud storage',
      'Full automated task management',
      'Smart Financial Sync',
      'Advanced daily insights',
      'Priority AI processing',
      'No ads',
      'Encrypted cloud backup'
    ],
    popular: true
  }
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cobalt-400 bg-clip-text text-transparent mb-6">
            Simple pricing. Maximum value.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose your plan. Cancel anytime.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-1 flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                !isYearly
                  ? 'bg-gradient-to-r from-teal-500 to-cobalt-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ml-1 ${
                isYearly
                  ? 'bg-gradient-to-r from-teal-500 to-cobalt-500 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-gradient-to-b ${
                plan.popular 
                  ? 'from-teal-500/10 to-cobalt-500/10 border-2 border-teal-500/50 shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/40'
                  : 'from-slate-900/50 to-slate-900/30 border border-slate-800/50 hover:border-slate-700/50'
              } backdrop-blur-sm rounded-3xl p-8 lg:p-10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-bl-2xl rounded-tr-3xl font-bold text-sm shadow-lg">
                  <Crown className="w-4 h-4 inline ml-1" />
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="relative">
                  <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-teal-100 to-cobalt-100 bg-clip-text text-transparent">
                    {plan.price}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl text-slate-500">{plan.period}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-left">
                    <div className="w-6 h-6 bg-emerald-500/80 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <AnimatePresence mode="wait">
                <motion.button
                  key={plan.name}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className={`w-full py-6 px-8 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-white to-slate-200 text-slate-900 shadow-2xl hover:shadow-white/50 hover:scale-105 hover:-translate-y-1 hover:shadow-3xl'
                      : 'bg-gradient-to-r from-teal-500/80 to-cobalt-500/80 backdrop-blur-sm border border-teal-500/50 text-white hover:from-teal-600 hover:to-cobalt-600 hover:shadow-teal-500/25'
                  }`}
                >
                  {plan.popular ? 'Start 7-day Free Trial' : 'Get Started Free'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}