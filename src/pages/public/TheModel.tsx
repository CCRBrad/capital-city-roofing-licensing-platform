import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';
import {
    CheckCircle2, ShieldCheck, Zap, Award, GraduationCap, Headset,
    ArrowRight, XCircle, BarChart3, Layers
} from 'lucide-react';

const TheModel: React.FC = () => {
    return (
        <>
            <SEOHead
                title="The Licensing Model — A Better Alternative to Franchising | Capital City Roofing"
                description="Build a roofing business with the Capital City Roofing brand, systems, training, and operating model. A franchise alternative for qualified operators."
            />

            {/* ═══ Section 1: Hero ═══ */}
            <section className="bg-hero-gradient text-white py-24 md:py-32 relative text-center z-10">
                <div className="container-custom relative z-10 max-w-4xl mx-auto">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">The CCR Licensing Model</span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight mb-6 leading-[1.05]">
                        Build a Roofing Business with the Capital City Roofing <span className="text-gradient-gold">Brand, Systems, Training, and Operating Model</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6 leading-relaxed">
                        A franchise alternative for qualified operators who want proven playbooks, elite standards, and real support — without building everything from scratch.
                    </p>
                    <p className="text-sm text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Capital City Roofing licenses its brand, systems, training, and operating model to approved partners. Partners remain responsible for required contractor licensing, insurance, and local/state compliance in their market.
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
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-10">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">What This Is</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-primary mb-6">
                            What the Capital City Roofing Licensing Model Actually Includes
                        </h2>
                    </div>

                    <div className="prose prose-lg max-w-none text-navy-900 space-y-5 mb-12">
                        <p className="text-lg leading-relaxed">
                            This is not just a logo license, a course library, or a generic business opportunity.
                        </p>
                        <p className="text-lg leading-relaxed">
                            The Capital City Roofing Licensing Model is built for qualified operators who want to launch or scale a roofing business using a proven framework — instead of building every system alone.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Approved partners gain access to the Capital City Roofing brand, operating standards, training, SOPs, launch support, and ongoing partner enablement designed to help them build with greater speed, structure, and accountability.
                        </p>
                        <p className="text-lg leading-relaxed font-semibold text-navy-950">
                            This model is designed for execution. It is not passive. It is for operators who want to build something real under a disciplined brand and operating system.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
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
                </div>
            </section>

            {/* ═══ Section 3: Franchise vs CCR Comparison ═══ */}
            <section className="py-20 bg-muted">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Side-by-Side</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-primary mb-4">
                            A Roofing Franchise Alternative Built for Operators
                        </h2>
                        <div className="max-w-2xl mx-auto space-y-3">
                            <p className="text-muted-foreground">
                                Traditional franchise models often trade structure for rigidity. Independent operators often keep flexibility but lose time, consistency, and leverage.
                            </p>
                            <p className="text-muted-foreground">
                                The Capital City Roofing Licensing Model is built to give qualified partners the advantage of brand, systems, training, and support — while preserving more operational flexibility than a traditional franchise structure.
                            </p>
                        </div>
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
                                    { feature: 'Territory Protection', franchise: 'Varies', ccr: '✓ Protected & Exclusive' },
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* For */}
                        <div className="bg-success/5 border border-success/20 rounded-xl p-8">
                            <h3 className="text-xl font-black font-display text-primary uppercase tracking-tight mb-3 flex items-center">
                                <CheckCircle2 className="w-6 h-6 text-success mr-2" /> Who This Model Is For
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                The best partners are not looking for a shortcut. They are looking for a proven structure they can execute.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Roofing professionals who want to scale with stronger systems and brand positioning',
                                    'Sales-driven operators who can lead from the front and drive revenue',
                                    'Home services professionals who understand execution, accountability, and team building',
                                    'Entrepreneurs who want a serious operating model instead of starting from scratch',
                                    'Leaders who value standards, process, training, and long-term growth',
                                    'Operators who are prepared to handle compliance, recruiting, customer experience, and performance',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 className="w-4 h-4 text-success mr-2.5 mt-1 shrink-0" />
                                        <span className="text-navy-900 text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Not For */}
                        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8">
                            <h3 className="text-xl font-black font-display text-primary uppercase tracking-tight mb-3 flex items-center">
                                <XCircle className="w-6 h-6 text-destructive mr-2" /> Who This Model Is Not For
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Not every applicant will be accepted. This platform is designed for serious operators.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'People looking for passive income without active leadership',
                                    'Anyone seeking a low-effort side business',
                                    'Operators unwilling to follow brand standards and operating discipline',
                                    'Applicants who are not prepared to manage licensing, insurance, and market compliance requirements',
                                    'People looking for a quick flip rather than a real market-building opportunity',
                                    'Anyone who wants freedom without accountability',
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
                            What Approved Partners Get
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Award, title: 'Brand',
                                desc: 'Operate under a premium roofing brand built around innovation, integrity, and execution. Partners benefit from stronger positioning, greater market trust, and a more credible foundation for growth.'
                            },
                            {
                                icon: Zap, title: 'Systems',
                                desc: 'Access structured workflows, operating standards, SOPs, and launch tools designed to reduce guesswork and increase consistency across sales, operations, and growth.'
                            },
                            {
                                icon: GraduationCap, title: 'Training',
                                desc: 'Use Capital City Roofing University, role-based education, certifications, and implementation guidance to accelerate partner readiness and team development.'
                            },
                            {
                                icon: Headset, title: 'Support',
                                desc: 'Approved partners receive guided onboarding, application review, discovery, territory evaluation, and ongoing enablement designed to help them launch with clarity and operate with discipline.'
                            },
                        ].map((bucket, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-border p-8 shadow-sm">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-11 h-11 rounded-lg bg-navy-950 flex items-center justify-center shrink-0">
                                        <bucket.icon className="w-5 h-5 text-[hsl(38,75%,50%)]" />
                                    </div>
                                    <h3 className="text-xl font-black font-display text-primary uppercase tracking-tight">{bucket.title}</h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{bucket.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Section 6: Economics ═══ */}
            <section className="py-20 bg-navy-950 text-white">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-10">
                        <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-2 block">Transparent Economics</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight mb-6">
                            Built for Real Operators, Not Passive Expectations
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-5 mb-12">
                        <p className="text-white/80 text-lg leading-relaxed">
                            This model is designed for people who want to build and operate a serious roofing business.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            Partner performance depends on execution, market conditions, leadership, team quality, close rate, production discipline, customer experience, and compliance readiness. This is not passive income, and it is not a guaranteed outcome.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            What this model can do is help qualified operators move faster with stronger structure, better systems, clearer standards, and a more credible operating foundation than they would typically have on their own.
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
                </div>
            </section>

            {/* ═══ Section 7: Compliance Disclaimer ═══ */}
            <section className="py-12 bg-white border-b border-border">
                <div className="container-custom max-w-3xl">
                    <div className="bg-muted border border-border rounded-xl p-6">
                        <div className="flex items-start space-x-3">
                            <ShieldCheck className="w-5 h-5 text-[hsl(38,75%,50%)] mt-0.5 shrink-0" />
                            <div>
                                <p className="font-bold text-navy-950 text-sm mb-2">Important Compliance Note</p>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                                    Capital City Roofing does not issue contractor licenses.
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Capital City Roofing licenses its brand, systems, training, and operating model to approved partners. Each partner remains responsible for obtaining and maintaining all required contractor licenses, insurance coverage, registrations, and local or state compliance requirements applicable to their market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ Section 8: What Happens Next ═══ */}
            <section id="what-happens-next" className="py-20 bg-white scroll-mt-20">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">The Process</span>
                        <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-primary mb-4">
                            What Happens Next
                        </h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Our process is designed to evaluate fit, readiness, and market opportunity. Not every applicant will move forward.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        {[
                            { step: '1', title: 'Application Review', desc: 'We review your background, experience, readiness, and market potential. Qualified submissions are typically reviewed within 24 hours.', time: 'Within 24 hours' },
                            { step: '2', title: 'Discovery Call', desc: 'If there appears to be mutual fit, we schedule a discovery conversation to discuss your background, goals, market, and alignment with the CCR model.', time: '30 minutes' },
                            { step: '3', title: 'Territory Audit', desc: 'Qualified candidates may move into territory and opportunity review, where we evaluate market viability, partner fit, and next-step potential.', time: 'Collaborative' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start mb-8 last:mb-0">
                                <div className="flex flex-col items-center mr-5">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                                        idx === 0 ? 'bg-secondary text-white' :
                                        idx === 2 ? 'bg-[hsl(38,75%,50%)] text-navy-950' :
                                        'bg-navy-950 text-white'
                                    }`}>
                                        {item.step}
                                    </div>
                                    {idx < 2 && <div className="w-0.5 h-8 bg-border mt-2"></div>}
                                </div>
                                <div className="pt-1.5">
                                    <div className="flex items-center space-x-3 mb-1">
                                        <p className="font-black text-navy-950 text-lg">{item.title}</p>
                                        <span className="text-xs font-bold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{item.time}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Section 9: Final CTA ═══ */}
            <section className="py-20 bg-navy-950 text-white text-center relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.15)_0%,transparent_70%)] -z-10"></div>
                <div className="container-custom max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight mb-4">
                        If You Are Serious About Building Under a Proven Roofing Model,{' '}
                        <span className="text-secondary">Start the Application.</span>
                    </h2>
                    <p className="text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
                        This platform is built for qualified operators who want structure, standards, and real growth potential. If that sounds like you, take the next step.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/apply" className="inline-flex items-center space-x-2 bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 font-bold py-4 px-10 rounded-md transition-all text-sm uppercase tracking-widest shadow-glow-gold">
                            <span>Apply to Become a Partner</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="#what-happens-next" className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-md transition-all text-sm uppercase tracking-widest border border-white/20">
                            <span>See What Happens Next</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer Disclaimer */}
            <div className="bg-muted py-4">
                <div className="container-custom">
                    <p className="text-[11px] text-muted-foreground/60 leading-relaxed max-w-4xl mx-auto text-center">
                        Capital City Roofing licenses its brand, systems, training, and operating model to approved partners. Partners remain responsible for contractor licensing, insurance, and applicable state and local compliance requirements in their market.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TheModel;
