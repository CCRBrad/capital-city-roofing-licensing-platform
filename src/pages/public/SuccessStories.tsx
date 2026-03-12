import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Award, Users } from 'lucide-react';

const SuccessStories: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Why Capital City Roofing | Credentials & Standards"
                description="Real credentials, real process, real standards. Learn why CCR is qualified to license this operating model."
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Credentials & Standards</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Built on Real Proof
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        We do not manufacture success stories. We lead with credentials, process, standards, and selectivity.
                    </p>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            {/* Credentials */}
            <section className="py-24 bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black font-display uppercase tracking-tight text-primary mb-4">Industry Certifications</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">These are current, verifiable credentials held by Capital City Roofing.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            'GAF Master Elite Contractor (Top 2%)',
                            'GAF Commercial Certified',
                            'CertainTeed ShingleMaster Premier',
                            'GenFlex Commercial Certified',
                            'NRCA Member',
                            'Roofing Alliance Guarantor Member',
                        ].map((cert, idx) => (
                            <div key={idx} className="bg-navy-50 p-6 rounded-xl border border-navy-100 flex items-start">
                                <Award className="w-5 h-5 text-secondary mr-3 mt-0.5 shrink-0" />
                                <span className="font-bold text-navy-900">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why CCR */}
            <section className="py-24 bg-muted">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black font-display uppercase tracking-tight text-primary mb-4">Why CCR Is Qualified to License This Model</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: 'Real Operating Background', items: ['Active roofing business operations', 'Real-world production & supplement processes', 'Technology-enabled workflows built in the field', 'EOS-driven leadership & accountability'] },
                            { icon: Users, title: 'Selective Partner Process', items: ['Application review & qualification', 'Discovery call for mutual fit', 'Territory & market evaluation', 'Structured onboarding for approved partners'] },
                            { icon: CheckCircle2, title: 'What Partners Receive', items: ['Brand, systems, training, and SOPs', 'CRM, estimating, and AI tools', 'Centralized back-office support', 'Ongoing partner enablement'] },
                        ].map((block, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl border border-border shadow-sm">
                                <block.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-black font-display uppercase text-primary mb-4">{block.title}</h3>
                                <ul className="space-y-2.5">
                                    {block.items.map((item, idy) => (
                                        <li key={idy} className="flex items-start text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-4 h-4 text-success mr-2 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Disclaimer */}
            <section className="py-16 bg-white text-center">
                <div className="container-custom max-w-2xl">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                        We do not promise guaranteed outcomes. We provide qualified partners with a stronger brand, clearer systems, and a more disciplined operating framework. Results depend on execution, market conditions, team quality, and compliance readiness.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-navy-50 text-center">
                <div className="container-custom max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black font-display text-primary uppercase mb-4">Ready to See Whether This Model Is the Right Fit?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                        Review the model or start your application.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/apply" className="inline-block bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
                            Apply to Become a Partner
                        </Link>
                        <Link to="/the-model" className="inline-block bg-navy-950 text-white px-8 py-3 rounded-md font-bold hover:bg-navy-900 transition-colors">
                            See The Model
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SuccessStories;
