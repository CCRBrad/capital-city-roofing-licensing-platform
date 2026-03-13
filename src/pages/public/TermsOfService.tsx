import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Terms of Service"
                description="Terms of service for the Capital City Roofing website and partner portal."
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Legal</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-white/60 text-sm">Effective Date: March 12, 2026 &nbsp;|&nbsp; Last Updated: March 12, 2026</p>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom max-w-3xl">
                    <div className="prose prose-navy max-w-none space-y-8">

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">1. Agreement to Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By accessing or using the Capital City Roofing website (capitalcityroofing.net), including the partner portal and
                                any related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms").
                                If you do not agree to these Terms, do not use the Services. Capital City Roofing LLC ("CCR," "we," "our," or "us")
                                reserves the right to update these Terms at any time. Your continued use of the Services constitutes acceptance of any changes.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">2. Services Description</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                CCR operates a licensing platform that provides brand, systems, training, and operational support to approved market partners.
                                The public website provides information about the licensing model, application process, and company background. The partner portal
                                provides tools, training, and resources exclusively to approved, active partners.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">3. Eligibility</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Services are intended for individuals who are at least 18 years of age. By using the Services, you represent that
                                you meet this age requirement. Access to the partner portal is limited to individuals who have been approved through
                                the CCR application process and have an active partner agreement.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">4. User Accounts</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                Certain features of the Services require registration and account creation. If you create an account, you agree to:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Provide accurate, current, and complete information during registration.</li>
                                <li>Maintain the security of your account credentials and not share them with unauthorized individuals.</li>
                                <li>Notify us immediately of any unauthorized use of your account.</li>
                                <li>Accept responsibility for all activities that occur under your account.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">5. Acceptable Use</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                You agree not to use the Services to:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li>Violate any applicable law, regulation, or third-party rights.</li>
                                <li>Transmit any content that is unlawful, harmful, threatening, defamatory, or otherwise objectionable.</li>
                                <li>Attempt to gain unauthorized access to any part of the Services, other accounts, or computer systems.</li>
                                <li>Interfere with or disrupt the Services or servers/networks connected to the Services.</li>
                                <li>Use any automated means (bots, scrapers, etc.) to access or collect data from the Services without written permission.</li>
                                <li>Misrepresent your identity or affiliation with CCR.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">6. Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                All content, trademarks, logos, graphics, text, software, and other materials on the Services are the property of
                                Capital City Roofing LLC or its licensors and are protected by applicable intellectual property laws. You may not
                                reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any content from the
                                Services without prior written permission from CCR.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">7. Partner Portal Terms</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Access to the partner portal is governed by the separate Partner Licensing Agreement entered into between CCR and each
                                approved partner. In the event of a conflict between these Terms of Service and the Partner Licensing Agreement, the
                                Partner Licensing Agreement shall prevail for portal-related matters.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">8. Application Submissions</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                By submitting an application through the Services, you represent that all information provided is accurate and complete.
                                CCR reserves the right to accept or decline any application at its sole discretion. Submission of an application does not
                                guarantee acceptance into the licensing program. Application data is handled in accordance with our{' '}
                                <Link to="/privacy-policy" className="text-secondary font-bold hover:text-primary transition-colors">Privacy Policy</Link>.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">9. No Guarantees</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                CCR does not guarantee any specific financial outcomes, revenue, territory success, or business results from participation
                                in the licensing program. All statements regarding benefits, economics, or operational support are descriptive of the model's
                                design and intent — not guarantees of individual partner results. Partner outcomes depend on execution, market conditions,
                                team quality, and compliance readiness.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">10. Disclaimer of Warranties</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
                                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                                CCR DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">11. Limitation of Liability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CCR AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE
                                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF
                                THE SERVICES. CCR'S TOTAL LIABILITY FOR ANY CLAIM ARISING FROM THESE TERMS SHALL NOT EXCEED THE AMOUNTS PAID BY YOU
                                TO CCR, IF ANY, DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">12. Indemnification</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                You agree to indemnify, defend, and hold harmless CCR and its affiliates, officers, directors, employees, and agents
                                from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees)
                                arising out of or related to your use of the Services, violation of these Terms, or infringement of any third-party rights.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">13. Governing Law</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard
                                to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal
                                courts located in Fulton County, Georgia.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">14. Severability</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated
                                to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">15. Contact</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have questions about these Terms, contact us:
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

export default TermsOfService;
