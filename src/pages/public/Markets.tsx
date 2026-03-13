import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Users, Search, CheckCircle } from 'lucide-react';

const Markets: React.FC = () => {
    return (
        <>
            <SEOHead
                title="CCR Licensing Markets"
                description="Capital City Roofing licenses protected, exclusive market territories to approved partners. Learn about territory evaluation, capacity, and availability."
                noIndex
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Protected Territories</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Limited Markets
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        We do not over-license. Each market is carefully evaluated and assigned to a single approved partner.
                    </p>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom max-w-4xl">
                    {/* What limited means */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-black font-display text-primary uppercase mb-4">What "Limited" Means</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            CCR does not mass-license territories. Market availability is deliberately limited to ensure each partner has a defensible, workable territory with adequate demand
                            and no internal competition from other CCR operators. We hold a strict one-partner-per-territory standard.
                        </p>
                    </div>

                    {/* Evaluation criteria */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-muted border border-border rounded-xl p-8">
                            <div className="flex items-center space-x-3 mb-4">
                                <Search className="w-6 h-6 text-secondary" />
                                <h3 className="text-lg font-black font-heading text-navy-950 uppercase">Territory Evaluation Criteria</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'Population density and housing stock',
                                    'Storm activity and insurance claim volume',
                                    'Competitive landscape and saturation',
                                    'Contractor licensing requirements',
                                    'Existing CCR operator proximity',
                                    'Market growth trajectory',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-navy-800">
                                        <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-muted border border-border rounded-xl p-8">
                            <div className="flex items-center space-x-3 mb-4">
                                <MapPin className="w-6 h-6 text-secondary" />
                                <h3 className="text-lg font-black font-heading text-navy-950 uppercase">Territory Review Process</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'Applicant expresses market interest during application',
                                    'CCR evaluates territory viability and capacity',
                                    'Territory boundaries defined collaboratively',
                                    'Exclusivity terms documented in partner agreement',
                                    'No overlapping operators within defined boundaries',
                                    'Ongoing territory review at partner and CCR discretion',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-navy-800">
                                        <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Current status */}
                    <div className="bg-navy-950 text-white rounded-2xl p-8 mb-16 text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <Users className="w-6 h-6 text-[hsl(38,75%,50%)]" />
                            <h3 className="text-xl font-black font-heading uppercase">Market Availability</h3>
                        </div>
                        <p className="text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
                            CCR is currently licensing markets in select states. Territory availability changes as partners are onboarded.
                            Apply to discuss which markets may be available for your region.
                        </p>
                        <div className="flex items-center justify-center space-x-2">
                            <ShieldCheck className="w-4 h-4 text-success" />
                            <span className="text-sm font-bold text-success">Accepting Applications</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
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

export default Markets;
