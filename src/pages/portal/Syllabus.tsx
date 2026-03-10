import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { BookOpen, Clock, Target, GraduationCap, CheckCircle2 } from 'lucide-react';
import { universityModules } from '../../data/universityContent';

const weeks = [
    {
        week: 1,
        title: "Foundations, Culture, & The Pitch",
        objective: "Master the company culture, basic product knowledge, and the 8-Step Selling System.",
        credits: 1,
        modules: ["1.1", "1.2", "1.3", "1.4"]
    },
    {
        week: 2,
        title: "Inspections, Damage, & The Insurance Process",
        objective: "Execute perfect inspections and navigate the Precision Public Adjusting (PPA) handoff.",
        credits: 1,
        modules: ["2.1", "2.2", "2.3", "2.4"]
    },
    {
        week: 3,
        title: "Systems Mastery, Networking, & Final Certification",
        objective: "Master the tech stack, generate organic leads, and achieve final field readiness.",
        credits: 1,
        modules: ["3.1", "3.2", "3.3", "3.4"]
    }
];

const totalContactHours = Object.values(universityModules).reduce((sum, m) => sum + m.contactHours, 0);

const Syllabus: React.FC = () => {
    return (
        <div className="pb-12 animate-fade-in space-y-8">
            <SEOHead title="Official Syllabus | CCU" description="Capital City University Academic Syllabus — accreditation-ready curriculum overview." />

            {/* Header */}
            <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-navy-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(38,75%,50%)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Academic Document</span>
                    <h1 className="text-4xl font-black font-display uppercase tracking-tight mb-2">
                        Official Course Syllabus
                    </h1>
                    <p className="text-white/80 max-w-2xl">
                        Capital City University — Professional Roofing Sales & Operations Certificate Program
                    </p>
                </div>
            </div>

            {/* Course Overview Card */}
            <Card className="border-border shadow-sm">
                <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-black font-display text-navy-950 uppercase tracking-widest text-sm mb-4">Course Information</h3>
                            <dl className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-border pb-2">
                                    <dt className="text-muted-foreground font-medium">Course Title</dt>
                                    <dd className="font-bold text-navy-950">Professional Roofing Sales & Operations</dd>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2">
                                    <dt className="text-muted-foreground font-medium">Institution</dt>
                                    <dd className="font-bold text-navy-950">Capital City University (CCU)</dd>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2">
                                    <dt className="text-muted-foreground font-medium">Duration</dt>
                                    <dd className="font-bold text-navy-950">3 Weeks (21 Days)</dd>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2">
                                    <dt className="text-muted-foreground font-medium">Total Contact Hours</dt>
                                    <dd className="font-bold text-navy-950">{totalContactHours} Hours</dd>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2">
                                    <dt className="text-muted-foreground font-medium">Credit Hours</dt>
                                    <dd className="font-bold text-navy-950">3 Credit Hours</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground font-medium">Delivery Method</dt>
                                    <dd className="font-bold text-navy-950">Hybrid (Online + Field Practicum)</dd>
                                </div>
                            </dl>
                        </div>
                        <div>
                            <h3 className="font-black font-display text-navy-950 uppercase tracking-widest text-sm mb-4">Grading Policy</h3>
                            <dl className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-border pb-2">
                                    <dt className="text-muted-foreground font-medium">Module Quizzes</dt>
                                    <dd className="font-bold text-navy-950">40% of Final Grade</dd>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2">
                                    <dt className="text-muted-foreground font-medium">Boss Battle Simulations</dt>
                                    <dd className="font-bold text-navy-950">30% of Final Grade</dd>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2">
                                    <dt className="text-muted-foreground font-medium">Participation & Engagement</dt>
                                    <dd className="font-bold text-navy-950">15% of Final Grade</dd>
                                </div>
                                <div className="flex justify-between border-b border-border pb-2">
                                    <dt className="text-muted-foreground font-medium">Field Practicum</dt>
                                    <dd className="font-bold text-navy-950">15% of Final Grade</dd>
                                </div>
                                <div className="flex justify-between">
                                    <dt className="text-muted-foreground font-medium">Passing Threshold</dt>
                                    <dd className="font-bold text-secondary">80% Minimum Required</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Academic Integrity Policy */}
            <Card className="border-l-4 border-l-secondary bg-red-50/30">
                <CardContent className="p-6">
                    <h3 className="font-black font-display text-navy-950 uppercase tracking-widest text-sm mb-2">Academic Integrity Policy</h3>
                    <p className="text-sm text-muted-foreground">
                        All assessments must be completed independently unless specifically designated as collaborative exercises.
                        Role-play simulations and Boss Battles are evaluated on individual performance. Sharing quiz answers or
                        misrepresenting completion of field practicum activities constitutes a violation and may result in
                        certificate revocation. All submissions are timestamped and logged for compliance verification.
                    </p>
                </CardContent>
            </Card>

            {/* Week-by-Week Breakdown */}
            <div className="space-y-8">
                {weeks.map(week => (
                    <Card key={week.week} className="border-border shadow-sm overflow-hidden">
                        <CardHeader className="bg-navy-950 text-white py-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                                        <span className="font-black font-display text-xl">{week.week}</span>
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl font-black font-display uppercase tracking-widest">{week.title}</CardTitle>
                                    </div>
                                </div>
                                <div className="hidden md:flex items-center space-x-4 text-xs uppercase tracking-widest text-white/60">
                                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {week.modules.reduce((s, id) => s + (universityModules[id]?.contactHours || 0), 0)} hrs</span>
                                    <span className="flex items-center"><GraduationCap className="w-3 h-3 mr-1" /> {week.credits} credit</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-2 mb-6">
                                <Target className="w-4 h-4 text-secondary" />
                                <span className="text-sm font-bold text-navy-950">Objective:</span>
                                <span className="text-sm text-muted-foreground">{week.objective}</span>
                            </div>
                            <div className="space-y-6">
                                {week.modules.map(modId => {
                                    const mod = universityModules[modId];
                                    if (!mod) return null;
                                    return (
                                        <div key={modId} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex items-center space-x-2">
                                                    <BookOpen className="w-4 h-4 text-secondary" />
                                                    <h4 className="font-bold text-navy-950">Module {modId}: {mod.title}</h4>
                                                </div>
                                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest bg-muted px-2 py-1 rounded">{mod.contactHours} hrs • {mod.type}</span>
                                            </div>
                                            <div className="ml-6">
                                                <p className="text-xs font-bold text-navy-900 uppercase tracking-widest mb-2">Student Learning Outcomes (SLOs):</p>
                                                <ul className="space-y-1.5">
                                                    {mod.slos.map((slo, idx) => (
                                                        <li key={idx} className="flex items-start text-sm">
                                                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                                                            <span className="text-muted-foreground">{slo}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Required Materials */}
            <Card className="border-border shadow-sm">
                <CardHeader>
                    <CardTitle className="font-black font-display text-navy-950 uppercase tracking-widest text-sm">Required Materials & Recommended Reading</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <h4 className="font-bold text-navy-950 mb-3">Required</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-0.5" /><span className="text-muted-foreground">Capital City Roofing Branded Packet</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-0.5" /><span className="text-muted-foreground">Roofr Account Access (provided)</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-0.5" /><span className="text-muted-foreground">GoHighLevel CRM Access (provided)</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-0.5" /><span className="text-muted-foreground">PPA Authorization Form (downloadable)</span></li>
                            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-secondary mr-2 mt-0.5" /><span className="text-muted-foreground">CCR Insurance Contingency Agreement (downloadable)</span></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-navy-950 mb-3">Recommended Reading</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start"><BookOpen className="w-4 h-4 text-[hsl(38,75%,50%)] mr-2 mt-0.5" /><span className="text-muted-foreground"><strong>Traction</strong> by Gino Wickman (EOS Framework)</span></li>
                            <li className="flex items-start"><BookOpen className="w-4 h-4 text-[hsl(38,75%,50%)] mr-2 mt-0.5" /><span className="text-muted-foreground"><strong>SPIN Selling</strong> by Neil Rackham</span></li>
                            <li className="flex items-start"><BookOpen className="w-4 h-4 text-[hsl(38,75%,50%)] mr-2 mt-0.5" /><span className="text-muted-foreground"><strong>The Challenger Sale</strong> by Matthew Dixon</span></li>
                            <li className="flex items-start"><BookOpen className="w-4 h-4 text-[hsl(38,75%,50%)] mr-2 mt-0.5" /><span className="text-muted-foreground"><strong>Never Split the Difference</strong> by Chris Voss</span></li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Syllabus;
