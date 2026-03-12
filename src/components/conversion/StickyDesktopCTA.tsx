import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const StickyDesktopCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="hidden md:flex fixed bottom-8 right-8 z-40 animate-slide-up">
            <Link to="/apply" className="bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 px-6 py-4 rounded-full font-bold shadow-glow-gold hover:-translate-y-1 transition-all flex items-center space-x-2">
                <span>Apply to Become a Partner</span>
                <span className="text-xl">→</span>
            </Link>
        </div>
    );
};
