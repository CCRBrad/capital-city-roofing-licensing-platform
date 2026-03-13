import React, { useState } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: 'What exactly is the CCR licensing model?',
        answer: 'Capital City Roofing licenses its brand, systems, training, and operating model to approved partners. Partners operate under the CCR brand with access to our centralized back-office, AI-enabled CRM, estimating tools, and production support. Partners remain responsible for required contractor licensing, insurance, and local/state compliance in their market.',
    },
    {
        question: 'How is this different from a franchise?',
        answer: 'A franchise typically requires a large upfront fee, locks you into a 10-year agreement, charges 8–10% uncapped royalties, and restricts your operational autonomy. The CCR licensing model offers a lower entry cost, month-to-month flexibility, a 5% capped royalty, and full operational autonomy. You keep your business identity while accessing our brand, systems, and centralized support.',
    },
    {
        question: 'Who is this for?',
        answer: 'The CCR model is designed for experienced roofing operators or sales leaders who want to own or scale a roofing business with proven systems rather than building everything from scratch. We evaluate applicants based on relevant roofing experience, sales background, leadership capability, local market knowledge, and financial readiness.',
    },
    {
        question: 'Who is this NOT for?',
        answer: 'This is not for passive investors, people with no roofing experience, or anyone expecting a turnkey business that runs itself. Partners are owner-operators who actively lead their market. CCR provides the platform — partners provide the execution.',
    },
    {
        question: 'What do I actually get as a licensed partner?',
        answer: 'Partners receive: the Capital City Roofing brand and certifications (GAF Master Elite, CertainTeed ShingleMaster Premier), access to the AI-enabled CRM and estimating platform, centralized estimating and supplement support, Capital City University onboarding training, SOPs and operational playbooks, protected market territory, and ongoing partner support.',
    },
    {
        question: 'What am I responsible for?',
        answer: 'Partners are responsible for: obtaining and maintaining required contractor licensing and insurance in their market, hiring and managing their local sales and production teams, day-to-day operations including customer interactions and job execution, local compliance with state and municipal requirements, and all financial obligations including payroll, taxes, and vendor payments.',
    },
    {
        question: 'How much does it cost?',
        answer: 'Investment details, including licensing fees and ongoing royalty structure, are discussed during the Discovery Call stage of the application process. We are transparent about costs — there are no hidden fees. The structure is designed to align CCR\'s economics with partner success.',
    },
    {
        question: 'How does territory exclusivity work?',
        answer: 'Each approved partner receives a protected, exclusive market territory. We do not over-license areas. Territory boundaries, population, and market capacity are evaluated during the application review process. Territory definitions and protections are documented in the partner agreement.',
    },
    {
        question: 'What does the application process look like?',
        answer: 'The process follows four stages: (1) Application — submit your background, experience, and market interest. (2) Review — our team evaluates your qualifications and fit. (3) Discovery Call — a mutual conversation to discuss the model, answer questions, and explore territory options. (4) Territory Review — if both sides align, we finalize territory terms and onboarding.',
    },
    {
        question: 'What is Capital City University?',
        answer: 'Capital City University is our structured onboarding program for new partners. It covers CCR systems and CRM setup, retail and insurance sales processes, production and fulfillment workflows, and market launch strategy. Completion is required before full activation and is tied to certification status within the partner portal.',
    },
    {
        question: 'Does CCR guarantee revenue or results?',
        answer: 'No. CCR provides the brand, systems, training, and operational support designed to help qualified operators succeed. Results depend on the partner\'s execution, market conditions, team quality, and compliance readiness. We do not guarantee revenue, territory success, or specific financial outcomes.',
    },
    {
        question: 'Can I keep my current business and add CCR?',
        answer: 'This depends on your current setup and is discussed during the Discovery Call. Some operators transition existing businesses under the CCR brand; others launch new markets. Either path requires meeting CCR brand standards, compliance requirements, and completing Capital City University.',
    },
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <>
            <SEOHead
                title="CCR Licensing FAQ"
                description="Common questions about the Capital City Roofing Licensed Operating Platform — what it is, who it's for, how it works, and what partners are responsible for."
            />

            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom max-w-3xl relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Questions</span>
                    <h1 className="text-5xl font-black font-display uppercase tracking-tight mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Straight answers to the most common questions about the CCR licensing model, partner expectations, and the application process.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container-custom max-w-3xl">
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-border rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggle(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                                    aria-expanded={openIndex === idx}
                                >
                                    <span className="text-base font-bold text-navy-950 pr-4">{faq.question}</span>
                                    {openIndex === idx ? (
                                        <ChevronUp className="w-5 h-5 text-secondary shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                                    )}
                                </button>
                                {openIndex === idx && (
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-muted-foreground mb-6">Have a question that isn't answered here?</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link to="/contact" className="inline-block bg-navy-950 text-white px-8 py-3 rounded-md font-bold hover:bg-navy-900 transition-colors">
                                Contact Us
                            </Link>
                            <Link to="/apply" className="inline-block bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
                                Apply to Become a Partner
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
