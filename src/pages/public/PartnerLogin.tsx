import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth, mockUsers } from '../../contexts/AuthContext';
import { SEOHead } from '../../components/SEOHead';
import { GraduationCap, BookOpen, BarChart3, Headset, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

const PartnerLogin: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (role: keyof typeof mockUsers) => {
        login(role);
        navigate('/portal/dashboard');
    };

    return (
        <>
            <SEOHead title="Partner Login | Capital City Roofing" description="Access the Capital City Roofing Partner Portal — your mission control for training, operations, and performance." />
            <div className="min-h-screen bg-muted flex flex-col justify-center py-12 sm:px-6 lg:px-8 section-padding">
                <div className="sm:mx-auto sm:w-full sm:max-w-lg">
                    <h2 className="text-center text-3xl font-black font-display tracking-tight text-primary uppercase">
                        Partner Portal
                    </h2>
                    <p className="mt-2 text-center text-muted-foreground max-w-md mx-auto">
                        Your mission control for operating under the Capital City Roofing brand. Training, playbooks, performance, and support — all in one place.
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
                    {/* What You'll Find Inside */}
                    <div className="bg-navy-950 text-white rounded-t-xl p-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-[hsl(38,75%,50%)] mb-4">What You'll Find Inside</p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { icon: GraduationCap, label: 'Capital City University' },
                                { icon: BookOpen, label: 'SOPs & Playbooks' },
                                { icon: BarChart3, label: 'Performance Dashboard' },
                                { icon: FileText, label: 'Marketing Assets' },
                                { icon: ShieldCheck, label: 'Compliance Center' },
                                { icon: Headset, label: '24/7 Partner Support' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2 text-sm">
                                    <item.icon className="w-4 h-4 text-secondary shrink-0" />
                                    <span className="text-white/80 font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Login Card */}
                    <div className="bg-white py-8 px-6 shadow-navy-lg rounded-b-xl border border-t-0 border-border">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center">Select Your Role (Demo)</p>
                        <div className="space-y-3">
                            <button
                                onClick={() => handleLogin('licensee')}
                                className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-secondary hover:bg-red-700 transition-colors"
                            >
                                Login as Licensed Operator
                            </button>
                            <button
                                onClick={() => handleLogin('prospect')}
                                className="w-full flex items-center justify-center py-3 px-4 border border-border rounded-md text-sm font-bold text-navy-950 bg-muted hover:bg-navy-50 transition-colors"
                            >
                                Login as Prospect
                            </button>
                            <button
                                onClick={() => handleLogin('employee')}
                                className="w-full flex items-center justify-center py-3 px-4 border border-border rounded-md text-sm font-bold text-navy-950 bg-muted hover:bg-navy-50 transition-colors"
                            >
                                Login as Employee
                            </button>
                            <button
                                onClick={() => handleLogin('admin')}
                                className="w-full flex items-center justify-center py-3.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-navy-950 bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] shadow-glow-gold transition-colors"
                            >
                                Login as Admin
                            </button>
                        </div>

                        <div className="mt-6 pt-4 border-t border-border text-center">
                            <p className="text-sm text-muted-foreground">
                                Not a partner yet?{' '}
                                <Link to="/apply" className="text-secondary font-bold hover:text-primary transition-colors">
                                    Apply Now <ArrowRight className="w-3 h-3 inline" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerLogin;
