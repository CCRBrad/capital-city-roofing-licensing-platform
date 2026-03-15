import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth, type UserRole } from '../../contexts/AuthContext';
import {
    LayoutDashboard,
    GraduationCap,
    PieChart,
    Files,
    FileText,
    Wrench,
    Users,
    Headset,
    UserCircle,
    ShieldAlert,
    Menu,
    X,
    LogOut,
    Crosshair,
    Target
} from 'lucide-react';

interface NavItem {
    name: string;
    path: string;
    icon: React.ElementType;
    roles: UserRole[];
}

interface NavGroup {
    label: string;
    items: NavItem[];
}

const navGroups: NavGroup[] = [
    {
        label: '',
        items: [
            { name: 'Dashboard', path: '/portal/dashboard', icon: LayoutDashboard, roles: ['prospect', 'licensee', 'employee', 'admin'] },
        ]
    },
    {
        label: 'Learn',
        items: [
            { name: 'University', path: '/portal/university', icon: GraduationCap, roles: ['prospect', 'licensee', 'employee', 'admin'] },
            { name: 'SOPs', path: '/portal/sops', icon: FileText, roles: ['licensee', 'employee', 'admin'] },
        ]
    },
    {
        label: 'Operate',
        items: [
            { name: 'Daily Activity', path: '/portal/daily-activity', icon: Target, roles: ['employee', 'licensee', 'admin'] },
            { name: 'Assets', path: '/portal/assets', icon: Files, roles: ['licensee', 'employee', 'admin'] },
            { name: 'Production', path: '/portal/production', icon: Wrench, roles: ['licensee', 'admin'] },
            { name: 'Team', path: '/portal/team', icon: Users, roles: ['licensee', 'admin'] },
            { name: 'Support', path: '/portal/support', icon: Headset, roles: ['prospect', 'licensee', 'employee', 'admin'] },
        ]
    },
    {
        label: 'Measure',
        items: [
            { name: 'Financials', path: '/portal/financials', icon: PieChart, roles: ['licensee', 'admin'] },
        ]
    },
    {
        label: 'Account',
        items: [
            { name: 'Profile', path: '/portal/profile', icon: UserCircle, roles: ['prospect', 'licensee', 'employee', 'admin'] },
            { name: 'War Room', path: '/portal/war-room', icon: Crosshair, roles: ['admin'] },
            { name: 'Admin Panel', path: '/portal/admin', icon: ShieldAlert, roles: ['admin'] },
        ]
    },
];

export const PortalLayout: React.FC = () => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    if (!user) {
        return <div className="p-8 text-center bg-navy-950 min-h-screen">Please login to access the portal.</div>;
    }

    // Flatten for lookup
    const allNavItems = navGroups.flatMap(g => g.items);
    const filteredGroups = navGroups.map(group => ({
        ...group,
        items: group.items.filter(item => item.roles.includes(user.role))
    })).filter(group => group.items.length > 0);

    const statusColor =
        user.complianceStatus === 'green' ? 'bg-success' :
            user.complianceStatus === 'yellow' ? 'bg-warning' :
                user.complianceStatus === 'red' ? 'bg-destructive' : 'bg-gray-400';

    return (
        <div className="flex h-screen bg-muted overflow-hidden">
            {/* Global noindex for all portal routes */}
            <Helmet>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            {/* Sidebar */}
            <aside
                className={`${sidebarOpen ? 'w-64' : 'w-20'} 
        bg-navy-950 text-white transition-all duration-300 flex flex-col relative z-20`}
            >
                <div className="h-16 flex items-center justify-between px-4 border-b border-white/10 shrink-0">
                    {sidebarOpen && (
                        <span className="font-display font-black tracking-widest uppercase text-sm">CCR Portal</span>
                    )}
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-white/10 rounded">
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 flex flex-col px-2">
                    {filteredGroups.map((group, gIdx) => (
                        <div key={gIdx} className={gIdx > 0 ? 'mt-4' : ''}>
                            {group.label && sidebarOpen && (
                                <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                                    {group.label}
                                </p>
                            )}
                            {gIdx > 0 && !sidebarOpen && (
                                <div className="mx-3 mb-2 border-t border-white/10"></div>
                            )}
                            <div className="flex flex-col gap-0.5">
                                {group.items.map((item) => {
                                    const isActive = location.pathname.startsWith(item.path);
                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className={`flex items-center space-x-3 px-3 py-2.5 rounded-md transition-colors ${isActive ? 'bg-secondary text-white font-bold' : 'text-white/70 hover:bg-white/5 hover:text-white font-medium'
                                                }`}
                                            title={!sidebarOpen ? item.name : undefined}
                                        >
                                            <Icon size={20} className={isActive ? 'text-white' : 'text-white/70'} />
                                            {sidebarOpen && <span>{item.name}</span>}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10 shrink-0">
                    <button
                        onClick={() => {
                            logout();
                            window.location.href = '/partner-login';
                        }}
                        className="flex items-center space-x-3 px-3 py-2 rounded-md transition-colors text-white/70 hover:bg-white/5 w-full text-left"
                    >
                        <LogOut size={20} />
                        {sidebarOpen && <span>Log Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Top bar */}
                <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 shrink-0 z-10 shadow-sm">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xl font-bold font-heading text-primary hidden md:block">
                            {allNavItems.find(n => location.pathname.startsWith(n.path))?.name || 'Portal'}
                        </h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        {user.complianceStatus && (
                            <div className="hidden sm:flex items-center space-x-2 text-sm font-medium mr-4" title="Compliance Status">
                                <span>Compliance:</span>
                                <span className={`w-3 h-3 rounded-full ${statusColor} shadow-sm border border-black/10`} />
                            </div>
                        )}

                        <div className="flex items-center space-x-3 border-l pl-4 border-border">
                            <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-sm">
                                {user.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="hidden md:flex flex-col">
                                <span className="text-sm font-bold text-primary leading-tight">{user.name}</span>
                                <span className="text-xs text-muted-foreground capitalize">{user.role}</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-muted relative">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
