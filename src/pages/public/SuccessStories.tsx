import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';

const SuccessStories: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Success Stories | Capital City Roofing"
                description="Real Results from Real Operators"
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Real Results from Real Operators</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Success Stories
                    </h1>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-24 bg-white relative">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: 'Michael T.', location: 'Atlanta, GA (2025)', rev: '$2.1M Y1 Revenue', quote: '"The tech stack alone is worth the fee. Best business decision I\'ve made."'
                        },
                        { name: 'Sarah J.', location: 'Charlotte, NC (2025)', rev: '$3.4M Y2 Revenue', quote: '"I switched from a major franchise. The 5% capped royalty vs the 9% I was paying means I kept an extra $130K."' },
                        { name: 'David L.', location: 'Nashville, TN (2026)', rev: 'Onboarding Phase', quote: '"Capital City University had me ready to sell on Day 14. The support team is incredible."' }
                    ].map((testimonial, idx) => (
                        <div key={idx} className="bg-navy-900 p-8 rounded-xl border border-white/10 shadow-navy-xl flex flex-col justify-between text-white">
                            <div>
                                <p className="text-lg italic text-white/90 mb-6 leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>
                            <div className="border-t border-white/10 pt-4">
                                <h4 className="font-bold font-heading text-lg">{testimonial.name}</h4>
                                <p className="text-white/60 text-sm mb-1">{testimonial.location}</p>
                                <p className="text-[hsl(38,75%,50%)] font-bold text-sm tracking-wide">{testimonial.rev}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-24 bg-navy-50 text-center">
                <div className="container-custom">
                    <h2 className="text-4xl font-black font-display text-primary uppercase mb-6">Ready to write your own success story?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Join a network of high-performing operators scaling their businesses without the crushing weight of back-office operations.</p>
                    <a href="/apply" className="inline-block bg-[hsl(38,75%,50%)] text-navy-950 px-8 py-3 rounded-md font-bold hover:bg-[hsl(45,90%,60%)] transition-colors">Apply Now</a>
                </div>
            </section>
        </>
    );
};

export default SuccessStories;
