import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';

export const StateLicensing: React.FC = () => {
    const { stateSlug } = useParams<{ stateSlug: string }>();

    // Capitalize and format the state name from slug (e.g., south-carolina -> South Carolina)
    const formatStateName = (slug: string) => {
        return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    const stateName = stateSlug ? formatStateName(stateSlug) : 'Your State';

    return (
        <>
            <SEOHead
                title={`Roofing Licensing in ${stateName} | Capital City Roofing`}
                description={`Become a licensed roofing operator in ${stateName}. We provide the CRM, estimating, back-office, and GAF Certified Plus branding.`}
            />

            <section className="bg-hero-gradient text-white py-24 relative overflow-hidden text-center z-10">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block flex justify-center items-center">
                        <MapPin className="w-4 h-4 mr-1" /> {stateName} Market
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Dominate Roofing in <br /><span className="text-secondary">{stateName}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10">
                        Stop giving away 10% of your revenue to a franchise. License our 8-figure operational blueprint and scale in {stateName}.
                    </p>
                    <Link to="/apply">
                        <Button className="h-14 px-8 text-lg font-bold bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 shadow-glow-gold rounded-full">
                            Check {stateName} Territory Availability
                        </Button>
                    </Link>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-24 bg-white text-center">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-4xl font-black font-display uppercase tracking-tight text-primary mb-12">
                        Why Capital City Roofing in {stateName}?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-muted p-8 rounded-xl border border-border">
                            <ShieldCheck className="w-10 h-10 text-secondary mb-4" />
                            <h3 className="text-2xl font-black text-navy-950 font-heading mb-3">Protected Markets</h3>
                            <p className="text-muted-foreground">We never oversaturate. Once you secure your territory in {stateName}, you own that market block. No internal competition.</p>
                        </div>
                        <div className="bg-muted p-8 rounded-xl border border-border">
                            <CheckCircle2 className="w-10 h-10 text-success mb-4" />
                            <h3 className="text-2xl font-black text-navy-950 font-heading mb-3">Instant Credibility</h3>
                            <p className="text-muted-foreground">Leverage our 5-star reputation, GAF Certified Plus, and CertainTeed SELECT status to win bids across {stateName} immediately.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-navy-950 text-white text-center relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.15)_0%,transparent_70%)] -z-10"></div>
                <div className="container-custom">
                    <h2 className="text-4xl font-black font-display uppercase tracking-tight mb-8">Ready to Scale in {stateName}?</h2>
                    <Link to="/the-model">
                        <Button variant="outline" className="h-14 px-8 text-lg font-bold border-white/30 hover:bg-white hover:text-navy-950 rounded-full bg-transparent text-white transition-all">
                            Explore Setup Tiers
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Licensing Compliance Note */}
            <div className="bg-muted py-4">
                <div className="container-custom">
                    <p className="text-[11px] text-muted-foreground/60 leading-relaxed max-w-4xl mx-auto text-center">
                        Capital City Roofing licenses its brand, operating systems, training curriculum, and technology platform to qualified market partners. Licensed operators are independent business owners responsible for meeting all applicable state and local contractor licensing, registration, insurance, and compliance requirements in their respective markets. Capital City Roofing does not issue contractor licenses.
                    </p>
                </div>
            </div>
        </>
    );
};

export default StateLicensing;
