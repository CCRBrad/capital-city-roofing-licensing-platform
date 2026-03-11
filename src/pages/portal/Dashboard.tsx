import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import { useAuth } from '../../contexts/AuthContext';
import { useUniversityProgress } from '../../contexts/UniversityProgressContext';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
    BarChart, Bar
} from 'recharts';
import {
    DollarSign,
    TrendingUp,
    Users,
    CheckCircle,
    ArrowUpRight,
    ArrowDownRight,
    Activity,
    GraduationCap,
    ShieldCheck,
    Headset,
    ArrowRight,
    BookOpen,
    FileText,
    Rocket,
    Zap,
    CheckCircle2,
    Bell
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

const revData = [
    { name: 'Jan', revenue: 45000 },
    { name: 'Feb', revenue: 52000 },
    { name: 'Mar', revenue: 85000 },
    { name: 'Apr', revenue: 120000 },
    { name: 'May', revenue: 155000 },
    { name: 'Jun', revenue: 180000 },
];

const jobsData = [
    { name: 'Pending', count: 12 },
    { name: 'In Progress', count: 8 },
    { name: 'Completed', count: 45 },
];

export const Dashboard: React.FC = () => {
    const { user } = useAuth();
    const { progress } = useUniversityProgress();

    if (!user) return null;

    const completedModules = Object.values(progress.modules).filter(m => m.completed).length;
    const totalModules = 12;
    const trainingPct = Math.round((completedModules / totalModules) * 100);

    // Mock data for launch checklist
    const launchChecklist = [
        { label: 'Entity Formation (LLC)', done: true },
        { label: 'Insurance & Compliance Docs', done: true },
        { label: 'Capital City University — Week 1', done: completedModules >= 4 },
        { label: 'Tech Stack Connected (CRM, AI, Roofr)', done: true },
        { label: 'Territory Agreement Signed', done: true },
        { label: 'Capital City University — Week 2', done: completedModules >= 8 },
        { label: 'First Lead Assigned', done: false },
        { label: 'First Deal Under Contract', done: false },
    ];
    const checklistDone = launchChecklist.filter(i => i.done).length;
    const checklistPct = Math.round((checklistDone / launchChecklist.length) * 100);

    // Mock next actions
    const nextActions = [
        { label: completedModules === 0 ? 'Start Module 1.1: The Capital City Way' : `Continue Training — Module ${Math.min(completedModules + 1, totalModules)}`, link: '/portal/university', icon: GraduationCap, priority: 'high' as const },
        { label: 'Review Your Commission Structure', link: '/portal/team', icon: DollarSign, priority: 'medium' as const },
        { label: 'Explore the SOP Library', link: '/portal/sops', icon: FileText, priority: 'low' as const },
    ];

    // Mock announcements
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

                {/* Status Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                            <p className="text-xl font-black font-display text-success">Active</p>
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
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Next Actions + Checklist */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Next Actions */}
                        <Card className="border-secondary/30 shadow-sm">
                            <CardHeader className="border-b border-border pb-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="font-heading font-black text-xl text-primary flex items-center">
                                        <Zap className="w-5 h-5 text-secondary mr-2" />
                                        Next Actions
                                    </CardTitle>
                                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{nextActions.length} items</span>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border">
                                    {nextActions.map((action, idx) => (
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
                                                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                                                    {action.priority === 'high' ? '⚡ Priority' : action.priority === 'medium' ? 'Recommended' : 'Suggested'}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Launch Checklist */}
                        <Card className="border-border shadow-sm">
                            <CardHeader className="border-b border-border pb-4">
                                <div className="flex items-center justify-between">
                                    <CardTitle className="font-heading font-black text-xl text-primary flex items-center">
                                        <CheckCircle2 className="w-5 h-5 text-success mr-2" />
                                        Launch Checklist
                                    </CardTitle>
                                    <span className="text-sm font-bold text-navy-950">{checklistDone}/{launchChecklist.length}</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2 mt-3">
                                    <div className="bg-success h-2 rounded-full transition-all duration-500" style={{ width: `${checklistPct}%` }}></div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border">
                                    {launchChecklist.map((item, idx) => (
                                        <div key={idx} className="flex items-center p-4 px-6">
                                            {item.done ? (
                                                <CheckCircle className="w-5 h-5 text-success mr-3 shrink-0" />
                                            ) : (
                                                <div className="w-5 h-5 rounded-full border-2 border-border mr-3 shrink-0"></div>
                                            )}
                                            <span className={`text-sm font-medium ${item.done ? 'text-muted-foreground line-through' : 'text-navy-950 font-bold'}`}>
                                                {item.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* KPI Metric Cards */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            <Card className="border-border shadow-sm">
                                <CardContent className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Revenue YTD</p>
                                        <div className="p-2 bg-success/10 rounded-lg">
                                            <DollarSign className="w-4 h-4 text-success" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black font-heading text-navy-950">$637K</h3>
                                    <div className="flex items-center text-xs mt-1">
                                        <span className="text-success flex items-center font-bold"><ArrowUpRight className="w-3 h-3 mr-0.5" /> 18%</span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-border shadow-sm">
                                <CardContent className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Active Jobs</p>
                                        <div className="p-2 bg-secondary/10 rounded-lg">
                                            <Activity className="w-4 h-4 text-secondary" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black font-heading text-navy-950">8</h3>
                                    <p className="text-xs text-muted-foreground mt-1">4 starting this week</p>
                                </CardContent>
                            </Card>
                            <Card className="border-border shadow-sm">
                                <CardContent className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Leads</p>
                                        <div className="p-2 bg-[hsl(38,75%,50%)]/10 rounded-lg">
                                            <Users className="w-4 h-4 text-[hsl(38,75%,50%)]" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black font-heading text-navy-950">142</h3>
                                    <div className="flex items-center text-xs mt-1">
                                        <span className="text-success flex items-center font-bold"><ArrowUpRight className="w-3 h-3 mr-0.5" /> 12%</span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-border shadow-sm">
                                <CardContent className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Close Rate</p>
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <TrendingUp className="w-4 h-4 text-primary" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black font-heading text-navy-950">38.5%</h3>
                                    <div className="flex items-center text-xs mt-1">
                                        <span className="text-destructive flex items-center font-bold"><ArrowDownRight className="w-3 h-3 mr-0.5" /> 2.1%</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Charts */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <Card className="lg:col-span-2 shadow-sm border-border">
                                <CardHeader className="border-b border-border mb-4 pb-3">
                                    <CardTitle className="font-heading font-black text-lg text-primary">Revenue Growth</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[250px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={revData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                                <defs>
                                                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#0a2342" stopOpacity={0.3} />
                                                        <stop offset="95%" stopColor="#0a2342" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                                                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val / 1000}k`} />
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                                <RechartsTooltip
                                                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(10,35,66,0.1)' }}
                                                    formatter={(value: any) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
                                                />
                                                <Area type="monotone" dataKey="revenue" stroke="#0a2342" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="shadow-sm border-border">
                                <CardHeader className="border-b border-border mb-4 pb-3">
                                    <CardTitle className="font-heading font-black text-lg text-primary">Job Pipeline</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[250px] w-full">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={jobsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                                                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                                                <RechartsTooltip
                                                    cursor={{ fill: 'transparent' }}
                                                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                                />
                                                <Bar dataKey="count" fill="#c8102e" radius={[4, 4, 0, 0]} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Right Column: Announcements + Quick Links */}
                    <div className="space-y-8">
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

                        {/* Recommended Training */}
                        <Card className="border-border shadow-sm bg-navy-950 text-white">
                            <CardHeader className="border-b border-white/10 pb-4">
                                <CardTitle className="font-heading font-black text-lg text-white flex items-center">
                                    <GraduationCap className="w-5 h-5 text-secondary mr-2" />
                                    Training Progress
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-5">
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-bold">{completedModules}/{totalModules} Modules</span>
                                        <span className="text-white/60">{trainingPct}%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <div className="bg-secondary h-2 rounded-full transition-all" style={{ width: `${trainingPct}%` }}></div>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-5">
                                    <div className="flex items-center text-sm">
                                        <span className="text-[hsl(38,75%,50%)] font-bold mr-2">Level {progress.level}</span>
                                        <span className="text-white/60">• {progress.xp} XP</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <span className="text-white/60">{progress.badges.length} Badges Earned</span>
                                    </div>
                                </div>
                                <Link to="/portal/university" className="inline-flex items-center text-secondary font-bold text-xs uppercase tracking-widest hover:text-[hsl(38,75%,50%)] transition-colors">
                                    Continue Training <ArrowRight className="w-3 h-3 ml-1" />
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Quick Links */}
                        <Card className="border-border shadow-sm">
                            <CardHeader className="border-b border-border pb-4">
                                <CardTitle className="font-heading font-black text-lg text-primary">Quick Links</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-border">
                                    {[
                                        { label: 'SOPs & Playbooks', icon: BookOpen, link: '/portal/sops' },
                                        { label: 'Marketing Assets', icon: FileText, link: '/portal/assets' },
                                        { label: 'Submit a Support Ticket', icon: Headset, link: '/portal/support' },
                                        { label: 'University & Training', icon: GraduationCap, link: '/portal/university' },
                                    ].map((item, idx) => (
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
