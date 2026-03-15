import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent } from '../../components/ui/card';
import { Trophy, TrendingUp, Flame, Medal } from 'lucide-react';
import { useUniversityProgress } from '../../contexts/UniversityProgressContext';

const Leaderboard: React.FC = () => {
    const { leaderboard, progress } = useUniversityProgress();

    const getRankColor = (idx: number) => {
        if (idx === 0) return 'text-[hsl(38,75%,50%)]'; // Gold
        if (idx === 1) return 'text-gray-400'; // Silver
        if (idx === 2) return 'text-orange-600'; // Bronze
        return 'text-muted-foreground';
    };

    const getRankBg = (idx: number) => {
        if (idx === 0) return 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200';
        if (idx === 1) return 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200';
        if (idx === 2) return 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200';
        return 'bg-white border-border';
    };

    return (
        <div className="pb-12 animate-fade-in space-y-8">
            <SEOHead title="Leaderboard | CCU" description="Capital City University leaderboard rankings." />

            {/* Header */}
            <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-navy-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(38,75%,50%)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Competitive Rankings</span>
                    <h1 className="text-4xl font-black font-display uppercase tracking-tight mb-2">
                        <Trophy className="inline w-8 h-8 text-[hsl(38,75%,50%)] mr-2 -mt-1" />
                        Leaderboard
                    </h1>
                    <p className="text-white/80 max-w-2xl">
                        See how you stack up against your peers. Earn XP by completing daily modules, acing quizzes, and passing the Final Certification Exam.
                    </p>
                </div>
            </div>

            {/* Your Stats Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-secondary/30 bg-red-50/50">
                    <CardContent className="p-6 flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                            <TrendingUp className="w-7 h-7 text-secondary" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">Your XP</p>
                            <p className="text-3xl font-black font-display text-navy-950">{progress.xp.toLocaleString()}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-[hsl(38,75%,50%)]/30 bg-amber-50/50">
                    <CardContent className="p-6 flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-xl bg-[hsl(38,75%,50%)]/10 flex items-center justify-center">
                            <Medal className="w-7 h-7 text-[hsl(38,75%,50%)]" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">Your Level</p>
                            <p className="text-3xl font-black font-display text-navy-950">{progress.level}</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-orange-200 bg-orange-50/50">
                    <CardContent className="p-6 flex items-center space-x-4">
                        <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center">
                            <Flame className="w-7 h-7 text-orange-500" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">Badges</p>
                            <p className="text-3xl font-black font-display text-navy-950">{progress.badges.length}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Rankings Table */}
            <Card className="border-border shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-navy-950 text-white text-xs uppercase tracking-widest">
                            <tr>
                                <th className="px-6 py-4 text-left">Rank</th>
                                <th className="px-6 py-4 text-left">Name</th>
                                <th className="px-6 py-4 text-left">Level</th>
                                <th className="px-6 py-4 text-center">Days</th>
                                <th className="px-6 py-4 text-right">XP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((user, idx) => (
                                <tr
                                    key={user.userId}
                                    className={`border-b transition-colors ${getRankBg(idx)} ${user.userId === progress.userId ? 'ring-2 ring-secondary ring-inset' : ''
                                        }`}
                                >
                                    <td className="px-6 py-4">
                                        <span className={`text-2xl font-black font-display ${getRankColor(idx)}`}>
                                            #{idx + 1}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center font-bold text-navy-950 uppercase border border-navy-200">
                                                {user.displayName.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <span className="font-bold text-navy-950">
                                                    {user.userId === progress.userId ? 'You' : user.displayName}
                                                </span>
                                                {user.userId === progress.userId && (
                                                    <span className="ml-2 bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full">YOU</span>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-navy-100 text-navy-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-navy-200">
                                            {user.level}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-sm font-bold text-navy-950">
                                            {Object.values(user.days).filter(d => d.completed).length}/14
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <span className="font-black font-display text-lg text-navy-950">{user.xp.toLocaleString()}</span>
                                        <span className="text-muted-foreground font-medium ml-1">XP</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Leaderboard;
