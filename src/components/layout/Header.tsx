import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
        name: 'The Opportunity',
        dropdown: [
            { name: 'The Model', path: '/the-model' },
            { name: 'The Tech Stack', path: '/tech-stack' },
            { name: 'Tiered Pricing', path: '/investment' },
            { name: 'How It Works', path: '/how-it-works' },
            { name: 'Training & Support', path: '/training-support' },
        ],
    },
    { name: 'University', path: '/university-preview' },
    { name: 'Markets', path: '/markets' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
];

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${isScrolled
                ? 'bg-navy-900/95 backdrop-blur-md shadow-navy-md py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex flex-col z-50">
                    <img src="/images/capital-city-roofing-logo.png" alt="Capital City Roofing" className="h-10 md:h-12 w-auto object-contain" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden xl:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                            onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                        >
                            {item.dropdown ? (
                                <button className="flex items-center text-white/90 hover:text-white text-sm font-bold tracking-wide transition-colors">
                                    {item.name} <ChevronDown className="ml-1 w-4 h-4 text-secondary group-hover:text-white transition-colors" />
                                </button>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="text-white/90 hover:text-white text-sm font-bold tracking-wide transition-colors link-underline"
                                >
                                    {item.name}
                                </Link>
                            )}

                            {/* Dropdown Menu */}
                            {item.dropdown && activeDropdown === item.name && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-navy-2xl overflow-hidden py-2 animate-slide-up border border-border">
                                    {item.dropdown.map((dropItem) => (
                                        <Link
                                            key={dropItem.name}
                                            to={dropItem.path}
                                            className="block px-4 py-2 text-navy-900 font-bold hover:bg-muted hover:text-secondary transition-colors"
                                        >
                                            {dropItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden xl:flex items-center space-x-4">
                    <Link
                        to="/partner-login"
                        className="text-white/80 hover:text-white text-sm font-bold transition-colors link-underline"
                    >
                        Partner Login
                    </Link>
                    <Link
                        to="/apply"
                        className="bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 px-6 py-2.5 rounded-md font-bold transition-all card-hover"
                    >
                        Apply to Become a Partner
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="xl:hidden z-50 text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-navy-950 z-40 pt-24 px-6 overflow-y-auto pb-10 xl:hidden animate-fade-in flex flex-col">
                    <nav className="flex flex-col space-y-6 flex-grow">
                        {navItems.map((item) => (
                            <div key={item.name} className="flex flex-col">
                                {item.dropdown ? (
                                    <>
                                        <div className="text-white/50 text-sm font-black uppercase tracking-widest mb-3">
                                            {item.name}
                                        </div>
                                        <div className="flex flex-col space-y-3 pl-4 border-l border-white/10">
                                            {item.dropdown.map((dropItem) => (
                                                <Link
                                                    key={dropItem.name}
                                                    to={dropItem.path}
                                                    className="text-white/90 hover:text-secondary font-bold text-lg"
                                                >
                                                    {dropItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className="text-white hover:text-secondary font-display font-bold text-2xl uppercase tracking-wider"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="mt-8 flex flex-col space-y-4 pt-8 border-t border-white/10">
                        <Link
                            to="/partner-login"
                            className="text-center text-white/80 hover:text-white py-3 font-bold border border-white/20 rounded-md"
                        >
                            Partner Login
                        </Link>
                        <Link
                            to="/apply"
                            className="text-center bg-[hsl(38,75%,50%)] text-navy-950 py-3 rounded-md font-bold shadow-glow-gold"
                        >
                            Apply to Become a Partner
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};
