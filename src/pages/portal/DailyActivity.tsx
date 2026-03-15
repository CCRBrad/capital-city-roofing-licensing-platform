import React, { useState, useEffect, useMemo } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import {
    Plus, Minus, Flame, CheckCircle2, Calendar
} from 'lucide-react';

// --- Types ---
interface ActivityType {
    id: string;
    label: string;
    emoji: string;
    pointsEach: number;
    maxPoints: number;
}

interface DailyLog {
    date: string; // YYYY-MM-DD
    activities: Record<string, number>; // activityId → count
    totalPoints: number;
}

// --- Config ---
const ACTIVITIES: ActivityType[] = [
    { id: 'doors', label: 'Doors Knocked', emoji: '🚪', pointsEach: 1, maxPoints: 50 },
    { id: 'inspections', label: 'Inspections Scheduled', emoji: '🔍', pointsEach: 10, maxPoints: 30 },
    { id: 'proposals', label: 'Proposals Delivered', emoji: '📋', pointsEach: 15, maxPoints: 30 },
    { id: 'closes', label: 'Contracts Signed', emoji: '✅', pointsEach: 25, maxPoints: 25 },
];

const DAILY_GOAL = 100;
const STORAGE_KEY = 'ccr-daily-activity-v1';

function getTodayKey(): string {
    return new Date().toISOString().slice(0, 10);
}

function getWeekDays(): string[] {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0=Sun
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

    const days: string[] = [];
    for (let i = 0; i < 5; i++) {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        days.push(d.toISOString().slice(0, 10));
    }
    return days;
}

function loadLogs(): Record<string, DailyLog> {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return JSON.parse(stored);
    } catch { /* fallback */ }
    return {};
}

function saveLogs(logs: Record<string, DailyLog>) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
    } catch { /* quota exceeded */ }
}

