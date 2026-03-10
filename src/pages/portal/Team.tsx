import React, { useState } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { Users, Target, CheckCircle2, Trophy, Star, TrendingUp, Calculator, ShieldCheck } from 'lucide-react';
import { teamData } from '../../data/teamData';

const TeamDashboard: React.FC = () => {
    const [activeTrackerRole, setActiveTrackerRole] = useState(teamData.dailyTrackers[0].role);

    const activeTracker = teamData.dailyTrackers.find(t => t.role === activeTrackerRole);

    return (
        <div className="pb-12 animate-fade-in space-y-12">
            <SEOHead title="Team Performance & Activity | Operator Portal" description="Capital City Roofing Team Performance, Trackers, and Commission structures." />

            {/* Header */}
            <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-navy-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Performance Hub</span>
                        <h1 className="text-4xl font-black font-display uppercase tracking-tight mb-2">
                            Team & Activity
                        </h1>
                        <p className="text-white/80 max-w-2xl">
                            Daily activity trackers, commission schedules, coaching rubrics, and the Watch Club prestige tiers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Daily Trackers Section */}
            <div>
                <div className="flex items-center space-x-3 mb-6">
                    <Target className="w-6 h-6 text-secondary" />
                    <h2 className="text-2xl font-black font-display text-navy-950 uppercase tracking-tight">Daily Activity Trackers</h2>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {teamData.dailyTrackers.map(tracker => (
                        <button
                            key={tracker.role}
                            onClick={() => setActiveTrackerRole(tracker.role)}
                            className={`px-6 py-2.5 rounded-md font-bold text-sm uppercase tracking-widest transition-all ${activeTrackerRole === tracker.role
                                    ? 'bg-navy-950 text-white shadow-md'
                                    : 'bg-white text-navy-900 border border-border hover:border-navy-300 hover:bg-navy-50'
                                }`}
                        >
                            {tracker.role}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeTracker?.categories.map((category, idx) => (
                        <Card key={idx} className="border-border shadow-sm flex flex-col h-full hover:border-navy-300 transition-colors">
                            <CardHeader className="bg-muted py-4 border-b border-border">
                                <CardTitle className="text-lg font-bold font-heading text-navy-950">{category.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <ul className="space-y-3 mb-6 flex-grow">
                                    {category.items.map((item, idy) => (
                                        <li key={idy} className="flex justify-between items-start text-sm">
                                            <span className="text-navy-900 font-medium mr-4">{item.desc}</span>
                                            <span className="bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded text-xs whitespace-nowrap border border-green-200 shrink-0">
                                                {item.points} (Max {item.max})
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                {category.rule && (
                                    <div className="bg-navy-50 border border-navy-100 p-3 rounded-md text-xs text-navy-800 italic mt-auto">
                                        <strong>Rule:</strong> {category.rule}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Commission Structure */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <Calculator className="w-6 h-6 text-secondary" />
                        <h2 className="text-2xl font-black font-display text-navy-950 uppercase tracking-tight">Commission Matrix</h2>
                    </div>
                    <Card className="border-border shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-white uppercase bg-navy-950">
                                    <tr>
                                        <th className="px-6 py-3">Sold Margin</th>
                                        <th className="px-6 py-3">Track A (Rookie)</th>
                                        <th className="px-6 py-3">Track B (Senior)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teamData.commissions.tiers.map((tier, idx) => (
                                        <tr key={idx} className="bg-white border-b border-border hover:bg-muted">
                                            <td className="px-6 py-4 font-bold text-navy-950">{tier.margin}</td>
                                            <td className="px-6 py-4">{tier.a}</td>
                                            <td className="px-6 py-4 font-medium text-secondary">{tier.b}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <CardContent className="p-6 bg-muted space-y-4 text-sm">
                            <div className="flex items-start">
                                <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                                <p className="text-muted-foreground"><strong className="text-navy-950">Self-Gen Rule:</strong> {teamData.commissions.selfGeneratedRule}</p>
                            </div>
                            <div className="flex items-start">
                                <TrendingUp className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                                <p className="text-muted-foreground"><strong className="text-navy-950">Bonus Pool:</strong> {teamData.commissions.bonus}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* The Watch Club */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <Trophy className="w-6 h-6 text-[hsl(38,75%,50%)]" />
                        <h2 className="text-2xl font-black font-display text-navy-950 uppercase tracking-tight">The Watch Club</h2>
                    </div>
                    <Card className="bg-gradient-to-br from-navy-900 to-navy-950 text-white border-none shadow-navy-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548171915-e2fba64380b0?auto=format&fit=crop&q=80')] bg-cover opacity-20 mix-blend-overlay"></div>
                        <div className="relative z-10 p-8 space-y-6">
                            <p className="text-white/80 font-medium italic border-l-4 border-[hsl(38,75%,50%)] pl-4">
                                An exclusive experience of luxury, dedication, and partnership. YOU EARN YOUR WAY.
                            </p>
                            <div className="space-y-4">
                                {teamData.watchClub.map((tier, idx) => (
                                    <div key={idx} className="bg-white/10 border border-white/20 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                        <div>
                                            <h4 className="font-bold font-heading text-[hsl(38,75%,50%)] uppercase tracking-widest text-sm">{tier.tier}</h4>
                                            <p className="font-bold text-white text-lg">{tier.reward}</p>
                                        </div>
                                        <span className="bg-navy-950 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white/70">
                                            {tier.criteria}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Coaching & Accountability */}
            <div className="space-y-6">
                <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                    <h2 className="text-2xl font-black font-display text-navy-950 uppercase tracking-tight">Coaching & Accountability Hub</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamData.coachingCategories.map((coach, idx) => (
                        <Card key={idx} className="border-border shadow-sm">
                            <CardHeader className="pb-3 border-b border-border bg-muted">
                                <CardTitle className="text-base font-bold text-navy-950 uppercase tracking-widest font-heading">{coach.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <ul className="space-y-2">
                                    {coach.items.map((item, idy) => (
                                        <li key={idy} className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2 shrink-0"></div>
                                            <span className="text-sm font-medium text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamDashboard;
