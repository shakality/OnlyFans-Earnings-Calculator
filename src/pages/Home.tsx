import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Users, TrendingUp, Info, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const [subscribers, setSubscribers] = useState<number>(500);
  const [price, setPrice] = useState<number>(14.99);
  const [tips, setTips] = useState<number>(10.00);
  const [earnings, setEarnings] = useState({ gross: 0, net: 0, fee: 0 });

  useEffect(() => {
    const gross = (subscribers * price) + (subscribers * tips);
    const fee = gross * 0.2;
    const net = gross - fee;
    setEarnings({ gross, net, fee });
  }, [subscribers, price, tips]);

  const faqItems = [
    {
      q: "How accurate is this OnlyFans earnings calculator?",
      a: "Our calculator provides a realistic estimate based on the variables you provide. However, actual earnings may vary due to chargebacks, subscription churn, and taxes. It uses the standard 20% OnlyFans platform fee."
    },
    {
      q: "What is the average OnlyFans income?",
      a: "While the top 1% of creators earn significant amounts, the median income is around $150-$180 per month. Success depends heavily on marketing, niche, and subscriber engagement."
    },
    {
      q: "Does OnlyFans take a percentage of tips?",
      a: "Yes, OnlyFans takes a flat 20% fee from all earnings, including subscriptions, tips, and pay-per-view (PPV) content."
    },
    {
      q: "How can I increase my OnlyFans earnings?",
      a: "Focus on building a strong social media presence (Twitter, Instagram, TikTok), offering tiered content, engaging directly with fans through messages, and providing high-quality, consistent uploads."
    }
  ];

  return (
    <div className="relative overflow-hidden pt-48 pb-20">
      <Helmet>
        <title>OnlyFans Earnings Calculator 2026 | Estimate Your Income</title>
        <meta name="description" content="Use our free OnlyFans earnings calculator to estimate your monthly income. Input your subscribers, price, and tips to see your net profit after fees." />
        <link rel="canonical" href="https://ais-pre-5gvp7lc76vevury3qc7r7n-23495064725.europe-west2.run.app/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "OnlyFans Earnings Calculator Pro",
              "description": "A professional-grade financial tool for content creators to estimate their monthly net income after platform fees.",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Subscriber-based income estimation",
                "Tip and PPV revenue calculation",
                "Automatic 20% platform fee deduction",
                "Net profit margin analysis"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Atmospheric Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-brand-secondary/5 blur-[100px] rounded-full"></div>
      </div>

      <main className="max-w-7xl mx-auto px-6">
        {/* Calculator Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl shadow-black/50"
          >
            {/* Inputs */}
            <div className="p-10 md:p-16 bg-[#0A0A0A]">
              <div className="space-y-12">
                <div className="group">
                  <div className="flex justify-between items-end mb-6">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 group-hover:text-white/40 transition-colors">Subscribers</label>
                    <span className="font-display text-4xl font-bold text-white tracking-tighter">{subscribers.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="10000" 
                    step="10"
                    value={subscribers}
                    onChange={(e) => setSubscribers(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-white"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6 group-hover:text-white/40 transition-colors">Subscription Price</label>
                  <div className="relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-display font-bold text-white/5">$</span>
                    <input 
                      type="number" 
                      value={price}
                      onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                      className="w-full bg-transparent border-b border-white/5 py-6 pl-12 text-6xl font-display font-bold text-white focus:border-white/20 outline-none transition-colors tracking-tighter"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6 group-hover:text-white/40 transition-colors">Average Tips / PPV</label>
                  <div className="relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl font-display font-bold text-white/5">$</span>
                    <input 
                      type="number" 
                      value={tips}
                      onChange={(e) => setTips(parseFloat(e.target.value) || 0)}
                      className="w-full bg-transparent border-b border-white/5 py-6 pl-12 text-6xl font-display font-bold text-white focus:border-white/20 outline-none transition-colors tracking-tighter"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="p-10 md:p-16 bg-[#0F0F0F] flex flex-col justify-between relative overflow-hidden">
              {/* Visual Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] -z-10"></div>
              
              <div className="space-y-16">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-4">Monthly Gross</p>
                  <p className="text-6xl md:text-7xl font-display font-bold tracking-tighter text-white">
                    ${earnings.gross.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                </div>

                <div className="flex gap-16">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-4">Platform Fee (20%)</p>
                    <p className="text-3xl font-display font-medium text-white/40 tracking-tighter">
                      -${earnings.fee.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-4">Net Margin</p>
                    <p className="text-3xl font-display font-medium text-white tracking-tighter">80%</p>
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-6">Estimated Take-Home</p>
                <div className="flex items-baseline gap-4">
                  <span className="text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-white leading-none">
                    ${earnings.net.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            <h2 className="text-5xl font-display font-bold leading-tight mb-8 text-white">
              The Science of <br />
              <span className="text-white/40">Creator Growth.</span>
            </h2>
            <div className="space-y-6 text-white/60 font-light leading-relaxed text-lg">
              <p>
                Understanding your potential earnings is the first step toward building a sustainable digital business. Our OnlyFans earnings calculator is designed to provide creators with a clear, professional-grade financial overview.
              </p>
              <p>
                By analyzing your subscriber count, subscription price, and average tips, you can better plan your content strategy and marketing efforts. Whether you're just starting or looking to scale your existing profile, data-driven decisions are key to long-term success.
              </p>
              <h3 className="text-2xl font-bold text-white mt-12 mb-4">How to Increase Your OnlyFans Income</h3>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Optimize Your Pricing:</strong> Test different subscription price points to find the sweet spot between subscriber volume and revenue per user.</li>
                <li><strong>Focus on Retention:</strong> It's often more cost-effective to keep an existing subscriber than to acquire a new one. Engage with your fans regularly.</li>
                <li><strong>Upsell with PPV:</strong> Pay-Per-View content can significantly boost your average revenue per user (ARPU) beyond the base subscription fee.</li>
                <li><strong>Cross-Platform Marketing:</strong> Use platforms like Twitter, Instagram, and TikTok to drive traffic to your profile.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="grid grid-cols-1 gap-8">
              <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-white">Engagement Metrics</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Top creators earn 60% of their revenue through direct messaging and tips. 
                  Focus on building deep connections rather than just wide reach.
                </p>
              </div>
              <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-white">Retention Strategy</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Churn is the silent killer. Use tiered pricing and long-term 
                  subscription bundles to stabilize your monthly recurring revenue.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white/20">Frequently Asked</h3>
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <details key={idx} className="group border-b border-white/10 pb-6">
                    <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-lg text-white hover:text-brand-primary transition-colors">
                      {item.q}
                      <span className="group-open:rotate-180 transition-transform text-white/20">↓</span>
                    </summary>
                    <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-2xl">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
