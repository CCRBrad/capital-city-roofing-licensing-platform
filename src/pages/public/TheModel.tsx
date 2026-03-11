import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import {
    CheckCircle2, ShieldCheck, Zap, Building, GraduationCap, Headset,
    ArrowRight, XCircle, Award
} from 'lucide-react';

const TheModel: React.FC = () => {
    return (
        <>
            <SEOHead
                title="The Licensing Model — A Better Alternative to Franchising | Capital City Roofing"
                description="Capital City Roofing's licensing model gives you the brand, systems, training, and operational support of a franchise — without the lock-ins, royalty escalation, or loss of autonomy."
            />

            {/* Hero */}
            <section className="bg-hero-gradient text-white py-24 md:py-32 relative text-center z-10">
                <div className="container-custom relative z-10 max-w-4xl mx-auto">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">The CCR Model</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        A Franchise Alternative<br />
                        <span className="text-gradient-gold">That Actually Works</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
                        We license our brand, AI-powered operating systems, training, and back-office infrastructure to qualified operators. You keep your autonomy, equity, and exit rights.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/apply" className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-md transition-all text-sm uppercase tracking-widest">
                            <span>Apply Now</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/how-it-works" className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-md transition-all text-sm uppercase tracking-widest border border-white/20">
                            <span>See How It Works</span>
                        </Link>
                    </div>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            {/* Franchise vs Licensing Comparison */}
            <section className="py-24 bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Why Licensing Wins</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-primary mb-4">
                            Franchise vs. CCR Licensing
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Traditional franchises take your money, your freedom, and your exit. We give you the same infrastructure with none of the handcuffs.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                            <thead className="bg-navy-950 text-white">
                                <tr>
                                    <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs">Feature</th>
                                    <th className="text-center px-6 py-4 font-bold uppercase tracking-widest text-xs text-white/60">Traditional Franchise</th>
                                    <th className="text-center px-6 py-4 font-bold uppercase tracking-widest text-xs text-[hsl(38,75%,50%)]">CCR Licensing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: 'Initial Investment', franchise: '$50K–$150K+', ccr: '$15K Buy-In' },
                                    { feature: 'Royalty', franchise: '8–10% (Uncapped)', ccr: '5% (Capped)' },
                                    { feature: 'Contract Length', franchise: '10-Year Lock-In', ccr: 'Month-to-Month' },
                                    { feature: 'Brand & Certifications', franchise: '✓ Included', ccr: '✓ GAF Master Elite + More' },
                                    { feature: 'Technology Stack', franchise: 'Varies / Extra Cost', ccr: '✓ Full AI CRM Suite Included' },
                                    { feature: 'Training Program', franchise: '1–2 Weeks', ccr: '✓ 3-Week University + Ongoing' },
                                    { feature: 'Back-Office Support', franchise: 'Limited', ccr: '✓ Full Estimating, Supplements, Production' },
                                    { feature: 'Territory Protection', franchise: '✓ Usually', ccr: '✓ Guaranteed Exclusive' },
                                    { feature: 'Operational Autonomy', franchise: '✗ Restricted', ccr: '✓ Full Autonomy' },
                                    { feature: 'Exit / Sell Your Business', franchise: '✗ Requires Approval', ccr: '✓ You Own the Asset' },
                                    { feature: 'Time to Launch', franchise: '3–6 Months', ccr: '14 Days' },
                                ].map((row, idx) => (
                                    <tr key={idx} className={`border-b border-border ${idx % 2 === 0 ? 'bg-white' : 'bg-muted/50'}`}>
                                        <td className="px-6 py-4 font-bold text-navy-950">{row.feature}</td>
                                        <td className="px-6 py-4 text-center text-muted-foreground">{row.franchise}</td>
                                        <td className="px-6 py-4 text-center font-bold text-navy-950">{row.ccr}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-24 bg-muted">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">The Complete Package</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-primary mb-4">
                            What Partners Receive
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: Award, title: 'Premium Brand', desc: 'GAF Master Elite, CertainTeed SELECT, NRCA member — your credibility is instant.' },
                            { icon: Zap, title: 'AI Operating System', desc: 'GoHighLevel CRM, Sierra AI voice agents, Roofr estimating, automated workflows.' },
                            { icon: GraduationCap, title: 'Capital City University', desc: '3-week intensive training covering sales, production, supplements, and leadership.' },
                            { icon: Headset, title: 'Back-Office Support', desc: 'Centralized estimating, supplement negotiation, production management, and collections.' },
                            { icon: ShieldCheck, title: 'Protected Territory', desc: 'Exclusive, mapped market territories. No internal competition. Ever.' },
                            { icon: Building, title: 'Business Infrastructure', desc: 'SOPs, playbooks, marketing assets, compliance guidance, and entity setup support.' },
                        ].map((item, idx) => (
                            <Card key={idx} className="bg-white border-border shadow-sm card-hover">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-3">
                                        <item.icon className="w-6 h-6 text-secondary" />
                                    </div>
                                    <CardTitle className="text-xl font-black text-primary">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Economics */}
            <section className="py-24 bg-navy-950 text-white">
                <div className="container-custom max-w-4xl text-center">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-2 block">Transparent Economics</span>
                    <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight mb-12">
                        Simple. Fair. Transparent.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[
                            { amount: '$15K', label: 'One-Time Buy-In', sub: 'Brand, systems, training, territory' },
                            { amount: '5%', label: 'Capped Royalty', sub: 'On collected revenue only' },
                            { amount: '$0', label: 'Hidden Fees', sub: 'No marketing fund, no tech fees' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8">
                                <p className="text-4xl md:text-5xl font-black font-display text-[hsl(38,75%,50%)] mb-2">{item.amount}</p>
                                <p className="font-bold uppercase tracking-widest text-sm mb-1">{item.label}</p>
                                <p className="text-white/60 text-sm">{item.sub}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-white/50 text-sm max-w-2xl mx-auto">
                        We recommend operators have $30K–$50K in working capital beyond the buy-in to cover LLC formation, initial marketing, and personal runway during ramp-up.
                    </p>
                </div>
            </section>

            {/* Who This Is For / Not For */}
            <section className="py-24 bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-black font-display text-primary uppercase tracking-tight mb-6 flex items-center">
                                <CheckCircle2 className="w-6 h-6 text-success mr-2" /> This Is For You If...
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'You have sales, leadership, or entrepreneurial experience',
                                    'You want to own a business, not just have a job',
                                    'You value systems, SOPs, and accountability',
                                    'You are coachable and willing to follow a proven playbook',
                                    'You have $45K–$65K in capital to launch properly',
                                    'You want to build a sellable asset',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-success mr-3 mt-0.5 shrink-0" />
                                        <span className="text-navy-900 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black font-display text-primary uppercase tracking-tight mb-6 flex items-center">
                                <XCircle className="w-6 h-6 text-destructive mr-2" /> This Is Not For You If...
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    'You want a passive income stream with no effort',
                                    'You are unwilling to follow established systems',
                                    'You expect overnight success without daily discipline',
                                    'You are looking for a traditional franchise experience',
                                    'You are not willing to invest in yourself and your market',
                                    'You have no sales, leadership, or business background',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 shrink-0" />
                                        <span className="text-navy-900 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-navy-950 text-white text-center relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.15)_0%,transparent_70%)] -z-10"></div>
                <div className="container-custom max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight mb-6">
                        Ready to Launch <span className="text-secondary">Your Market?</span>
                    </h2>
                    <p className="text-xl text-white/80 mb-10">
                        Limited territories available. Apply today and find out if a CCR partnership is right for you.
                    </p>
                    <Link to="/apply" className="inline-flex items-center space-x-2 bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 font-bold py-4 px-10 rounded-md transition-all text-sm uppercase tracking-widest shadow-glow-gold">
                        <span>Apply for Territory Audit</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Licensing Disclaimer */}
            <div className="bg-muted py-4">
                <div className="container-custom">
                    <p className="text-[11px] text-muted-foreground/60 leading-relaxed max-w-4xl mx-auto text-center">
                        Capital City Roofing licenses its brand, operating systems, training curriculum, and technology platform to qualified market partners. Licensed operators are independent business owners responsible for meeting all applicable state and local contractor licensing, registration, insurance, and compliance requirements in their respective markets.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TheModel;
