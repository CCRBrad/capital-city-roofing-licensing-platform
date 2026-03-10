import React, { useState, useEffect } from 'react';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { HeroLeadForm } from '../../components/conversion/HeroLeadForm';
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
    // Ticker implementation
    const messages = [
        "Revenue Managed: $50M+",
        "Feeding the Future: 10,000+ meals",
        "AI-Powered Automation",
        "35%+ Average Profit Margins"
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
                <div className="space-y-8 animate-slide-in-left">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-navy-800 border border-white/10 shadow-navy-md">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-widest">Now Accepting Licensed Operators</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display uppercase tracking-tight leading-tight">
                        We Run the Company.<br />
                        <span className="text-gradient-gold">You Sell the Roofs.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 font-medium max-w-xl leading-relaxed">
                        Join the Capital City Roofing Licensed Operating Platform. Powered by Innovation & Integrity.
                    </p>

                    <p className="text-sm font-bold text-white/70 uppercase tracking-widest border-l-2 border-secondary pl-4">
                        "If it isn't in the system, it didn't happen."
                    </p>

                    <ul className="space-y-4 pt-2">
                        {[
                            { icon: TrendingUp, text: "High-Margin Business (35%+) " },
                            { icon: Zap, text: "14-Day Onboarding" },
                            { icon: ShieldCheck, text: "Protected Market Territory" },
                            { icon: CheckCircle2, text: "Complete AI Toolkit Included" },
                        ].map((item, index) => (
                            <li key={index} className="flex items-center space-x-3 text-lg font-bold">
                                <item.icon className="w-6 h-6 text-success shrink-0" />
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-start space-x-4 pt-4">
                        <p className="text-white/60 text-sm font-semibold">
                            Trusted by Licensed Operators in 6 Markets
                        </p>
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
