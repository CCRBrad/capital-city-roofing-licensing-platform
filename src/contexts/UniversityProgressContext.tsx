import React, { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

// --- Types ---
export type UserLevel = 'Trainee' | 'Associate' | 'Specialist' | 'Expert' | 'Master' | 'Elite';

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string; // emoji
    earnedAt?: string; // ISO date
}

export interface QuizAttempt {
    moduleId: string;
    score: number;
    totalQuestions: number;
    passed: boolean;
    attemptedAt: string;
}

export interface ModuleProgress {
    moduleId: string;
    completed: boolean;
    completedAt?: string;
    timeSpentMinutes: number;
    quizAttempts: QuizAttempt[];
    bestQuizScore: number;
}

export interface WeekProgress {
    week: number;
    bossBattlePassed: boolean;
    bossBattlePassedAt?: string;
    certificateEarned: boolean;
}

export interface UserProgress {
    userId: string;
    displayName: string;
    xp: number;
    level: UserLevel;
    modules: Record<string, ModuleProgress>;
    weeks: Record<number, WeekProgress>;
    badges: Badge[];
    streakDays: number;
    totalTimeSpentMinutes: number;
}

interface UniversityProgressContextType {
    progress: UserProgress;
    completeModule: (moduleId: string) => void;
    submitQuiz: (moduleId: string, score: number, totalQuestions: number) => void;
    passBossBattle: (week: number) => void;
    addXP: (amount: number) => void;
    isModuleUnlocked: (moduleId: string) => boolean;
    getModuleProgress: (moduleId: string) => ModuleProgress | undefined;
    getWeekProgress: (week: number) => WeekProgress | undefined;
    leaderboard: UserProgress[];
}

// --- XP Thresholds ---
const LEVEL_THRESHOLDS: { level: UserLevel; xp: number }[] = [
    { level: 'Trainee', xp: 0 },
    { level: 'Associate', xp: 500 },
    { level: 'Specialist', xp: 1500 },
    { level: 'Expert', xp: 3500 },
    { level: 'Master', xp: 6500 },
    { level: 'Elite', xp: 10000 },
];

const MODULE_ORDER = ['1.1', '1.2', '1.3', '1.4', '2.1', '2.2', '2.3', '2.4', '3.1', '3.2', '3.3', '3.4'];
const BOSS_BATTLES_AFTER: Record<number, string> = { 1: '1.4', 2: '2.4', 3: '3.4' };

// XP Rewards
const XP_MODULE_COMPLETE = 100;
const XP_QUIZ_PASS = 150;
const XP_QUIZ_PERFECT = 300;
const XP_BOSS_PASS = 500;

// --- Badge Definitions ---
const BADGE_DEFINITIONS: Badge[] = [
    { id: 'first-module', name: 'First Steps', description: 'Completed your first module', icon: '🎯' },
    { id: 'week-1-complete', name: 'Foundation Builder', description: 'Completed all Week 1 modules', icon: '🏗️' },
    { id: 'week-2-complete', name: 'Inspector General', description: 'Completed all Week 2 modules', icon: '🔍' },
    { id: 'week-3-complete', name: 'Systems Master', description: 'Completed all Week 3 modules', icon: '⚙️' },
    { id: 'boss-1', name: 'Battle Tested', description: 'Passed your first Boss Battle', icon: '⚔️' },
    { id: 'boss-2', name: 'Claims Commander', description: 'Passed the Inspections Boss Battle', icon: '🛡️' },
    { id: 'boss-3', name: 'Certified Elite', description: 'Passed the Final Certification', icon: '🎓' },
    { id: 'perfect-score', name: 'Perfectionist', description: 'Scored 100% on any quiz', icon: '💯' },
    { id: 'speed-demon', name: 'Speed Demon', description: 'Completed a module in under 10 minutes', icon: '⚡' },
    { id: 'full-graduate', name: 'CCU Graduate', description: 'Completed the entire curriculum', icon: '🏆' },
];

