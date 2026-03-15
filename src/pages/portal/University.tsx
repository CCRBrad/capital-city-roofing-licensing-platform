import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent } from '../../components/ui/card';
import {
    ShieldAlert, CheckCircle2, Trophy, Lock, Star, Award, BarChart3, BookOpen,
    AlertTriangle, Zap, GraduationCap, ShieldCheck, Ban
} from 'lucide-react';
import { useUniversityProgress, LEVEL_THRESHOLDS, getNextLevelXP } from '../../contexts/UniversityProgressContext';
import { universityModules, DAY_ORDER } from '../../data/universityContent';

const University: React.FC = () => {
    const {
        progress, isDayUnlocked, getDayProgress, getCompletedDayCount
    } = useUniversityProgress();

    const completedDays = getCompletedDayCount();
    const nextLevelXP = getNextLevelXP(progress.xp);
    const currentLevelXP = LEVEL_THRESHOLDS.slice().reverse().find(t => progress.xp >= t.xp)?.xp || 0;
    const progressPercent = nextLevelXP > currentLevelXP ? ((progress.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100 : 100;
    const progressRing = (completedDays / 14) * 100;

    return (
        <>
            <SEOHead title="Capital City University | Operator Portal" description="Capital City University 14-Day Sales Onboarding Track" />

            <div className="space-y-12 animate-fade-in pb-12">
                {/* Header */}
                <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-navy-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                            <div>
                                <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">14-Day Sales Onboarding Track</span>
                                <h1 className="text-4xl font-black font-display uppercase tracking-tight mb-2">
                                    Capital City University
                                </h1>
                                <p className="text-white/80 max-w-2xl">
                                    Complete your 14-day certification to earn your <strong>CCU – Sales Certified</strong> badge and unlock live pipeline access. The Price of Admission.
                                </p>
                            </div>

                            {/* Progress Ring */}
                            <div className="mt-4 md:mt-0 flex items-center space-x-4">
                                <div className="relative w-20 h-20">
                                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                                        <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                                        <circle
                                            cx="40" cy="40" r="35" fill="none" stroke="#C8102E" strokeWidth="6"
                                            strokeDasharray={`${progressRing * 2.2} 220`}
                                            strokeLinecap="round"
                                            className="transition-all duration-700 ease-out"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-lg font-black font-display">{completedDays}/14</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                                    <Trophy className="w-5 h-5 text-[hsl(38,75%,50%)]" />
                                    <span className="font-bold font-heading text-sm">{progress.level}</span>
                                </div>
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
                                <span>{completedDays}/14 Days</span>
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

                {/* Graduation Banner */}
                {progress.graduated && (
                    <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-2xl p-6 shadow-lg flex items-center space-x-4">
                        <GraduationCap className="w-10 h-10 shrink-0" />
                        <div>
                            <h2 className="text-xl font-black font-display uppercase tracking-tight">CCU – Sales Certified</h2>
                            <p className="text-white/90">You have completed your certification! Your live pipeline access has been unlocked.</p>
                        </div>
                    </div>
                )}

                {/* Kill Switch Banner */}
                {progress.tags.includes('CCU – Non-Compliant') && (
                    <div className="bg-gradient-to-r from-red-700 to-red-600 text-white rounded-2xl p-6 shadow-lg flex items-center space-x-4">
                        <Ban className="w-10 h-10 shrink-0" />
                        <div>
                            <h2 className="text-xl font-black font-display uppercase tracking-tight">Access Revoked</h2>
                            <p className="text-white/90">Your certification has been revoked. Contact your manager immediately.</p>
                        </div>
                    </div>
                )}

                {/* 14-Day Track */}
                <div className="relative">
                    {/* Track Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-200 via-navy-300 to-navy-200 hidden md:block"></div>

                    <div className="space-y-4">
                        {DAY_ORDER.map((dayId, idx) => {
                            const mod = universityModules[dayId];
                            if (!mod) return null;

                            const unlocked = isDayUnlocked(dayId);
                            const dayProg = getDayProgress(dayId);
                            const completed = dayProg?.completed;
                            const isEthics = mod.isEthicsGate;
                            const isFinalExam = mod.isFinalExam;
                            const isGate = !!mod.gateUnlock;
                            const softLocked = dayProg?.softLocked;
                            const hardLocked = dayProg?.hardLocked;
                            const killSwitched = dayProg?.killSwitched;
                            const dayNumber = idx + 1;

                            const getNodeColor = () => {
                                if (killSwitched) return 'bg-red-600 text-white border-red-700';
                                if (hardLocked) return 'bg-amber-500 text-white border-amber-600';
                                if (softLocked) return 'bg-amber-400 text-white border-amber-500';
                                if (completed) return 'bg-green-500 text-white border-green-600';
                                if (unlocked) return 'bg-navy-950 text-white border-navy-800';
                                return 'bg-gray-200 text-gray-400 border-gray-300';
                            };

                            const getStatusLabel = () => {
                                if (killSwitched) return { text: 'REVOKED', color: 'bg-red-100 text-red-700' };
                                if (hardLocked) return { text: 'HARD LOCKED', color: 'bg-amber-100 text-amber-700' };
                                if (softLocked) return { text: 'SOFT LOCKED', color: 'bg-amber-100 text-amber-700' };
                                if (completed) return { text: 'COMPLETE', color: 'bg-green-100 text-green-700' };
                                if (unlocked) return { text: 'AVAILABLE', color: 'bg-secondary/10 text-secondary' };
                                return { text: 'LOCKED', color: 'bg-gray-100 text-gray-500' };
                            };
                            const status = getStatusLabel();

                            return (
                                <div key={dayId} className="relative">
                                    <Link
                                        to={unlocked && !killSwitched ? `/portal/university/${dayId}` : '#'}
                                        className={`block ${!unlocked || killSwitched ? 'cursor-not-allowed' : ''}`}
                                        onClick={(e) => (!unlocked || killSwitched) && e.preventDefault()}
                                    >
                                        <div className={`flex items-start space-x-4 md:space-x-6 group ${!unlocked ? 'opacity-50' : ''}`}>
                                            {/* Day Number Node */}
                                            <div className={`relative z-10 w-16 h-16 rounded-xl flex items-center justify-center border-2 shrink-0 transition-transform group-hover:scale-105 ${getNodeColor()}`}>
                                                {killSwitched ? (
                                                    <Ban className="w-6 h-6" />
                                                ) : hardLocked ? (
                                                    <ShieldAlert className="w-6 h-6" />
                                                ) : softLocked ? (
                                                    <AlertTriangle className="w-6 h-6" />
                                                ) : completed ? (
                                                    <CheckCircle2 className="w-6 h-6" />
                                                ) : unlocked ? (
                                                    <span className="text-xl font-black font-display">{dayNumber}</span>
                                                ) : (
                                                    <Lock className="w-6 h-6" />
                                                )}
                                            </div>

                                            {/* Content Card */}
                                            <Card className={`flex-1 transition-all ${
                                                completed ? 'border-green-300 bg-green-50/30 shadow-sm' :
                                                killSwitched ? 'border-red-300 bg-red-50/30 shadow-sm' :
                                                hardLocked || softLocked ? 'border-amber-300 bg-amber-50/30 shadow-sm' :
                                                unlocked ? 'hover:border-navy-300 cursor-pointer shadow-sm hover:shadow-md' :
                                                'border-border'
                                            }`}>
                                                <CardContent className="p-5">
                                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                                        <div className="flex items-center space-x-3 flex-wrap gap-y-1">
                                                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Day {dayNumber}</span>
                                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${status.color}`}>
                                                                {status.text}
                                                            </span>
                                                            {isEthics && (
                                                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700 uppercase tracking-wider flex items-center space-x-1">
                                                                    <ShieldCheck className="w-3 h-3" />
                                                                    <span>Ethics Gate</span>
                                                                </span>
                                                            )}
                                                            {isFinalExam && (
                                                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 uppercase tracking-wider flex items-center space-x-1">
                                                                    <GraduationCap className="w-3 h-3" />
                                                                    <span>Final Exam</span>
                                                                </span>
                                                            )}
                                                            {isGate && (
                                                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 uppercase tracking-wider flex items-center space-x-1">
                                                                    <Zap className="w-3 h-3" />
                                                                    <span>Gate</span>
                                                                </span>
                                                            )}
                                                        </div>
                                                        {dayProg?.bestQuizScore ? (
                                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${dayProg.bestQuizScore >= 80 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                                Quiz: {dayProg.bestQuizScore}%
                                                            </span>
                                                        ) : null}
                                                    </div>

                                                    <h3 className="font-bold text-lg text-navy-950 font-heading mb-1">{mod.title}</h3>
                                                    <p className="text-sm text-muted-foreground">{mod.subtitle}</p>

                                                    {/* Gate Unlock Message */}
                                                    {isGate && (
                                                        <p className="mt-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg inline-block">
                                                            <Zap className="w-3 h-3 inline mr-1" />
                                                            {mod.gateUnlock}
                                                        </p>
                                                    )}

                                                    {/* Progress indicators for unlocked days */}
                                                    {unlocked && !completed && !killSwitched && dayProg && (
                                                        <div className="flex items-center space-x-3 mt-3">
                                                            <div className={`w-2 h-2 rounded-full ${dayProg.videoWatched ? 'bg-green-500' : 'bg-gray-300'}`} title="Video"></div>
                                                            <div className={`w-2 h-2 rounded-full ${dayProg.checklistComplete ? 'bg-green-500' : 'bg-gray-300'}`} title="Checklist"></div>
                                                            <div className={`w-2 h-2 rounded-full ${dayProg.acknowledgementSigned ? 'bg-green-500' : 'bg-gray-300'}`} title="Acknowledgement"></div>
                                                            <div className={`w-2 h-2 rounded-full ${dayProg.bestQuizScore >= 80 ? 'bg-green-500' : 'bg-gray-300'}`} title="Quiz"></div>
                                                            <span className="text-xs text-muted-foreground ml-1">
                                                                {[dayProg.videoWatched, dayProg.checklistComplete, dayProg.acknowledgementSigned, dayProg.bestQuizScore >= 80].filter(Boolean).length}/4 steps
                                                            </span>
                                                        </div>
                                                    )}
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Badge Collection */}
                {progress.badges.length > 0 && (
                    <div className="border-t border-border pt-12">
                        <h2 className="text-2xl font-black font-display text-primary uppercase tracking-tight mb-6">
                            Earned Badges
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {progress.badges.map(badge => (
                                <div key={badge.id} className="bg-white border border-border rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-3xl mb-2">{badge.icon}</div>
                                    <h4 className="font-bold text-sm text-navy-950">{badge.name}</h4>
                                    <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default University;
