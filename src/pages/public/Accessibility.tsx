import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';

const Accessibility: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Accessibility Statement"
                description="Capital City Roofing is committed to ensuring digital accessibility for all users. Learn about our accessibility practices and how to contact us."
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Commitment</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Accessibility Statement
                    </h1>
                    <p className="text-white/60 text-sm">Last Updated: March 12, 2026</p>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom max-w-3xl">
                    <div className="prose prose-navy max-w-none space-y-8">

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">Our Commitment</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Capital City Roofing LLC ("CCR") is committed to ensuring that our website and partner portal are accessible
                                to all users, including people with disabilities. We continually work to improve the user experience for everyone
                                and apply relevant accessibility standards.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">Standards</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These guidelines are
                                developed by the World Wide Web Consortium (W3C) and outline how to make web content more accessible to people
                                with a range of disabilities, including visual, auditory, motor, and cognitive impairments.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">What We're Doing</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                We take the following measures to ensure accessibility:
                            </p>
                            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                                <li><strong>Semantic HTML:</strong> We use proper heading hierarchy, landmark regions, and semantic elements throughout the site.</li>
                                <li><strong>Keyboard Navigation:</strong> All interactive elements are accessible via keyboard, including navigation menus, forms, buttons, and links.</li>
                                <li><strong>Focus Management:</strong> Visible focus indicators are provided for keyboard users. Modals and dialogs manage focus appropriately.</li>
                                <li><strong>Color Contrast:</strong> We maintain sufficient color contrast ratios between text and backgrounds to meet WCAG AA standards.</li>
                                <li><strong>Form Accessibility:</strong> All form fields include associated labels, required field indicators, and descriptive error messages.</li>
                                <li><strong>Image Alternatives:</strong> Meaningful images include descriptive alt text. Decorative images are marked appropriately.</li>
                                <li><strong>Responsive Design:</strong> Our site is designed to work across a range of devices, screen sizes, and zoom levels.</li>
                                <li><strong>Readable Text:</strong> We use clear typography, reasonable line heights, and sufficient font sizes for readability.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">Known Limitations</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                While we strive for comprehensive accessibility, some areas of the site may not yet fully meet WCAG 2.1 AA standards.
                                We are actively working to identify and resolve these gaps. If you encounter any accessibility issues, please
                                let us know so we can address them.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">Third-Party Content</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Some content on our website may be provided by third-party services (e.g., embedded forms, analytics tools, or external platforms).
                                While we choose providers that value accessibility, we cannot guarantee full accessibility compliance of third-party content.
                                If you encounter an issue with third-party content, please contact us and we will work to find an alternative solution.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">Feedback and Contact</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions
                                for improvement, please contact us:
                            </p>
                            <div className="bg-muted border border-border rounded-xl p-6 text-sm text-navy-800 space-y-1">
                                <p><strong>Capital City Roofing LLC</strong></p>
                                <p>Email: brad@capitalcityroofing.net</p>
                                <p>Phone: (470) 766-3285</p>
                                <p>Website: <Link to="/contact" className="text-secondary font-bold hover:text-primary transition-colors">capitalcityroofing.net/contact</Link></p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                We aim to respond to accessibility feedback within 5 business days and will work to resolve any reported issues
                                as quickly as possible.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-black font-display text-navy-950 uppercase mb-3">Enforcement</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you are not satisfied with our response to your accessibility concern, you may file a complaint with the
                                U.S. Department of Justice, Civil Rights Division, or the applicable enforcement body in your jurisdiction.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Accessibility;
