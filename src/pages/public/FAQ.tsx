import React from 'react';
import { SEOHead } from '../../components/SEOHead';

const FAQ: React.FC = () => {
    return (
        <>
            <SEOHead 
                title="Frequently Asked Questions | CCR" 
                description="Learn more about FAQ with Capital City Roofing Licensed Operating Platform." 
            />
            <section className="py-32 bg-navy-950 text-white text-center">
                <div className="container-custom">
                    <h1 className="text-5xl font-black font-display uppercase tracking-tight mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">This page is currently under structure development as we build out the full platform.</p>
                </div>
            </section>
        </>
    );
};

export default FAQ;
