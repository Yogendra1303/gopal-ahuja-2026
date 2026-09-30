import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header activeRoute="" />
      
      <div className="flex-1 max-w-4xl mx-auto w-full px-5 py-24 sm:py-32 mt-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-black">Privacy Policy</h1>
        
        <div className="prose prose-lg prose-red max-w-none text-gray-700">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">1. Information We Collect</h2>
          <p>
            We may collect personal information that you provide directly to us when you fill out a form, request a consultation, or otherwise communicate with us. The types of personal information we may collect include your name, email address, phone number, investment preferences, and any other information you choose to provide.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services. Specifically, we use your information to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Communicate with you about real estate opportunities, market insights, and other information we think will be of interest to you</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">3. Information Sharing</h2>
          <p>
            We do not share your personal information with third parties except as described in this privacy policy or as otherwise disclosed to you. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">4. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-black">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:hello@gopalahuja.com" className="text-[#C8102E] hover:underline">hello@gopalahuja.com</a>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