const DailyActivity: React.FC = () => {
    const [logs, setLogs] = useState<Record<string, DailyLog>>(loadLogs);
    const todayKey = getTodayKey();
    const todayLog = logs[todayKey] || { date: todayKey, activities: {}, totalPoints: 0 };

    const weekDays = useMemo(getWeekDays, []);
    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    useEffect(() => {
        saveLogs(logs);
    }, [logs]);

    const getCount = (activityId: string) => todayLog.activities[activityId] || 0;

    const getPoints = (activity: ActivityType) => {
        const count = getCount(activity.id);
        return Math.min(count * activity.pointsEach, activity.maxPoints);
    };

    const totalPoints = ACTIVITIES.reduce((sum, a) => sum + getPoints(a), 0);
    const progressPct = Math.min((totalPoints / DAILY_GOAL) * 100, 100);
    const goalReached = totalPoints >= DAILY_GOAL;

    // Streak
    const streak = useMemo(() => {
        let count = 0;
        const today = new Date();
        for (let i = 0; i < 30; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() - i);
            const key = d.toISOString().slice(0, 10);
            if (logs[key] && logs[key].totalPoints >= DAILY_GOAL) {
                count++;
            } else if (i > 0) {
                break; // Don't break on today if not yet hit
            }
        }
        return count;
    }, [logs, todayKey]);

    const updateActivity = (activityId: string, delta: number) => {
        setLogs(prev => {
            const current = prev[todayKey] || { date: todayKey, activities: {}, totalPoints: 0 };
            const newCount = Math.max(0, (current.activities[activityId] || 0) + delta);
            const newActivities = { ...current.activities, [activityId]: newCount };
            const newTotal = ACTIVITIES.reduce((sum, a) => {
                const c = newActivities[a.id] || 0;
                return sum + Math.min(c * a.pointsEach, a.maxPoints);
            }, 0);
            return {
                ...prev,
                [todayKey]: { ...current, activities: newActivities, totalPoints: newTotal }
            };
        });
    };

    // Week summary
    const weekData = weekDays.map(day => ({
        date: day,
        points: logs[day]?.totalPoints || 0,
        isToday: day === todayKey,
    }));
    const weekTotal = weekData.reduce((s, d) => s + d.points, 0);
    const maxWeekDay = Math.max(...weekData.map(d => d.points), DAILY_GOAL);

    return (
        <div className="pb-12 animate-fade-in space-y-8">
            <SEOHead title="Daily Activity | CCR Portal" description="100-Point Daily Activity System — track doors, inspections, proposals, and closes." />

            {/* Header */}
            <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-navy-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">100-Point System</span>
                        <h1 className="text-4xl font-black font-display uppercase tracking-tight mb-2">
                            Daily Activity
                        </h1>
                        <p className="text-white/80 max-w-xl">
                            Hit 100 points every day. Doors → Inspections → Proposals → Closes. Consistency wins.
                        </p>
                    </div>

                    {/* Progress Ring */}
                    <div className="flex items-center space-x-6">
                        <div className="relative w-24 h-24">
                            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
                                <circle cx="48" cy="48" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7" />
                                <circle
                                    cx="48" cy="48" r="42" fill="none"
                                    stroke={goalReached ? '#22c55e' : '#C8102E'}
                                    strokeWidth="7"
                                    strokeDasharray={`${progressPct * 2.64} 264`}
                                    strokeLinecap="round"
                                    className="transition-all duration-500 ease-out"
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-black font-display">{totalPoints}</span>
                                <span className="text-xs text-white/60">/{DAILY_GOAL}</span>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {streak > 0 && (
                                <div className="flex items-center space-x-2 bg-orange-500/20 px-3 py-1.5 rounded-lg border border-orange-500/30">
                                    <Flame className="w-4 h-4 text-orange-400" />
                                    <span className="font-bold text-sm">{streak}-Day Streak</span>
                                </div>
                            )}
                            {goalReached && (
                                <div className="flex items-center space-x-2 bg-green-500/20 px-3 py-1.5 rounded-lg border border-green-500/30">
                                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                                    <span className="font-bold text-sm">Goal Hit!</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Activity Trackers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ACTIVITIES.map(activity => {
                    const count = getCount(activity.id);
                    const points = getPoints(activity);
                    const maxedOut = points >= activity.maxPoints;
                    const barPct = (points / activity.maxPoints) * 100;

                    return (
                        <Card key={activity.id} className={`border-2 transition-all ${maxedOut ? 'border-green-300 bg-green-50/30' : 'border-border'}`}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{activity.emoji}</span>
                                        <div>
                                            <h3 className="font-bold text-navy-950">{activity.label}</h3>
                                            <p className="text-xs text-muted-foreground">{activity.pointsEach} pt{activity.pointsEach > 1 ? 's' : ''} each • Max {activity.maxPoints} pts/day</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className={`text-2xl font-black font-display ${maxedOut ? 'text-green-600' : 'text-navy-950'}`}>{points}</p>
                                        <p className="text-xs text-muted-foreground">/{activity.maxPoints} pts</p>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="bg-muted rounded-full h-2 mb-4 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-300 ${maxedOut ? 'bg-green-500' : 'bg-secondary'}`}
                                        style={{ width: `${barPct}%` }}
                                    ></div>
                                </div>

                                {/* Counter Controls */}
                                <div className="flex items-center justify-center space-x-4">
                                    <button
                                        onClick={() => updateActivity(activity.id, -1)}
                                        disabled={count === 0}
                                        className="w-10 h-10 rounded-lg bg-muted hover:bg-gray-200 flex items-center justify-center disabled:opacity-30 transition-colors"
                                    >
                                        <Minus className="w-4 h-4 text-navy-950" />
                                    </button>
                                    <span className="text-3xl font-black font-display text-navy-950 w-16 text-center tabular-nums">
                                        {count}
                                    </span>
                                    <button
                                        onClick={() => updateActivity(activity.id, 1)}
                                        className="w-10 h-10 rounded-lg bg-navy-950 hover:bg-navy-800 flex items-center justify-center text-white transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Weekly Summary */}
            <Card className="border-border shadow-sm">
                <CardHeader className="border-b border-border pb-4">
                    <div className="flex items-center justify-between">
                        <CardTitle className="font-heading font-black text-xl text-primary flex items-center">
                            <Calendar className="w-5 h-5 text-secondary mr-2" />
                            This Week
                        </CardTitle>
                        <span className="text-sm font-bold text-navy-950">{weekTotal} pts total</span>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="flex items-end justify-between gap-2 h-40">
                        {weekData.map((day, idx) => {
                            const barHeight = maxWeekDay > 0 ? (day.points / maxWeekDay) * 100 : 0;
                            const hitGoal = day.points >= DAILY_GOAL;
                            return (
                                <div key={day.date} className="flex-1 flex flex-col items-center space-y-2">
                                    <span className={`text-xs font-bold ${hitGoal ? 'text-green-600' : day.points > 0 ? 'text-navy-950' : 'text-muted-foreground'}`}>
                                        {day.points > 0 ? day.points : '—'}
                                    </span>
                                    <div className="w-full flex items-end" style={{ height: '100px' }}>
                                        <div
                                            className={`w-full rounded-t-md transition-all duration-500 ${
                                                day.isToday ? 'bg-secondary' :
                                                hitGoal ? 'bg-green-500' :
                                                day.points > 0 ? 'bg-navy-200' : 'bg-muted'
                                            }`}
                                            style={{ height: `${Math.max(barHeight, 4)}%` }}
                                        ></div>
                                    </div>
                                    <span className={`text-xs font-bold ${day.isToday ? 'text-secondary' : 'text-muted-foreground'}`}>
                                        {dayLabels[idx]}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                    {/* Goal line indicator */}
                    <div className="flex items-center space-x-2 mt-4 text-xs text-muted-foreground">
                        <div className="w-3 h-0.5 bg-green-500"></div>
                        <span>= Goal reached (100+ pts)</span>
                        <div className="w-3 h-0.5 bg-secondary ml-4"></div>
                        <span>= Today</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DailyActivity;
