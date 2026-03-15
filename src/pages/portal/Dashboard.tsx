import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import { useAuth } from '../../contexts/AuthContext';
import { useUniversityProgress } from '../../contexts/UniversityProgressContext';

const DashboardCharts = lazy(() => import('./DashboardCharts'));
import {
    DollarSign,
    TrendingUp,
    Users,
    CheckCircle,
    ArrowRight,
    Activity,
    GraduationCap,
    ShieldCheck,
    Headset,
    BookOpen,
    FileText,
    Rocket,
    Zap,
    CheckCircle2,
    Bell,
    AlertCircle,
    Clock,
    Info,
    Settings,
    Target,
    BarChart3
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

// --- Compliance sub-statuses ---
interface ComplianceItem {
    label: string;
    status: 'complete' | 'in-review' | 'action-needed' | 'missing';
}

const complianceItems: ComplianceItem[] = [
    { label: 'Entity Formation', status: 'complete' },
    { label: 'Insurance Docs', status: 'complete' },
    { label: 'W-9 / Banking', status: 'action-needed' },
    { label: 'Territory Agreement', status: 'complete' },
    { label: 'State/Local Requirements', status: 'in-review' },
];

const complianceStatusConfig: Record<ComplianceItem['status'], { label: string; color: string; icon: typeof CheckCircle }> = {
    'complete': { label: 'Complete', color: 'text-success', icon: CheckCircle },
    'in-review': { label: 'In Review', color: 'text-blue-500', icon: Clock },
    'action-needed': { label: 'Action Needed', color: 'text-[hsl(38,75%,50%)]', icon: AlertCircle },
    'missing': { label: 'Missing', color: 'text-destructive', icon: AlertCircle },
};

// --- Launch checklist categories ---
interface ChecklistItem {
    label: string;
    done: boolean;
}

interface ChecklistCategory {
    title: string;
    icon: typeof Rocket;
    items: ChecklistItem[];
}

// --- Certification levels ---
const getCertificationStatus = (completedDays: number) => {
    if (completedDays >= 14) return { label: 'Certified', color: 'text-success', bg: 'bg-success/10' };
    if (completedDays >= 8) return { label: 'Active', color: 'text-blue-500', bg: 'bg-blue-500/10' };
    if (completedDays >= 4) return { label: 'Provisional', color: 'text-[hsl(38,75%,50%)]', bg: 'bg-[hsl(38,75%,50%)]/10' };
    return { label: 'Onboarding', color: 'text-white/60', bg: 'bg-white/10' };
};

export const Dashboard: React.FC = () => {
    const { user } = useAuth();
    const { progress } = useUniversityProgress();

    if (!user) return null;

    const completedModules = Object.values(progress.days).filter(d => d.completed).length;
    const totalModules = 14;
    const trainingPct = Math.round((completedModules / totalModules) * 100);
    const isEarlyStage = trainingPct < 50;
    const certStatus = getCertificationStatus(completedModules);

    // Compliance summary
    const complianceComplete = complianceItems.filter(c => c.status === 'complete').length;
    const complianceTotal = complianceItems.length;
    const hasComplianceIssues = complianceItems.some(c => c.status === 'action-needed' || c.status === 'missing');

    // --- Launch checklist grouped by category ---
    const launchCategories: ChecklistCategory[] = [
        {
            title: 'Business Setup',
            icon: FileText,
            items: [
                { label: 'Entity formed (LLC / Corp)', done: true },
                { label: 'Insurance docs uploaded', done: true },
                { label: 'Banking / payout setup', done: false },
                { label: 'Territory agreement signed', done: true },
            ]
        },
        {
            title: 'Systems Setup',
            icon: Settings,
            items: [
                { label: 'CRM connected (GoHighLevel)', done: true },
                { label: 'Estimating tools connected (Roofr)', done: true },
                { label: 'AI automation enabled', done: false },
                { label: 'Phone / email configured', done: false },
            ]
        },
        {
            title: 'Training',
            icon: GraduationCap,
            items: [
                { label: 'Days 1–7 complete (Foundations)', done: completedModules >= 7 },
                { label: 'Days 8–13 complete (Insurance & Systems)', done: completedModules >= 13 },
                { label: 'Day 14 Final Exam passed', done: completedModules >= 14 },
                { label: 'Sales readiness confirmed', done: completedModules >= 14 },
            ]
        },
        {
            title: 'Market Activation',
            icon: Target,
            items: [
                { label: 'First lead assigned', done: false },
                { label: 'First appointment scheduled', done: false },
                { label: 'First estimate delivered', done: false },
                { label: 'First contract signed', done: false },
            ]
        },
    ];

    const allChecklistItems = launchCategories.flatMap(c => c.items);
    const checklistDone = allChecklistItems.filter(i => i.done).length;
    const checklistTotal = allChecklistItems.length;
    const checklistPct = Math.round((checklistDone / checklistTotal) * 100);

    // --- Dependency-driven next actions ---
    const nextActions: { label: string; context: string; link: string; icon: typeof GraduationCap; priority: 'high' | 'medium' | 'low' }[] = [];

    // Training always first if incomplete
    if (completedModules < totalModules) {
        nextActions.push({
            label: completedModules === 0 ? 'Start Day 1: The Capital City Way' : `Continue Training — Day ${Math.min(completedModules + 1, totalModules)}`,
            context: completedModules === 0 ? 'Required before Day 7 Gate • ~18 min' : `${totalModules - completedModules} days remaining • Unlocks next certification level`,
            link: '/portal/university',
            icon: GraduationCap,
            priority: 'high'
        });
    }

    // Compliance gaps outrank general tasks
    if (hasComplianceIssues) {
        nextActions.push({
            label: 'Complete Missing Compliance Items',
            context: `${complianceTotal - complianceComplete} items need attention • Required for Active status`,
            link: '/portal/profile',
            icon: ShieldCheck,
            priority: 'high'
        });
    }

    // Systems setup if incomplete
    const systemsCategory = launchCategories.find(c => c.title === 'Systems Setup');
    const systemsIncomplete = systemsCategory?.items.filter(i => !i.done).length || 0;
    if (systemsIncomplete > 0) {
        nextActions.push({
            label: 'Complete Systems Setup',
            context: `${systemsIncomplete} system connections remaining • Required for market activation`,
            link: '/portal/profile',
            icon: Settings,
            priority: 'medium'
        });
    }

    // SOPs after initial training
    if (completedModules >= 4) {
        nextActions.push({
            label: 'Review Core SOPs & Playbooks',
            context: 'Standardized operating procedures for production, sales, and fulfillment',
            link: '/portal/sops',
            icon: FileText,
            priority: 'low'
        });
    }

    // Limit to top 3
    const displayActions = nextActions.slice(0, 3);

    // Announcements
    const announcements = [
        { title: 'New Market Expansion: Nashville, TN', time: '2 days ago', type: 'update' as const },
        { title: 'Q1 Leaderboard Results Published', time: '5 days ago', type: 'achievement' as const },
        { title: 'Updated Supplement SOP — v2.4', time: '1 week ago', type: 'sop' as const },
    ];

    return (
        <>
            <SEOHead title="Operator Dashboard | Capital City Roofing" description="Partner portal dashboard — your mission control for operations, training, and performance." />

            <div className="space-y-8 animate-fade-in">
                {/* Header */}
                <div>
                    <h1 className="text-4xl font-black font-display text-primary uppercase tracking-tight mb-2">
                        Welcome Back, {user.name.split(' ')[0]}
                    </h1>
                    <p className="text-muted-foreground">
                        Here's your mission control. Focus on what matters most today.
                    </p>
                </div>

                {/* P1: Admin Preview Banner */}
                {user.role === 'admin' && (
                    <div className="flex items-start space-x-3 bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <Info className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-sm font-bold text-blue-900">Admin Preview</p>
                            <p className="text-xs text-blue-700">Sample operator data shown for layout validation. Dashboard data will reflect live CRM and production metrics once connected.</p>
                        </div>
                    </div>
                )}

                {/* Status Strip */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="bg-navy-950 text-white rounded-xl p-4 flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                            <Rocket className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-white/60">Launch</p>
                            <p className="text-xl font-black font-display">{checklistPct}%</p>
                        </div>
                    </div>
                    <div className="bg-navy-950 text-white rounded-xl p-4 flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-[hsl(38,75%,50%)]/20 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-5 h-5 text-[hsl(38,75%,50%)]" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-white/60">Compliance</p>
                            <p className={`text-xl font-black font-display ${hasComplianceIssues ? 'text-[hsl(38,75%,50%)]' : 'text-success'}`}>
                                {complianceComplete}/{complianceTotal}
                            </p>
                        </div>
                    </div>
                    <div className="bg-navy-950 text-white rounded-xl p-4 flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center shrink-0">
                            <GraduationCap className="w-5 h-5 text-success" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-white/60">Training</p>
                            <p className="text-xl font-black font-display">{trainingPct}%</p>
                        </div>
                    </div>
                    <div className="bg-navy-950 text-white rounded-xl p-4 flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-400/20 flex items-center justify-center shrink-0">
                            <Headset className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-white/60">Tickets</p>
                            <p className="text-xl font-black font-display">0 Open</p>
                        </div>
                    </div>
                    <div className="bg-navy-950 text-white rounded-xl p-4 flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-400/20 flex items-center justify-center shrink-0">
                            <BarChart3 className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-white/60">Market</p>
                            <p className="text-xl font-black font-display">{isEarlyStage ? 'Setup' : 'Active'}</p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* P5: Smarter Next Actions */}
                        <Card className="border-secondary/30 shadow-sm">
                            <CardHeader className="border-b border-border pb-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="font-heading font-black text-xl text-primary flex items-center">
                                        <Zap className="w-5 h-5 text-secondary mr-2" />
                                        Next Actions
                                    </CardTitle>
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{displayActions.length} items</span>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border">
                                    {displayActions.map((action, idx) => (
                                        <Link key={idx} to={action.link} className="flex items-center p-5 hover:bg-muted/50 transition-colors group">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mr-4 ${
                                                action.priority === 'high' ? 'bg-secondary/10' :
                                                action.priority === 'medium' ? 'bg-[hsl(38,75%,50%)]/10' : 'bg-primary/5'
                                            }`}>
                                                <action.icon className={`w-5 h-5 ${
                                                    action.priority === 'high' ? 'text-secondary' :
                                                    action.priority === 'medium' ? 'text-[hsl(38,75%,50%)]' : 'text-primary'
                                                }`} />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-bold text-navy-950 group-hover:text-secondary transition-colors">{action.label}</p>
                                                <p className="text-xs text-muted-foreground mt-0.5">
                                                    {action.context}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* P4: Categorized Launch Checklist */}
                        <Card className="border-border shadow-sm">
                            <CardHeader className="border-b border-border pb-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="font-heading font-black text-xl text-primary flex items-center">
                                        <CheckCircle2 className="w-5 h-5 text-success mr-2" />
                                        Launch Readiness
                                    </CardTitle>
                                    <span className="text-sm font-bold text-navy-950">{checklistDone}/{checklistTotal}</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2 mt-3">
                                    <div className="bg-success h-2 rounded-full transition-all duration-500" style={{ width: `${checklistPct}%` }}></div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                {launchCategories.map((category, catIdx) => {
                                    const catDone = category.items.filter(i => i.done).length;
                                    const CategoryIcon = category.icon;
                                    return (
                                        <div key={catIdx} className="border-b border-border last:border-b-0">
                                            <div className="flex items-center px-6 py-3 bg-muted/30">
                                                <CategoryIcon className="w-4 h-4 text-muted-foreground mr-2" />
                                                <span className="text-xs font-black text-navy-800 uppercase tracking-widest flex-1">{category.title}</span>
                                                <span className="text-xs font-bold text-muted-foreground">{catDone}/{category.items.length}</span>
                                            </div>
                                            {category.items.map((item, idx) => (
                                                <div key={idx} className="flex items-center p-3 px-6">
                                                    {item.done ? (
                                                        <CheckCircle className="w-4 h-4 text-success mr-3 shrink-0" />
                                                    ) : (
                                                        <div className="w-4 h-4 rounded-full border-2 border-border mr-3 shrink-0"></div>
                                                    )}
                                                    <span className={`text-sm ${item.done ? 'text-muted-foreground line-through' : 'text-navy-950 font-medium'}`}>
                                                        {item.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </CardContent>
                        </Card>

                        {/* P2: KPI Cards — state-aware */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { label: 'Revenue YTD', value: isEarlyStage ? '—' : '$637K', icon: DollarSign, iconBg: 'bg-success/10', iconColor: 'text-success', sub: isEarlyStage ? 'Tracking begins at activation' : null },
                                { label: 'Active Jobs', value: isEarlyStage ? '0' : '8', icon: Activity, iconBg: 'bg-secondary/10', iconColor: 'text-secondary', sub: isEarlyStage ? 'No jobs yet' : '4 starting this week' },
                                { label: 'Leads', value: isEarlyStage ? '—' : '142', icon: Users, iconBg: 'bg-[hsl(38,75%,50%)]/10', iconColor: 'text-[hsl(38,75%,50%)]', sub: isEarlyStage ? 'Pipeline activating' : null },
                                { label: 'Close Rate', value: isEarlyStage ? '—' : '38.5%', icon: TrendingUp, iconBg: 'bg-primary/10', iconColor: 'text-primary', sub: isEarlyStage ? 'Requires active pipeline' : null },
                            ].map((kpi, idx) => (
                                <Card key={idx} className="border-border shadow-sm">
                                    <CardContent className="p-5">
                                        <div className="flex justify-between items-start mb-3">
                                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{kpi.label}</p>
                                            <div className={`p-2 ${kpi.iconBg} rounded-lg`}>
                                                <kpi.icon className={`w-4 h-4 ${kpi.iconColor}`} />
                                            </div>
                                        </div>
                                        <h3 className={`text-2xl font-black font-heading ${kpi.value === '—' ? 'text-muted-foreground' : 'text-navy-950'}`}>{kpi.value}</h3>
                                        {kpi.sub && <p className="text-xs text-muted-foreground mt-1">{kpi.sub}</p>}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Charts — State-aware */}
                        {isEarlyStage ? (
                            <Card className="border-border shadow-sm">
                                <CardContent className="p-8 text-center">
                                    <BarChart3 className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                                    <p className="font-bold text-navy-950 mb-1">Performance Charts</p>
                                    <p className="text-sm text-muted-foreground max-w-md mx-auto">
                                        Charts will populate as your CRM data begins flowing. Complete onboarding and activate your market to see real-time performance data.
                                    </p>
                                </CardContent>
                            </Card>
                        ) : (
                            <Suspense fallback={
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <Card className="lg:col-span-2 shadow-sm border-border animate-pulse"><CardContent className="p-6"><div className="h-[250px] bg-muted rounded-lg"></div></CardContent></Card>
                                    <Card className="shadow-sm border-border animate-pulse"><CardContent className="p-6"><div className="h-[250px] bg-muted rounded-lg"></div></CardContent></Card>
                                </div>
                            }>
                                <DashboardCharts />
                            </Suspense>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* P3: Compliance Detail */}
                        <Card className="border-border shadow-sm">
                            <CardHeader className="border-b border-border pb-4">
                                <CardTitle className="font-heading font-black text-lg text-primary flex items-center">
                                    <ShieldCheck className="w-5 h-5 text-[hsl(38,75%,50%)] mr-2" />
                                    Compliance Status
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border">
                                    {complianceItems.map((item, idx) => {
                                        const config = complianceStatusConfig[item.status];
                                        const StatusIcon = config.icon;
                                        return (
                                            <div key={idx} className="flex items-center p-4 px-6">
                                                <StatusIcon className={`w-4 h-4 ${config.color} mr-3 shrink-0`} />
                                                <span className="text-sm font-medium text-navy-950 flex-1">{item.label}</span>
                                                <span className={`text-xs font-bold uppercase tracking-widest ${config.color}`}>{config.label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>

                        {/* P6: Certification-First Training */}
                        <Card className="border-border shadow-sm bg-navy-950 text-white">
                            <CardHeader className="border-b border-white/10 pb-4">
                                <CardTitle className="font-heading font-black text-lg text-white flex items-center">
                                    <GraduationCap className="w-5 h-5 text-secondary mr-2" />
                                    Training & Certification
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-5">
                                {/* Certification Status */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">Certification</span>
                                    <span className={`text-sm font-black px-3 py-1 rounded-full ${certStatus.bg} ${certStatus.color}`}>
                                        {certStatus.label}
                                    </span>
                                </div>

                                {/* Track */}
                                <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                                    <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Your Track</p>
                                    <p className="text-sm font-bold text-white">Owner / Operator</p>
                                </div>

                                {/* Progress bar */}
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-bold">{completedModules}/{totalModules} Days</span>
                                        <span className="text-white/60">{trainingPct}%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <div className="bg-secondary h-2 rounded-full transition-all" style={{ width: `${trainingPct}%` }}></div>
                                    </div>
                                </div>

                                {/* What unlocks next */}
                                <div className="space-y-2 mb-5">
                                    {completedModules < 7 && (
                                        <div className="flex items-start text-xs text-white/70">
                                            <Zap className="w-3 h-3 text-[hsl(38,75%,50%)] mr-2 mt-0.5 shrink-0" />
                                            <span>Day 7 complete → unlocks lead shadowing access</span>
                                        </div>
                                    )}
                                    {completedModules >= 7 && completedModules < 13 && (
                                        <div className="flex items-start text-xs text-white/70">
                                            <Zap className="w-3 h-3 text-[hsl(38,75%,50%)] mr-2 mt-0.5 shrink-0" />
                                            <span>Day 13 complete → unlocks Final Certification Exam</span>
                                        </div>
                                    )}
                                    {completedModules >= 13 && completedModules < 14 && (
                                        <div className="flex items-start text-xs text-white/70">
                                            <Zap className="w-3 h-3 text-[hsl(38,75%,50%)] mr-2 mt-0.5 shrink-0" />
                                            <span>Pass Day 14 Final Exam → CCU Sales Certified</span>
                                        </div>
                                    )}
                                    {completedModules >= 14 && (
                                        <div className="flex items-start text-xs text-success">
                                            <CheckCircle className="w-3 h-3 mr-2 mt-0.5 shrink-0" />
                                            <span>CCU Certified — full operator status</span>
                                        </div>
                                    )}
                                </div>

                                <Link to="/portal/university" className="inline-flex items-center text-secondary font-bold text-xs uppercase tracking-widest hover:text-[hsl(38,75%,50%)] transition-colors">
                                    {completedModules === 0 ? 'Begin Training' : 'Continue Training'} <ArrowRight className="w-3 h-3 ml-1" />
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Announcements */}
                        <Card className="border-border shadow-sm">
                            <CardHeader className="border-b border-border pb-4">
                                <CardTitle className="font-heading font-black text-lg text-primary flex items-center">
                                    <Bell className="w-5 h-5 text-[hsl(38,75%,50%)] mr-2" />
                                    Announcements
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border">
                                    {announcements.map((item, idx) => (
                                        <div key={idx} className="p-4 px-6 hover:bg-muted/50 transition-colors">
                                            <div className="flex items-start space-x-3">
                                                <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                                                    item.type === 'update' ? 'bg-blue-500' :
                                                    item.type === 'achievement' ? 'bg-[hsl(38,75%,50%)]' : 'bg-success'
                                                }`}></div>
                                                <div>
                                                    <p className="text-sm font-bold text-navy-950">{item.title}</p>
                                                    <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Links — lifecycle-aware */}
                        <Card className="border-border shadow-sm">
                            <CardHeader className="border-b border-border pb-4">
                                <CardTitle className="font-heading font-black text-lg text-primary">Quick Links</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border">
                                    {(isEarlyStage ? [
                                        { label: 'University & Training', icon: GraduationCap, link: '/portal/university' },
                                        { label: 'SOPs & Playbooks', icon: BookOpen, link: '/portal/sops' },
                                        { label: 'Submit a Support Ticket', icon: Headset, link: '/portal/support' },
                                        { label: 'Marketing Assets', icon: FileText, link: '/portal/assets' },
                                    ] : [
                                        { label: 'SOPs & Playbooks', icon: BookOpen, link: '/portal/sops' },
                                        { label: 'Production Tracker', icon: Activity, link: '/portal/production' },
                                        { label: 'Financials', icon: DollarSign, link: '/portal/financials' },
                                        { label: 'Submit a Support Ticket', icon: Headset, link: '/portal/support' },
                                    ]).map((item, idx) => (
                                        <Link key={idx} to={item.link} className="flex items-center p-4 px-6 hover:bg-muted/50 transition-colors group">
                                            <item.icon className="w-4 h-4 text-muted-foreground mr-3 group-hover:text-secondary transition-colors" />
                                            <span className="text-sm font-bold text-navy-950 group-hover:text-secondary transition-colors">{item.label}</span>
                                            <ArrowRight className="w-3 h-3 text-muted-foreground ml-auto group-hover:text-secondary transition-colors" />
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
