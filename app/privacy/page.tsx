import React from 'react';

export default function PrivacyPage() {
    return (
        <main className="bg-background min-h-screen text-foreground py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="space-y-4 border-b border-border pb-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                    <p className="text-muted-foreground">Last Updated: February 2026</p>
                </header>

                <section className="space-y-6 text-foreground leading-relaxed">
                    <div className="space-y-2">
                        <p><strong>Website:</strong> www.meronatic.com</p>
                        <p><strong>Company:</strong> Meronatic Solutions</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">1. Overview</h2>
                        <p>Meronatic Solutions is committed to maintaining enterprise-grade data protection standards and protecting user privacy.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
                        <p>We may collect personal information including name, email, phone number, company name, billing information, and business data. We may also collect technical data such as IP address, browser type, device information, and usage data.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">3. How We Use Information</h2>
                        <p>Data is used to deliver services, optimize performance, communicate with clients, improve Website functionality, and ensure legal compliance. We do not sell personal data.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">4. Legal Basis for Processing</h2>
                        <p>Processing may be based on contractual necessity, legitimate interests, legal compliance, or user consent.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">5. Cookies & Tracking</h2>
                        <p>We may use analytics tools, tracking pixels, and session cookies. Users may disable cookies through browser settings.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">6. Data Security</h2>
                        <p>We implement security measures including SSL encryption, secure hosting, and controlled access policies.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">7. Data Sharing</h2>
                        <p>Information may be shared with trusted service providers, advertising platforms, payment processors, or legal authorities when required.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">8. Data Retention</h2>
                        <p>Data is retained only as long as necessary to fulfill contractual and legal obligations.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">9. User Rights</h2>
                        <p>Users may request access, correction, deletion, withdrawal of consent, or data portability subject to applicable laws.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">10. International Transfers</h2>
                        <p>Data may be processed outside your country of residence with appropriate safeguards.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">11. Children's Privacy</h2>
                        <p>Our services are not directed to individuals under 18 years of age.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">12. Policy Updates</h2>
                        <p>We reserve the right to update this Privacy Policy at any time. Continued use constitutes acceptance.</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">13. Contact</h2>
                        <p>Meronatic Solutions<br />
                            Website: www.meronatic.com<br />
                            Email: info@meronatic.com</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
