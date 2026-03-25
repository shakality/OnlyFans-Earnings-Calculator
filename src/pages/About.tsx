import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Target, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <Helmet>
        <title>About Us | OFCalc Pro - Professional Creator Tools</title>
        <meta name="description" content="Learn about our mission to provide free, accurate, and professional tools for digital content creators." />
      </Helmet>

      <main className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-7xl font-display font-bold tracking-tighter mb-12 uppercase">
            The <span className="text-gradient">Mission.</span>
          </h1>
          
          <p className="text-2xl font-light opacity-60 leading-relaxed mb-16">
            At OFCalc Pro, we believe that every content creator is an entrepreneur. Our mission is to provide the data and tools necessary for creators to treat their passion like a professional business.
          </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm">
              <Target className="w-8 h-8 text-white stroke-[1.5px] mb-8" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-white/20">Accuracy</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">We use real-world platform data to ensure our estimates are as close to reality as possible.</p>
            </div>
            <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm">
              <Shield className="w-8 h-8 text-white stroke-[1.5px] mb-8" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-white/20">Privacy</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">Your data stays in your browser. We never store or track your financial estimates.</p>
            </div>
            <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm">
              <Zap className="w-8 h-8 text-white stroke-[1.5px] mb-8" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-white/20">Simplicity</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light">Tools designed to be fast, beautiful, and easy to use on any device.</p>
            </div>
          </div>

          <div className="space-y-8 text-white/60 font-light leading-relaxed">
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
            <p>
              Founded in 2024, OFCalc Pro started as a simple spreadsheet used by a small group of creators to track their growth. We realized that the wider creator community lacked professional-grade financial tools that weren't locked behind expensive subscriptions.
            </p>
            <p>
              Today, we serve thousands of creators monthly, providing free tools that help them plan their financial future and grow their digital empires.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
