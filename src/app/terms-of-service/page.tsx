import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header activeRoute="" />
      
      <div className="flex-1 max-w-4xl mx-auto w-full px-5 py-24 sm:py-32 mt-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-black">Terms of Service</h1>
        
        <div className="prose prose-lg prose-red max-w-none text-gray-700">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">2. Use of Information</h2>
          <p>
            The market intelligence, case studies, and property information provided on this website are for general informational purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">3. Real Estate Investments</h2>
          <p>
            Real estate investments carry inherent risks. Past performance is not indicative of future results. The insights and strategies discussed on this website do not constitute financial or legal advice. Investors should conduct their own due diligence and consult with professional advisors before making any investment decisions.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">4. Intellectual Property</h2>
          <p>
            The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws and are owned by Gopal Ahuja or its licensors, unless otherwise stated.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">5. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:hello@gopalahuja.com" className="text-[#C8102E] hover:underline">hello@gopalahuja.com</a>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
