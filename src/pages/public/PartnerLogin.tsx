import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, mockUsers } from '../../contexts/AuthContext';
import { SEOHead } from '../../components/SEOHead';

const PartnerLogin: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (role: keyof typeof mockUsers) => {
        login(role);
        navigate('/portal/dashboard');
    };

    return (
        <>
            <SEOHead title="Partner Login" description="Login to the Capital City Roofing Partner Portal" />
            <div className="min-h-screen bg-muted flex flex-col justify-center py-12 sm:px-6 lg:px-8 section-padding">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-3xl font-black font-display tracking-tight text-primary uppercase">
                        Sign in to Portal
                    </h2>
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                        Mock login for Capital City Roofing Licensed Operating Platform
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow-navy-lg sm:rounded-lg sm:px-10 border border-border">
                        <div className="space-y-4">
                            <button
                                onClick={() => handleLogin('prospect')}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-slate-600 hover:bg-slate-700 transition-colors"
                            >
                                Login as Prospect
                            </button>
                            <button
                                onClick={() => handleLogin('licensee')}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-navy-950 bg-secondary hover:bg-red-700 hover:text-white transition-colors"
                            >
                                Login as Licensee
                            </button>
                            <button
                                onClick={() => handleLogin('employee')}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                            >
                                Login as Employee
                            </button>
                            <button
                                onClick={() => handleLogin('admin')}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-navy-950 bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] shadow-glow-gold transition-colors"
                            >
                                Login as Admin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerLogin;
