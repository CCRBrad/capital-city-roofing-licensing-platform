import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { HeroLeadForm } from '../../components/conversion/HeroLeadForm';
import { CheckCircle2, TrendingUp, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
    // Ticker implementation
    const messages = [
        "GAF Master Elite — Top 2% Nationwide",
        "Feeding the Future: 10,000+ Meals Donated",
        "AI-Powered Lead Gen, CRM & Automation",
        "Operators Averaging 35%+ Profit Margins"
    ];

    const [tickerIndex, setTickerIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTickerIndex((prev) => (prev + 1) % messages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <section className="relative bg-hero-gradient text-white pt-32 pb-40 lg:pt-40 lg:pb-48 overflow-hidden z-10">
            {/* Ticker */}
            <div className="absolute top-20 lg:top-24 left-0 right-0 py-2 bg-navy-950/50 backdrop-blur-md border-b border-white/10 z-20 overflow-hidden">
                <div className="container-custom flex justify-center items-center">
                    <p key={tickerIndex} className="animate-slide-up text-sm md:text-base font-bold text-secondary uppercase tracking-widest text-center">
                        {messages[tickerIndex]}
                    </p>
                </div>
            </div>

            <div className="container-custom relative z-10 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Left Column: Copy */}
                <div className="space-y-6 animate-slide-in-left">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-navy-800 border border-white/10 shadow-navy-md">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-widest">Now Accepting Market Partners</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight leading-tight">
                        We Run the Company.<br />
                        <span className="text-gradient-gold">You Sell the Roofs.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 font-medium max-w-xl leading-relaxed">
                        Launch or scale a roofing business with the Capital City Roofing brand, systems, training, and AI-powered operating platform.
                    </p>

                    <p className="text-base text-white/70 max-w-lg leading-relaxed border-l-2 border-secondary pl-4">
                        A franchise alternative for qualified operators who want proven playbooks, partner support, and scalable market infrastructure — without building everything from scratch.
                    </p>

                    <ul className="space-y-3 pt-2">
                        {[
                            { icon: TrendingUp, text: "35%+ Avg. Profit Margins from Day One" },
                            { icon: Zap, text: "Launch-Ready in 14 Days — Not 14 Months" },
                            { icon: ShieldCheck, text: "Protected Market Territory & Exclusive Leads" },
                            { icon: CheckCircle2, text: "Brand, Training, AI, CRM & Back-Office Included" },
                        ].map((item, index) => (
                            <li key={index} className="flex items-center space-x-3 text-lg font-bold">
                                <item.icon className="w-6 h-6 text-success shrink-0" />
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            to="/apply"
                            className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-md transition-all text-sm uppercase tracking-widest shadow-glow-red hover:shadow-glow-red/80"
                        >
                            <span>Apply to Become a Partner</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/the-model"
                            className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-3.5 px-8 rounded-md transition-all text-sm uppercase tracking-widest border border-white/20"
                        >
                            <span>See How the Model Works</span>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Opt-In Form */}
                <div className="relative animate-slide-in-right delay-200 lg:ml-auto w-full max-w-md mx-auto lg:mx-0">
                    {/* Decorative Elements */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-[hsl(38,75%,50%)] rounded-xl blur opacity-30 animate-pulse"></div>
                    <HeroLeadForm />
                </div>
            </div>

            {/* Bottom Wave SVG */}
            <SVGCurve position="bottom" fill="#ffffff" />
        </section>
    );
};