// --- Simulated leaderboard peers ---
const MOCK_LEADERBOARD: UserProgress[] = [
    { userId: 'user-2', displayName: 'Marcus Johnson', xp: 4200, level: 'Expert', modules: {}, weeks: {}, badges: [], streakDays: 12, totalTimeSpentMinutes: 920 },
    { userId: 'user-3', displayName: 'Sarah Chen', xp: 3800, level: 'Expert', modules: {}, weeks: {}, badges: [], streakDays: 8, totalTimeSpentMinutes: 840 },
    { userId: 'user-4', displayName: 'Devon Patel', xp: 2900, level: 'Specialist', modules: {}, weeks: {}, badges: [], streakDays: 5, totalTimeSpentMinutes: 650 },
    { userId: 'user-5', displayName: 'Jasmine Torres', xp: 2100, level: 'Specialist', modules: {}, weeks: {}, badges: [], streakDays: 3, totalTimeSpentMinutes: 480 },
    { userId: 'user-6', displayName: 'Tyler Brooks', xp: 1400, level: 'Associate', modules: {}, weeks: {}, badges: [], streakDays: 7, totalTimeSpentMinutes: 310 },
    { userId: 'user-7', displayName: 'Amanda Wright', xp: 800, level: 'Associate', modules: {}, weeks: {}, badges: [], streakDays: 2, totalTimeSpentMinutes: 190 },
];

function calculateLevel(xp: number): UserLevel {
    let level: UserLevel = 'Trainee';
    for (const threshold of LEVEL_THRESHOLDS) {
        if (xp >= threshold.xp) level = threshold.level;
    }
    return level;
}

function getNextLevelXP(currentXP: number): number {
    for (const threshold of LEVEL_THRESHOLDS) {
        if (currentXP < threshold.xp) return threshold.xp;
    }
    return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1].xp;
}

// --- Default Progress ---
const defaultProgress: UserProgress = {
    userId: 'current-user',
    displayName: 'You',
    xp: 0,
    level: 'Trainee',
    modules: {},
    weeks: {
        1: { week: 1, bossBattlePassed: false, certificateEarned: false },
        2: { week: 2, bossBattlePassed: false, certificateEarned: false },
        3: { week: 3, bossBattlePassed: false, certificateEarned: false },
    },
    badges: [],
    streakDays: 0,
    totalTimeSpentMinutes: 0,
};

const STORAGE_KEY = 'ccr-university-progress';

function loadProgress(): UserProgress {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            return { ...defaultProgress, ...parsed };
        }
    } catch { /* fallback to default */ }
    return defaultProgress;
}

const UniversityProgressContext = createContext<UniversityProgressContextType | undefined>(undefined);

