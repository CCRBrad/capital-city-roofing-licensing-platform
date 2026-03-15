import React, { useState } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import {
    ShieldAlert, CheckCircle2, AlertTriangle, Ban, Users, Target, TrendingUp,
    Lock, Unlock, Clock, BarChart3, ChevronDown, ChevronUp
} from 'lucide-react';
import { useUniversityProgress } from '../../contexts/UniversityProgressContext';
import { DAY_ORDER } from '../../data/universityContent';

// --- Mock Trainee Data ---
interface MockTrainee {
    id: string;
    name: string;
    initials: string;
    daysCompleted: number;
    currentDay: number;
    quizFailures: number;
    softLocked: boolean;
    hardLocked: boolean;
    killSwitched: boolean;
    xp: number;
    joinedDaysAgo: number;
    tags: string[];
    lastActivity: string;
}

const mockTrainees: MockTrainee[] = [
    { id: 't1', name: 'Jordan Mitchell', initials: 'JM', daysCompleted: 11, currentDay: 12, quizFailures: 1, softLocked: false, hardLocked: false, killSwitched: false, xp: 3400, joinedDaysAgo: 14, tags: [], lastActivity: '2 hours ago' },
    { id: 't2', name: 'Alex Rivera', initials: 'AR', daysCompleted: 9, currentDay: 10, quizFailures: 0, softLocked: false, hardLocked: false, killSwitched: false, xp: 2800, joinedDaysAgo: 12, tags: [], lastActivity: '4 hours ago' },
    { id: 't3', name: 'Taylor Brooks', initials: 'TB', daysCompleted: 6, currentDay: 7, quizFailures: 3, softLocked: true, hardLocked: false, killSwitched: false, xp: 1900, joinedDaysAgo: 10, tags: [], lastActivity: '1 day ago' },
    { id: 't4', name: 'Casey Nguyen', initials: 'CN', daysCompleted: 8, currentDay: 9, quizFailures: 4, softLocked: true, hardLocked: false, killSwitched: false, xp: 2100, joinedDaysAgo: 11, tags: [], lastActivity: '6 hours ago' },
    { id: 't5', name: 'Morgan Hayes', initials: 'MH', daysCompleted: 13, currentDay: 14, quizFailures: 2, softLocked: false, hardLocked: true, killSwitched: false, xp: 4100, joinedDaysAgo: 16, tags: ['CCU – At Risk'], lastActivity: '3 hours ago' },
    { id: 't6', name: 'Dakota Reeves', initials: 'DR', daysCompleted: 7, currentDay: 8, quizFailures: 1, softLocked: false, hardLocked: false, killSwitched: true, xp: 2200, joinedDaysAgo: 9, tags: ['CCU – Non-Compliant'], lastActivity: '2 days ago' },
];

