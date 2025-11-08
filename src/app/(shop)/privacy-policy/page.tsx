
export default function PrivacyPolicyPage() {
    const lastUpdated = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-lg text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">1. Introduction</h2>
            <p>Welcome to Saree Shop. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
             <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Process payments and refunds.</li>
                <li>Increase the efficiency and operation of the Site.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by law or to protect rights, or to third-party service providers who perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">5. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">6. Changes to This Privacy Policy</h2>
            <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.</p>
          </section>

           <section>
            <h2 className="font-headline text-2xl text-foreground mb-3">7. Contact Us</h2>
            <p>If you have any questions or comments about this Privacy Policy, please contact us at support@sareeshop.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
