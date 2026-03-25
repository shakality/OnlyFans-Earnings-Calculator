import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-40 pb-20">
      <Helmet>
        <title>Contact Us | OFCalc Pro Support</title>
        <meta name="description" content="Have questions or feedback? Get in touch with the OFCalc Pro team." />
      </Helmet>

      <main className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h1 className="text-7xl font-display font-bold tracking-tighter uppercase mb-8">
              Get in <span className="text-gradient">Touch.</span>
            </h1>
            <p className="text-xl font-light opacity-60 leading-relaxed mb-12">
              We're here to help. Whether you have a question about our tools or want to suggest a new feature, we'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-8 p-8 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white stroke-[1.5px]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-2">Email us at</p>
                  <p className="text-xl font-display font-medium text-white">support@ofcalc.pro</p>
                </div>
              </div>
              <div className="flex items-center gap-8 p-8 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white stroke-[1.5px]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-2">Social Media</p>
                  <p className="text-xl font-display font-medium text-white">@OFCalcPro</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-sm"
            >
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                  <p className="opacity-60">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-12 text-brand-primary font-bold hover:underline uppercase tracking-widest text-xs"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Jane Doe"
                        className="w-full bg-transparent border-b border-white/5 py-4 text-2xl font-display font-medium text-white focus:border-white/20 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="jane@example.com"
                        className="w-full bg-transparent border-b border-white/5 py-4 text-2xl font-display font-medium text-white focus:border-white/20 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6">Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full bg-transparent border-b border-white/5 py-4 text-2xl font-display font-medium text-white focus:border-white/20 outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-4 py-6 text-[11px] font-bold uppercase tracking-[0.2em]"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