const getStatusInfo = (trainee: MockTrainee) => {
    if (trainee.killSwitched) return { label: 'Revoked', color: 'bg-red-100 text-red-700 border-red-200', dot: 'bg-red-500', icon: Ban };
    if (trainee.hardLocked) return { label: 'Hard Locked', color: 'bg-amber-100 text-amber-700 border-amber-200', dot: 'bg-amber-500', icon: Lock };
    if (trainee.softLocked) return { label: 'Soft Locked', color: 'bg-amber-50 text-amber-600 border-amber-200', dot: 'bg-amber-400', icon: AlertTriangle };
    if (trainee.daysCompleted >= 14) return { label: 'Certified', color: 'bg-green-100 text-green-700 border-green-200', dot: 'bg-green-500', icon: CheckCircle2 };
    return { label: 'On Track', color: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-500', icon: Target };
};

const ManagerWarRoom: React.FC = () => {
    const { managerOverride: _managerOverride } = useUniversityProgress();
    const [expandedTrainee, setExpandedTrainee] = useState<string | null>(null);
    const [overrideConfirm, setOverrideConfirm] = useState<string | null>(null);

    // Aggregate KPIs
    const totalTrainees = mockTrainees.length;
    const onTrack = mockTrainees.filter(t => !t.softLocked && !t.hardLocked && !t.killSwitched).length;
    const atRisk = mockTrainees.filter(t => t.softLocked || t.hardLocked).length;
    const revoked = mockTrainees.filter(t => t.killSwitched).length;
    const avgCompletion = Math.round(mockTrainees.reduce((s, t) => s + t.daysCompleted, 0) / totalTrainees);

    // Alerts — surface actionable issues
    const alerts = mockTrainees.filter(t => t.softLocked || t.hardLocked || t.killSwitched).map(t => {
        const status = getStatusInfo(t);
        return {
            trainee: t,
            status,
            message: t.killSwitched
                ? `${t.name} — Access revoked (ethics failure or 3rd exam failure). Immediate leadership review required.`
                : t.hardLocked
                ? `${t.name} — Day 14 exam hard locked. Manager override required for 3rd attempt.`
                : `${t.name} — Day ${t.currentDay} quiz soft locked (${t.quizFailures} failures). Must re-watch video.`
        };
    });

    const handleOverride = (_traineeId: string) => {
        // In production this would call the real managerOverride
        setOverrideConfirm(null);
        // For demo, we just close the confirm
    };

    return (
        <div className="pb-12 animate-fade-in space-y-8">
            <SEOHead title="War Room | CCR Portal" description="Sales Manager War Room — trainee monitoring and enforcement." />

            {/* Header */}
            <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-navy-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Leadership Dashboard</span>
                    <h1 className="text-4xl font-black font-display uppercase tracking-tight mb-2">
                        War Room
                    </h1>
                    <p className="text-white/80 max-w-2xl">
                        Real-time trainee monitoring, enforcement alerts, and KPI roll-ups. Take immediate action on soft locks, hard locks, and compliance failures.
                    </p>
                </div>
            </div>

            {/* KPI Roll-Up Strip */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                    { label: 'Total Trainees', value: totalTrainees, icon: Users, color: 'bg-blue-500/10 text-blue-500' },
                    { label: 'On Track', value: onTrack, icon: CheckCircle2, color: 'bg-green-500/10 text-green-500' },
                    { label: 'At Risk', value: atRisk, icon: AlertTriangle, color: 'bg-amber-500/10 text-amber-500' },
                    { label: 'Revoked', value: revoked, icon: Ban, color: 'bg-red-500/10 text-red-500' },
                    { label: 'Avg Day', value: `${avgCompletion}/14`, icon: BarChart3, color: 'bg-purple-500/10 text-purple-500' },
                ].map((kpi, idx) => (
                    <Card key={idx} className="border-border shadow-sm">
                        <CardContent className="p-4 flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${kpi.color}`}>
                                <kpi.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{kpi.label}</p>
                                <p className="text-2xl font-black font-display text-navy-950">{kpi.value}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Alerts Panel */}
            {alerts.length > 0 && (
                <Card className="border-2 border-secondary/30 shadow-sm">
                    <CardHeader className="border-b border-border pb-4 bg-red-50/50">
                        <CardTitle className="font-heading font-black text-lg text-red-800 flex items-center">
                            <ShieldAlert className="w-5 h-5 text-red-600 mr-2" />
                            Active Alerts ({alerts.length})
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-border">
                            {alerts.map((alert, idx) => (
                                <div key={idx} className="p-4 px-6 flex items-start space-x-3">
                                    <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${alert.status.dot}`}></div>
                                    <div className="flex-1">
                                        <p className="text-sm text-navy-950 font-medium">{alert.message}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Last active: {alert.trainee.lastActivity}</p>
                                    </div>
                                    {alert.trainee.hardLocked && !alert.trainee.killSwitched && (
                                        <div className="shrink-0">
                                            {overrideConfirm === alert.trainee.id ? (
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => handleOverride(alert.trainee.id)}
                                                        className="bg-secondary hover:bg-red-700 text-white text-xs font-bold py-1.5 px-3 rounded-md transition-colors"
                                                    >
                                                        Confirm Override
                                                    </button>
                                                    <button
                                                        onClick={() => setOverrideConfirm(null)}
                                                        className="bg-muted text-muted-foreground text-xs font-bold py-1.5 px-3 rounded-md hover:bg-gray-200 transition-colors"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => setOverrideConfirm(alert.trainee.id)}
                                                    className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-1.5 px-4 rounded-md transition-colors flex items-center space-x-1"
                                                >
                                                    <Unlock className="w-3 h-3" />
                                                    <span>Override</span>
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Trainee Progress Grid */}
            <div>
                <h2 className="text-2xl font-black font-display text-navy-950 uppercase tracking-tight mb-6">
                    Trainee Progress
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockTrainees.map(trainee => {
                        const status = getStatusInfo(trainee);
                        const StatusIcon = status.icon;
                        const isExpanded = expandedTrainee === trainee.id;
                        const progressPct = Math.round((trainee.daysCompleted / 14) * 100);

                        return (
                            <Card key={trainee.id} className={`border-2 transition-all hover:shadow-md ${
                                trainee.killSwitched ? 'border-red-300 bg-red-50/30' :
                                trainee.hardLocked ? 'border-amber-300 bg-amber-50/30' :
                                trainee.softLocked ? 'border-amber-200 bg-amber-50/20' :
                                'border-border'
                            }`}>
                                <CardContent className="p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center font-bold text-navy-950 text-sm border border-navy-200">
                                                {trainee.initials}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-navy-950 text-sm">{trainee.name}</h4>
                                                <p className="text-xs text-muted-foreground">Joined {trainee.joinedDaysAgo}d ago</p>
                                            </div>
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border flex items-center space-x-1 ${status.color}`}>
                                            <StatusIcon className="w-3 h-3" />
                                            <span>{status.label}</span>
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mb-3">
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="font-bold text-navy-950">Day {trainee.currentDay}/14</span>
                                            <span className="text-muted-foreground">{progressPct}%</span>
                                        </div>
                                        <div className="bg-muted rounded-full h-2 overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all ${
                                                    trainee.killSwitched ? 'bg-red-500' :
                                                    trainee.hardLocked || trainee.softLocked ? 'bg-amber-500' :
                                                    'bg-green-500'
                                                }`}
                                                style={{ width: `${progressPct}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <span>{trainee.xp.toLocaleString()} XP</span>
                                        <span>{trainee.quizFailures} quiz failure{trainee.quizFailures !== 1 ? 's' : ''}</span>
                                    </div>

                                    {/* Tags */}
                                    {trainee.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {trainee.tags.map(tag => (
                                                <span key={tag} className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                                    tag.includes('Non-Compliant') ? 'bg-red-100 text-red-700' :
                                                    tag.includes('At Risk') ? 'bg-amber-100 text-amber-700' :
                                                    'bg-green-100 text-green-700'
                                                }`}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Expand/Collapse */}
                                    <button
                                        onClick={() => setExpandedTrainee(isExpanded ? null : trainee.id)}
                                        className="w-full mt-3 pt-2 border-t border-border text-xs text-muted-foreground hover:text-secondary font-bold flex items-center justify-center space-x-1 transition-colors"
                                    >
                                        <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                    </button>

                                    {isExpanded && (
                                        <div className="mt-3 pt-3 border-t border-border space-y-2 animate-fade-in">
                                            {/* Day-by-Day Progress */}
                                            <div className="flex flex-wrap gap-1">
                                                {DAY_ORDER.map((dayId, idx) => {
                                                    const dayNum = idx + 1;
                                                    const completed = dayNum <= trainee.daysCompleted;
                                                    const current = dayNum === trainee.currentDay;
                                                    return (
                                                        <div
                                                            key={dayId}
                                                            className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold ${
                                                                completed ? 'bg-green-500 text-white' :
                                                                current ? 'bg-navy-950 text-white ring-2 ring-secondary' :
                                                                'bg-muted text-muted-foreground'
                                                            }`}
                                                            title={`Day ${dayNum}`}
                                                        >
                                                            {dayNum}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <p className="text-xs text-muted-foreground">
                                                <Clock className="w-3 h-3 inline mr-1" />
                                                Last active: {trainee.lastActivity}
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* Team Activity KPI Roll-Up */}
            <Card className="border-border shadow-sm">
                <CardHeader className="border-b border-border pb-4">
                    <CardTitle className="font-heading font-black text-xl text-primary flex items-center">
                        <TrendingUp className="w-5 h-5 text-secondary mr-2" />
                        Team Activity Roll-Up
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Doors Knocked', value: '247', sub: 'This week', change: '+12%' },
                            { label: 'Inspections', value: '38', sub: 'This week', change: '+8%' },
                            { label: 'Proposals', value: '22', sub: 'This week', change: '+15%' },
                            { label: 'Closes', value: '9', sub: 'This week', change: '+5%' },
                        ].map((kpi, idx) => (
                            <div key={idx} className="text-center">
                                <p className="text-3xl font-black font-display text-navy-950">{kpi.value}</p>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{kpi.label}</p>
                                <p className="text-xs text-green-600 font-bold mt-1">{kpi.change} {kpi.sub}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ManagerWarRoom;
