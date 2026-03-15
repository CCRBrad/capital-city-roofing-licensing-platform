import React, { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';
import { DAY_ORDER } from '../data/universityContent';
import { PASS_THRESHOLD, FINAL_EXAM_THRESHOLD } from '../data/universityQuizzes';

// --- Types ---
export type UserLevel = 'Trainee' | 'Associate' | 'Specialist' | 'Expert' | 'Master' | 'Elite';
export type UserTag = 'CCU – Sales Certified' | 'CCU – At Risk' | 'CCU – Non-Compliant';

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
    earnedAt?: string;
}

export interface QuizAttempt {
    dayId: string;
    score: number;
    totalQuestions: number;
    passed: boolean;
    attemptedAt: string;
}

export interface DayProgress {
    dayId: string;
    videoWatched: boolean;
    checklistComplete: boolean;
    acknowledgementSigned: boolean;
    quizAttempts: QuizAttempt[];
    bestQuizScore: number;
    softLocked: boolean;
    softLockVideoRewatched: boolean;
    hardLocked: boolean;
    managerOverrideUsed: boolean;
    killSwitched: boolean;
    completed: boolean;
    completedAt?: string;
}

export interface UserProgress {
    userId: string;
    displayName: string;
    xp: number;
    level: UserLevel;
    days: Record<string, DayProgress>;
    badges: Badge[];
    tags: UserTag[];
    streakDays: number;
    totalTimeSpentMinutes: number;
    graduated: boolean;
    graduatedAt?: string;
}

interface UniversityProgressContextType {
    progress: UserProgress;
    // Day actions
    markVideoWatched: (dayId: string) => void;
    markChecklistComplete: (dayId: string) => void;
    signAcknowledgement: (dayId: string) => void;
    submitDayQuiz: (dayId: string, score: number, totalQuestions: number) => { passed: boolean; softLocked: boolean; hardLocked: boolean; killSwitched: boolean; graduated: boolean };
    completeDay: (dayId: string) => void;
    // Admin
    managerOverride: (dayId: string) => void;
    resetSoftLock: (dayId: string) => void;
    // Queries
    isDayUnlocked: (dayId: string) => boolean;
    isDayComplete: (dayId: string) => boolean;
    getDayProgress: (dayId: string) => DayProgress | undefined;
    canTakeQuiz: (dayId: string) => boolean;
    getCompletedDayCount: () => number;
    // XP
    addXP: (amount: number) => void;
    // Leaderboard
    leaderboard: UserProgress[];
}

// --- XP Thresholds ---
export const LEVEL_THRESHOLDS: { level: UserLevel; xp: number }[] = [
    { level: 'Trainee', xp: 0 },
    { level: 'Associate', xp: 500 },
    { level: 'Specialist', xp: 1500 },
    { level: 'Expert', xp: 3500 },
    { level: 'Master', xp: 6500 },
    { level: 'Elite', xp: 10000 },
];

// XP Rewards
const XP_VIDEO_WATCH = 25;
const XP_CHECKLIST = 25;
const XP_ACKNOWLEDGEMENT = 25;
const XP_QUIZ_PASS = 150;
const XP_QUIZ_PERFECT = 300;
const XP_DAY_COMPLETE = 100;
const XP_GRADUATION = 1000;

// --- Enforcement Constants ---
const SOFT_LOCK_THRESHOLD = 3;     // 3 failures → soft lock
const HARD_LOCK_THRESHOLD = 2;     // 2 failures on Day 14 → hard lock
const KILL_SWITCH_THRESHOLD = 3;   // 3 failures on Day 14 → kill switch
const ETHICS_DAY = 'day-8';
const FINAL_EXAM_DAY = 'day-14';
const GATE_DAY = 'day-7';

// --- Badge Definitions ---
const BADGE_DEFINITIONS: Badge[] = [
    { id: 'first-day', name: 'First Steps', description: 'Completed your first day of training', icon: '🎯' },
    { id: 'week-1-complete', name: 'Week 1 Champion', description: 'Completed Days 1-7', icon: '🏗️' },
    { id: 'week-2-complete', name: 'Week 2 Champion', description: 'Completed Days 8-13', icon: '🔍' },
    { id: 'ethics-cleared', name: 'Ethics Cleared', description: 'Passed the Insurance Ethics & Compliance module', icon: '⚖️' },
    { id: 'gate-passed', name: 'Field Ready', description: 'Passed Day 7 — unlocked lead shadowing access', icon: '🚪' },
    { id: 'perfect-score', name: 'Perfectionist', description: 'Scored 100% on any quiz', icon: '💯' },
    { id: 'streak-7', name: '7-Day Streak', description: 'Trained 7 days in a row', icon: '🔥' },
    { id: 'ccu-certified', name: 'CCU – Sales Certified', description: 'Passed the Final Certification Exam', icon: '🎓' },
    { id: 'full-graduate', name: 'CCU Graduate', description: 'Completed the entire 14-day curriculum', icon: '🏆' },
];

