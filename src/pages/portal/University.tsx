import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import { PlayCircle, ShieldAlert, CheckCircle2, Trophy, ArrowRight, FileText, HelpCircle, Gamepad2, Brain, Lock, Star, Award, BarChart3, BookOpen } from 'lucide-react';
import { useUniversityProgress, LEVEL_THRESHOLDS, getNextLevelXP } from '../../contexts/UniversityProgressContext';

// Curriculum Data
const curriculum = [
    {
        week: 1,
        title: "Foundations, Culture, & The Pitch",
        objective: "Master the company culture, basic product knowledge, and the 8-Step Selling System.",
        modules: [
            { id: "1.1", title: "The Capital City Way", desc: "Learn the mission and Core Values: Integrity, Innovation, Excellence, Transparency, and Reliability", type: "video" },
            { id: "1.2", title: "The 8-Step Selling System", desc: "Step-by-step breakdown from the 'Greeting & Warm-Up' to the '10-Step Close Sequence'", type: "document" },
            { id: "1.3", title: "Product Power-Ups", desc: "Interactive breakdowns of core products as problem solvers, including CertainTeed Landmark Pro, 6\" Gutters, and MasterShield", type: "interactive" },
            { id: "1.4", title: "Defeating Objections", desc: "Gamified scenarios using the 'Circle of PERIL' framework (Pause, Emphasize, Restate, Isolate, Loop back to price)", type: "interactive" }
        ],
        boss: {
            title: "Level 1 Boss Battle: Foundations & The Pitch",
            scenario: "You are at the kitchen table. The homeowner likes the CertainTeed Landmark Pro presentation, but hits you with: \"The price is just too high.\"",
            task: "Successfully execute the \"Circle of PERIL\" framework to handle the objection without immediately dropping the price.",
        }
    },
    {
        week: 2,
        title: "Inspections, Damage, & The Insurance Process",
        objective: "Execute perfect inspections and navigate the Precision Public Adjusting (PPA) handoff.",
        modules: [
            { id: "2.1", title: "The 27-Point Inspection", desc: "Interactive roof and attic walkthroughs. Learn to identify blisters vs. hail, wind damage, and proper ventilation.", type: "interactive" },
            { id: "2.2", title: "Photographic Evidence", desc: "Learn the exact photo standards needed to tell the roof's story, including test squares and damage counts.", type: "document" },
            { id: "2.3", title: "Retail vs. Insurance Paths", desc: "Understanding the mindset shift between a retail \"one-call close\" and an insurance claim.", type: "video" },
            { id: "2.4", title: "The PPA Protocol", desc: "Step-by-step rules for handing off insurance jobs. Users must correctly \"collect\" the PPA Authorization and CCR Direction to Proceed forms to pass.", type: "interactive" }
        ],
        boss: {
            title: "Level 2 Boss Battle: Inspections & The PPA Protocol",
            scenario: "You just finished a roof inspection and found undeniable hail damage. The homeowner asks, \"Will my insurance cover this completely, and can you talk to them for me?\"",
            task: "Correctly explain the Precision Public Adjusting (PPA) handoff. You must state that PPA handles the claim, without illegally promising an approval outcome.",
        }
    },
    {
        week: 3,
        title: "Systems Mastery, Networking, & Final Certification",
        objective: "Master the tech stack, generate organic leads, and achieve final field readiness.",
        modules: [
            { id: "3.1", title: "Tech Stack Tactics", desc: "Hands-on simulation of GoHighLevel (GHL) pipeline management, notes, and automations.", type: "interactive" },
            { id: "3.2", title: "Roofr Mastery", desc: "Practice diagramming a house, pulling measurements, and building a \"Good, Better, Best\" proposal.", type: "interactive" },
            { id: "3.3", title: "Networking & Commercial Awareness", desc: "Earning self-generated leads, the 30-second introduction, and high-level basics of commercial systems like TPO and EPDM.", type: "video" },
            { id: "3.4", title: "Customer Experience & Handoff", desc: "The exact steps for scheduling the build, conducting final walkthroughs, and triggering the 5-star review/referral automations.", type: "document" }
        ],
        boss: {
            title: "Level 3 Boss Battle: Final Certification",
            scenario: "You ran an inspection, but the homeowner didn't sign on the spot. 48 hours have passed.",
            task: "Act as the Inside Sales/Rehash rep. Call the homeowner, reference the Roofr proposal, use the \"Authority Transfer\" script to position the COO (Edward) as the final decision-maker, and book a follow-up call.",
        }
    }
];

