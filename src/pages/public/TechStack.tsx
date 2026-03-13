import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Link } from 'react-router-dom';
import { Cpu, MessageSquare, Calculator, FileText, BarChart3, Megaphone, ShieldCheck } from 'lucide-react';

const systems = [
    {
        icon: Cpu,
        title: 'AI-Enabled CRM',
        desc: 'GoHighLevel-powered CRM with built-in automation, pipeline management, and lead tracking configured for roofing operations.',
        details: ['Automated lead assignment & follow-up', 'Pipeline stage tracking', 'Customer communication history', 'Task & appointment management'],
    },
    {
        icon: MessageSquare,
        title: 'AI Voice & Text Agents',
        desc: 'Inbound AI agents that answer calls and texts, qualify leads, handle objections, and book appointments directly into your calendar.',
        details: ['Sub-5-second response time', 'Lead qualification & scoring', 'Appointment scheduling', 'After-hours coverage'],
    },
    {
        icon: Calculator,
        title: 'Centralized Estimating',
        desc: 'Partners submit scope to the portal and receive a fully-built Roofr estimate and supplement packet from the centralized hub.',
        details: ['Roofr-powered measurements', 'Supplement documentation', 'Estimate turnaround within 24 hours', 'Standardized pricing models'],
    },
    {
        icon: FileText,
        title: 'Production Management',
        desc: 'Structured workflows for material ordering, crew scheduling, quality control, and job closeout.',
        details: ['Material order tracking', 'Crew assignment & scheduling', 'QC inspection checklists', 'Job closeout & documentation'],
    },
    {
        icon: BarChart3,
        title: 'Performance Dashboards',
        desc: 'Real-time visibility into leads, appointments, close rates, active jobs, and collections through the partner portal.',
        details: ['Market-level KPIs', 'Revenue & pipeline tracking', 'Activity scorecards', 'Trend analysis'],
    },
    {
        icon: Megaphone,
        title: 'Marketing & Lead Generation',
        desc: 'Templated marketing assets, local launch playbooks, and integrated lead capture configured for your territory.',
        details: ['Brand-compliant templates', 'Local SEO launch guides', 'Lead capture forms & funnels', 'Review generation workflows'],
    },
];

const TechStack: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Roofing Operating Tech Stack"
                description="The CCR operating stack: AI-enabled CRM, centralized estimating, production management, and performance dashboards built for roofing operators."
                noIndex
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Operating Infrastructure</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        The CCR Operating Stack
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Every partner plugs into the same centralized systems — configured, maintained, and supported by CCR.
                    </p>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom max-w-5xl">
                    {/* Problem statement */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-black font-display text-primary uppercase mb-4">What Problems It Solves</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Most roofing operators spend more time managing spreadsheets, chasing leads manually, and building estimates than actually running their business.
                            The CCR operating stack centralizes these workflows so partners can focus on sales, production, and team leadership.
                        </p>
                    </div>

                    {/* Systems grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {systems.map((system, idx) => (
                            <div key={idx} className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-navy-950 flex items-center justify-center mb-4">
                                    <system.icon className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-lg font-black font-heading text-navy-950 mb-2">{system.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{system.desc}</p>
                                <ul className="space-y-1.5">
                                    {system.details.map((detail, didx) => (
                                        <li key={didx} className="text-xs text-navy-800 font-medium flex items-start">
                                            <span className="text-secondary mr-1.5 mt-0.5">•</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Security note */}
                    <div className="bg-muted border border-border rounded-xl p-8 flex items-start space-x-4 mb-16">
                        <ShieldCheck className="w-6 h-6 text-secondary shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-navy-950 mb-1">Data Handling & Privacy</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                All partner and customer data is handled through enterprise-grade platforms (GoHighLevel, Roofr) with standard security practices.
                                CCR does not sell or share partner customer data. Data access and handling expectations are documented in the partner agreement.
                            </p>
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

export default TechStack;
