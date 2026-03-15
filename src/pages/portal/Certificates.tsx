import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent } from '../../components/ui/card';
import { Award, Lock, Download, CheckCircle2 } from 'lucide-react';
import { useUniversityProgress } from '../../contexts/UniversityProgressContext';
import { DAY_ORDER } from '../../data/universityContent';

const milestones = [
    { id: 'week-1', label: 'Week 1: Sales Foundations', days: DAY_ORDER.slice(0, 7), description: 'Culture, products, sales process, inspection, closing, and objection handling' },
    { id: 'week-2', label: 'Week 2: Insurance & Systems', days: DAY_ORDER.slice(7, 13), description: 'Ethics, insurance process, CRM mastery, AI tools, and production handoff' },
];

const Certificates: React.FC = () => {
    const { progress, getCompletedDayCount } = useUniversityProgress();

    const completedDays = getCompletedDayCount();
    const totalContactHours = 23.5;
    const isGraduated = progress.graduated;

    return (
        <div className="pb-12 animate-fade-in space-y-8">
            <SEOHead title="Certificates | CCU" description="Capital City University Certificates of Completion." />

            {/* Header */}
            <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-navy-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(38,75%,50%)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Academic Records</span>
                    <h1 className="text-4xl font-black font-display uppercase tracking-tight mb-2">
                        Certificates of Completion
                    </h1>
                    <p className="text-white/80 max-w-2xl">
                        Earn milestone certificates by completing each phase. Complete the full 14-day track and pass the Final Exam to earn your CCU Graduate Certificate.
                    </p>
                </div>
            </div>

            {/* Milestone Certificates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {milestones.map(ms => {
                    const earned = ms.days.every(dayId => progress.days[dayId]?.completed);
                    return (
                        <Card key={ms.id} className={`border-2 transition-all ${earned ? 'border-green-300 shadow-lg' : 'border-border opacity-70'}`}>
                            <CardContent className="p-8 text-center flex flex-col items-center">
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${earned ? 'bg-green-100' : 'bg-muted'}`}>
                                    {earned ? (
                                        <Award className="w-10 h-10 text-green-600" />
                                    ) : (
                                        <Lock className="w-10 h-10 text-muted-foreground" />
                                    )}
                                </div>
                                <h3 className="text-xl font-black font-display text-navy-950 uppercase tracking-widest mb-2">{ms.label}</h3>
                                <p className="text-sm text-muted-foreground mb-6">{ms.description}</p>
                                {earned ? (
                                    <>
                                        <CheckCircle2 className="w-6 h-6 text-green-600 mb-2" />
                                        <span className="text-green-700 font-bold text-sm">Certificate Earned</span>
                                        <button className="mt-4 bg-navy-950 hover:bg-navy-800 text-white font-bold py-2 px-6 rounded-md transition-colors text-sm flex items-center space-x-2">
                                            <Download className="w-4 h-4" />
                                            <span>Download PDF</span>
                                        </button>
                                    </>
                                ) : (
                                    <span className="text-muted-foreground font-bold text-sm uppercase tracking-widest">Locked</span>
                                )}
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Full Graduate Certificate */}
            <Card className={`border-2 relative overflow-hidden ${isGraduated ? 'border-[hsl(38,75%,50%)] shadow-xl' : 'border-border'}`}>
                {isGraduated && (
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&q=80')] bg-cover opacity-5"></div>
                )}
                <CardContent className="p-12 text-center relative z-10">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 ${isGraduated ? 'bg-gradient-to-br from-yellow-100 to-amber-200 border-2 border-[hsl(38,75%,50%)]' : 'bg-muted'}`}>
                        {isGraduated ? (
                            <span className="text-4xl">🏆</span>
                        ) : (
                            <Lock className="w-12 h-12 text-muted-foreground" />
                        )}
                    </div>
                    <h2 className="text-3xl font-black font-display text-navy-950 uppercase tracking-widest mb-2">
                        CCU Graduate Certificate
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto mb-2">
                        Complete all 14 days of training and pass the Final Certification Exam (90%+) to earn the official CCU – Sales Certified badge and graduate certificate.
                    </p>
                    <p className="text-sm text-navy-900 font-bold mb-6">{totalContactHours} Contact Hours • {completedDays}/14 Days Complete</p>

                    {isGraduated ? (
                        <button className="bg-[hsl(38,75%,50%)] hover:bg-[hsl(38,75%,45%)] text-white font-bold py-3 px-8 rounded-md transition-colors text-sm uppercase tracking-widest flex items-center space-x-2 mx-auto">
                            <Download className="w-5 h-5" />
                            <span>Download Graduate Certificate</span>
                        </button>
                    ) : (
                        <div className="inline-flex items-center space-x-2 bg-muted px-4 py-2 rounded-lg">
                            <Lock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground font-bold text-sm uppercase tracking-widest">Complete all requirements to unlock</span>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Badges Showcase */}
            {progress.badges.length > 0 && (
                <div>
                    <h3 className="text-2xl font-black font-display text-navy-950 uppercase tracking-tight mb-6">Your Badges</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {progress.badges.map(badge => (
                            <Card key={badge.id} className="border-border shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="p-4 text-center">
                                    <span className="text-4xl block mb-2">{badge.icon}</span>
                                    <h4 className="font-bold text-sm text-navy-950">{badge.name}</h4>
                                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificates;
