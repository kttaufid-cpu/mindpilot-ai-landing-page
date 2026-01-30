// app/dashboard/page.tsx - Main Dashboard
'use client'
import { motion } from 'framer-motion'
import { 
  Calendar, DollarSign, Heart, Target, MessageSquare, 
  Plus, Settings, LogOut, ChevronLeft, ChevronRight 
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

// Mock data
const spendingData = [
  { name: 'Food', value: 320 },
  { name: 'Transport', value: 180 },
  { name: 'Entertainment', value: 120 },
  { name: 'Bills', value: 250 },
  { name: 'Shopping', value: 90 }
]

const tasks = [
  { id: 1, title: 'Complete project proposal', priority: 'high', due: 'Today' },
  { id: 2, title: 'Gym workout', priority: 'medium', due: '3pm' },
  { id: 3, title: 'Call mom', priority: 'low', due: 'Tomorrow' }
]

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900/50 to-cobalt-900/30 backdrop-blur-sm">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed z-50 top-6 left-6 md:hidden p-3 bg-slate-900/80 backdrop-blur-sm border border-slate-800/50 rounded-2xl text-teal-400 hover:text-teal-300 shadow-xl"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: sidebarOpen ? 0 : '-100%' }}
        className="fixed md:static z-40 inset-0 w-80 bg-slate-900/95 backdrop-blur-sm border-r border-slate-800/50 md:translate-x-0 transform -translate-x-full md:-translate-x-0 transition-transform duration-300"
      >
        <div className="p-8 border-b border-slate-800/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cobalt-500 rounded-2xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">MP</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">MindPilot</h1>
              <p className="text-sm text-slate-500">Premium</p>
            </div>
          </div>
          
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-2xl text-white font-semibold bg-teal-500/20 border border-teal-500/30 hover:bg-teal-500/30 transition-all">
              <Calendar className="w-5 h-5" />
              Dashboard
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all">
              <DollarSign className="w-5 h-5" />
              Finance
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all">
              <Heart className="w-5 h-5" />
              Wellness
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all">
              <Target className="w-5 h-5" />
              Goals
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:text-slate-300 hover:bg-slate-800/50 transition-all">
            <Settings className="w-5 h-5" />
            Settings
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>

        {/* Mobile backdrop */}
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSidebarOpen(false)}
            className="md:hidden fixed inset-0 bg-black/50 z-30"
          />
        )}
      </motion.aside>

      {/* Main Content */}
      <div className="ml-0 md:ml-80 min-h-screen">
        {/* Header */}
        <header className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-30 p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cobalt-400 bg-clip-text text-transparent">
              Good Morning, Alex
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cobalt-500 rounded-2xl flex items-center justify-center">
                <span className="text-sm font-bold text-white">A</span>
              </div>
            </div>
          </div>
        </header>

        <main className="p-8 max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div 
              whileHover={{ y: -4 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-2xl flex items-center justify-center group-hover:bg-teal-500/30 transition-all">
                  <Calendar className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Tasks Today</p>
                  <p className="text-3xl font-bold text-white">8/12</p>
                </div>
              </div>
              <div className="w-full bg-slate-800/50 rounded-full h-2">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full w-2/3" />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-all">
                  <DollarSign className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">This Month</p>
                  <p className="text-3xl font-bold text-emerald-400">RM1,234</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:bg-purple-500/30 transition-all">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Mood Score</p>
                  <p className="text-3xl font-bold text-purple-400">87%</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center group-hover:bg-orange-500/30 transition-all">
                  <Target className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-medium">Goals Active</p>
                  <p className="text-3xl font-bold text-orange-400">5</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tasks */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Calendar className="w-7 h-7" />
                  Today's Tasks
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-2xl text-slate-300 hover:text-white transition-all">
                  <Plus className="w-4 h-4" />
                  Add Task
                </button>
              </div>
              
              <div className="space-y-4">
                {tasks.map((task) => (
                  <motion.div
                    key={task.id}
                    whileHover={{ x: 4 }}
                    className="group bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 rounded-2xl p-6 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white group-hover:text-teal-400 mb-1">{task.title}</h4>
                        <p className="text-slate-500 text-sm">Due {task.due}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        task.priority === 'high' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        task.priority === 'medium' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}>
                        {task.priority.toUpperCase()}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Spending Chart */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <DollarSign className="w-7 h-7 text-emerald-400" />
                  Spending
                </h3>
                <button className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-xl text-sm font-semibold hover:bg-emerald-500/30 transition-all">
                  This Month
                </button>
              </div>
              
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={spendingData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} tickCount={4} />
                  <Bar dataKey="value" fill="url(#gradient)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#059669" stopOpacity={0.4} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}