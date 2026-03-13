import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';

const Contact: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Contact CCR Licensing"
                description="Get in touch with Capital City Roofing's licensing team. We're here to answer questions about partnership opportunities and the operator model."
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Contact Us
                    </h1>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-24 bg-white relative">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-black font-display text-primary uppercase tracking-tight mb-6">Let's Talk Business</h2>
                        <p className="text-lg text-muted-foreground mb-8">Whether you're interested in our licensing model, have questions about our tech stack, or just want to see if your market is available, we're here to help.</p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-950">Phone</h4>
                                    <p className="text-muted-foreground">(470) 766-3285</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-950">Email</h4>
                                    <p className="text-muted-foreground">licensing@capitalcityroofing.net</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-950">Headquarters</h4>
                                    <p className="text-muted-foreground">360 Winkler Drive, Suite E<br />Alpharetta, Georgia 30004</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted p-8 rounded-xl border border-border mt-8 md:mt-0">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy-950">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy-950">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy-950">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy-950">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy-950">Message</label>
                                <textarea rows={4} className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
                            </div>
                            <button type="button" className="w-full bg-secondary text-white font-bold py-3 rounded-md hover:bg-red-700 transition-colors">Send Message</button>
                            <p className="text-muted-foreground text-[10px] text-center mt-2 leading-relaxed">
                                By submitting, you agree to receive follow-up communications. See our <a href="/privacy-policy" className="underline hover:text-navy-900">Privacy Policy</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
