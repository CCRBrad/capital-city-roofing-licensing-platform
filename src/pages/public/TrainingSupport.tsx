import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import { GraduationCap, Headset, Clock, BookOpen, CheckCircle, ArrowRight, MessageSquare, Mail, Phone } from 'lucide-react';

const TrainingSupport: React.FC = () => {
    return (
        <>
            <SEOHead
                title="CCR Operator Training & Support"
                description="Capital City University onboarding, ongoing enablement, and dedicated partner support for CCR licensed market operators."
                noIndex
            />

            <section className="py-24 md:py-32 bg-navy-950 text-white text-center">
                <div className="container-custom max-w-3xl">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Partner Enablement</span>
                    <h1 className="text-5xl font-black font-display uppercase tracking-tight mb-6">Training & Operator Support</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        From onboarding through ongoing operations — CCR provides structured training and dedicated support to help partners execute.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom max-w-4xl">
                    {/* Capital City University */}
                    <div className="mb-16">
                        <div className="flex items-center space-x-3 mb-6">
                            <GraduationCap className="w-6 h-6 text-secondary" />
                            <h2 className="text-2xl font-black font-display text-navy-950 uppercase">Capital City University</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Every new partner completes Capital City University — our structured onboarding program that covers
                            systems, sales, production, and market launch. Completion is required before full market activation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-muted border border-border rounded-xl p-6">
                                <h3 className="font-black font-heading text-navy-950 uppercase tracking-widest text-sm mb-4">Training Format</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Structured 3-week program',
                                        'Self-paced modules with assessments',
                                        'Live support during onboarding',
                                        'Certification upon completion',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-navy-800">
                                            <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-muted border border-border rounded-xl p-6">
                                <h3 className="font-black font-heading text-navy-950 uppercase tracking-widest text-sm mb-4">What's Covered</h3>
                                <ul className="space-y-3">
                                    {[
                                        'CRM setup & AI automation configuration',
                                        'Retail and insurance sales processes',
                                        'Production, QC, and fulfillment workflows',
                                        'Market launch & pipeline development',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-navy-800">
                                            <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-navy-50 border border-navy-100 rounded-lg p-4 text-sm text-navy-800 flex items-start space-x-3">
                            <BookOpen className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                            <span>After University, partners have ongoing access to SOPs, playbooks, and updated training materials through the partner portal.</span>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="mb-16">
                        <div className="flex items-center space-x-3 mb-6">
                            <Headset className="w-6 h-6 text-secondary" />
                            <h2 className="text-2xl font-black font-display text-navy-950 uppercase">Partner Support</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Support is not optional — it's embedded in the operating model. Partners have access to multiple support
                            channels for operations, compliance, technology, and training questions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white border border-border rounded-xl p-6 text-center">
                                <MessageSquare className="w-6 h-6 text-secondary mx-auto mb-3" />
                                <h3 className="font-bold text-navy-950 mb-1">Portal Tickets</h3>
                                <p className="text-sm text-muted-foreground">Submit support requests directly through the partner portal with categorized routing.</p>
                            </div>
                            <div className="bg-white border border-border rounded-xl p-6 text-center">
                                <Mail className="w-6 h-6 text-secondary mx-auto mb-3" />
                                <h3 className="font-bold text-navy-950 mb-1">Email Support</h3>
                                <p className="text-sm text-muted-foreground">Dedicated partner support email for operational and compliance questions.</p>
                            </div>
                            <div className="bg-white border border-border rounded-xl p-6 text-center">
                                <Phone className="w-6 h-6 text-secondary mx-auto mb-3" />
                                <h3 className="font-bold text-navy-950 mb-1">Emergency Line</h3>
                                <p className="text-sm text-muted-foreground">After-hours line available for urgent production or compliance issues.</p>
                            </div>
                        </div>

                        {/* What support does / does not include */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-muted border border-border rounded-xl p-6">
                                <h3 className="font-black font-heading text-navy-950 uppercase tracking-widest text-sm mb-4">Support Includes</h3>
                                <ul className="space-y-2">
                                    {[
                                        'Centralized estimating & supplement support',
                                        'CRM and technology setup assistance',
                                        'SOP and process guidance',
                                        'Onboarding and training questions',
                                        'Compliance documentation review',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-navy-800">
                                            <CheckCircle className="w-4 h-4 text-success mr-2 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-muted border border-border rounded-xl p-6">
                                <h3 className="font-black font-heading text-navy-950 uppercase tracking-widest text-sm mb-4">Partner Responsibilities</h3>
                                <ul className="space-y-2">
                                    {[
                                        'Local team hiring and management',
                                        'Day-to-day customer interactions',
                                        'Local compliance and licensing',
                                        'Financial management and payroll',
                                        'Job site safety and quality',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-navy-800">
                                            <Clock className="w-4 h-4 text-[hsl(38,75%,50%)] mr-2 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link to="/apply" className="inline-flex items-center bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
                                Apply to Become a Partner <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link to="/university-preview" className="inline-block bg-navy-950 text-white px-8 py-3 rounded-md font-bold hover:bg-navy-900 transition-colors">
                                See Capital City University
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrainingSupport;
