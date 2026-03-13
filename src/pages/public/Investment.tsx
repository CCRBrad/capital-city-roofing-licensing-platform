import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';
import { DollarSign, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

const Investment: React.FC = () => {
    return (
        <>
            <SEOHead
                title="CCR Licensing Investment"
                description="Transparent investment structure for CCR licensed market partners. Understand what's included, ongoing fees, and how pricing aligns with partner economics."
                noIndex
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Transparent Pricing</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Investment & Partner Structure
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Clear, straightforward economics designed to align CCR's success with yours.
                    </p>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom max-w-4xl">
                    {/* Philosophy */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-black font-display text-primary uppercase mb-4">How Pricing Works</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            The CCR licensing model is structured to keep partner costs predictable and closely tied to actual business activity.
                            We don't front-load massive franchise fees or charge uncapped ongoing royalties. The structure is designed so CCR benefits
                            when partners operate well — not from collecting fixed fees regardless of partner success.
                        </p>
                    </div>

                    {/* What's included */}
                    <div className="bg-muted border border-border rounded-xl p-8 mb-12">
                        <div className="flex items-center space-x-3 mb-6">
                            <DollarSign className="w-6 h-6 text-secondary" />
                            <h3 className="text-xl font-black font-heading text-navy-950 uppercase">What's Included in Your Investment</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Capital City Roofing brand license',
                                'GAF Master Elite & CertainTeed certifications',
                                'Full AI-enabled CRM & tech stack access',
                                'Centralized estimating & supplement support',
                                'Capital City University onboarding training',
                                'SOPs, playbooks, and operational frameworks',
                                'Protected, exclusive market territory',
                                'Ongoing partner support & updates',
                                'Marketing templates & launch assets',
                                'Performance dashboards & reporting',
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 shrink-0" />
                                    <span className="text-sm text-navy-800 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fee structure overview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white border border-border rounded-xl p-6 text-center">
                            <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">Initial Licensing Fee</h4>
                            <p className="text-lg font-bold text-navy-950 mb-2">One-Time</p>
                            <p className="text-sm text-muted-foreground">Covers brand license, territory setup, tech provisioning, and University onboarding. Details discussed during Discovery Call.</p>
                        </div>
                        <div className="bg-white border border-border rounded-xl p-6 text-center">
                            <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">Ongoing Royalty</h4>
                            <p className="text-lg font-bold text-navy-950 mb-2">5% Capped</p>
                            <p className="text-sm text-muted-foreground">Revenue-based, with a defined cap. Significantly lower than typical franchise royalties of 8–10% uncapped.</p>
                        </div>
                        <div className="bg-white border border-border rounded-xl p-6 text-center">
                            <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">Contract Terms</h4>
                            <p className="text-lg font-bold text-navy-950 mb-2">Month-to-Month</p>
                            <p className="text-sm text-muted-foreground">No 10-year lock-in. Partners stay because the model works, not because they're contractually trapped.</p>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-navy-50 border border-navy-100 rounded-xl p-6 flex items-start space-x-4 mb-16">
                        <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <p className="text-sm text-navy-800 leading-relaxed">
                            <strong>Important:</strong> Specific investment amounts, royalty structure details, and territory-specific pricing are discussed during the Discovery Call
                            stage of the application process. CCR does not guarantee revenue outcomes. Partner results depend on execution, market conditions, and compliance readiness.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <p className="text-muted-foreground mb-6">Ready to discuss the investment structure for your market?</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link to="/apply" className="inline-flex items-center bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
                                Apply to Become a Partner <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link to="/the-model" className="inline-block bg-navy-950 text-white px-8 py-3 rounded-md font-bold hover:bg-navy-900 transition-colors">
                                See The Model
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Investment;
