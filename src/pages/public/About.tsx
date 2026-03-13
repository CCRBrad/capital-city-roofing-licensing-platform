import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { ShieldCheck, Target, Users, Zap, Award } from 'lucide-react';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <>
            <SEOHead
                title="About the CCR Licensing Platform | Capital City Roofing"
                description="Capital City Roofing was forged on the roofs and in the living rooms of homeowners. Discover the story behind the CCR Licensing Platform."
            />

            {/* Hero */}
            <section className="bg-hero-gradient text-white py-24 md:py-32 relative text-center">
                <div className="container-custom max-w-4xl relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in">Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6 animate-slide-up">
                        Built by Operators,<br /> For <span className="text-secondary">Operators.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 animate-slide-up delay-200">
                        We saw firsthand the flaws of the roofing franchise model. So we built the alternative.
                    </p>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            {/* Philosophy & Values */}
            <section className="py-24 bg-white">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black font-display text-primary uppercase tracking-tight mb-6">
                            "Excellence in Roofing, Powered by Innovation & Integrity."
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            Capital City Roofing wasn't built in a corporate boardroom by private equity. It was forged on the roofs and in the living rooms of homeowners. After years of running a high-performing roofing operation, we recognized that the hardest part of scaling isn't selling—it's the back office.
                        </p>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            We centralized production, estimating, and supplements, integrating AI-enabled CRM, estimating, and automation tools into a unified operating platform. Now, we're sharing this exact blueprint with ambitious operators across the country.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { icon: ShieldCheck, title: 'Integrity', text: 'We do what we say we will do, every single time.' },
                            { icon: Award, title: 'Excellence', text: 'Good is the enemy of great. We demand excellence.' },
                            { icon: Users, title: 'Partnership', text: 'Your success is our success. Period.' },
                            { icon: Zap, title: 'Innovation', text: 'If there\'s a faster, smarter way to run a roofing company, we build it.' }
                        ].map((v, i) => (
                            <div key={i} className="bg-muted p-6 rounded-lg border border-border">
                                <v.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="font-bold text-navy-950 text-xl font-heading mb-2">{v.title}</h3>
                                <p className="text-sm text-muted-foreground">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section id="leadership" className="py-24 bg-navy-50">
                <div className="container-custom max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Leadership</span>
                        <h2 className="text-4xl font-black font-display uppercase tracking-tight text-primary">
                            Meet the Founder
                        </h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-navy-2xl overflow-hidden border border-border flex flex-col md:flex-row">
                        <div className="md:w-2/5 bg-white min-h-[400px] relative">
                            {/* Brad's Headshot */}
                            <div className="absolute inset-0 bg-[url('/images/brad-strawbridge-headshot.png')] bg-cover bg-top"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <h3 className="text-3xl font-black font-display uppercase text-white tracking-widest">Brad Strawbridge</h3>
                                <p className="text-[hsl(38,75%,50%)] font-bold">CEO & Founder</p>
                            </div>
                        </div>
                        <div className="p-8 md:p-12 md:w-3/5">
                            <div className="mb-6 flex space-x-4">
                                <div className="flex items-center text-xs font-bold bg-muted px-3 py-1 rounded-full text-primary border border-border uppercase tracking-widest">
                                    GAF Master Elite
                                </div>
                                <div className="flex items-center text-xs font-bold bg-muted px-3 py-1 rounded-full text-primary border border-border uppercase tracking-widest text-center">
                                    CertainTeed Shingle Master Premier
                                </div>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed italic mb-6">
                                "I watched talented salespeople try to start roofing companies and fail—not because they couldn't sell, but because the operations, supplements, and cash flow management crushed them. I built Capital City Roofing to solve the operations side, so operators can do what they do best: dominate their market."
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <Target className="w-5 h-5 text-secondary mr-3 mt-1 shrink-0" />
                                    <span className="text-navy-900 font-medium">Built an active roofing operation with a focus on operational discipline and scalable systems.</span>
                                </li>
                                <li className="flex items-start">
                                    <Target className="w-5 h-5 text-secondary mr-3 mt-1 shrink-0" />
                                    <span className="text-navy-900 font-medium">Built AI-enabled CRM, estimating, and automation workflows for roofing operations.</span>
                                </li>
                                <li className="flex items-start">
                                    <Target className="w-5 h-5 text-secondary mr-3 mt-1 shrink-0" />
                                    <span className="text-navy-900 font-medium">Creator of the 'We Run the Company, You Sell the Roofs' model.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-navy-950 text-white relative">
                <div className="container-custom max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black font-display uppercase tracking-tight">Milestones</h2>
                    </div>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                        {[
                            { year: '2024', title: 'The Foundation', desc: 'Capital City Roofing is founded in Alpharetta, GA with a mission to centralize the roofing back-office using AI and lean operations.' },
                            { year: '2025', title: 'The Proof of Concept', desc: 'Growing the flagship Atlanta market with a focus on operational discipline, centralized systems, and sustainable margin improvement.' },
                            { year: '2026', title: 'The Licensing Model', desc: 'Officially launched the Licensed Operator Platform, onboarding the first cohort of operators across 6 states.' },
                            { year: '2027', title: 'National Expansion', desc: 'Planned expansion to additional markets, growing the licensed operator network and strengthening partner enablement.' }
                        ].map((item, idx) => (
                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-navy-950 bg-secondary group-hover:bg-[hsl(38,75%,50%)] text-white group-hover:text-navy-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                                    <span className="text-xs font-bold leading-none">{idx + 1}</span>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl shadow-navy-2xl group-hover:-translate-y-1 transition-transform">
                                    <div className="flex items-center justify-between space-x-2 mb-2">
                                        <div className="font-bold text-[hsl(38,75%,50%)] text-xl">{item.year}</div>
                                    </div>
                                    <div className="text-xl font-bold font-heading mb-2">{item.title}</div>
                                    <div className="text-white/70">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <div className="container-custom max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-primary mb-4">
                        Ready to See Whether This Model Is the Right Fit?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                        Review the model or start your application. Every public page is designed to lead qualified operators toward the next clear step.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/the-model" className="inline-block bg-navy-950 text-white px-8 py-3 rounded-md font-bold hover:bg-navy-900 transition-colors">
                            See The Model
                        </Link>
                        <Link to="/apply" className="inline-block bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
                            Apply to Become a Partner
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
