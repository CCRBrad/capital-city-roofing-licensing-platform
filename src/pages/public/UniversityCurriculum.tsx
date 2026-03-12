import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Link } from 'react-router-dom';

const UniversityCurriculum: React.FC = () => {
    return (
        <>
            <SEOHead
                title="University Curriculum | Capital City Roofing"
                description="The Capital City University curriculum covers sales, production, supplements, leadership, and operational best practices for licensed market partners."
            />
            <section className="py-32 bg-navy-950 text-white text-center">
                <div className="container-custom max-w-3xl">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Capital City University</span>
                    <h1 className="text-5xl font-black font-display uppercase tracking-tight mb-6">University Curriculum</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">The full curriculum, module breakdown, and certification tracks are available to licensed market partners inside the partner portal.</p>
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

export default UniversityCurriculum;
