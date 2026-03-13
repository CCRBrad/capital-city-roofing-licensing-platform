import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Privacy Policy"
                description="Capital City Roofing privacy policy — how we collect, use, and protect your personal information."
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Legal</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-white/60 text-sm">Effective Date: March 12, 2026 &nbsp;|&nbsp; Last Updated: March 12, 2026</p>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom max-w-3xl">
                    <div className="prose prose-navy max-w-none space-y-8">

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">1. Introduction</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Capital City Roofing LLC ("CCR," "we," "our," or "us") respects your privacy. This Privacy Policy describes how we collect,
                                use, disclose, and protect your personal information when you visit our website at capitalcityroofing.net, interact with our
                                partner portal, or communicate with us through any channel.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">2. Information We Collect</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">We may collect the following types of personal information:</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address when you submit a form, apply to become a partner, or contact us.</li>
                                <li><strong>Business Information:</strong> Company name, business experience, roofing industry background, contractor licensing status, and market interest submitted during the application process.</li>
                                <li><strong>Account Information:</strong> Login credentials and profile information for partner portal users.</li>
                                <li><strong>Usage Data:</strong> IP address, browser type, device information, pages visited, time spent on site, and referring URLs collected automatically through standard web technologies.</li>
                                <li><strong>Cookies and Tracking:</strong> We may use cookies, pixels, and similar technologies to improve user experience and analyze site performance.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">3. How We Use Your Information</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect for the following purposes:</p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>To evaluate partnership applications and communicate with prospective partners.</li>
                                <li>To provide, maintain, and improve the partner portal and related services.</li>
                                <li>To respond to questions, requests, and support inquiries.</li>
                                <li>To send operational communications, updates, and training notifications to active partners.</li>
                                <li>To analyze site usage and improve our website and user experience.</li>
                                <li>To comply with legal obligations and enforce our terms.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">4. Information Sharing</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                We do not sell your personal information. We may share information in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong>Service Providers:</strong> We may share information with third-party providers that support our operations (e.g., CRM, email, hosting, analytics) under appropriate data handling agreements.</li>
                                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, regulation, legal process, or governmental request.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred as part of the transaction.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">5. Data Security</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We implement reasonable technical and organizational measures to protect your personal information from unauthorized access,
                                alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure,
                                and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">6. Data Retention</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We retain your personal information for as long as necessary to fulfill the purposes described in this policy,
                                comply with legal obligations, resolve disputes, and enforce our agreements. Application data for applicants who are
                                not accepted may be retained for up to 24 months and then deleted.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">7. Your Rights</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                Depending on your jurisdiction, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
                                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time by clicking the unsubscribe link in any email or contacting us directly.</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-3">
                                To exercise any of these rights, contact us at <strong>brad@capitalcityroofing.net</strong> or through our <Link to="/contact" className="text-secondary font-bold hover:text-primary transition-colors">Contact page</Link>.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">8. Cookies</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website may use cookies and similar tracking technologies (e.g., Google Analytics) to analyze traffic and improve user experience.
                                You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">9. Third-Party Links</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.
                                We encourage you to review the privacy policies of any third-party site you visit.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">10. Children's Privacy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal
                                information from children. If you believe we have collected information from a child, please contact us and we will
                                promptly remove it.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">11. Changes to This Policy</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
                                Your continued use of our website after any changes constitutes acceptance of the updated policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">12. Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have questions about this Privacy Policy or our data practices, contact us:
                            </p>
                            <div className="mt-4 bg-muted border border-border rounded-xl p-6 text-sm text-navy-800 space-y-1">
                                <p><strong>Capital City Roofing LLC</strong></p>
                                <p>Email: brad@capitalcityroofing.net</p>
                                <p>Phone: (470) 766-3285</p>
                                <p>Website: <Link to="/contact" className="text-secondary font-bold hover:text-primary transition-colors">capitalcityroofing.net/contact</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
