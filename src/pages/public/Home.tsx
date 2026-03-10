import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { HeroSection } from '../../components/home/HeroSection';
import { ROICalculator } from '../../components/home/ROICalculator';
import { ComparisonTable } from '../../components/home/ComparisonTable';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '../../components/ui/accordion';
import { Link } from 'react-router-dom';
import {
    Award,
    TrendingUp,
    ShieldCheck,
    Wrench,
    Star,
    Headset,
    PlayCircle,
    FileText,
    Rocket,
    ArrowRight
} from 'lucide-react';

const Home: React.FC = () => {
    return (
        <>
            <SEOHead
                title="We Run the Company. You Sell the Roofs."
                description="Capital City Roofing Licensed Operating Platform. Not a franchise. Partner with us and scale your roofing business with our proven operational infrastructure."
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Capital City Roofing",
                    "url": "https://capitalcityroofing.net",
                    "logo": "https://capitalcityroofing.net/logo.png",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "(470) 766-3285",
                        "contactType": "sales",
                        "areaServed": "US",
                        "availableLanguage": "English"
                    }
                }}
            />

            {/* Hero Section */}
            <HeroSection />

            {/* Trust Bar (Certifications) */}
            <section className="py-12 bg-white relative z-20 shadow-navy-sm">
                <div className="container-custom">
                    <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6 border-b border-border pb-4 w-64 mx-auto">
                        Backed By The Best
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-80 transition-all duration-300 max-w-6xl mx-auto">
                        <img src="/images/partners/Capital-City-Roofing-GAF-Commercial-Certified-LOGO.png" alt="GAF Commercial Contractor" className="h-12 md:h-14 w-auto object-contain mix-blend-multiply" />
                        <img src="/images/partners/GAF-Master-Elite-Badge.png" alt="GAF Master Elite" className="h-14 md:h-16 w-auto object-contain mix-blend-multiply" />
                        <img src="/images/partners/CertainTeed_ShingleMaster_PREMIER.jpg" alt="CertainTeed ShingleMaster Premier" className="h-14 md:h-16 w-auto object-contain mix-blend-multiply" />
                        <img src="/images/partners/nrca-member-badge Capital City Roofing.png" alt="NRCA Member" className="h-12 md:h-14 w-auto object-contain mix-blend-multiply" />
                        <img src="/images/partners/roofing-alliance-guarantor-member-capital-city-roofing.png" alt="Roofing Alliance" className="h-12 md:h-14 w-auto object-contain mix-blend-multiply" />
                        <img src="/images/partners/genflex-roofing-systems-capital-city-roofing-alpharetta-ga.png" alt="GenFlex Roofing Systems" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" />
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <section className="py-24 bg-muted relative">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">The Toolkit</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-primary mb-6">
                            Everything You Need to Scale
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            We provide the back-office infrastructure, premium branding, and technology stack. You focus on what you do best: selling roofs and building relationships.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Award, title: 'Proven Track Record', desc: 'Plug into a system that has managed over $50M in roofing revenue.' },
                            { icon: TrendingUp, title: 'High-Margin Business', desc: 'Our partners consistently achieve 35%+ average profit margins.' },
                            { icon: ShieldCheck, title: 'Protected Markets', desc: 'Secure an exclusive territory. We never over-license an area.' },
                            { icon: Wrench, title: 'Complete AI Toolkit', desc: 'Access our proprietary tech stack: GoHighLevel, Sierra AI, Roofr & more.' },
                            { icon: Star, title: 'Premium Brand Power', desc: 'Leverage GAF Certified Plus and CertainTeed SELECT status from Day 1.' },
                            { icon: Headset, title: '24/7 Operations Support', desc: 'Our centralized team handles estimating, supplements, and production management.' },
                        ].map((prop, idx) => (
                            <Card key={idx} className="bg-white border-border shadow-navy-sm card-hover">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                                        <prop.icon className="w-6 h-6 text-secondary" />
                                    </div>
                                    <CardTitle className="text-xl font-black text-primary">{prop.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{prop.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <SVGCurve position="bottom" fill="#ffffff" />
            </section>

            {/* Video Section */}
            <section className="py-24 bg-navy-950 text-white relative overflow-hidden isolate">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[100px] opacity-20 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[hsl(38,75%,50%)] rounded-full blur-[100px] opacity-10 -z-10"></div>

                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm block">See It In Action</span>
                            <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight leading-tight">
                                Breaking the Franchise Mold
                            </h2>
                            <p className="text-lg text-white/80">
                                Founder Brad Strawbridge explains why Capital City Roofing built a licensing model that empowers operators instead of draining them with royalties.
                            </p>
                            <Button className="bg-white text-navy-950 hover:bg-gray-100 font-bold h-12 px-8 mt-4 shadow-glow-gold rounded-full">
                                Watch Full Video <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                        <div className="relative group cursor-pointer aspect-video bg-navy-900 rounded-xl overflow-hidden border border-white/20 shadow-navy-2xl flex items-center justify-center">
                            {/* Video Thumbnail Placeholder */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                            <div className="relative z-10 w-20 h-20 rounded-full bg-[hsl(38,75%,50%)] flex items-center justify-center text-navy-950 transition-transform group-hover:scale-110 shadow-glow-gold">
                                <PlayCircle className="w-10 h-10 ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Calculator */}
            <ROICalculator />

            {/* Risk Reversal */}
            <section className="py-20 bg-secondary text-white relative z-10">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: '30-Day Support', desc: 'Hand-held 14 to 30 day onboarding process to launch your market.' },
                            { title: 'No Lock-In', desc: 'Month-to-month flexibility. We earn your business every single day.' },
                            { title: '5% Royalty', desc: 'Transparent, capped royalty structure. No hidden fees.' },
                            { title: 'Exit Freedom', desc: 'You own the asset. Sell your book of business whenever you want.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                                <h3 className="text-xl font-black font-display tracking-widest uppercase mb-3 text-[hsl(38,75%,50%)]">{item.title}</h3>
                                <p className="text-white/90 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table Component */}
            <ComparisonTable />

            {/* How It Works */}
            <section className="py-24 bg-navy-50 relative">
                <div className="container-custom text-center">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">The Process</span>
                    <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-primary mb-16">
                        Start to Scale in 3 Steps
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-border z-0"></div>

                        {[
                            { step: '01', title: 'Apply & Audit', icon: FileText, desc: 'Submit your application. We conduct a thorough market and operational audit to ensure a mutual fit.' },
                            { step: '02', title: 'Onboarding', icon: ShieldCheck, desc: 'Complete our 14-day Capital City University intensive. Systems connected, LLCs formed.' },
                            { step: '03', title: 'Launch & Scale', icon: Rocket, desc: 'Turn on the marketing engine. Start selling roofs while we run the back office.' }
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-muted shadow-navy-md flex items-center justify-center mb-6 text-primary">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-black text-primary mb-3"><span className="text-secondary mr-2">{item.step}.</span>{item.title}</h3>
                                <p className="text-muted-foreground text-center">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-navy-950 text-white relative">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-2 block">Operator Success</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight mb-6">
                            From the Field
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Michael T.', location: 'Atlanta, GA (2025)', rev: '$2.1M Y1 Revenue', quote: '"The tech stack alone is worth the fee. I don\'t worry about estimates or supplements; I just close deals. Best business decision I\'ve made."' },
                            { name: 'Sarah J.', location: 'Charlotte, NC (2025)', rev: '$3.4M Y2 Revenue', quote: '"I switched from a major franchise. The 5% capped royalty vs the 9% I was paying means I kept an extra $130K in my pocket this year. Unbelievable."' },
                            { name: 'David L.', location: 'Nashville, TN (2026)', rev: 'Onboarding Phase', quote: '"Capital City University had me ready to sell on Day 14. The support team feels like an extension of my own office."' }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-navy-900 p-8 rounded-xl border border-white/10 shadow-navy-xl flex flex-col justify-between">
                                <div>
                                    <div className="flex text-[hsl(38,75%,50%)] mb-6">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                                    </div>
                                    <p className="text-lg italic text-white/90 mb-6 leading-relaxed">
                                        {testimonial.quote}
                                    </p>
                                </div>
                                <div className="border-t border-white/10 pt-4">
                                    <h4 className="font-bold font-heading text-lg">{testimonial.name}</h4>
                                    <p className="text-white/60 text-sm mb-1">{testimonial.location}</p>
                                    <p className="text-success font-bold text-sm tracking-wide">{testimonial.rev}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-white relative">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Answers</span>
                        <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-primary">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {[
                            { q: 'How is this different from a roofing franchise?', a: 'Traditional franchises lock you into 10-year contracts, charge 8-10% uncapped royalties, and restrict what materials you buy and what software you use. We charge a flat $15K entry, a capped 5% royalty, offer complete operational flexibility, and you can exit your business anytime.' },
                            { q: 'Do I need prior roofing experience?', a: 'No. Capital City University provides a rigorous 14-to-21-day training curriculum covering everything from sales and production to financial management. We prefer strong sales/leadership backgrounds over technical roofing experience.' },
                            { q: 'What does the 5% royalty cover?', a: 'It covers your access to the complete licensed operator platform: the tech stack (CRM, AI agents, estimating software), the centralized back-office support, continuous marketing assets, and national brand leverage with suppliers.' },
                            { q: 'Are territories protected?', a: 'Yes. We map out exclusive, protected market territories to ensure our licensed operators are never competing against each other.' },
                            { q: 'What is the initial investment entirely?', a: 'The initial licensing buy-in is $15,000. We recommend having an additional $30,000 to $50,000 in working capital to cover your LLC formation, initial marketing spend, and personal expenses during the ramp-up phase.' }
                        ].map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-muted lg:hover:bg-gray-100 transition-colors">
                                <AccordionTrigger className="text-left font-bold text-lg md:text-xl text-primary py-6 hover:no-underline">{faq.q}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary text-white text-center relative isolate overflow-hidden">
                <div className="absolute inset-0 bg-hero-gradient opacity-90 -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(200,16,46,0.15)_0%,transparent_70%)] -z-10"></div>
                <div className="container-custom max-w-3xl">
                    <h2 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        Ready To <span className="text-gradient-red drop-shadow-sm">Scale?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 mb-10 font-medium leading-relaxed">
                        Markets are limited. Secure your territory and build an asset you truly own.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 shadow-glow-gold rounded-full transition-transform hover:-translate-y-1">
                            Apply for Audit
                        </Button>
                        <Link to="/the-model">
                            <Button variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold border-white/30 hover:bg-white hover:text-navy-950 rounded-full bg-transparent text-white transition-all">
                                Explore The Model
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
