import React, { useState } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Headset, MessageSquare, Clock, AlertCircle, Send, FileText, ExternalLink } from 'lucide-react';

interface Ticket {
    id: string;
    subject: string;
    status: 'open' | 'in-progress' | 'resolved';
    priority: 'low' | 'medium' | 'high';
    createdAt: string;
    lastUpdate: string;
}

const mockTickets: Ticket[] = [
    { id: 'TK-1042', subject: 'CRM pipeline missing lead tags', status: 'in-progress', priority: 'high', createdAt: '2026-03-05', lastUpdate: '2026-03-06' },
    { id: 'TK-1038', subject: 'Roofr measurement report delay', status: 'resolved', priority: 'medium', createdAt: '2026-03-01', lastUpdate: '2026-03-03' },
    { id: 'TK-1035', subject: 'GoHighLevel automation not firing', status: 'resolved', priority: 'high', createdAt: '2026-02-28', lastUpdate: '2026-03-01' },
];

const statusColor: Record<string, string> = {
    open: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'in-progress': 'bg-blue-100 text-blue-800 border-blue-200',
    resolved: 'bg-green-100 text-green-800 border-green-200',
};

const priorityColor: Record<string, string> = {
    low: 'text-muted-foreground',
    medium: 'text-[hsl(38,75%,50%)]',
    high: 'text-secondary',
};

const Support: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [category, setCategory] = useState('general');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubject('');
        setMessage('');
        setCategory('general');
        alert('Support ticket submitted! You will receive a response within 24 hours.');
    };

    return (
        <div className="pb-12 animate-fade-in space-y-8">
            <SEOHead title="Support | Operator Portal" description="Capital City Roofing Partner Support." />

            {/* Header */}
            <div className="bg-navy-950 text-white rounded-2xl p-8 shadow-navy-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(38,75%,50%)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                    <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Help Center</span>
                    <h1 className="text-4xl font-black font-display uppercase tracking-tight mb-2">
                        <Headset className="inline w-8 h-8 mr-2 -mt-1" />
                        Partner Support
                    </h1>
                    <p className="text-white/80 max-w-2xl">
                        Dedicated partner support for all licensed operators. Submit a ticket or reach out directly.
                    </p>
                </div>
            </div>

            {/* Quick Contact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                            <Headset className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-navy-950 mb-1">Phone Support</h4>
                            <p className="text-sm text-muted-foreground mb-2">Mon–Fri, 8AM–8PM ET</p>
                            <a href="tel:4707663285" className="text-secondary font-bold text-sm hover:underline">(470) 766-3285</a>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                            <MessageSquare className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-navy-950 mb-1">Email Support</h4>
                            <p className="text-sm text-muted-foreground mb-2">Response within 24 hours</p>
                            <a href="mailto:support@capitalcityroofing.net" className="text-secondary font-bold text-sm hover:underline">support@capitalcityroofing.net</a>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                            <Clock className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-navy-950 mb-1">Emergency Line</h4>
                            <p className="text-sm text-muted-foreground mb-2">Production issues only</p>
                            <span className="text-navy-950 font-bold text-sm">After-Hours Available</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Submit Ticket */}
                <Card className="border-border shadow-sm">
                    <CardHeader className="border-b border-border bg-muted">
                        <CardTitle className="text-lg font-bold font-heading text-navy-950 flex items-center space-x-2">
                            <Send className="w-5 h-5 text-secondary" />
                            <span>Submit a Support Ticket</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-navy-950 mb-1">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                                >
                                    <option value="general">General Question</option>
                                    <option value="tech">Tech Stack Issue (CRM, GHL, Roofr)</option>
                                    <option value="production">Production / Job Issue</option>
                                    <option value="billing">Billing / Royalty Question</option>
                                    <option value="training">Training / University</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-navy-950 mb-1">Subject</label>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    placeholder="Brief description of the issue..."
                                    className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-navy-950 mb-1">Message</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Describe the issue in detail..."
                                    rows={5}
                                    className="w-full border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-secondary hover:bg-red-700 text-white font-bold py-3 rounded-md transition-colors uppercase tracking-widest text-sm"
                            >
                                Submit Ticket
                            </button>
                        </form>
                    </CardContent>
                </Card>

                {/* Recent Tickets */}
                <Card className="border-border shadow-sm">
                    <CardHeader className="border-b border-border bg-muted">
                        <CardTitle className="text-lg font-bold font-heading text-navy-950 flex items-center space-x-2">
                            <FileText className="w-5 h-5 text-secondary" />
                            <span>Recent Tickets</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        {mockTickets.map((ticket) => (
                            <div key={ticket.id} className="p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-bold text-sm text-navy-950 font-mono">{ticket.id}</span>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded border capitalize ${statusColor[ticket.status]}`}>
                                            {ticket.status.replace('-', ' ')}
                                        </span>
                                    </div>
                                    <span className={`text-xs font-bold uppercase tracking-widest ${priorityColor[ticket.priority]}`}>
                                        {ticket.priority === 'high' && <AlertCircle className="w-3 h-3 inline mr-1" />}
                                        {ticket.priority}
                                    </span>
                                </div>
                                <p className="text-sm text-navy-900 font-medium">{ticket.subject}</p>
                                <p className="text-xs text-muted-foreground mt-1">Opened {ticket.createdAt} • Updated {ticket.lastUpdate}</p>
                            </div>
                        ))}
                        <div className="p-4 text-center">
                            <button className="text-secondary font-bold text-sm hover:underline flex items-center space-x-1 mx-auto">
                                <span>View All Tickets</span>
                                <ExternalLink className="w-3 h-3" />
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Knowledge Base Quick Links */}
            <div>
                <h3 className="text-xl font-black font-display text-navy-950 uppercase tracking-tight mb-4">Quick Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { title: 'SOPs & Playbooks', desc: 'Production and PM procedures', link: '/portal/sops' },
                        { title: 'University Modules', desc: 'Training & certification content', link: '/portal/university' },
                        { title: 'Tech Stack Guide', desc: 'CRM, GHL, Roofr workflows', link: '/portal/university/3.1' },
                        { title: 'Commission Info', desc: 'Tiers, bonuses, and Watch Club', link: '/portal/team' },
                    ].map((item, idx) => (
                        <a key={idx} href={item.link} className="block">
                            <Card className="border-border shadow-sm hover:shadow-md hover:border-navy-300 transition-all cursor-pointer h-full">
                                <CardContent className="p-4">
                                    <h4 className="font-bold text-navy-950 text-sm mb-1">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Support;
