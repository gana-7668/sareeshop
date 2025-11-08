
'use client';
import { useState, useEffect } from 'react';

export default function TermsOfServicePage() {
    const [lastUpdated, setLastUpdated] = useState('');

    useEffect(() => {
        setLastUpdated(new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }));
    }, []);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-lg text-muted-foreground">Last updated: {lastUpdated || '...'}</p>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">1. Introduction</h2>
            <p>Welcome to Saree Shop. These Terms of Service ("Terms") govern your use of our website located at sareeshop.com (the "Site") and any related services provided by Saree Shop. By accessing or using our Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our Site.</p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">2. Use of Our Website</h2>
            <p>You agree to use the Site for lawful purposes only. You are prohibited from posting on or transmitting through the Site any material that is harmful, threatening, defamatory, obscene, or otherwise objectionable. You agree not to disrupt or interfere with the security of, or otherwise abuse, the Site, or any services, system resources, accounts, servers, or networks connected to or accessible through the Site.</p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">3. Products and Pricing</h2>
            <p>All products listed on the Site are subject to availability, and we reserve the right to impose quantity limits on any order, to reject all or part of an order, and to discontinue products without notice, even if you have already placed your order. All prices are shown in Indian Rupees (INR) and are subject to change without notice.</p>
          </section>
          
          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">4. Intellectual Property</h2>
            <p>All content included on the Site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Saree Shop or its suppliers and protected by copyright and other intellectual property laws.</p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">5. Limitation of Liability</h2>
            <p>In no event shall Saree Shop, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">6. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">7. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms of Service on this page. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms.</p>
          </section>

           <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at support@sareeshop.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
