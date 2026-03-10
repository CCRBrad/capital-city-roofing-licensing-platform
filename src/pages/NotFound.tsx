import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <>
            <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist." />
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
                <div className="relative mb-8">
                    <span className="text-[10rem] font-black font-display text-navy-100 leading-none select-none">404</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-black font-display text-navy-950 uppercase tracking-widest">Not Found</span>
                    </div>
                </div>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                    The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 bg-secondary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors text-sm uppercase tracking-widest"
                    >
                        <Home className="w-4 h-4" />
                        <span>Back to Home</span>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center space-x-2 bg-white border-2 border-border hover:border-navy-300 text-navy-950 font-bold py-3 px-6 rounded-md transition-colors text-sm uppercase tracking-widest"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Go Back</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default NotFound;
