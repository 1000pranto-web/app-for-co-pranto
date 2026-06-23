import React from 'react';
import { 
  BookOpen, Activity, Award, Database, 
  Users, BarChart2, FileText, Monitor 
} from 'lucide-react';

const DashboardCard = ({ title, icon: Icon, value }) => (
  <div className="relative group cursor-pointer">
    {/* Animated Neon Glow Effect behind the card */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
    
    {/* Glassmorphism Card */}
    <div className="relative flex flex-col items-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-cyan-400/50 transition-colors duration-300">
      <Icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      {value && <span className="mt-2 text-2xl font-bold text-white">{value}</span>}
    </div>
  </div>
);

export default function SuperAdminDashboard() {
  const cards = [
    { title: 'Exams', icon: BookOpen, value: '12 Active' },
    { title: 'Performance Tests', icon: Activity, value: '8 Pending' },
    { title: 'Results', icon: Award, value: 'Publishing' },
    { title: 'Question Bank', icon: Database, value: '1,240 Qs' },
    { title: 'Students', icon: Users, value: '450 Enrolled' },
    { title: 'Analytics', icon: BarChart2, value: 'View Reports' },
    { title: 'Certificates', icon: FileText, value: 'Generate' },
    { title: 'Live Monitoring', icon: Monitor, value: '3 Active Sessions' },
  ];

  return (
    <div className="min-h-screen bg-[#0a1128] text-white p-8 font-sans selection:bg-cyan-500/30">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            SkillTest Pro
          </h1>
          <p className="text-gray-400 mt-2">Super Admin Control Center</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-[#0a1128] flex items-center justify-center">
              <span className="font-bold text-sm text-cyan-400">SA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <DashboardCard key={index} title={card.title} icon={card.icon} value={card.value} />
        ))}
      </div>
    </div>
  );
}