// --- Simulated leaderboard peers ---
const MOCK_LEADERBOARD: UserProgress[] = [
    { userId: 'user-2', displayName: 'Marcus Johnson', xp: 4200, level: 'Expert', days: {}, badges: [], tags: [], streakDays: 12, totalTimeSpentMinutes: 920, graduated: false },
    { userId: 'user-3', displayName: 'Sarah Chen', xp: 3800, level: 'Expert', days: {}, badges: [], tags: [], streakDays: 8, totalTimeSpentMinutes: 840, graduated: false },
    { userId: 'user-4', displayName: 'Devon Patel', xp: 2900, level: 'Specialist', days: {}, badges: [], tags: [], streakDays: 5, totalTimeSpentMinutes: 650, graduated: false },
    { userId: 'user-5', displayName: 'Jasmine Torres', xp: 2100, level: 'Specialist', days: {}, badges: [], tags: [], streakDays: 3, totalTimeSpentMinutes: 480, graduated: false },
    { userId: 'user-6', displayName: 'Tyler Brooks', xp: 1400, level: 'Associate', days: {}, badges: [], tags: [], streakDays: 7, totalTimeSpentMinutes: 310, graduated: false },
    { userId: 'user-7', displayName: 'Amanda Wright', xp: 800, level: 'Associate', days: {}, badges: [], tags: [], streakDays: 2, totalTimeSpentMinutes: 190, graduated: false },
];

function calculateLevel(xp: number): UserLevel {
    let level: UserLevel = 'Trainee';
    for (const threshold of LEVEL_THRESHOLDS) {
        if (xp >= threshold.xp) level = threshold.level;
    }
    return level;
}

export function getNextLevelXP(currentXP: number): number {
    for (const threshold of LEVEL_THRESHOLDS) {
        if (currentXP < threshold.xp) return threshold.xp;
    }
    return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1].xp;
}

function createDefaultDayProgress(dayId: string): DayProgress {
    return {
        dayId,
        videoWatched: false,
        checklistComplete: false,
        acknowledgementSigned: false,
        quizAttempts: [],
        bestQuizScore: 0,
        softLocked: false,
        softLockVideoRewatched: false,
        hardLocked: false,
        managerOverrideUsed: false,
        killSwitched: false,
        completed: false,
    };
}

// --- Default Progress ---
const defaultProgress: UserProgress = {
    userId: 'current-user',
    displayName: 'You',
    xp: 0,
    level: 'Trainee',
    days: {},
    badges: [],
    tags: [],
    streakDays: 0,
    totalTimeSpentMinutes: 0,
    graduated: false,
};

