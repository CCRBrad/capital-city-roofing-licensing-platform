import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
    BarChart, Bar
} from 'recharts';
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

export const DashboardCharts: React.FC = () => {
    return (
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
    );
};

export default DashboardCharts;
