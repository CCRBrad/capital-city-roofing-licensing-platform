import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';

const UniversityPreview: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Capital City University | Capital City Roofing"
                description="Partner onboarding training covering systems, sales, production, and market launch."
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">The 14-Day Intensive Training</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Capital City University
                    </h1>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-24 bg-white">
                <div className="container-custom max-w-4xl text-center">
                    <h2 className="text-3xl font-black font-display text-primary uppercase tracking-tight mb-6">From Sales Pro to Systems Operator</h2>
                    <p className="text-lg text-muted-foreground mb-16">Our proprietary 14-day training curriculum handles the heavy lifting of teaching you exactly how to operate the Capital City Roofing model inside your exclusive market.</p>
                </div>

                <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { day: 'Days 1-3', title: 'The Blueprint', desc: 'Understanding the backend systems: CRM setup, AI automation configuration, and understanding models.' },
                        { day: 'Days 4-7', title: 'The Sales Matrix', desc: 'Mastering our retail and insurance sales processes, and learning how to properly leverage our estimators.' },
                        { day: 'Days 8-11', title: 'Production & Fulfillment', desc: 'Navigating material ordering, crew management, QC standards, and tracking job progress.' },
                        { day: 'Days 12-14', title: 'Market Launch & Pipeline', desc: 'Local marketing launch strategies, generating leads, and scaling recruiting to build your team.' }
                    ].map((module, idx) => (
                        <div key={idx} className="bg-muted p-8 rounded-xl border border-border">
                            <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-2 block">{module.day}</span>
                            <h3 className="font-bold text-navy-950 text-xl font-heading mb-4">{module.title}</h3>
                            <p className="text-muted-foreground">{module.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <a href="/apply" className="inline-block bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-navy-800 transition-colors">Apply For The Next Cohort</a>
                </div>
            </section>
        </>
    );
};

export default UniversityPreview;