const STORAGE_KEY = 'ccr-university-progress-v2';

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

    // --- Day Actions ---
    const markVideoWatched = useCallback((dayId: string) => {
        setProgress(prev => {
            const existing = prev.days[dayId] || createDefaultDayProgress(dayId);
            if (existing.videoWatched) return prev;
            const newXP = prev.xp + XP_VIDEO_WATCH;
            return {
                ...prev,
                xp: newXP,
                level: calculateLevel(newXP),
                days: {
                    ...prev.days,
                    [dayId]: { ...existing, videoWatched: true, softLockVideoRewatched: existing.softLocked ? true : existing.softLockVideoRewatched }
                }
            };
        });
    }, []);

    const markChecklistComplete = useCallback((dayId: string) => {
        setProgress(prev => {
            const existing = prev.days[dayId] || createDefaultDayProgress(dayId);
            if (existing.checklistComplete) return prev;
            const newXP = prev.xp + XP_CHECKLIST;
            return {
                ...prev,
                xp: newXP,
                level: calculateLevel(newXP),
                days: { ...prev.days, [dayId]: { ...existing, checklistComplete: true } }
            };
        });
    }, []);

    const signAcknowledgement = useCallback((dayId: string) => {
        setProgress(prev => {
            const existing = prev.days[dayId] || createDefaultDayProgress(dayId);
            if (existing.acknowledgementSigned) return prev;
            const newXP = prev.xp + XP_ACKNOWLEDGEMENT;
            return {
                ...prev,
                xp: newXP,
                level: calculateLevel(newXP),
                days: { ...prev.days, [dayId]: { ...existing, acknowledgementSigned: true } }
            };
        });
    }, []);

    const submitDayQuiz = useCallback((dayId: string, score: number, totalQuestions: number): { passed: boolean; softLocked: boolean; hardLocked: boolean; killSwitched: boolean; graduated: boolean } => {
        let result = { passed: false, softLocked: false, hardLocked: false, killSwitched: false, graduated: false };

        setProgress(prev => {
            const isFinalExam = dayId === FINAL_EXAM_DAY;
            const isEthics = dayId === ETHICS_DAY;
            const threshold = isFinalExam ? FINAL_EXAM_THRESHOLD : PASS_THRESHOLD;
            const scorePercent = score / totalQuestions;
            const passed = scorePercent >= threshold;
            const isPerfect = score === totalQuestions;

            const attempt: QuizAttempt = {
                dayId,
                score,
                totalQuestions,
                passed,
                attemptedAt: new Date().toISOString(),
            };

            const existing = prev.days[dayId] || createDefaultDayProgress(dayId);
            const newAttempts = [...existing.quizAttempts, attempt];
            const failedAttempts = newAttempts.filter(a => !a.passed).length;
            const bestScore = Math.max(existing.bestQuizScore, Math.round(scorePercent * 100));

            let newXP = prev.xp;
            let newBadges = [...prev.badges];
            let newTags = [...prev.tags];
            let newSoftLocked = existing.softLocked;
            let newHardLocked = existing.hardLocked;
            let newKillSwitched = existing.killSwitched;
            let newGraduated = prev.graduated;
            let newGraduatedAt = prev.graduatedAt;

            if (passed) {
                newXP += XP_QUIZ_PASS;
                if (isPerfect) {
                    newXP += XP_QUIZ_PERFECT;
                    newBadges = earnBadge('perfect-score', newBadges);
                }

                // Ethics cleared badge
                if (isEthics) {
                    newBadges = earnBadge('ethics-cleared', newBadges);
                }

                // Gate passed badge
                if (dayId === GATE_DAY) {
                    newBadges = earnBadge('gate-passed', newBadges);
                }

                // Graduation!
                if (isFinalExam) {
                    newGraduated = true;
                    newGraduatedAt = new Date().toISOString();
                    newXP += XP_GRADUATION;
                    newBadges = earnBadge('ccu-certified', newBadges);
                    newBadges = earnBadge('full-graduate', newBadges);
                    if (!newTags.includes('CCU – Sales Certified')) {
                        newTags = [...newTags.filter(t => t !== 'CCU – At Risk'), 'CCU – Sales Certified'];
                    }
                }
            } else {
                // --- FAILURE LOGIC ---

                // ETHICS GATE: Any failure on Day 8 → Kill Switch
                if (isEthics) {
                    newKillSwitched = true;
                    if (!newTags.includes('CCU – Non-Compliant')) {
                        newTags = [...newTags, 'CCU – Non-Compliant'];
                    }
                }
                // FINAL EXAM: Failure logic
                else if (isFinalExam) {
                    if (failedAttempts >= KILL_SWITCH_THRESHOLD) {
                        // 3rd failure → Kill Switch
                        newKillSwitched = true;
                        if (!newTags.includes('CCU – Non-Compliant')) {
                            newTags = [...newTags, 'CCU – Non-Compliant'];
                        }
                    } else if (failedAttempts >= HARD_LOCK_THRESHOLD) {
                        // 2nd failure → Hard Lock
                        newHardLocked = true;
                        if (!newTags.includes('CCU – At Risk')) {
                            newTags = [...newTags, 'CCU – At Risk'];
                        }
                    }
                }
                // DAILY QUIZZES: 3 failures → Soft Lock
                else if (failedAttempts >= SOFT_LOCK_THRESHOLD) {
                    newSoftLocked = true;
                }
            }

            result = {
                passed,
                softLocked: newSoftLocked,
                hardLocked: newHardLocked,
                killSwitched: newKillSwitched,
                graduated: newGraduated && !prev.graduated,
            };

            return {
                ...prev,
                xp: newXP,
                level: calculateLevel(newXP),
                badges: newBadges,
                tags: newTags,
                graduated: newGraduated,
                graduatedAt: newGraduatedAt,
                days: {
                    ...prev.days,
                    [dayId]: {
                        ...existing,
                        quizAttempts: newAttempts,
                        bestQuizScore: bestScore,
                        softLocked: newSoftLocked,
                        hardLocked: newHardLocked,
                        killSwitched: newKillSwitched,
                    }
                }
            };
        });

        return result;
    }, [earnBadge]);

    const completeDay = useCallback((dayId: string) => {
        setProgress(prev => {
            const existing = prev.days[dayId] || createDefaultDayProgress(dayId);
            if (existing.completed) return prev;

            const newXP = prev.xp + XP_DAY_COMPLETE;
            let newBadges = [...prev.badges];

            // Count completed days
            const newDays = {
                ...prev.days,
                [dayId]: { ...existing, completed: true, completedAt: new Date().toISOString() }
            };
            const completedCount = Object.values(newDays).filter(d => d.completed).length;

            // Badges
            if (completedCount === 1) newBadges = earnBadge('first-day', newBadges);

            // Week 1 (Days 1-7)
            const week1Done = DAY_ORDER.slice(0, 7).every(id => newDays[id]?.completed);
            if (week1Done) newBadges = earnBadge('week-1-complete', newBadges);

            // Week 2 (Days 8-13)
            const week2Done = DAY_ORDER.slice(7, 13).every(id => newDays[id]?.completed);
            if (week2Done) newBadges = earnBadge('week-2-complete', newBadges);

            return {
                ...prev,
                xp: newXP,
                level: calculateLevel(newXP),
                badges: newBadges,
                days: newDays,
            };
        });
    }, [earnBadge]);

    // --- Admin Actions ---
    const managerOverride = useCallback((dayId: string) => {
        setProgress(prev => {
            const existing = prev.days[dayId];
            if (!existing?.hardLocked) return prev;
            return {
                ...prev,
                days: {
                    ...prev.days,
                    [dayId]: { ...existing, hardLocked: false, managerOverrideUsed: true }
                }
            };
        });
    }, []);

    const resetSoftLock = useCallback((dayId: string) => {
        setProgress(prev => {
            const existing = prev.days[dayId];
            if (!existing?.softLocked || !existing.softLockVideoRewatched) return prev;
            return {
                ...prev,
                days: {
                    ...prev.days,
                    [dayId]: { ...existing, softLocked: false, softLockVideoRewatched: false }
                }
            };
        });
    }, []);

    // --- Query Functions ---
    const isDayUnlocked = useCallback((dayId: string): boolean => {
        const idx = DAY_ORDER.indexOf(dayId);
        if (idx === 0) return true; // Day 1 always unlocked

        // Check if previous day is fully completed
        const prevDayId = DAY_ORDER[idx - 1];
        const prevDay = progress.days[prevDayId];

        if (!prevDay) return false;

        return prevDay.completed;
    }, [progress]);

    const isDayComplete = useCallback((dayId: string): boolean => {
        return progress.days[dayId]?.completed || false;
    }, [progress]);

    const getDayProgress = useCallback((dayId: string): DayProgress | undefined => {
        return progress.days[dayId];
    }, [progress]);

    const canTakeQuiz = useCallback((dayId: string): boolean => {
        const day = progress.days[dayId];
        if (!day) return false;

        // Must have watched video, completed checklist, and signed acknowledgement
        if (!day.videoWatched || !day.checklistComplete || !day.acknowledgementSigned) return false;

        // Kill switched — no more quizzes ever
        if (day.killSwitched) return false;

        // Hard locked — needs manager override
        if (day.hardLocked) return false;

        // Soft locked — needs video re-watch
        if (day.softLocked && !day.softLockVideoRewatched) return false;

        return true;
    }, [progress]);

    const getCompletedDayCount = useCallback((): number => {
        return Object.values(progress.days).filter(d => d.completed).length;
    }, [progress]);

    // Build leaderboard
    const leaderboard = [...MOCK_LEADERBOARD, progress].sort((a, b) => b.xp - a.xp);

    return (
        <UniversityProgressContext.Provider value={{
            progress,
            markVideoWatched,
            markChecklistComplete,
            signAcknowledgement,
            submitDayQuiz,
            completeDay,
            managerOverride,
            resetSoftLock,
            isDayUnlocked,
            isDayComplete,
            getDayProgress,
            canTakeQuiz,
            getCompletedDayCount,
            addXP,
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

export { BADGE_DEFINITIONS, DAY_ORDER as MODULE_ORDER };