export const UniversityProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [progress, setProgress] = useState<UserProgress>(loadProgress);

    // Persist to localStorage on every progress change
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch { /* quota exceeded fallback */ }
    }, [progress]);

    const earnBadge = useCallback((badgeId: string, currentBadges: Badge[]): Badge[] => {
        if (currentBadges.find(b => b.id === badgeId)) return currentBadges;
        const def = BADGE_DEFINITIONS.find(b => b.id === badgeId);
        if (!def) return currentBadges;
        return [...currentBadges, { ...def, earnedAt: new Date().toISOString() }];
    }, []);

    const addXP = useCallback((amount: number) => {
        setProgress(prev => {
            const newXP = prev.xp + amount;
            return { ...prev, xp: newXP, level: calculateLevel(newXP) };
        });
    }, []);

    const completeModule = useCallback((moduleId: string) => {
        setProgress(prev => {
            const existing = prev.modules[moduleId];
            if (existing?.completed) return prev;

            const newModules = {
                ...prev.modules,
                [moduleId]: {
                    moduleId,
                    completed: true,
                    completedAt: new Date().toISOString(),
                    timeSpentMinutes: existing?.timeSpentMinutes || 15,
                    quizAttempts: existing?.quizAttempts || [],
                    bestQuizScore: existing?.bestQuizScore || 0,
                }
            };

            let newXP = prev.xp + XP_MODULE_COMPLETE;
            let newBadges = [...prev.badges];

            // First module badge
            const completedCount = Object.values(newModules).filter(m => m.completed).length;
            if (completedCount === 1) newBadges = earnBadge('first-module', newBadges);

            // Week completion badges
            const week1Done = ['1.1', '1.2', '1.3', '1.4'].every(id => newModules[id]?.completed);
            const week2Done = ['2.1', '2.2', '2.3', '2.4'].every(id => newModules[id]?.completed);
            const week3Done = ['3.1', '3.2', '3.3', '3.4'].every(id => newModules[id]?.completed);
            if (week1Done) newBadges = earnBadge('week-1-complete', newBadges);
            if (week2Done) newBadges = earnBadge('week-2-complete', newBadges);
            if (week3Done) newBadges = earnBadge('week-3-complete', newBadges);

            // Full graduate
            if (week1Done && week2Done && week3Done) newBadges = earnBadge('full-graduate', newBadges);

            return {
                ...prev,
                modules: newModules,
                xp: newXP,
                level: calculateLevel(newXP),
                badges: newBadges,
            };
        });
    }, [earnBadge]);

    const submitQuiz = useCallback((moduleId: string, score: number, totalQuestions: number) => {
        setProgress(prev => {
            const passed = (score / totalQuestions) >= 0.8;
            const isPerfect = score === totalQuestions;
            const attempt: QuizAttempt = {
                moduleId,
                score,
                totalQuestions,
                passed,
                attemptedAt: new Date().toISOString(),
            };

            const existing = prev.modules[moduleId] || {
                moduleId,
                completed: false,
                timeSpentMinutes: 0,
                quizAttempts: [],
                bestQuizScore: 0,
            };

            const bestScore = Math.max(existing.bestQuizScore, Math.round((score / totalQuestions) * 100));

            let newXP = prev.xp;
            let newBadges = [...prev.badges];
            if (passed) newXP += XP_QUIZ_PASS;
            if (isPerfect) {
                newXP += XP_QUIZ_PERFECT;
                newBadges = earnBadge('perfect-score', newBadges);
            }

            return {
                ...prev,
                xp: newXP,
                level: calculateLevel(newXP),
                badges: newBadges,
                modules: {
                    ...prev.modules,
                    [moduleId]: {
                        ...existing,
                        quizAttempts: [...existing.quizAttempts, attempt],
                        bestQuizScore: bestScore,
                    }
                }
            };
        });
    }, [earnBadge]);

    const passBossBattle = useCallback((week: number) => {
        setProgress(prev => {
            const weekProgress = prev.weeks[week];
            if (weekProgress?.bossBattlePassed) return prev;

            const newXP = prev.xp + XP_BOSS_PASS;
            let newBadges = [...prev.badges];
            if (week === 1) newBadges = earnBadge('boss-1', newBadges);
            if (week === 2) newBadges = earnBadge('boss-2', newBadges);
            if (week === 3) newBadges = earnBadge('boss-3', newBadges);

            return {
                ...prev,
                xp: newXP,
                level: calculateLevel(newXP),
                badges: newBadges,
                weeks: {
                    ...prev.weeks,
                    [week]: {
                        week,
                        bossBattlePassed: true,
                        bossBattlePassedAt: new Date().toISOString(),
                        certificateEarned: true,
                    }
                }
            };
        });
    }, [earnBadge]);

    const isModuleUnlocked = useCallback((moduleId: string): boolean => {
        const idx = MODULE_ORDER.indexOf(moduleId);
        if (idx === 0) return true; // First module always unlocked

        // Check if previous module is completed
        const prevModuleId = MODULE_ORDER[idx - 1];
        const prevCompleted = progress.modules[prevModuleId]?.completed;

        // If previous module is a boss battle gate, check that too
        for (const [week, lastModule] of Object.entries(BOSS_BATTLES_AFTER)) {
            if (lastModule === prevModuleId && MODULE_ORDER.indexOf(moduleId) > MODULE_ORDER.indexOf(lastModule)) {
                return prevCompleted && (progress.weeks[Number(week)]?.bossBattlePassed || false);
            }
        }

        return prevCompleted || false;
    }, [progress]);

    const getModuleProgress = useCallback((moduleId: string) => progress.modules[moduleId], [progress]);
    const getWeekProgress = useCallback((week: number) => progress.weeks[week], [progress]);

    // Build leaderboard with current user inserted
    const leaderboard = [...MOCK_LEADERBOARD, progress].sort((a, b) => b.xp - a.xp);

    return (
        <UniversityProgressContext.Provider value={{
            progress,
            completeModule,
            submitQuiz,
            passBossBattle,
            addXP,
            isModuleUnlocked,
            getModuleProgress,
            getWeekProgress,
            leaderboard,
        }}>
            {children}
        </UniversityProgressContext.Provider>
    );
};

export const useUniversityProgress = () => {
    const ctx = useContext(UniversityProgressContext);
    if (!ctx) throw new Error('useUniversityProgress must be used within UniversityProgressProvider');
    return ctx;
};

export { LEVEL_THRESHOLDS, BADGE_DEFINITIONS, MODULE_ORDER, getNextLevelXP };
