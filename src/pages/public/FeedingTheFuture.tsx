import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';

const FeedingTheFuture: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Feeding The Future | Capital City Roofing"
                description="Our Commitment to the Community"
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Our Commitment to the Community</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Feeding The Future
                    </h1>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-24 bg-white relative">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black font-display text-primary uppercase tracking-tight mb-6">Building Roofs, Building Communities</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            At Capital City Roofing, we believe that true success is measured by the impact we have on our community. That's why we launched the Feeding the Future initiative.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            For every roof installed across our entire Licensed Operating Platform, a portion of the proceeds goes directly toward feeding families in need and funding youth educational programs.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div className="border-l-4 border-secondary pl-4">
                                <p className="text-4xl font-black text-navy-950 font-display">10,000+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mt-1">Meals Provided</p>
                            </div>
                            <div className="border-l-4 border-[hsl(38,75%,50%)] pl-4">
                                <p className="text-4xl font-black text-navy-950 font-display">$50K+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mt-1">Donated</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-navy-2xl">
                        <div className="absolute inset-0 bg-navy-900 flex items-center justify-center p-8 text-center text-white italic text-2xl font-heading bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center blend-overlay before:absolute before:inset-0 before:bg-navy-950/80">
                            <span className="relative z-10">"A company is only as strong as the community it serves."</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeedingTheFuture;
