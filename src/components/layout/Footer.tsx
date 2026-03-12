import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Linkedin, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-navy-950 text-white relative flex flex-col">
            {/* Feeding the Future Banner */}
            <div className="bg-secondary relative overflow-hidden">
                <div className="container-custom py-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center space-x-3 text-white">
                        <Heart className="w-6 h-6 fill-white drop-shadow-md" />
                        <span className="font-bold text-lg md:text-xl">Feeding the Future Initiative</span>
                    </div>
                    <p className="text-white/90 hidden md:block font-medium">10,000+ meals provided, $50K+ donated.</p>
                    <Link
                        to="/feeding-the-future"
                        className="mt-4 md:mt-0 px-6 py-2 bg-white text-secondary font-bold rounded-md hover:bg-gray-100 transition-colors shadow-sm"
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            <div className="container-custom py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12">

                    {/* 1. Brand column (Takes 2 columns wide on large screens) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex flex-col">
                            <span className="text-white font-display text-2xl leading-none tracking-widest font-black uppercase">
                                Capital City Roofing
                            </span>
                            <span className="text-secondary text-xs font-bold tracking-widest uppercase">
                                Licensed Operating Platform
                            </span>
                        </div>
                        <p className="text-muted-foreground pr-4">
                            We Run the Company. You Sell the Roofs. Elevate your roofing business with our proven operational infrastructure, premium brand, and AI-powered tech stack.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Company */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2">Company</h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">About Us</Link></li>
                            <li><Link to="/about#leadership" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">Leadership</Link></li>
                            <li><Link to="/success-stories" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">Success Stories</Link></li>
                            <li><Link to="/feeding-the-future" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">Feeding the Future</Link></li>
                            <li><Link to="/contact" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">Contact</Link></li>
                        </ul>
                    </div>

                    {/* 3. The Opportunity */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2">The Opportunity</h4>
                        <ul className="space-y-3">
                            <li><Link to="/the-model" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">The Model</Link></li>
                            <li><Link to="/tech-stack" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">Tech Stack</Link></li>
                            <li><Link to="/investment" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">Tiered Pricing</Link></li>
                            <li><Link to="/university-preview" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">CC University</Link></li>
                            <li><Link to="/ideal-candidate" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">Ideal Candidate</Link></li>
                        </ul>
                    </div>

                    {/* 4. Top Markets */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2">Top Markets</h4>
                        <ul className="space-y-3">
                            <li><Link to="/licensing-georgia" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">Georgia (HQ) <span className="ml-2 text-xs text-secondary font-bold">LIMITED</span></Link></li>
                            <li><Link to="/licensing-florida" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">Florida</Link></li>
                            <li><Link to="/licensing-texas" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">Texas</Link></li>
                            <li><Link to="/licensing-north-carolina" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">North Carolina</Link></li>
                            <li><Link to="/markets" className="text-white font-bold hover:text-secondary transition-colors text-sm flex items-center group">View All Markets <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span></Link></li>
                        </ul>
                    </div>

                    {/* 5. Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <div className="flex flex-col">
                                    <span className="text-white font-bold">(470) ROOF-ATL</span>
                                    <span className="text-muted-foreground text-sm">(470) 766-3285</span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <a href="mailto:licensing@capitalcityroofing.net" className="text-muted-foreground hover:text-white transition-colors text-sm break-all">
                                    licensing@capitalcityroofing.net
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground text-sm">
                                    360 Winkler Drive, Suite E<br />
                                    Alpharetta, Georgia 30004
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Licensing Disclaimer */}
            <div className="border-t border-white/5 bg-navy-950">
                <div className="container-custom py-4">
                    <p className="text-[11px] text-white/30 leading-relaxed max-w-4xl">
                        Capital City Roofing licenses its brand, systems, training, and operating model to approved partners. Partners remain responsible for contractor licensing, insurance, and applicable state and local compliance requirements in their market.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-navy-950">
                <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
                    <p className="text-muted-foreground">
                        &copy; {new Date().getFullYear()} Capital City Roofing. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-2 text-white/50 font-display uppercase tracking-widest text-xs">
                        "If it isn't in the system, it didn't happen."
                    </div>
                    <div className="flex space-x-6">
                        <Link to="/privacy" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
