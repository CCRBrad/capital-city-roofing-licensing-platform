import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent } from '../../components/ui/card';
import {
    ArrowLeft, PlayCircle, FileText, CheckCircle2, Lock, Award, XCircle, Clock, Target,
    AlertTriangle, ShieldAlert, Ban, Eye, Square, CheckSquare
} from 'lucide-react';
import { universityModules } from '../../data/universityContent';
import { quizPools, PASS_THRESHOLD, FINAL_EXAM_THRESHOLD } from '../../data/universityQuizzes';
import { useUniversityProgress } from '../../contexts/UniversityProgressContext';

const UniversityModule: React.FC = () => {
    const { moduleId: dayId } = useParams<{ moduleId: string }>();
    const navigate = useNavigate();
    const {
        isDayUnlocked, getDayProgress, markVideoWatched, markChecklistComplete,
        signAcknowledgement, submitDayQuiz, completeDay, canTakeQuiz, resetSoftLock
    } = useUniversityProgress();

    const moduleData = dayId ? universityModules[dayId] : null;
    const unlocked = dayId ? isDayUnlocked(dayId) : false;
    const dayProg = dayId ? getDayProgress(dayId) : undefined;
    const quizQuestions = dayId ? (quizPools[dayId] || []) : [];
    const isFinalExam = moduleData?.isFinalExam;
    const isEthics = moduleData?.isEthicsGate;
    const threshold = isFinalExam ? FINAL_EXAM_THRESHOLD : PASS_THRESHOLD;

    // Quiz State
    const [quizActive, setQuizActive] = useState(false);
    const [currentQ, setCurrentQ] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [quizResult, setQuizResult] = useState<{ passed: boolean; softLocked: boolean; hardLocked: boolean; killSwitched: boolean; graduated: boolean } | null>(null);

    // Celebration state
    const [showCelebration, setShowCelebration] = useState(false);

    // For daily quizzes, pick 6 from pool. For final exam, use all 20.
    const activeQuiz = useMemo(() => {
        if (isFinalExam) return [...quizQuestions]; // All 20 questions
        const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(6, shuffled.length));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quizActive, isFinalExam]);

    if (!moduleData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <h2 className="text-2xl font-black font-display uppercase tracking-widest text-primary">Module Not Found</h2>
                <Link to="/portal/university" className="text-secondary font-bold hover:underline flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to University
                </Link>
            </div>
        );
    }

    if (!unlocked) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                    <Lock className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-black font-display uppercase tracking-widest text-primary">Day Locked</h2>
                <p className="text-muted-foreground">Complete the previous day to unlock this one.</p>
                <Link to="/portal/university" className="text-secondary font-bold hover:underline flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to University
                </Link>
            </div>
        );
    }

    // Kill Switch Screen
    if (dayProg?.killSwitched) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4 text-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                    <Ban className="w-12 h-12 text-red-600" />
                </div>
                <h2 className="text-2xl font-black font-display uppercase tracking-widest text-red-700">Access Revoked</h2>
                <p className="text-muted-foreground max-w-md">
                    {isEthics
                        ? "You have failed the Ethics & Compliance assessment. Your access has been immediately revoked. Contact your manager."
                        : "You have failed the Final Certification Exam 3 times. Your account has been tagged as CCU – Non-Compliant and all access has been revoked."
                    }
                </p>
                <p className="text-sm text-red-600 font-bold">Tag Applied: CCU – Non-Compliant</p>
                <Link to="/portal/university" className="text-secondary font-bold hover:underline flex items-center mt-4">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to University
                </Link>
            </div>
        );
    }

    const handleSelectAnswer = (qIdx: number, optIdx: number) => {
        if (quizSubmitted) return;
        setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
    };

    const handleSubmitQuiz = () => {
        if (!dayId) return;
        const score = activeQuiz.reduce((acc, q, idx) => {
            return acc + (selectedAnswers[idx] === q.correctIndex ? 1 : 0);
        }, 0);
        const result = submitDayQuiz(dayId, score, activeQuiz.length);
        setQuizResult(result);
        setQuizSubmitted(true);

        if (result.graduated) {
            setShowCelebration(true);
        }
    };

    const handleRetakeQuiz = () => {
        if (dayProg?.softLocked && dayProg.softLockVideoRewatched && dayId) {
            resetSoftLock(dayId);
        }
        setSelectedAnswers({});
        setCurrentQ(0);
        setQuizSubmitted(false);
        setQuizResult(null);
        setQuizActive(false);
        setTimeout(() => setQuizActive(true), 100);
    };

    const handleCompleteDay = () => {
        if (dayId) {
            completeDay(dayId);
        }
    };

    const quizScore = quizSubmitted ? activeQuiz.reduce((acc, q, idx) => acc + (selectedAnswers[idx] === q.correctIndex ? 1 : 0), 0) : 0;
    const quizPassed = quizSubmitted && (quizScore / activeQuiz.length) >= threshold;

    const canComplete = dayProg?.videoWatched && dayProg?.checklistComplete && dayProg?.acknowledgementSigned && dayProg?.bestQuizScore >= (threshold * 100);

    // Day number
    const dayNumber = dayId ? parseInt(dayId.replace('day-', '')) : 0;

    // Celebration Overlay
    if (showCelebration) {
        return (
            <div className="fixed inset-0 z-50 bg-navy-950 flex items-center justify-center animate-fade-in">
                <div className="text-center space-y-8 max-w-lg px-4">
                    <div className="text-8xl animate-bounce">🎓</div>
                    <h1 className="text-5xl font-black font-display text-white uppercase tracking-tight">
                        Congratulations!
                    </h1>
                    <p className="text-2xl text-white/90 font-heading">
                        You are now <span className="text-secondary font-bold">CCU – Sales Certified</span>
                    </p>
                    <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                        <div className="text-6xl mb-4">🏆</div>
                        <h3 className="text-xl font-bold text-[hsl(38,75%,50%)]">CCU Graduate Badge Earned</h3>
                        <p className="text-white/70 text-sm mt-2">Your live pipeline access in BuilderLync has been unlocked.</p>
                    </div>
                    <p className="text-white/60 italic text-sm">
                        "I am certified to represent Capital City Roofing and commit to operating at the Capital City standard."
                    </p>
                    <button
                        onClick={() => { setShowCelebration(false); navigate('/portal/university'); }}
                        className="bg-secondary hover:bg-red-700 text-white font-bold py-4 px-12 rounded-md transition-colors text-lg uppercase tracking-widest"
                    >
                        Continue
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pb-12 animate-fade-in">
            <SEOHead
                title={`Day ${dayNumber}: ${moduleData.title} | CCU`}
                description={`Capital City University Day ${dayNumber}`}
            />

            <div className="mb-8">
                <Link to="/portal/university" className="inline-flex items-center text-muted-foreground hover:text-secondary font-bold transition-colors mb-4 text-sm uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Curriculum
                </Link>
                <div className="flex items-center space-x-3 mb-2 flex-wrap gap-y-1">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Day {dayNumber}</span>
                    <span className="bg-navy-100 text-navy-900 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">{moduleData.type}</span>
                    <span className="bg-muted text-muted-foreground text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center">
                        <Clock className="w-3 h-3 mr-1" />{moduleData.contactHours} hrs
                    </span>
                    {isEthics && (
                        <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">⚖️ Ethics Gate</span>
                    )}
                    {isFinalExam && (
                        <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">🎓 Final Exam</span>
                    )}
                    {dayProg?.completed && (
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center">
                            <CheckCircle2 className="w-3 h-3 mr-1" />Complete
                        </span>
                    )}
                </div>
                <h1 className="text-4xl font-black font-display text-primary uppercase tracking-tight">
                    {moduleData.title}
                </h1>
                <p className="text-muted-foreground mt-1">{moduleData.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Video / Media Placeholder */}
                    <div className="aspect-video bg-navy-950 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-navy-2xl group border border-border">
                        {!dayProg?.videoWatched ? (
                            <>
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover opacity-20 group-hover:opacity-30 transition-opacity mix-blend-luminosity"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent"></div>
                                <button
                                    onClick={() => dayId && markVideoWatched(dayId)}
                                    className="relative z-10 w-20 h-20 bg-secondary/90 hover:bg-secondary rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,0,0,0.3)] transition-transform group-hover:scale-105"
                                >
                                    <PlayCircle className="w-10 h-10 ml-1" />
                                </button>
                                <div className="absolute bottom-4 left-4 right-4 z-10 text-center">
                                    <p className="text-white/60 text-sm">Click to watch the training video</p>
                                </div>
                            </>
                        ) : (
                            <div className="relative z-10 flex flex-col items-center">
                                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                                <span className="text-white/70 font-bold uppercase tracking-widest text-sm">Video Watched</span>
                                <span className="text-white/40 text-xs mt-1">+25 XP</span>
                            </div>
                        )}
                    </div>

                    {/* SLOs */}
                    <Card className="border-l-4 border-l-secondary bg-red-50/30">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-2 mb-3">
                                <Target className="w-5 h-5 text-secondary" />
                                <h3 className="font-black font-display text-navy-950 uppercase tracking-widest text-sm">Learning Outcomes</h3>
                            </div>
                            <ul className="space-y-2">
                                {moduleData.slos.map((slo, idx) => (
                                    <li key={idx} className="flex items-start text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{slo}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Lesson Content */}
                    <Card className="border-border shadow-sm">
                        <CardContent className="p-8 space-y-8">
                            {moduleData.sections.map((section, idx) => (
                                <div key={idx}>
                                    <h3 className="text-xl font-bold font-heading text-navy-950 mb-3 border-b border-border pb-2">
                                        {section.heading}
                                    </h3>
                                    <div className="text-muted-foreground leading-relaxed space-y-2 whitespace-pre-wrap">
                                        {section.body.split('**').map((part, i) =>
                                            i % 2 === 1 ? <strong key={i} className="text-navy-900">{part}</strong> : part
                                        )}
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Mandatory Acknowledgement */}
                    <Card className={`border-2 transition-colors ${dayProg?.acknowledgementSigned ? 'border-green-300 bg-green-50/30' : 'border-amber-300 bg-amber-50/30'}`}>
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-2 mb-3">
                                {dayProg?.acknowledgementSigned ? (
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                ) : (
                                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                                )}
                                <h3 className="font-black font-display text-navy-950 uppercase tracking-widest text-sm">Mandatory Acknowledgement</h3>
                            </div>
                            <p className="text-sm text-muted-foreground italic mb-4">"{moduleData.acknowledgement}"</p>
                            <button
                                onClick={() => dayId && signAcknowledgement(dayId)}
                                disabled={dayProg?.acknowledgementSigned}
                                className={`flex items-center space-x-2 font-bold text-sm transition-colors ${
                                    dayProg?.acknowledgementSigned
                                        ? 'text-green-700 cursor-default'
                                        : 'text-navy-950 hover:text-secondary cursor-pointer'
                                }`}
                            >
                                {dayProg?.acknowledgementSigned ? (
                                    <CheckSquare className="w-5 h-5 text-green-600" />
                                ) : (
                                    <Square className="w-5 h-5" />
                                )}
                                <span>{dayProg?.acknowledgementSigned ? 'Acknowledged (+25 XP)' : 'I understand and accept these expectations'}</span>
                            </button>
                        </CardContent>
                    </Card>

                    {/* Ethics Warning */}
                    {isEthics && !dayProg?.killSwitched && (
                        <Card className="border-2 border-red-400 bg-red-50">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-3">
                                    <ShieldAlert className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-red-800 mb-1">⚠️ Ethics Gate Warning</h3>
                                        <p className="text-sm text-red-700">
                                            This is the Insurance Ethics & Compliance module. <strong>Any quiz failure will immediately revoke your access.</strong> There are no retakes on this module. Review the material thoroughly before attempting the quiz.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Soft Lock Banner */}
                    {dayProg?.softLocked && !dayProg.softLockVideoRewatched && (
                        <Card className="border-2 border-amber-400 bg-amber-50">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-amber-800 mb-1">Module Soft Locked</h3>
                                        <p className="text-sm text-amber-700 mb-3">
                                            You've failed this quiz 3 times. You must re-watch the training video before the retake button unlocks.
                                        </p>
                                        <button
                                            onClick={() => dayId && markVideoWatched(dayId)}
                                            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-md transition-colors text-sm flex items-center space-x-2"
                                        >
                                            <Eye className="w-4 h-4" />
                                            <span>Re-Watch Video</span>
                                        </button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Hard Lock Banner (Day 14) */}
                    {dayProg?.hardLocked && (
                        <Card className="border-2 border-red-400 bg-red-50">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-3">
                                    <ShieldAlert className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-red-800 mb-1">Exam Hard Locked — Manager Override Required</h3>
                                        <p className="text-sm text-red-700 mb-2">
                                            You've failed the Final Certification Exam twice. Your account has been tagged as <strong>CCU – At Risk</strong>.
                                            A Manager must log a 1:1 coaching session and manually trigger an admin override to allow your third attempt.
                                        </p>
                                        <p className="text-xs text-red-600 font-bold">⚠️ A third failure will result in immediate access revocation.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {/* Quiz Section */}
                    {quizQuestions.length > 0 && (
                        <Card className="border-border shadow-sm overflow-hidden">
                            <div className="bg-navy-950 text-white p-6">
                                <h3 className="font-black font-display uppercase tracking-widest text-lg flex items-center space-x-2">
                                    <Award className="w-5 h-5 text-[hsl(38,75%,50%)]" />
                                    <span>{isFinalExam ? 'Final Certification Exam' : 'Knowledge Assessment'}</span>
                                </h3>
                                <p className="text-white/70 text-sm mt-1">
                                    {isFinalExam
                                        ? `Score 90% or higher (18/20) to earn your CCU – Sales Certified badge.`
                                        : `Score 80% or higher to pass. ${isEthics ? '⚠️ ONE attempt only — any failure revokes access.' : 'Questions are randomized.'}`
                                    }
                                </p>
                            </div>
                            <CardContent className="p-6">
                                {!quizActive ? (
                                    <div className="text-center py-8">
                                        {!canTakeQuiz(dayId || '') ? (
                                            <div className="space-y-4">
                                                <Lock className="w-10 h-10 text-muted-foreground mx-auto" />
                                                <p className="text-muted-foreground">
                                                    {dayProg?.hardLocked
                                                        ? 'Manager override required to unlock this exam.'
                                                        : dayProg?.softLocked && !dayProg.softLockVideoRewatched
                                                        ? 'Re-watch the video above to unlock the retake.'
                                                        : 'Complete all steps (video, checklist, acknowledgement) to unlock the quiz.'}
                                                </p>
                                            </div>
                                        ) : (
                                            <>
                                                <p className="text-muted-foreground mb-4">
                                                    {dayProg?.bestQuizScore ? `Your best score: ${dayProg.bestQuizScore}%` : 'You haven\'t taken this quiz yet.'}
                                                </p>
                                                <button
                                                    onClick={() => { setQuizActive(true); setSelectedAnswers({}); setQuizSubmitted(false); setQuizResult(null); }}
                                                    className="bg-secondary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors"
                                                >
                                                    {dayProg?.quizAttempts?.length ? 'Retake Quiz' : 'Start Quiz'}
                                                </button>
                                            </>
                                        )}
                                    </div>
                                ) : quizSubmitted ? (
                                    <div className="space-y-6">
                                        {/* Results Banner */}
                                        <div className={`p-6 rounded-xl text-center ${quizPassed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                                            <div className="text-4xl font-black font-display mb-2">
                                                {quizScore}/{activeQuiz.length}
                                            </div>
                                            <p className={`font-bold ${quizPassed ? 'text-green-700' : 'text-red-700'}`}>
                                                {quizPassed ? '🎉 Passed! Great work.' : quizResult?.killSwitched ? '🚫 Access Revoked.' : quizResult?.hardLocked ? '🔒 Exam Hard Locked.' : quizResult?.softLocked ? '⚠️ Module Soft Locked.' : '❌ Not quite. Review the material and try again.'}
                                            </p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {Math.round((quizScore / activeQuiz.length) * 100)}% — {threshold * 100}% required
                                            </p>
                                        </div>
                                        {/* Answer Review */}
                                        {activeQuiz.map((q, idx) => {
                                            const correct = selectedAnswers[idx] === q.correctIndex;
                                            return (
                                                <div key={idx} className={`p-4 rounded-lg ${correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                                                    <div className="flex items-start space-x-2 mb-2">
                                                        {correct ? <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" /> : <XCircle className="w-5 h-5 text-red-600 shrink-0" />}
                                                        <p className="font-bold text-navy-950 text-sm">{q.question}</p>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground ml-7 italic">{q.explanation}</p>
                                                </div>
                                            );
                                        })}
                                        {!quizResult?.killSwitched && !quizResult?.hardLocked && !quizPassed && (
                                            <button onClick={handleRetakeQuiz} className="w-full bg-navy-950 hover:bg-navy-800 text-white font-bold py-3 rounded-md transition-colors">
                                                {dayProg?.softLocked ? 'Re-Watch Video to Unlock Retake' : 'Retake Quiz'}
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                                            <span>Question {currentQ + 1} of {activeQuiz.length}</span>
                                            <span>{Object.keys(selectedAnswers).length}/{activeQuiz.length} answered</span>
                                        </div>
                                        {/* Progress bar for exam */}
                                        <div className="bg-muted rounded-full h-2 overflow-hidden">
                                            <div
                                                className="bg-secondary h-full rounded-full transition-all duration-300"
                                                style={{ width: `${((currentQ + 1) / activeQuiz.length) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className="bg-muted rounded-xl p-6">
                                            {activeQuiz[currentQ].isScenario && (
                                                <span className="text-xs font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full uppercase tracking-wider mb-3 inline-block">Scenario</span>
                                            )}
                                            <p className="font-bold text-navy-950 text-lg mb-4">{activeQuiz[currentQ].question}</p>
                                            <div className="space-y-3">
                                                {activeQuiz[currentQ].options.map((opt, optIdx) => (
                                                    <button
                                                        key={optIdx}
                                                        onClick={() => handleSelectAnswer(currentQ, optIdx)}
                                                        className={`w-full text-left p-4 rounded-lg border-2 transition-all font-medium text-sm ${selectedAnswers[currentQ] === optIdx
                                                            ? 'border-secondary bg-red-50 text-navy-950'
                                                            : 'border-border bg-white hover:border-navy-300 text-muted-foreground'
                                                        }`}
                                                    >
                                                        <span className="font-bold mr-2">{String.fromCharCode(65 + optIdx)}.</span> {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-between">
                                            <button
                                                onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                                                disabled={currentQ === 0}
                                                className="px-6 py-2 rounded-md font-bold text-sm disabled:opacity-30 bg-white border border-border hover:bg-muted transition-colors"
                                            >
                                                Previous
                                            </button>
                                            {currentQ < activeQuiz.length - 1 ? (
                                                <button
                                                    onClick={() => setCurrentQ(currentQ + 1)}
                                                    className="px-6 py-2 rounded-md font-bold text-sm bg-navy-950 text-white hover:bg-navy-800 transition-colors"
                                                >
                                                    Next
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={handleSubmitQuiz}
                                                    disabled={Object.keys(selectedAnswers).length < activeQuiz.length}
                                                    className="px-8 py-2 rounded-md font-bold text-sm bg-secondary text-white hover:bg-red-700 transition-colors disabled:opacity-30"
                                                >
                                                    Submit {isFinalExam ? 'Exam' : 'Quiz'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Progress Checklist */}
                    <Card className="bg-navy-50 border-none shadow-sm">
                        <CardContent className="p-6">
                            <h4 className="font-bold font-heading text-navy-950 mb-4">Day {dayNumber} Checklist</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle2 className={`w-5 h-5 mr-2 shrink-0 ${dayProg?.videoWatched ? 'text-green-600' : 'text-border'}`} />
                                    <div>
                                        <span className="text-sm text-muted-foreground">Watch training video</span>
                                        {!dayProg?.videoWatched && <span className="text-xs text-muted-foreground/50 ml-1">(+25 XP)</span>}
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className={`w-5 h-5 mr-2 shrink-0 ${dayProg?.checklistComplete ? 'text-green-600' : 'text-border'}`} />
                                    <div>
                                        <span className="text-sm text-muted-foreground">Review lesson content</span>
                                        {!dayProg?.checklistComplete && <span className="text-xs text-muted-foreground/50 ml-1">(+25 XP)</span>}
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className={`w-5 h-5 mr-2 shrink-0 ${dayProg?.acknowledgementSigned ? 'text-green-600' : 'text-border'}`} />
                                    <div>
                                        <span className="text-sm text-muted-foreground">Sign acknowledgement</span>
                                        {!dayProg?.acknowledgementSigned && <span className="text-xs text-muted-foreground/50 ml-1">(+25 XP)</span>}
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className={`w-5 h-5 mr-2 shrink-0 ${dayProg?.bestQuizScore && dayProg.bestQuizScore >= (threshold * 100) ? 'text-green-600' : 'text-border'}`} />
                                    <div>
                                        <span className="text-sm text-muted-foreground">Pass quiz ({threshold * 100}%+)</span>
                                        <span className="text-xs text-muted-foreground/50 ml-1">(+150 XP)</span>
                                    </div>
                                </li>
                            </ul>

                            {/* Mark Content Reviewed */}
                            {!dayProg?.checklistComplete && (
                                <button
                                    onClick={() => dayId && markChecklistComplete(dayId)}
                                    className="w-full mt-4 bg-white hover:bg-gray-50 text-navy-950 border border-border font-bold py-2.5 px-4 rounded-md transition-colors text-sm flex justify-center items-center space-x-2"
                                >
                                    <FileText className="w-4 h-4" />
                                    <span>Mark Content Reviewed (+25 XP)</span>
                                </button>
                            )}

                            {/* Complete Day */}
                            {!dayProg?.completed ? (
                                <button
                                    onClick={handleCompleteDay}
                                    disabled={!canComplete}
                                    className="w-full mt-4 bg-navy-950 hover:bg-navy-800 text-white font-bold py-3 px-4 rounded-md transition-colors text-sm uppercase tracking-widest flex justify-center items-center space-x-2 disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    <span>Complete Day {dayNumber} (+100 XP)</span>
                                </button>
                            ) : (
                                <div className="w-full mt-4 bg-green-100 text-green-700 font-bold py-3 px-4 rounded-md text-sm uppercase tracking-widest text-center flex justify-center items-center space-x-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Day {dayNumber} Completed</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Best Score Card */}
                    {dayProg?.bestQuizScore !== undefined && dayProg.bestQuizScore > 0 && (
                        <Card className="border-border shadow-sm">
                            <CardContent className="p-6 text-center">
                                <h4 className="font-bold font-heading text-navy-950 mb-2">Best Quiz Score</h4>
                                <div className={`text-4xl font-black font-display ${dayProg.bestQuizScore >= (threshold * 100) ? 'text-green-600' : 'text-red-600'}`}>
                                    {dayProg.bestQuizScore}%
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">{dayProg.quizAttempts?.length || 0} attempt(s)</p>
                            </CardContent>
                        </Card>
                    )}

                    {/* Support Card */}
                    <Card className="border-border shadow-sm">
                        <CardContent className="p-6">
                            <h4 className="font-bold font-heading text-navy-950 mb-2">Need Support?</h4>
                            <p className="text-sm text-muted-foreground mb-4">Stuck on a concept? Reach out to your Coach or Regional Manager.</p>
                            <a href="mailto:support@capitalcityroofing.net" className="text-secondary font-bold text-sm hover:underline">
                                support@capitalcityroofing.net
                            </a>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default UniversityModule;
