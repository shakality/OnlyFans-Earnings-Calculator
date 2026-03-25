import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-40 pb-20">
      <Helmet>
        <title>Privacy Policy | OFCalc Pro</title>
        <meta name="description" content="Our privacy policy details how we handle your data and our use of cookies and third-party services like Google AdSense." />
      </Helmet>

      <main className="max-w-4xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-16 prose prose-invert max-w-none backdrop-blur-sm">
          <h1 className="text-5xl font-display font-bold tracking-tighter uppercase mb-12 text-white">Privacy <span className="text-gradient">Policy</span></h1>
          <p className="text-xs font-bold uppercase tracking-widest text-white/20 mb-12">Last Updated: March 25, 2026</p>

          <div className="text-white/60 font-light leading-relaxed space-y-8">
            <p>
              At OFCalc Pro, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by OFCalc Pro and how we use it.
            </p>

            <h2 className="text-white font-bold">1. Log Files</h2>
            <p>
              OFCalc Pro follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>

            <h2 className="text-white font-bold">2. Cookies and Web Beacons</h2>
            <p>
              Like any other website, OFCalc Pro uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2 className="text-white font-bold">3. Google DoubleClick DART Cookie</h2>
            <p>
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-brand-primary">https://policies.google.com/technologies/ads</a>
            </p>

            <h2 className="text-white font-bold">4. Google AdSense</h2>
            <p>
              We use Google AdSense to serve advertisements on our website. Google AdSense uses cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Ads Settings.
            </p>

            <h2 className="text-white font-bold">5. Third Party Privacy Policies</h2>
            <p>
              OFCalc Pro's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>

            <h2 className="text-white font-bold">6. Data Protection Rights</h2>
            <p>
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
              <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            </ul>

            <h2 className="text-white font-bold">7. Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
