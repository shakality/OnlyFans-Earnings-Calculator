import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <Helmet>
        <title>Terms of Service | OFCalc Pro</title>
        <meta name="description" content="Read our terms of service for using the OFCalc Pro website and tools." />
      </Helmet>

      <main className="max-w-4xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 prose prose-invert max-w-none backdrop-blur-sm">
          <h1 className="text-5xl font-display font-bold tracking-tighter uppercase mb-12 text-white">Terms of <span className="text-gradient">Service</span></h1>
          <p className="text-xs font-bold uppercase tracking-widest text-white/20 mb-12">Last Updated: March 25, 2026</p>

          <div className="text-white/60 font-light leading-relaxed space-y-8">
            <h2 className="text-white font-bold">1. Acceptance of Terms</h2>
            <p>
              By accessing and using OFCalc Pro, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-white font-bold">2. Use License</h2>
            <p>
              Permission is granted to temporarily use the tools on OFCalc Pro's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose;</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
              <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>

            <h2 className="text-white font-bold">3. Disclaimer</h2>
            <p>
              The materials on OFCalc Pro's website are provided on an 'as is' basis. OFCalc Pro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-white font-bold">4. Limitations</h2>
            <p>
              In no event shall OFCalc Pro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on OFCalc Pro's website.
            </p>

            <h2 className="text-white font-bold">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on OFCalc Pro's website could include technical, typographical, or photographic errors. OFCalc Pro does not warrant that any of the materials on its website are accurate, complete or current. OFCalc Pro may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-white font-bold">6. Links</h2>
            <p>
              OFCalc Pro has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by OFCalc Pro of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-white font-bold">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
