import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';
import {
    CheckCircle2, ShieldCheck, Zap, Building, GraduationCap, Headset,
    ArrowRight, XCircle, Award, BookOpen, BarChart3, Layers
} from 'lucide-react';

const TheModel: React.FC = () => {
    return (
        <>
            <SEOHead
                title="The Licensing Model — A Better Alternative to Franchising | Capital City Roofing"
                description="Launch or scale a roofing business with the Capital City Roofing brand, systems, training, and operating model. A franchise alternative for qualified operators."
            />

            {/* ═══ Section 1: Hero ═══ */}
            <section className="bg-hero-gradient text-white py-24 md:py-32 relative text-center z-10">
                <div className="container-custom relative z-10 max-w-4xl mx-auto">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">The CCR Licensing Model</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight mb-6 leading-[1.05]">
                        Launch or Scale a Roofing Business with a <span className="text-gradient-gold">Proven Operating Model</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
                        A franchise alternative for qualified operators who want proven playbooks, elite standards, and scalable infrastructure — without building everything from scratch.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/apply" className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-md transition-all text-sm uppercase tracking-widest shadow-lg">
                            <span>Apply to Become a Partner</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="#what-happens-next" className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-md transition-all text-sm uppercase tracking-widest border border-white/20">
                            <span>See What Happens Next</span>
                        </a>
                    </div>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            {/* ═══ Section 2: What This Actually Is ═══ */}
            <section className="py-20 bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">What This Is</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-primary mb-4">
                            Not a Franchise. Not a Course. Not a Lead Service.
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Capital City Roofing is a licensed operating platform. We provide the brand, systems, training, and infrastructure. You provide the execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
                        {[
                            { icon: Award, label: 'Brand Licensing', desc: 'Operate under the CCR name and certifications' },
                            { icon: Zap, label: 'Operating System', desc: 'AI-powered CRM, estimating, workflows' },
                            { icon: GraduationCap, label: 'Training & SOPs', desc: '3-week university + ongoing enablement' },
                            { icon: Headset, label: 'Launch Support', desc: 'Entity setup, compliance guidance, onboarding' },
                            { icon: BarChart3, label: 'Partner Enablement', desc: 'Dashboard, production, supplements' },
                            { icon: Layers, label: 'Market Development', desc: 'Territory mapping, lead generation framework' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3 p-4 bg-muted rounded-xl border border-border">
                                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                                    <item.icon className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <p className="font-bold text-navy-950 text-sm">{item.label}</p>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Compliance Clarifier */}
                    <div className="bg-navy-950 text-white rounded-xl p-5 max-w-3xl mx-auto">
                        <div className="flex items-start space-x-3">
                            <ShieldCheck className="w-5 h-5 text-[hsl(38,75%,50%)] mt-0.5 shrink-0" />
                            <p className="text-sm text-white/80 leading-relaxed">
                                <strong className="text-white">Important:</strong> CCR licenses its brand, systems, training, and operating model. Partners are independent business owners responsible for required contractor licensing, insurance, and local/state compliance in their market.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Section 3: Franchise vs CCR Comparison ═══ */}
            <section className="py-20 bg-muted">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Side-by-Side</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-primary mb-4">
                            Franchise vs. CCR Licensing
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Traditional franchises take your money, your freedom, and your exit. We deliver the same infrastructure with none of the handcuffs.
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
                                    { feature: 'Upfront Cost', franchise: '$50K–$150K+', ccr: '$15K Buy-In' },
                                    { feature: 'Ongoing Royalty', franchise: '8–10% (Uncapped)', ccr: '5% Capped' },
                                    { feature: 'Contract Length', franchise: '10-Year Lock-In', ccr: 'Month-to-Month' },
                                    { feature: 'Operational Autonomy', franchise: '✗ Restricted', ccr: '✓ Full Autonomy' },
                                    { feature: 'Territory Protection', franchise: 'Varies', ccr: '✓ Guaranteed Exclusive' },
                                    { feature: 'Brand & Certifications', franchise: '✓ Included', ccr: '✓ GAF Master Elite + More' },
                                    { feature: 'Technology Stack', franchise: 'Varies / Extra Cost', ccr: '✓ AI CRM Suite Included' },
                                    { feature: 'Training', franchise: '1–2 Weeks', ccr: '✓ 3-Week University + Ongoing' },
                                    { feature: 'Back-Office Support', franchise: 'Limited', ccr: '✓ Full Estimating, Supplements, Production' },
                                    { feature: 'Compliance Responsibility', franchise: 'Mixed', ccr: 'Partner handles local compliance' },
                                    { feature: 'Exit / Sell Business', franchise: '✗ Requires Approval', ccr: '✓ You Own the Asset' },
                                    { feature: 'Speed to Launch', franchise: '3–6 Months', ccr: '14 Days' },
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

            {/* ═══ Section 4: Who This Is For / Not For ═══ */}
            <section className="py-20 bg-white">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-primary mb-4">
                            Is This Right for You?
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We are selective about who operates under the Capital City Roofing brand. This is by design.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-success/5 border border-success/20 rounded-xl p-8">
                            <h3 className="text-xl font-black font-display text-primary uppercase tracking-tight mb-6 flex items-center">
                                <CheckCircle2 className="w-6 h-6 text-success mr-2" /> Good Fit
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'Roofing, construction, or home services background',
                                    'Strong sales or leadership experience',
                                    'Business ownership or entrepreneurial drive',
                                    'Values systems, SOPs, and accountability',
                                    'Coachable and willing to follow a proven playbook',
                                    'Ready to recruit, build, and lead a team',
                                    '$45K–$65K in capital to launch properly',
                                    'Wants to build a business they can sell',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-success mr-2.5 mt-1 shrink-0" />
                                        <span className="text-navy-900 text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
                            <h3 className="text-xl font-black font-display text-primary uppercase tracking-tight mb-6 flex items-center">
                                <XCircle className="w-6 h-6 text-destructive mr-2" /> Not a Fit
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    'Expecting passive income with no daily effort',
                                    'Unwilling to follow established systems and standards',
                                    'Looking for a low-effort side hustle',
                                    'Not prepared to handle execution and compliance',
                                    'Expecting overnight success without discipline',
                                    'No sales, leadership, or business background',
                                    'Not willing to invest in your market',
                                    'Looking for a traditional franchise experience',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <XCircle className="w-4 h-4 text-destructive mr-2.5 mt-1 shrink-0" />
                                        <span className="text-navy-900 text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Section 5: What You Get (4 Buckets) ═══ */}
            <section className="py-20 bg-muted">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">The Complete Package</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-primary mb-4">
                            What Partners Receive
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Award, title: 'Brand',
                                items: [
                                    'Capital City Roofing identity and market positioning',
                                    'GAF Master Elite and CertainTeed SELECT certifications',
                                    'Premium credibility framework from day one',
                                    'NRCA membership and industry affiliations',
                                ]
                            },
                            {
                                icon: Zap, title: 'Systems',
                                items: [
                                    'Standard operating procedures for every department',
                                    'AI-powered workflows and automations',
                                    'Launch process and operational cadence',
                                    'Partner dashboard and performance tracking',
                                ]
                            },
                            {
                                icon: GraduationCap, title: 'Training',
                                items: [
                                    '3-week Capital City University program',
                                    'Sales, production, supplements, and leadership modules',
                                    'Role-based team enablement',
                                    'Certifications and ongoing learning',
                                ]
                            },
                            {
                                icon: Headset, title: 'Support',
                                items: [
                                    'Application review and discovery process',
                                    'Territory audit and market mapping',
                                    'Centralized estimating, supplements, and production',
                                    'Ongoing partner guidance and escalation support',
                                ]
                            },
                        ].map((bucket, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-border p-8 shadow-sm">
                                <div className="flex items-center space-x-3 mb-5">
                                    <div className="w-11 h-11 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                                        <bucket.icon className="w-5 h-5 text-[hsl(38,75%,50%)]" />
                                    </div>
                                    <h3 className="text-xl font-black font-display text-primary uppercase tracking-tight">{bucket.title}</h3>
                                </div>
                                <ul className="space-y-2.5">
                                    {bucket.items.map((item, j) => (
                                        <li key={j} className="flex items-start">
                                            <CheckCircle2 className="w-4 h-4 text-success mr-2.5 mt-0.5 shrink-0" />
                                            <span className="text-sm text-navy-900">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Section 6: Economics ═══ */}
            <section className="py-20 bg-navy-950 text-white">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-2 block">Transparent Economics</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight mb-4">
                            You Are Building a Business
                        </h2>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            This is not passive income. Your results depend on execution, team quality, market effort, close rate, production discipline, and compliance readiness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {[
                            { amount: '$15K', label: 'One-Time Buy-In', sub: 'Brand, systems, training, territory' },
                            { amount: '5%', label: 'Capped Royalty', sub: 'On collected revenue only' },
                            { amount: '$0', label: 'Hidden Fees', sub: 'No marketing fund, no tech fees, no surprises' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-7 text-center">
                                <p className="text-4xl font-black font-display text-[hsl(38,75%,50%)] mb-2">{item.amount}</p>
                                <p className="font-bold uppercase tracking-widest text-xs mb-1">{item.label}</p>
                                <p className="text-white/50 text-xs">{item.sub}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-white/40 text-xs text-center max-w-2xl mx-auto leading-relaxed">
                        We recommend operators have $30K–$50K in working capital beyond the buy-in to cover LLC formation, initial marketing, and personal runway during ramp-up. Economics depend on market, execution, team, and production discipline.
                    </p>
                </div>
            </section>

            {/* ═══ Section 7: What Happens Next ═══ */}
            <section id="what-happens-next" className="py-20 bg-white scroll-mt-20">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">The Process</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-primary mb-4">
                            What Happens Next
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            From application to launch, here's exactly how the process works.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        {[
                            { step: '1', title: 'Apply', desc: 'Submit your application. We review every submission personally — this is not automated.', time: '5 minutes' },
                            { step: '2', title: 'Application Review', desc: 'Our licensing team evaluates your background, market, and operator fit.', time: 'Within 24 hours' },
                            { step: '3', title: 'Discovery Call', desc: 'If your profile aligns, we schedule a 30-minute call to discuss your goals and answer questions.', time: '30 minutes' },
                            { step: '4', title: 'Territory Audit', desc: 'We map your market, review territory availability, and present a partnership proposal.', time: 'Collaborative' },
                            { step: '5', title: 'Partner Decision', desc: 'You review the proposal. If it is a fit for both sides, we begin onboarding and launch prep.', time: 'Your timeline' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start mb-8 last:mb-0">
                                <div className="flex flex-col items-center mr-5">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                                        idx === 0 ? 'bg-secondary text-white' :
                                        idx === 4 ? 'bg-[hsl(38,75%,50%)] text-navy-950' :
                                        'bg-navy-950 text-white'
                                    }`}>
                                        {item.step}
                                    </div>
                                    {idx < 4 && <div className="w-0.5 h-8 bg-border mt-2"></div>}
                                </div>
                                <div className="pt-1.5">
                                    <div className="flex items-center space-x-3 mb-1">
                                        <p className="font-black text-navy-950 text-lg">{item.title}</p>
                                        <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{item.time}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Section 8: Final CTA ═══ */}
            <section className="py-20 bg-navy-950 text-white text-center relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.15)_0%,transparent_70%)] -z-10"></div>
                <div className="container-custom max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight mb-4">
                        If You Are Serious About Building Under a Proven Roofing Model,{' '}
                        <span className="text-secondary">Start the Application.</span>
                    </h2>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto">
                        Limited territories. Selective acceptance. 24-hour application review.
                    </p>

                    {/* Proof strip */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-xs text-white/50 font-bold uppercase tracking-widest">
                        <span className="flex items-center"><Award className="w-3.5 h-3.5 mr-1.5 text-[hsl(38,75%,50%)]" />GAF Master Elite</span>
                        <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-success" />CertainTeed SELECT</span>
                        <span className="flex items-center"><Building className="w-3.5 h-3.5 mr-1.5 text-blue-400" />NRCA Member</span>
                        <span className="flex items-center"><BookOpen className="w-3.5 h-3.5 mr-1.5 text-secondary" />3-Week University</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/apply" className="inline-flex items-center space-x-2 bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 font-bold py-4 px-10 rounded-md transition-all text-sm uppercase tracking-widest shadow-glow-gold">
                            <span>Apply to Become a Partner</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/apply" className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-md transition-all text-sm uppercase tracking-widest border border-white/20">
                            <span>See the Partner Process</span>
                        </Link>
                    </div>
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
