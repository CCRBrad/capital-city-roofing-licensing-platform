import React from 'react';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StickyMobileCTA: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950 border-t border-white/10 p-3 flex md:hidden items-center justify-between animate-slide-up shadow-navy-2xl">
            <a href="tel:4707663285" className="flex items-center text-white/90 font-bold hover:text-white transition-colors">
                <PhoneCall className="w-5 h-5 mr-2 text-secondary" />
                (470) ROOF-ATL
            </a>
            <Link to="/apply" className="bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 px-4 py-2 rounded-md font-bold text-sm shadow-glow-gold transition-colors">
                Apply Now
            </Link>
        </div>
    );
};