const getIconForType = (type: string) => {
    switch (type) {
        case 'video': return <PlayCircle className="w-5 h-5 text-blue-500" />;
        case 'document': return <FileText className="w-5 h-5 text-green-500" />;
        case 'interactive': return <Gamepad2 className="w-5 h-5 text-purple-500" />;
        default: return <PlayCircle className="w-5 h-5" />;
    }
};

const University: React.FC = () => {
    const { progress, isModuleUnlocked, getModuleProgress, getWeekProgress, passBossBattle } = useUniversityProgress();

    const completedModules = Object.values(progress.modules).filter(m => m.completed).length;
    const nextLevelXP = getNextLevelXP(progress.xp);
    const currentLevelXP = LEVEL_THRESHOLDS.slice().reverse().find(t => progress.xp >= t.xp)?.xp || 0;
    const progressPercent = nextLevelXP > currentLevelXP ? ((progress.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100 : 100;

    return (
        <>
            <SEOHead title="Capital City University | Operator Portal" description="Capital City University Training Modules" />

            <div className="space-y-12 animate-fade-in pb-12">
                {/* Header with XP Bar */}
                <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-navy-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                            <div>
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Operator Training Platform</span>
                                <h1 className="text-4xl font-black font-display uppercase tracking-tight mb-2">
                                    Capital City University
                                </h1>
                                <p className="text-white/80 max-w-2xl">
                                    Complete your 3-week immersive training to achieve full field readiness.
                                </p>
                            </div>
                            <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                                <Trophy className="w-5 h-5 text-[hsl(38,75%,50%)]" />
                                <span className="font-bold font-heading text-sm">{progress.level}</span>
                            </div>
                        </div>

                        {/* XP Progress Bar */}
                        <div className="bg-white/10 rounded-full h-4 overflow-hidden border border-white/20">
                            <div
                                className="bg-gradient-to-r from-secondary to-[hsl(38,75%,50%)] h-full rounded-full transition-all duration-700 ease-out"
                                style={{ width: `${progressPercent}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-white/60">
                            <span>{progress.xp} XP</span>
                            <span>{nextLevelXP} XP to next level</span>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="bg-white/10 rounded-lg px-3 py-1.5 text-xs font-bold border border-white/20 flex items-center space-x-1">
                                <CheckCircle2 className="w-3 h-3 text-green-400" />
                                <span>{completedModules}/12 Modules</span>
                            </div>
                            <div className="bg-white/10 rounded-lg px-3 py-1.5 text-xs font-bold border border-white/20 flex items-center space-x-1">
                                <Star className="w-3 h-3 text-[hsl(38,75%,50%)]" />
                                <span>{progress.badges.length} Badges</span>
                            </div>
                            <Link to="/portal/leaderboard" className="bg-white/10 rounded-lg px-3 py-1.5 text-xs font-bold border border-white/20 flex items-center space-x-1 hover:bg-white/20 transition-colors">
                                <BarChart3 className="w-3 h-3 text-blue-400" />
                                <span>Leaderboard</span>
                            </Link>
                            <Link to="/portal/certificates" className="bg-white/10 rounded-lg px-3 py-1.5 text-xs font-bold border border-white/20 flex items-center space-x-1 hover:bg-white/20 transition-colors">
                                <Award className="w-3 h-3 text-green-400" />
                                <span>Certificates</span>
                            </Link>
                            <Link to="/portal/syllabus" className="bg-white/10 rounded-lg px-3 py-1.5 text-xs font-bold border border-white/20 flex items-center space-x-1 hover:bg-white/20 transition-colors">
                                <BookOpen className="w-3 h-3 text-purple-400" />
                                <span>Syllabus</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Weeks Grid */}
                <div className="space-y-16">
                    {curriculum.map((week) => {
                        const weekProg = getWeekProgress(week.week);
                        return (
                            <div key={week.week} className="border-t border-border pt-12 first:border-t-0 first:pt-0">
                                <div className="mb-8">
                                    <div className="flex items-center space-x-4 mb-3">
                                        <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center border border-navy-200 shadow-sm shrink-0">
                                            <span className="font-black font-display text-2xl text-navy-950">{week.week}</span>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black font-display text-primary uppercase tracking-tight">{week.title}</h2>
                                            <p className="text-sm text-secondary font-bold tracking-widest uppercase">Objective: {week.objective}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {week.modules.map((mod) => {
                                        const unlocked = isModuleUnlocked(mod.id);
                                        const modProg = getModuleProgress(mod.id);
                                        const completed = modProg?.completed;

                                        return (
                                            <Link
                                                key={mod.id}
                                                to={unlocked ? `/portal/university/${mod.id}` : '#'}
                                                className={`block ${!unlocked ? 'cursor-not-allowed' : ''}`}
                                                onClick={(e) => !unlocked && e.preventDefault()}
                                            >
                                                <Card className={`group transition-all h-full ${completed ? 'border-green-300 bg-green-50/30 shadow-sm' :
                                                        unlocked ? 'hover:border-navy-300 cursor-pointer shadow-sm hover:shadow-md' :
                                                            'opacity-50 border-border'
                                                    }`}>
                                                    <CardContent className="p-6">
                                                        <div className="flex justify-between items-start mb-4">
                                                            <div className="flex items-center space-x-3">
                                                                <div className={`p-2 rounded-lg transition-colors ${completed ? 'bg-green-100' : 'bg-muted group-hover:bg-white'}`}>
                                                                    {!unlocked ? <Lock className="w-5 h-5 text-muted-foreground" /> : getIconForType(mod.type)}
                                                                </div>
                                                                <span className="text-sm font-bold text-muted-foreground">Module {mod.id}</span>
                                                            </div>
                                                            {completed ? (
                                                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                                            ) : unlocked ? (
                                                                <div className="bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full">START</div>
                                                            ) : (
                                                                <Lock className="w-4 h-4 text-muted-foreground" />
                                                            )}
                                                        </div>
                                                        <h3 className="font-bold text-lg text-navy-950 font-heading mb-2">{mod.title}</h3>
                                                        <p className="text-sm text-muted-foreground">{mod.desc}</p>
                                                        {modProg?.bestQuizScore ? (
                                                            <div className="mt-3 text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded inline-block">
                                                                Quiz: {modProg.bestQuizScore}%
                                                            </div>
                                                        ) : null}
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        );
                                    })}
                                </div>

                                {/* Boss Battle Card */}
                                <Card className="bg-gradient-to-br from-navy-900 to-navy-950 text-white border-none shadow-navy-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover opacity-10 mix-blend-overlay"></div>
                                    <CardHeader className="relative z-10 border-b border-white/10 pb-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <ShieldAlert className="w-6 h-6 text-secondary" />
                                                <CardTitle className="text-2xl font-black font-display uppercase tracking-widest text-[hsl(38,75%,50%)]">
                                                    {week.boss.title}
                                                </CardTitle>
                                            </div>
                                            {weekProg?.bossBattlePassed && (
                                                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                                                    <CheckCircle2 className="w-3 h-3" />
                                                    <span>PASSED</span>
                                                </span>
                                            )}
                                        </div>
                                        <CardDescription className="text-white/80 text-base">
                                            Pass this challenge to unlock the next level of your training.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="relative z-10 pt-6">
                                        <div className="mb-6">
                                            <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-2">The Scenario</h4>
                                            <p className="text-white italic bg-white/5 p-4 rounded-lg border border-white/10">"{week.boss.scenario}"</p>
                                        </div>
                                        <div className="mb-8">
                                            <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-2">Role-Play Task</h4>
                                            <p className="text-white bg-secondary/20 p-4 rounded-lg border border-secondary/50 font-medium">
                                                {week.boss.task}
                                            </p>
                                        </div>

                                        {!weekProg?.bossBattlePassed ? (
                                            <button
                                                onClick={() => passBossBattle(week.week)}
                                                className="w-full sm:w-auto bg-secondary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-lg flex items-center justify-center space-x-2"
                                            >
                                                <Brain className="w-5 h-5" />
                                                <span>Complete Boss Battle (+500 XP)</span>
                                            </button>
                                        ) : (
                                            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-300 font-bold px-4 py-2 rounded-lg border border-green-400/30">
                                                <Trophy className="w-5 h-5" />
                                                <span>Boss Battle Conquered! Certificate Earned.</span>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default University;
