import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Link } from 'react-router-dom';

const TrainingSupport: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Training & Support | Capital City Roofing"
                description="Capital City University provides 3-week intensive training covering sales, production, supplements, and leadership for licensed market partners."
            />
            <section className="py-32 bg-navy-950 text-white text-center">
                <div className="container-custom max-w-3xl">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Partner Enablement</span>
                    <h1 className="text-5xl font-black font-display uppercase tracking-tight mb-6">Training & Support</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">Capital City University, ongoing enablement, and dedicated partner support are available to licensed market operators. Apply to learn more about the training program.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/apply" className="inline-block bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">
                            Apply to Become a Partner
                        </Link>
                        <Link to="/the-model" className="inline-block bg-white/10 text-white px-8 py-3 rounded-md font-bold hover:bg-white/20 transition-colors border border-white/20">
                            See The Model
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrainingSupport;
