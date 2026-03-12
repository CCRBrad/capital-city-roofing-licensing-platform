import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';

const TechStack: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Our Tech Stack | Capital City Roofing"
                description="Discover the AI-driven tools that power our operators."
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">The AI Edge</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Tech Stack
                    </h1>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-24 bg-white min-h-[400px] flex items-center justify-center">
                <div className="container-custom max-w-3xl text-center">
                    <div className="p-12 bg-muted rounded-2xl border border-border">
                        <h2 className="text-3xl font-black font-display text-primary uppercase mb-4">Ready to See Whether This Model Is the Right Fit?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Review the model or start your application. Every public page is designed to lead qualified operators toward the next clear step.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link to="/apply" className="inline-block bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
                                Apply to Become a Partner
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

export default TechStack;
