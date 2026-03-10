import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent } from '../../components/ui/card';
import { ArrowLeft, PlayCircle, FileText, CheckCircle2, Lock, Award, XCircle, Clock, Target } from 'lucide-react';
import { universityModules } from '../../data/universityContent';
import { quizPools, PASS_THRESHOLD } from '../../data/universityQuizzes';
import { useUniversityProgress } from '../../contexts/UniversityProgressContext';

const UniversityModule: React.FC = () => {
    const { moduleId } = useParams<{ moduleId: string }>();
    const { isModuleUnlocked, getModuleProgress, completeModule, submitQuiz } = useUniversityProgress();

    const moduleData = moduleId ? universityModules[moduleId] : null;
    const unlocked = moduleId ? isModuleUnlocked(moduleId) : false;
    const modProgress = moduleId ? getModuleProgress(moduleId) : undefined;
    const quizQuestions = moduleId ? (quizPools[moduleId] || []) : [];

    // Quiz State
    const [quizActive, setQuizActive] = useState(false);
    const [currentQ, setCurrentQ] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);

    // Randomize 4 questions from pool
    const activeQuiz = useMemo(() => {
        const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(4, shuffled.length));
    }, [quizActive]); // Re-randomize when quiz starts

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
                <h2 className="text-2xl font-black font-display uppercase tracking-widest text-primary">Module Locked</h2>
                <p className="text-muted-foreground">Complete the previous module to unlock this one.</p>
                <Link to="/portal/university" className="text-secondary font-bold hover:underline flex items-center">
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
        if (!moduleId) return;
        const score = activeQuiz.reduce((acc, q, idx) => {
            return acc + (selectedAnswers[idx] === q.correctIndex ? 1 : 0);
        }, 0);
        submitQuiz(moduleId, score, activeQuiz.length);
        setQuizSubmitted(true);
    };

    const handleRetakeQuiz = () => {
        setSelectedAnswers({});
        setCurrentQ(0);
        setQuizSubmitted(false);
        setQuizActive(false);
        setTimeout(() => setQuizActive(true), 100); // Force re-randomize
    };

    const quizScore = quizSubmitted ? activeQuiz.reduce((acc, q, idx) => acc + (selectedAnswers[idx] === q.correctIndex ? 1 : 0), 0) : 0;
    const quizPassed = quizSubmitted && (quizScore / activeQuiz.length) >= PASS_THRESHOLD;

    return (
        <div className="pb-12 animate-fade-in">
            <SEOHead
                title={`${moduleData.title} | CCU`}
                description={`Capital City University Module ${moduleId}`}
            />

            <div className="mb-8">
                <Link to="/portal/university" className="inline-flex items-center text-muted-foreground hover:text-secondary font-bold transition-colors mb-4 text-sm uppercase tracking-widest">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Curriculum
                </Link>
                <div className="flex items-center space-x-3 mb-2">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm">Module {moduleId}</span>
                    <span className="bg-navy-100 text-navy-900 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">{moduleData.type}</span>
                    <span className="bg-muted text-muted-foreground text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center">
                        <Clock className="w-3 h-3 mr-1" />{moduleData.contactHours} hrs
                    </span>
                    {modProgress?.completed && (
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center">
                            <CheckCircle2 className="w-3 h-3 mr-1" />Complete
                        </span>
                    )}
                </div>
                <h1 className="text-4xl font-black font-display text-primary uppercase tracking-tight">
                    {moduleData.title}
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Media Placeholder */}
                    <div className="aspect-video bg-navy-950 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-navy-2xl group border border-border">
                        {moduleData.type === 'video' || moduleData.type === 'interactive' ? (
                            <>
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover opacity-20 group-hover:opacity-30 transition-opacity mix-blend-luminosity"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent"></div>
                                <button className="relative z-10 w-20 h-20 bg-secondary/90 hover:bg-secondary rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,0,0,0.3)] transition-transform group-hover:scale-105">
                                    <PlayCircle className="w-10 h-10 ml-1" />
                                </button>
                            </>
                        ) : (
                            <div className="relative z-10 flex flex-col items-center">
                                <FileText className="w-16 h-16 text-white/20 mb-4" />
                                <span className="text-white/50 font-bold uppercase tracking-widest">Document Reader</span>
                            </div>
                        )}
                    </div>

                    {/* SLOs */}
                    <Card className="border-l-4 border-l-secondary bg-red-50/30">
                        <CardContent className="p-6">
                            <div className="flex items-center space-x-2 mb-3">
                                <Target className="w-5 h-5 text-secondary" />
                                <h3 className="font-black font-display text-navy-950 uppercase tracking-widest text-sm">Student Learning Outcomes</h3>
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

                    {/* Lesson Text Content */}
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

                    {/* Quiz Section */}
                    {quizQuestions.length > 0 && (
                        <Card className="border-border shadow-sm overflow-hidden">
                            <div className="bg-navy-950 text-white p-6">
                                <h3 className="font-black font-display uppercase tracking-widest text-lg flex items-center space-x-2">
                                    <Award className="w-5 h-5 text-[hsl(38,75%,50%)]" />
                                    <span>Knowledge Assessment</span>
                                </h3>
                                <p className="text-white/70 text-sm mt-1">Score 80% or higher to pass. Questions are randomized from a pool.</p>
                            </div>
                            <CardContent className="p-6">
                                {!quizActive ? (
                                    <div className="text-center py-8">
                                        <p className="text-muted-foreground mb-4">
                                            {modProgress?.bestQuizScore ? `Your best score: ${modProgress.bestQuizScore}%` : 'You haven\'t taken this quiz yet.'}
                                        </p>
                                        <button
                                            onClick={() => { setQuizActive(true); setSelectedAnswers({}); setQuizSubmitted(false); }}
                                            className="bg-secondary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors"
                                        >
                                            {modProgress?.quizAttempts.length ? 'Retake Quiz' : 'Start Quiz'}
                                        </button>
                                    </div>
                                ) : quizSubmitted ? (
                                    <div className="space-y-6">
                                        {/* Results Banner */}
                                        <div className={`p-6 rounded-xl text-center ${quizPassed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                                            <div className="text-4xl font-black font-display mb-2">
                                                {quizScore}/{activeQuiz.length}
                                            </div>
                                            <p className={`font-bold ${quizPassed ? 'text-green-700' : 'text-red-700'}`}>
                                                {quizPassed ? '🎉 Passed! Great work.' : '❌ Not quite. Review the material and try again.'}
                                            </p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {Math.round((quizScore / activeQuiz.length) * 100)}% — {PASS_THRESHOLD * 100}% required to pass
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
                                        <button onClick={handleRetakeQuiz} className="w-full bg-navy-950 hover:bg-navy-800 text-white font-bold py-3 rounded-md transition-colors">
                                            Retake Quiz (New Questions)
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                                            <span>Question {currentQ + 1} of {activeQuiz.length}</span>
                                            <span>{Object.keys(selectedAnswers).length}/{activeQuiz.length} answered</span>
                                        </div>
                                        <div className="bg-muted rounded-xl p-6">
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
                                                    Submit Quiz
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
                    <Card className="bg-navy-50 border-none shadow-sm">
                        <CardContent className="p-6">
                            <h4 className="font-bold font-heading text-navy-950 mb-4">Module Progress</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle2 className={`w-5 h-5 mr-2 shrink-0 ${modProgress?.completed ? 'text-green-600' : 'text-border'}`} />
                                    <span className="text-sm text-muted-foreground">Review training materials</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className={`w-5 h-5 mr-2 shrink-0 ${modProgress?.bestQuizScore && modProgress.bestQuizScore >= 80 ? 'text-green-600' : 'text-border'}`} />
                                    <span className="text-sm text-muted-foreground">Pass knowledge assessment (80%+)</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className={`w-5 h-5 mr-2 shrink-0 ${modProgress?.completed ? 'text-green-600' : 'text-border'}`} />
                                    <span className="text-sm text-muted-foreground">Mark module as complete</span>
                                </li>
                            </ul>

                            {!modProgress?.completed ? (
                                <button
                                    onClick={() => moduleId && completeModule(moduleId)}
                                    className="w-full mt-6 bg-navy-950 hover:bg-navy-800 text-white font-bold py-3 px-4 rounded-md transition-colors text-sm uppercase tracking-widest flex justify-center items-center space-x-2"
                                >
                                    <span>Complete Module (+100 XP)</span>
                                </button>
                            ) : (
                                <div className="w-full mt-6 bg-green-100 text-green-700 font-bold py-3 px-4 rounded-md text-sm uppercase tracking-widest text-center flex justify-center items-center space-x-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Module Completed</span>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {modProgress?.bestQuizScore !== undefined && modProgress.bestQuizScore > 0 && (
                        <Card className="border-border shadow-sm">
                            <CardContent className="p-6 text-center">
                                <h4 className="font-bold font-heading text-navy-950 mb-2">Best Quiz Score</h4>
                                <div className={`text-4xl font-black font-display ${modProgress.bestQuizScore >= 80 ? 'text-green-600' : 'text-red-600'}`}>
                                    {modProgress.bestQuizScore}%
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">{modProgress.quizAttempts.length} attempt(s)</p>
                            </CardContent>
                        </Card>
                    )}

                    <Card className="border-border shadow-sm">
                        <CardContent className="p-6">
                            <h4 className="font-bold font-heading text-navy-950 mb-2">Need Support?</h4>
                            <p className="text-sm text-muted-foreground mb-4">Stuck on a concept? Reach out to your designated Coach or Regional Manager.</p>
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
