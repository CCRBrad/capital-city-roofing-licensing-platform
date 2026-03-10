import React, { useState } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { FileText, Search, LayoutList, CheckCircle2, AlertCircle } from 'lucide-react';
import { sopsData } from '../../data/sopsData';

const SOPs: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categories = Array.from(new Set(sopsData.map(sop => sop.category)));

    const filteredSOPs = sopsData.filter(sop => {
        const matchesSearch = sop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sop.content.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory ? sop.category === activeCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pb-12 animate-fade-in">
            <SEOHead title="Standard Operating Procedures | Operator Portal" description="Access Capital City Roofing Standard Operating Procedures." />

            {/* Header */}
            <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-navy-2xl relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(38,75%,50%)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Knowledge Base</span>
                    <h1 className="text-4xl font-black font-display uppercase tracking-tight mb-2">
                        Standard Operating Procedures
                    </h1>
                    <p className="text-white/80 max-w-2xl">
                        The official playbook. Every process, checklist, and requirement needed to execute the Capital City Roofing model flawlessly.
                    </p>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search SOPs by keyword or title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-secondary bg-white shadow-sm"
                    />
                </div>
                <div className="flex bg-muted p-1 rounded-lg border border-border overflow-x-auto">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-4 py-2 rounded-md font-bold text-sm whitespace-nowrap transition-colors ${activeCategory === null ? 'bg-white text-navy-950 shadow-sm' : 'text-muted-foreground hover:text-navy-950'}`}
                    >
                        All
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-md font-bold text-sm whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-white text-navy-950 shadow-sm' : 'text-muted-foreground hover:text-navy-950'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 gap-6">
                {filteredSOPs.length > 0 ? (
                    filteredSOPs.map(sop => (
                        <Card key={sop.id} className="border-border shadow-sm overflow-hidden group">
                            <CardHeader className="bg-muted border-b border-border py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex items-center space-x-3">
                                    <FileText className="w-5 h-5 text-secondary shrink-0" />
                                    <CardTitle className="text-xl font-bold font-heading text-navy-950">
                                        {sop.title}
                                    </CardTitle>
                                </div>
                                <div className="flex items-center space-x-2 shrink-0">
                                    <span className="bg-white border border-border text-navy-900 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                                        {sop.category}
                                    </span>
                                    {sop.priority === 'High' && (
                                        <span className="bg-red-50 text-secondary border border-red-100 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider flex items-center">
                                            <AlertCircle className="w-3 h-3 mr-1" /> Critical
                                        </span>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 prose prose-slate max-w-none">
                                {/* Basic Markdown Parsing for Headings and Lists */}
                                {sop.content.split('\n').map((line, idx) => {
                                    if (line.startsWith('### ')) {
                                        return <h4 key={idx} className="font-bold font-heading text-lg text-navy-950 mt-6 mb-2 border-b border-border/50 pb-1">{line.replace('### ', '')}</h4>;
                                    }
                                    if (line.startsWith('- ')) {
                                        return (
                                            <div key={idx} className="flex items-start mb-2 ml-4">
                                                <CheckCircle2 className="w-4 h-4 text-secondary mt-1 mr-2 shrink-0" />
                                                <span className="text-muted-foreground">{line.replace('- ', '')}</span>
                                            </div>
                                        );
                                    }
                                    if (line.trim().length > 0) {
                                        return <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">{line}</p>;
                                    }
                                    return null;
                                })}
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="bg-white border border-border rounded-xl p-12 text-center text-muted-foreground">
                        <LayoutList className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
                        <h3 className="text-xl font-bold font-heading text-navy-950 mb-2">No SOPs Found</h3>
                        <p>No operating procedures match your current search constraints.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SOPs;
