import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { useAuth } from '../../contexts/AuthContext';
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
    Activity
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

    // Safety check - though protected route ensures user exists
    if (!user) return null;

    return (
        <>
            <SEOHead title="Operator Dashboard | Capital City Roofing" description="Partner portal dashboard for operations and financial tracking." />

            <div className="space-y-8 animate-fade-in">
                {/* Header Section */}
                <div>
                    <h1 className="text-4xl font-black font-display text-primary uppercase tracking-tight mb-2">
                        Welcome Back, {user.name.split(' ')[0]}
                    </h1>
                    <p className="text-muted-foreground">
                        Here is what's happening in your market today.
                    </p>
                </div>

                {/* KPI Metric Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="border-border shadow-navy-sm">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Total Revenue YTD</p>
                                    <h3 className="text-3xl font-black font-heading text-navy-950 mt-1">$637,000</h3>
                                </div>
                                <div className="p-3 bg-success/10 rounded-xl">
                                    <DollarSign className="w-6 h-6 text-success" />
                                </div>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="text-success flex items-center font-bold tracking-wide"><ArrowUpRight className="w-4 h-4 mr-1" /> 18%</span>
                                <span className="text-muted-foreground ml-2">vs last month</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border shadow-navy-sm">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Active Jobs</p>
                                    <h3 className="text-3xl font-black font-heading text-navy-950 mt-1">8</h3>
                                </div>
                                <div className="p-3 bg-secondary/10 rounded-xl">
                                    <Activity className="w-6 h-6 text-secondary" />
                                </div>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="text-muted-foreground tracking-wide">4 starting this week</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border shadow-navy-sm">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Leads Generated</p>
                                    <h3 className="text-3xl font-black font-heading text-navy-950 mt-1">142</h3>
                                </div>
                                <div className="p-3 bg-[hsl(38,75%,50%)]/10 rounded-xl">
                                    <Users className="w-6 h-6 text-[hsl(38,75%,50%)]" />
                                </div>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="text-success flex items-center font-bold tracking-wide"><ArrowUpRight className="w-4 h-4 mr-1" /> 12%</span>
                                <span className="text-muted-foreground ml-2">from AI voice agent</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border shadow-navy-sm">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Close Rate</p>
                                    <h3 className="text-3xl font-black font-heading text-navy-950 mt-1">38.5%</h3>
                                </div>
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                            <div className="flex items-center text-sm">
                                <span className="text-destructive flex items-center font-bold tracking-wide"><ArrowDownRight className="w-4 h-4 mr-1" /> 2.1%</span>
                                <span className="text-muted-foreground ml-2">vs last month</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Chart */}
                    <Card className="lg:col-span-2 shadow-navy-sm border-border">
                        <CardHeader className="border-b border-border mb-6">
                            <CardTitle className="font-heading font-black text-xl text-primary">Revenue Growth</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
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

                    {/* Secondary Chart */}
                    <Card className="shadow-navy-sm border-border">
                        <CardHeader className="border-b border-border mb-6">
                            <CardTitle className="font-heading font-black text-xl text-primary">Job Status Pipeline</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
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

                {/* Activity Feed */}
                <Card className="shadow-navy-sm border-border">
                    <CardHeader className="border-b border-border">
                        <CardTitle className="font-heading font-black text-xl text-primary">Recent Corporate Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-border">
                            {[1, 2, 3].map((_, idx) => (
                                <div key={idx} className="p-6 flex items-start hover:bg-muted/50 transition-colors">
                                    <div className="p-2 bg-success/10 rounded-full mr-4 shrink-0 mt-1">
                                        <CheckCircle className="w-5 h-5 text-success" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-bold text-navy-950">Supplement Approved - Job #4082</h4>
                                            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">2 hours ago</span>
                                        </div>
                                        <p className="text-muted-foreground text-sm">
                                            The back-office team successfully negotiated a $4,200 supplement with State Farm for code upgrades.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Dashboard;
